import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "emailjs-com";

// Form validation schema
const applicationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  coverLetter: z.string().optional(),
  cv: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "CV is required")
    .refine(
      (files) => files[0]?.type === "application/pdf",
      "Only PDF files are allowed"
    )
    .refine(
      (files) => files[0]?.size <= 2 * 1024 * 1024,
      "File size must be less than 2MB"
    ),
});

const ApplyModal = ({ isOpen, onClose, positionTitle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    // Cleanup when modal unmounts
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(applicationSchema),
  });

  const cvFiles = watch("cv");
  const cvFileName = cvFiles?.[0]?.name || "No file chosen";

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("resource_type", "raw"); // Specify raw resource type for PDFs

    const response = await fetch(import.meta.env.VITE_CLOUDINARY_UPLOAD_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Cloudinary error:", errorData);
      throw new Error(
        `Failed to upload CV: ${errorData.error?.message || "Unknown error"}`
      );
    }
    const data = await response.json();
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    
    // Use the secure_url directly from Cloudinary response for viewing
    // Or construct a proper download URL with fl_attachment flag
    const downloadUrl = `https://res.cloudinary.com/${cloudName}/raw/upload/fl_attachment/${data.public_id}`;

    return downloadUrl;
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Step 1: Upload CV to Cloudinary
      const cvUrl = await uploadToCloudinary(data.cv[0]);

      // Step 2: Prepare EmailJS params
      const templateParams = {
        applicant_name: data.fullName,
        from_email: data.email,
        applicant_phone: data.phone,
        position_title: positionTitle,
        cover_letter: data.coverLetter || "No cover letter provided",
        cv_url: cvUrl, 
        to_email: import.meta.env.VITE_EMAILJS_CAREER_EMAIL,
      };

      // Step 3: Send Email via EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Your application has been submitted successfully! We'll review it and get back to you soon."
        );
        reset();
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
          setSubmitMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      setSubmitMessage("Failed to submit your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-0 md:left-[25%] transform  z-50 w-full max-w-2xl "
          >
            <div className="bg-white  shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#3d348b] to-[#5a4fa0] p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white">Apply Now</h2>
                  <p className="text-blue-100 mt-1">{positionTitle}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 max-h-[80vh] overflow-y-auto">
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-800 font-semibold">
                      {submitMessage}
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-red-800 font-semibold">
                      {submitMessage}
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      {...register("fullName")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d348b] focus:border-transparent"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      {...register("email")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d348b] focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+977 9800000000"
                      {...register("phone")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d348b] focus:border-transparent"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cover Letter (Optional)
                    </label>
                    <textarea
                      placeholder="Tell us why you're interested in this position..."
                      rows={4}
                      {...register("coverLetter")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d348b] focus:border-transparent resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Upload CV (PDF only) *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf"
                        {...register("cv")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d348b] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#3d348b] file:text-white hover:file:bg-[#5a4fa0] cursor-pointer"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Selected: {cvFileName} (Max size: 5MB)
                    </p>
                    {errors.cv && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.cv.message}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-[#3d348b] text-white font-semibold py-3 rounded-lg hover:bg-[#5a4fa0] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader size={20} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;

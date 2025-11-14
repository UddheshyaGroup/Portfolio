// ProfileCard.jsx
import React from "react";
import { motion } from "motion/react";

const ProfileCard = ({ imageSrc, name, title, testimonial }) => {
  return (
    <motion.div
    whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    className="h-full flex flex-col md:flex-row-reverse bg-white rounded-lg shadow-lg overflow-hidden">

      
      {/* === IMAGE (Right on Desktop, Top on Mobile) === */}
      <div className="w-full md:w-40 lg:w-48 flex-shrink-0 flex items-center justify-center p-4 bg-gray-50 md:h-full">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="max-h-full w-auto object-contain rounded-lg shadow-sm"
          />
        ) : (
          <div className="flex h-44 w-32 md:h-52 md:w-36 lg:h-60 lg:w-44 items-center justify-center rounded-lg bg-gray-200 text-2xl font-bold text-gray-600">
            {name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()}
          </div>
        )}
      </div>

      {/* === TEXT CONTENT === */}
      <div className="flex-1 p-6 flex flex-col md:justify-start">
        {/* Name + Title – Top on mobile, left on desktop */}
        <div className="mb-3 text-center md:text-left">
          <p className="text-xl md:text-2xl font-bold text-gray-900">{name}</p>
          <p className="text-sm md:text-base font-semibold text-gray-600">{title}</p>
        </div>

        {/* Testimonial – Full width, grows to fill */}
        <p className="text-sm text-gray-700 leading-relaxed flex-1 text-center md:text-left">
          {testimonial}
        </p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
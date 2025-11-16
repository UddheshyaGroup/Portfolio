# Uddheshya Group Portfolio

A modern, responsive portfolio website for Uddheshya Group - a comprehensive digital marketing and business development platform in Nepal. This project showcases the company's services, portfolio, career opportunities, and company information.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean and professional interface with smooth animations and transitions
- **Multiple Pages**:
  - **Home**: Hero section with company overview and featured success stories
  - **Portfolio**: Showcase of projects across education, hospitality, and artist management sectors
  - **Services**: Comprehensive list of digital marketing and development services
  - **Career**: Open positions with detailed job descriptions and application process
  - **About Us**: Company history, vision, and team information
- **Dynamic Components**: Interactive navigation, filter buttons, and hover effects
- **Custom Styling**: Tailwind CSS with custom color schemes and typography

## 🛠️ Tech Stack

- **Framework**: React.js
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Tienne, Poppins, Inter)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/UddheshyaGroup/Portfolio.git
cd uddheshyaportfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:5173
```

## 🏗️ Project Structure

```
uddheshyaportfolio/
├── public/
│   └── logo.png
├── src/
│   ├── assets/
│   │   ├── homepage/
│   │   │   └── icons/
│   │   ├── portfolio/
│   │   ├── career/
│   │   └── aboutus/
│   ├── components/
│   ├── pages/
│   │   ├── HomePage/
│   │   │   └── Homepage.jsx
│   │   ├── Portfolio/
│   │   │   └── Portfolio.jsx
│   │   ├── Services/
│   │   ├── Career/
│   │   │   └── Career.jsx
│   │   ├── AboutUs/
│   │   │   └── AboutUs.jsx
│   │   ├── navbar.jsx
│   │   └── footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 Key Features by Page

### Homepage

- Hero section with animated background
- Company introduction with "We Build, Discover, Design, Host, Code"
- Trusted business categories with custom icons
- Featured success stories
- Client testimonials with image gallery

### Portfolio

- Filter system for different project categories
- Project showcase with detailed descriptions
- High-quality project images with hover effects
- Call-to-action for marketing strategy consultation

### Career

- Open positions organized by department
- Creative Department: UI/UX Designer, Graphic Designer, Frontend Developer
- Administrative & Tech: Research Intern, Content Writer, Tech Officer
- HR & Operations positions
- "Apply Now" buttons with custom styling

### About Us

- Company vision and mission statement
- "Who are We?" section with detailed company history
- Team culture highlights
- Visual storytelling with images

### Footer

- Multi-location display (UK and Nepal)
- Social media links (Facebook, LinkedIn, YouTube, TikTok, Instagram)
- Quick navigation links
- Contact information for each office

## 🎨 Customization

### Colors

The project uses a custom color palette defined in Tailwind config:

- Primary Purple: `#3d348b`
- Orange Accent: `#eb5e33` / `#ff6600`
- Background: `#faf7ee`
- Footer: `#f2ede2`

### Fonts

- **Tienne**: For decorative text
- **Poppins**: For headings
- **Inter**: For body text

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

Build the project for production:

```bash
npm run build
```

The build output will be in the `dist` folder, ready for deployment to your hosting platform.

### Vercel (GitHub Action)

This repository includes a GitHub Actions workflow that deploys previews and production builds to Vercel using a token-based action. This avoids the Git-Author restrictions when using Vercel's GitHub integration.

1. Go to **Settings → Secrets → Actions** in this repository.
2. Add these repository secrets (values found in your Vercel Dashboard under project settings):
  - `VERCEL_TOKEN` — Personal token from Vercel (create in Vercel > Account > Tokens).
  - `VERCEL_ORG_ID` — Organization ID for your Vercel team.
4. Optionally add `VERCEL_ENV` or other environment variables to GitHub Secrets or GitHub Environments.

Notes: the workflow uses concurrency to cancel previous deploys on the same branch; it will run preview deploys for PRs and production deploys only when pushing to `main` (see `.github/workflows/vercel-deploy.yml`).
  - `VERCEL_PROJECT_ID` — Project ID from the Vercel project settings.
3. If you want Vercel to keep deploying from the GitHub Integration too, leave it; otherwise disable "Deploy Hooks" in the Vercel Git Integration to avoid duplicate deployments.

After adding secrets, GitHub Actions will deploy previews for pull requests and production when pushing to `main`.

## 📧 Contact

**Uddheshya Group**

- **Nepal Office**: Sanepa, Lalitpur | +977 9805 533 602
- **UK Office**: London, United Kingdom
- **Email**: uddheshyastudio@gmail.com
- **Website**: [Your Website URL]

## 📄 License

© 2025 Uddheshya Group. All rights reserved.

## 🤝 Contributing

This is a private portfolio project for Uddheshya Group. For any inquiries or suggestions, please contact the team directly.

---

**Built with ❤️ by Uddheshya Group**


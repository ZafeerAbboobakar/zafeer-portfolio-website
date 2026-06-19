# Zafeer Portfolio Website

A personal portfolio website for **Zafeer Abboobakar**, built with React, Vite, Tailwind CSS, Framer Motion, and EmailJS. The site presents my background in cybersecurity, business technology management, IT support, technical skills, certifications, and project work through a terminal-inspired interface.

The design direction is intentionally cyber-themed: dark UI, green terminal accents, animated text, command prompt panels, Matrix-style visuals, and smooth section transitions.

## Live Website

The production site is available at:

```text
https://zafeerabboobakar.com
```

## Repository

```text
https://github.com/ZafeerAbboobakar/zafeer-portfolio-website
```

## Features

- Terminal-style intro screen before the portfolio loads
- Matrix-inspired animated hero background
- Decrypting text animation used across section headings
- Responsive navigation with desktop links and mobile menu
- About section with profile image, resume, LinkedIn, and GitHub links
- Education timeline with animated cards and institutional logos
- Work experience selector with animated terminal-style detail panel
- Certifications carousel focused on Microsoft cybersecurity learning
- Skills grid grouped by programming, IT tools, and content production
- Projects section prepared for future portfolio case studies
- Contact form powered by EmailJS environment variables
- Fully responsive layout built with Tailwind CSS
- Production build handled by Vite

## Website Sections

### Terminal Intro

The first screen simulates a boot or terminal startup flow before revealing the main portfolio. This creates a strong first impression and supports the cybersecurity theme.

### Hero

The hero introduces **Zafeer Abboobakar** with animated decrypting text, a blinking cursor, and a delayed Matrix-style background effect.

### About

The about section uses a command prompt styled panel to summarize my interests in cybersecurity, ethical hacking, automation, information systems, and secure technology.

It also includes quick links to:

- Resume
- LinkedIn
- GitHub

### Education

The education section is built as a vertical timeline featuring:

- Business Technology Management, B.Com at Toronto Metropolitan University
- High School Diploma from David Suzuki Secondary School

Cards use tilt and motion effects to make the timeline feel interactive.

### Work Experience

The work section includes an interactive selector for professional experience:

- Ontario Public Service - IT Systems Officer Co-op
- TD Canada Trust - Teller

Selecting a role updates the terminal-style output panel with company, title, date, and key contributions.

### Certifications

The certifications section highlights Microsoft cybersecurity-related learning, including:

- Career Essentials in Cybersecurity
- The Cybersecurity Threat Landscape
- Cybersecurity Awareness: Cybersecurity Terminology
- Cybersecurity Foundations
- Microsoft Security Copilot

### Skills

Skills are grouped into practical categories:

- Programming
- IT Tools
- Content Production

Each skill appears as a command-line style prompt with a level indicator.

### Projects

The projects section is structured for future case studies and live project links. Current cards are placeholders, ready to be replaced with finished work.

### Contact

The contact form uses EmailJS so visitors can send messages directly from the site. EmailJS values are read from Vite environment variables rather than being hardcoded in source files.

## Tech Stack

| Category | Tools |
| --- | --- |
| Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS, custom CSS |
| Animation | Framer Motion |
| 3D / Visual Effects | Three.js, React Three Fiber, Drei |
| Icons | React Icons, Heroicons |
| Forms | EmailJS |
| Linting | ESLint |
| Package Manager | npm |

## Project Structure

```text
zafeer-portfolio/
  public/
    vite.svg
  src/
    assets/
      microsoft.png
      ops-logo.png
      profile.jpg
      school-logo.png
      td-logo.png
      tmu-logo.png
    Components/
      About.jsx
      Certifications.jsx
      CodingBackground.jsx
      Contact.jsx
      DecryptText.jsx
      Education.jsx
      FadeInSection.jsx
      Hero.jsx
      MatrixBackground.jsx
      Navbar.jsx
      Projects.jsx
      Skills.jsx
      TerminalIntro.jsx
      Work.jsx
    styles/
      loader.css
      matrix.css
    App.jsx
    index.css
    main.jsx
  .env.example
  .gitignore
  package.json
  tailwind.config.js
  vite.config.js
```

## Getting Started

### Prerequisites

Install Node.js and npm.

```powershell
node --version
npm --version
```

### Install Dependencies

```powershell
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

An example file is included:

```text
.env.example
```

Real `.env` files are ignored by Git to avoid publishing local configuration values.

### Run Locally

```powershell
npm run dev
```

### Build for Production

```powershell
npm run build
```

### Preview Production Build

```powershell
npm run preview
```

### Run Linting

```powershell
npm run lint
```

## Deployment Notes

This project is ready for deployment on modern static hosting platforms that support Vite, such as Vercel, Netlify, or GitHub Pages.

Recommended production settings:

```text
Build command: npm run build
Output directory: dist
```

Required environment variables:

```text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

## Security Notes

- Real environment files are excluded from Git.
- EmailJS configuration is loaded through Vite environment variables.
- The production build does not require `node_modules`, `dist`, or `.vercel` to be committed.
- EmailJS domain restrictions should be configured in the EmailJS dashboard for the deployed website domain.

## Future Improvements

- Replace project placeholders with completed case studies
- Add direct project demo and source code links
- Add credential links for certification cards
- Add downloadable resume file to the public assets
- Improve accessibility labels and keyboard navigation
- Add automated deployment status badges

## Author

**Zafeer Abboobakar**

- GitHub: [ZafeerAbboobakar](https://github.com/ZafeerAbboobakar)
- LinkedIn: [zafeer-abboobakar](https://www.linkedin.com/in/zafeer-abboobakar-2318231b2/)

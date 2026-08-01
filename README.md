# Parbin Shrees Magar - Personal Portfolio

A modern, responsive personal portfolio built with React, Vite, and Tailwind CSS. The design features a unique "circuit board" aesthetic, reflecting a background in both software and hardware (embedded systems/Arduino).

## Features
- **Responsive Design**: Mobile-first approach scaling up to desktop.
- **Circuit Board Aesthetic**: Deep green background, copper accents, and monospace typographies.
- **Interactive Hero**: Features an ambient, playable "DuoPong" HTML5 canvas game.
- **Serverless Contact Form**: Built-in `/api/contact` endpoint for Vercel using Nodemailer.

## Local Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set up environment variables for the contact form:
   Create a `.env` file in the root directory and add your SMTP credentials:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=where-you-want-to-receive-emails@example.com
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Deployment (Vercel)

This project is optimized for deployment on Vercel. 
1. Push your code to a GitHub repository.
2. Import the project in Vercel. Vercel will automatically detect the Vite React framework.
3. Add your `SMTP_USER`, `SMTP_PASS`, and other environment variables in the Vercel project settings.
4. Click Deploy. The `/api/contact.js` file will automatically be deployed as a Serverless Function.

## Content to Fill In
Before finalizing, search the codebase for `[Fill in` and `placeholder@email.com` to insert your actual content, demo links, and contact information. Replace the image placeholders in `ProjectCard.jsx` and `FeaturedProjectCard.jsx` with actual images.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "blue-bg": "url('../public/image/blue.avif')",
        "about-bg": "url('../public/image/about.jfif')",
        "image-bg": "url('../public/image/images.png')",
        "skill-bg": "url('../public/image/skills.avif')",
        "project-bg": "url('../public/image/new-sky.jfif')",
        "contact-bg": "url('../public/image/contact.jfif')",
        "work-bg": "url('../public/image/work.jpg')",
      },
    },
  },
  plugins: [],
};

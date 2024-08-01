// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Dimitar Zlatev",
      meta: [
        {
          name: "description",
          content: "Showcase of my work in web development.",
        },
        {
          name: "keywords",
          content: "portfolio, web development, UX/UI, frontend, backend",
        },
        { property: "og:title", content: "Dimitar Zlatev" },
        {
          property: "og:description",
          content: "Explore my projects and skills in web development.",
        },
        {
          property: "og:image",
          content:
            "https://master--dimitarzlatev.netlify.app//images/HomeImage.png",
        },
        {
          property: "og:url",
          content: "https://master--dimitarzlatev.netlify.app/",
        },
        { property: "og:type", content: "website" },
      ],
    },
  },
  sitemap: {
    hostname: "https://master--dimitarzlatev.netlify.app",
    routes: [
      "/",
      "/skills",
      "/projects",
      "/experience",
      "/education",
      "/about",
      "/contact",
    ],
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/sitemap",
    [
      "nuxt-mail",
      {
        message: { to: "dimitarzlatev02@gmail.com" },
        smtp: {
          host: "smtp.gmail.com",
          port: 587,
          auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASS,
          },
        },
      },
    ],
  ],
  router: {
    middleware: ["checkFormSubmitted"],
  },
});

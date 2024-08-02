// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      // title: "Dimitar Zlatev | Full Stack Developer",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Showcase of my work in web development, featuring projects, skills, and experiences.",
        },
        { property: "og:title", content: "Dimitar Zlatev" },
        {
          property: "og:description",
          content:
            "Explore my projects and skills in web development, including both frontend and backend expertise.",
        },
        {
          property: "og:image",
          content:
            "https://master--dimitarzlatev.netlify.app/images/HomeImage.png",
        },
        {
          property: "og:url",
          content: "https://master--dimitarzlatev.netlify.app/",
        },
        { property: "og:type", content: "website" },
        { name: "theme-color", content: "#1abc9c" },
      ],
      link: [
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "icon", href: "/favicon.ico" },
      ],
      script: [
        {
          src: "ttps://www.googletagmanager.com/gtag/js?id=G-YY71QT7KST",
          defer: true,
          async: true,
        },
        {
          hid: "google-analytics",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
          `,
          type: "text/javascript",
          charset: "utf-8",
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "google-analytics": ["innerHTML"],
      },
    },
  },
  plugins: ["~/plugins/canonical.js"],
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
      "/thanks",
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
    "@nuxt/image",
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
  image: {
    ipx: {},
    domains: ["https://master--dimitarzlatev.netlify.app"],
    alias: {
      me: "/images/Me.webp",
    },
  },
  build: {
    extractCSS: true,
    optimizeCSS: true,
  },
  publicRuntimeConfig: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },
  privateRuntimeConfig: {
    gmailEmail: process.env.GMAIL_EMAIL,
    gmailPass: process.env.GMAIL_PASS,
  },
});

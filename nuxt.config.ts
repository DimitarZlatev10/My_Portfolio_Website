// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // tailwindcss: {
  //   cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
  //   configPath: "tailwind.config",
  //   exposeConfig: {
  //     level: 2,
  //   },
  //   viewer: true,
  // },
  app: {
    head: {
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
          src: "https://www.googletagmanager.com/gtag/js?id=G-YY71QT7KST",
          async: true,
          type: "text/partytown",
        },
        {
          hid: "google-analytics",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
          `,
          type: "text/partytown",
          charset: "utf-8",
        },
        {
          type: "application/ld+json",
          innerHTML: `
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dimitar Zlatev",
            "jobTitle": "Full Stack Developer",
            "url": "https://master--dimitarzlatev.netlify.app/",
            "image": "https://master--dimitarzlatev.netlify.app/images/HomeImage.png",
            "sameAs": [
              "https://www.linkedin.com/in/dimitar-zlatev-65b14225b/",
              "https://github.com/DimitarZlatev10"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Valdo 69"
            }
          }
          `,
          type: "application/ld+json",
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "google-analytics": ["innerHTML"],
        "json-ld": ["innerHTML"],
      },
    },
  },
  partytown: {
    forward: ["dataLayer.push"],
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
  modules: [
    "@nuxt/ui",
    "@nuxtjs/sitemap",
    "@nuxt/image",
    [
      "nuxt-mail",
      {
        message: { to: process.env.GMAIL_EMAIL },
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
    "@nuxtjs/tailwindcss",
    "@nuxtjs/partytown",
  ],
  image: {
    ipx: {},
    domains: ["https://master--dimitarzlatev.netlify.app"],
    alias: {
      me: "/images/Me.webp",
    },
  },
  publicRuntimeConfig: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },
  privateRuntimeConfig: {
    gmailEmail: process.env.GMAIL_EMAIL,
    gmailPass: process.env.GMAIL_PASS,
  },
});

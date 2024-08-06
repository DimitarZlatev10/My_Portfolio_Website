<script setup lang="ts">
useHead({
    title: 'Contact Me | Dimitar Zlatev, Full Stack Developer',
    meta: [
        {
            name: 'description',
            content: 'Get in touch with Dimitar Zlatev to discuss potential projects, job opportunities, or collaborations. Reach out via the contact form or listed methods.'
        },
        { property: 'og:title', content: 'Contact Me | Dimitar Zlatev, Full Stack Developer' },
        {
            property: 'og:description',
            content: 'Get in touch with Dimitar Zlatev to discuss potential projects, job opportunities, or collaborations. Reach out via the contact form or listed methods.'
        },
        {
            property: 'og:image',
            content: 'https://master--dimitarzlatev.netlify.app/images/contactImage.png'
        },
        {
            property: 'og:url',
            content: 'https://master--dimitarzlatev.netlify.app/contact'
        },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#1abc9c' }
    ],
    link: [
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'icon', href: '/favicon.ico' }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: `
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Contact Me | Dimitar Zlatev, Full Stack Developer",
        "description": "Get in touch with Dimitar Zlatev to discuss potential projects, job opportunities, or collaborations. Reach out via the contact form or listed methods.",
        "url": "https://master--dimitarzlatev.netlify.app/contact",
        "author": {
          "@type": "Person",
          "name": "Dimitar Zlatev",
          "url": "https://master--dimitarzlatev.netlify.app/"
        }
      }
      `
        },

        {
            hid: 'google-analytics',
            innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
      `,
            type: 'text/javascript'
        }
    ],
    __dangerouslyDisableSanitizersByTagID: {
        'json-ld': ['innerHTML'],
        'google-analytics': ['innerHTML']
    }
})
</script>

<template>
    <div class="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex flex-col items-center py-6">
        <h1 class="text-3xl md:text-4xl font-bold text-center text-white mb-6 md:mb-12">
            Contact Dimitar Zlatev: Get in Touch
        </h1>
        <div class="w-full px-4 md:px-8 flex justify-center">
            <div class="w-full max-w-md md:max-w-lg lg:max-w-2xl bg-black rounded-lg shadow-lg p-6 space-y-6">
                <ContactForm />
                <div class="mt-6 p-4 bg-black rounded-lg">
                    <h2 class="text-xl md:text-2xl font-semibold text-center text-white mb-4">
                        More Ways to Reach Me
                    </h2>
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#0091ff"
                                    d="M16 11V8h-3V6h3V3h2v3h3v2h-3v3zm3.95 10q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3" />
                            </svg>
                            <a href="tel:+359882724213" class="text-base text-white hover:opacity-80">+359882724213</a>
                        </div>
                        <div class="flex items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 193">
                                <path fill="#4285F4"
                                    d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z" />
                                <path fill="#34A853"
                                    d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z" />
                                <path fill="#EA4335"
                                    d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z" />
                                <path fill="#FBBC04"
                                    d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z" />
                                <path fill="#C5221F"
                                    d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z" />
                            </svg>
                            <a href="mailto:dimitarzlatev02@gmail.com"
                                class="text-base text-white hover:opacity-80">dimitarzlatev02@gmail.com</a>
                        </div>
                        <div class="flex items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                                <path fill="#0A66C2"
                                    d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
                            </svg>
                            <NuxtLink class="text-base text-white hover:opacity-80"
                                to="https://www.linkedin.com/in/dimitar-zlatev-65b14225b/" target="_blank">LinkedIn
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

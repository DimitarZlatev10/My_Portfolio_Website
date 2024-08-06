<script setup lang="ts">
useHead({
    title: 'Projects | Dimitar Zlatev, Full Stack Developer',
    meta: [
        {
            name: 'description',
            content: 'Browse the portfolio of Dimitar Zlatev, showcasing a range of projects from innovative web solutions to complex applications. See my work in action.'
        },
        { property: 'og:title', content: 'Projects | Dimitar Zlatev, Full Stack Developer' },
        {
            property: 'og:description',
            content: 'Browse the portfolio of Dimitar Zlatev, showcasing a range of projects from innovative web solutions to complex applications. See my work in action.'
        },
        {
            property: 'og:image',
            content: 'https://master--dimitarzlatev.netlify.app/images/projectsImage.png'
        },
        {
            property: 'og:url',
            content: 'https://master--dimitarzlatev.netlify.app/projects'
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
        "name": "Projects | Dimitar Zlatev, Full Stack Developer",
        "description": "Browse the portfolio of Dimitar Zlatev, showcasing a range of projects from innovative web solutions to complex applications. See my work in action.",
        "url": "https://master--dimitarzlatev.netlify.app/projects",
        "author": {
          "@type": "Person",
          "name": "Dimitar Zlatev",
          "url": "https://master--dimitarzlatev.netlify.app/"
        }
      }
      `
        },
    ],
    __dangerouslyDisableSanitizersByTagID: {
        'json-ld': ['innerHTML'],
        'google-analytics': ['innerHTML']
    }
})

const projects = [
    {
        image: {
            imagePath: '/images/AlexaCleaning.avif',
            alt: "Alexa Cleaning Image",
            title: "Alexa Cleaning"
        },
        url: "https://alexacleaning.bg/",
        name: "Alexa Cleaning",
        description: "Worked on the front-end and back-end for this site. Created the booking form from scratch and implemented the admin panel with Filament PHP.",
        skillsUsed: [
            "Laravel",
            "Livewire",
            "Tailwind CSS",
            "Filament PHP",
            "MySQL",
            "Alpine.js"
        ]
    },
    {
        image: {
            imagePath: '/images/KVMExtreme.avif',
            alt: "KVM Extreme Image",
            title: "KVM Extreme"

        },
        name: "KVM Extreme",
        url: "https://kvmextreme.bg/",
        description: "Worked mostly on the back-end for this site. Implemented the affiliates program for this site.",
        skillsUsed: [
            "Laravel",
            "Livewire",
            "Tailwind CSS",
            "Filament PHP",
            "MySQL",
            "Alpine.js"
        ]
    },
    {
        image: {
            imagePath: '/images/BilkoviTinkturi.avif',
            alt: "Bilkovi Tinkturi Image",
            title: "Bilkovi Tinkturi"

        },
        name: "Bilkovi Tinkturi",
        url: "https://bilkovitinkturi.bg/",
        description: "Integrated the Speedy API for this site.",
        skillsUsed: [
            "Nuxt.js",
            "Tailwind CSS",
            "GraphQL"
        ]
    },
    {
        image: {
            imagePath: '/images/DataBridgeCommerce.avif',
            alt: "DataBridge Commerce Image",
            title: "DataBridge Commerce"

        },
        name: "DataBridge Commerce",
        url: "https://apps.shopify.com/content-exporter",
        description: "Built a Shopify App which uses the Shopify API to get the current Store data (products, collections, pages, blogs, etc.) so it can be used on another Store (duplicate Stores).",
        skillsUsed: [
            "Shopify",
            "React.js",
            "Express.js",
            "JavaScript",
            "GraphQL",
        ]
    },
]

</script>

<template>
    <div class="bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 min-h-screen">
        <div class="container mx-auto p-4 animate-fade-in animation-delay-1">
            <h1 class="text-4xl font-bold text-center mb-8">Showcase of My Web Development Projects</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto">
                <ProjectsCard :projects="projects"></ProjectsCard>
            </div>
        </div>
    </div>
</template>

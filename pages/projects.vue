<script setup lang="ts">
useHead({
    title: 'Projects',
    meta: [
        { name: 'description', content: 'Projects Page of my Portfolio Website.' }
    ]
})

const projects = [
    {
        image: {
            imagePath: '/images/AlexaCleaning.png',
            alt: "Alexa Cleaning Image"
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
            imagePath: '/images/KVMExtreme.png',
            alt: "KVM Extreme Image"
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
            imagePath: '/images/BilkoviTinkturi.png',
            alt: "Bilkovi Tinkturi Image"
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
            imagePath: '/images/DataBridge Commerce.png',
            alt: "DataBridge Commerce Image"
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
            <h1 class="text-4xl font-bold text-center mb-8">My Projects</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto">
                <ProjectsCard :projects="projects"></ProjectsCard>
            </div>
        </div>
    </div>
</template>
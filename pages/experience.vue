<script setup>
useHead({
    title: 'Experience | Dimitar Zlatev, Full Stack Developer',
    meta: [
        { name: 'description', content: 'Learn about the professional experience of Dimitar Zlatev, including key roles, achievements, and contributions in the field of full stack development.' }
    ]
})

const jobs = [
    {
        companyName: '411 Locals',
        url: "https://411locals.com/",
        position: 'Browser Automation Studio Specialist with JavaScript',
        period: 'Jun 2023 - Oct 2023 · 5 mos',
        skills: [
            'Building Automation Systems (BAS)',
            'Communication',
            'Problem Solving',
            'JavaScript',
            'Teamwork'
        ]
    },
    {
        companyName: 'Valdo 69',
        url: "https://papagal.bg/eik/204514887/2c9a#google_vignette",
        position: 'Web Developer',
        period: 'Nov 2023 - Present · 9 mos',
        skills: [
            'Laravel',
            'Livewire',
            'Tailwind CSS',
            'Nuxt.js',
            'Shopify',
            'Filament PHP',
            'Alpine.js',
            "LangChain",
            "Git",
            "GraphQL",
            "MySQL"
        ]
    }
]
</script>

<template>
    <div class="bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 min-h-screen p-6">
        <div class="max-w-4xl mx-auto animate-fade-in animation-delay-1">
            <h1 class="text-4xl font-bold text-center text-white mb-8">My Experience</h1>
            <div class="space-y-12">
                <ExperienceCard :jobs="jobs"></ExperienceCard>
            </div>
        </div>
    </div>
</template>

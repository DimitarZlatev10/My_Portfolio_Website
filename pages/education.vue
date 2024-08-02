<script setup>

useHead({
    title: 'Dimitar Zlatev | Education and Academic Background',
    meta: [
        { name: 'description', content: 'Discover the educational background of Dimitar Zlatev, including degrees and certifications relevant to full stack development and technology."' }
    ]
})

const education = [
    {
        institution: "Technical University of Sofia",
        duration: "Oct 2021 - Nov 2022",
        image: `<img class="XNo5Ab" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVR4AaWPIQzCMBRE6x0SV6/wahLZwAS4eYXBoKoQoJB4nzkUSYMgweMzr+bVpxW3fH4uLAviid16L/ediLhwuFskE0nmNKVrBW1GDMl8d0ywIMVAMk0zCOrTS//YkcfIPLLl/iaDYHN9S2EVHz2Z603Wz+qzFKwA4GFlz5lvL4IyE2iq9fEpam4pVJlRQYAAmSr8Fii6jJ8qoGcogSeCxgqcnj6ywBWYACekfwQgKkFAWQumngA8FRhaIkgocgHnazITfAB1VTDhtLJFgAAAAABJRU5ErkJggg==" style="height:18px;width:18px" alt="" data-csiid="UDyqZv-3KPnki-gPouT5EA_9" data-atf="1">`,
        link: "https://www.tu-sofia.bg",
    },
    {
        institution: "Software University (SoftUni)",
        duration: "Oct 2021 - Jan 2023",
        image: `<img class="XNo5Ab" id="tsuid_24" src="data:image/png;base64,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" style="height:18px;width:18px" alt="" data-deferred="3" data-csiid="3juqZsONG8WF9u8P-__eoAY_1" data-atf="1">`,
        link: "https://softuni.bg",
        certificates: [
            {
                name: "Programming Basics",
                issued: "Dec 2021",
                image: "/images/Basics-JS.png",
                link: "https://softuni.bg/certificates/details/121499/d73dc65a"
            },
            {
                name: "Programming Fundamentals with JS",
                issued: "Apr 2022",
                image: "/images/Fundamentals-JS.png",
                link: "https://softuni.bg/certificates/details/129430/879fcd1a"
            },
            {
                name: "JS Advanced",
                issued: "Jun 2022",
                image: "/images/Advanced-JS.png",
                link: "https://softuni.bg/certificates/details/136720/1e3a194e"
            },
            {
                name: "JS Applications",
                issued: "Aug 2022",
                image: "/images/Applications-JS.png",
                link: "https://softuni.bg/certificates/details/139802/83098f5d"
            },
            {
                name: "JS Back-End",
                issued: "Nov 2022",
                image: "/images/BackEnd-JS.png",
                link: "https://softuni.bg/certificates/details/146825/baac7e1b"
            },
            {
                name: "Angular",
                issued: "Dec 2022",
                image: "/images/Angular-JS.png",
                link: "https://softuni.bg/certificates/details/152903/87b9c97c"
            },
        ],
    },
];
</script>

<template>
    <div class="bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 min-h-screen">
        <div class="min-h-screen p-4 animate-fade-in animation-delay-1">
            <h1 class="text-4xl font-bold text-center text-white mb-8">My Education</h1>
            <div class="max-w-4xl mx-auto space-y-8">
                <EducationCard :education="education"></EducationCard>
            </div>
        </div>
    </div>
</template>

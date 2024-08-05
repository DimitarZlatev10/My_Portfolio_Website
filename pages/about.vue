<script setup>

useHead({
    title: 'About Dimitar Zlatev | Full Stack Developer',
    meta: [
        {
            name: 'description',
            content: 'Discover the portfolio of Dimitar Zlatev, a full stack developer skilled in building dynamic, responsive websites and applications with a focus on user experience.'
        },
        { property: 'og:title', content: 'About Dimitar Zlatev | Full Stack Developer' },
        {
            property: 'og:description',
            content: 'Discover the portfolio of Dimitar Zlatev, a full stack developer skilled in building dynamic, responsive websites and applications with a focus on user experience.'
        },
        {
            property: 'og:image',
            content: 'https://master--dimitarzlatev.netlify.app/images/aboutImage.png'
        },
        {
            property: 'og:url',
            content: 'https://master--dimitarzlatev.netlify.app/about'
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
        "name": "About Dimitar Zlatev | Full Stack Developer",
        "description": "Discover the portfolio of Dimitar Zlatev, a full stack developer skilled in building dynamic, responsive websites and applications with a focus on user experience.",
        "url": "https://master--dimitarzlatev.netlify.app/about",
        "author": {
          "@type": "Person",
          "name": "Dimitar Zlatev",
          "url": "https://master--dimitarzlatev.netlify.app/"
        }
      }
      `
        },
        {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-YY71QT7KST',
            defer: true,
            async: true
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
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div class="max-w-4xl mx-auto p-6 space-y-6 animate-fade-in animation-delay-1">
            <h1 class="text-4xl font-bold mb-4 text-center">About Dimitar Zlatev: Full Stack Developer</h1>
            <p class="text-lg leading-relaxed">Hi, I'm Dimitar Zlatev!</p>
            <p class="text-lg leading-relaxed">
                I am a 22-year-old programmer with a passion for crafting elegant and efficient code. My journey in
                programming began in October 2021, when I started studying through online courses. I completed these
                courses in January 2023 and began working professionally in November 2023, where I am currently
                employed.
            </p>
            <h2 class="text-2xl font-bold mt-8">My Expertise</h2>
            <ul class="list-disc list-inside text-lg leading-relaxed space-y-2">
                <li><strong>Tailwind CSS:</strong> For creating beautiful, responsive designs with ease.</li>
                <li><strong>Alpine.js:</strong> Adding interactivity to web pages with a minimal footprint.</li>
                <li><strong>Laravel:</strong> Building robust and scalable backend systems.</li>
                <li><strong>Livewire:</strong> Enabling dynamic front-end interactions without leaving the comfort of
                    Laravel.</li>
            </ul>
            <p class="text-lg leading-relaxed">
                While the TALL stack is where I shine, my primary programming language is <strong>JavaScript</strong>. I
                enjoy leveraging its versatility to create seamless user experiences and powerful web applications.
            </p>
            <h2 class="text-2xl font-bold mt-8">My Journey</h2>
            <p class="text-lg leading-relaxed">
                Though my formal study of programming has been relatively brief, I have a relentless drive to improve
                and excel in my craft. Every project I undertake is an opportunity to learn something new and refine my
                skills. This ambition fuels my growth as a developer and ensures that I am always up-to-date with the
                latest trends and technologies in the industry.
            </p>
            <h2 class="text-2xl font-bold mt-8">Beyond Code</h2>
            <p class="text-lg leading-relaxed">
                Outside of programming, I am a curious and motivated individual. I believe in continuous improvement,
                not just in coding, but in all aspects of life. This mindset helps me tackle challenges head-on and
                persist through difficulties, always striving to be better than I was yesterday.
            </p>
        </div>
    </div>
</template>

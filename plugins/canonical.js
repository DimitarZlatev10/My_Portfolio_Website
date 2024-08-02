export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:finish', () => {
        const route = useRoute();
        const canonicalUrl = `https://master--dimitarzlatev.netlify.app${route.fullPath}`;

        useHead({
            link: [
                {
                    rel: 'canonical',
                    href: canonicalUrl,
                },
            ],
        });
    });
});




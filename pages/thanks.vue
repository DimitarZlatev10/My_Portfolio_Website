<script setup lang="ts">
useHead({
    title: 'Thank You | Dimitar Zlatev | Full Stack Developer',
    meta: [
        { name: 'description', content: 'Thank you for reaching out! Dimitar Zlatev appreciates your message and will get back to you soon. Stay tuned for a response' },
    ],
});

const formSubmitted = useFormSubmitted();
if (!formSubmitted.value) {
    const router = useRouter();
    router.push('/');
}
</script>

<template>
    <div
        class="bg-gradient-to-r to-blue-500 from-purple-500 min-h-screen flex flex-col justify-center items-center text-center p-6 space-y-6">
        <h1 class="text-5xl font-bold text-white">Thank You!</h1>
        <p class="text-2xl text-white max-w-2xl">
            Your message has been successfully sent. I appreciate you taking the time to reach out to me.
        </p>
        <p class="text-xl text-white max-w-2xl">
            I will review your message and get back to you as soon as possible. In the meantime, feel free to browse my
            portfolio to learn more about my work and projects.
        </p>
        <NuxtLink to="/">
            <button
                class="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                Return to Portfolio
            </button>
        </NuxtLink>
    </div>
</template>
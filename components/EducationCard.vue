<script setup lang="ts">
const props = defineProps({
    education: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div v-for="(edu, index) in education" :key="index"
        class="bg-white p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg rounded-lg mb-6">
        <a :href="edu.link" target="_blank" rel="noopener noreferrer"
            class="flex flex-col md:flex-row items-start md:items-center mb-4 space-y-4 md:space-y-0 md:space-x-4">>
            <div v-html="edu.image"></div>
            <div>
                <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 hover:text-gray-400">
                    {{ edu.institution
                    }}</h2>
                <p class="text-sm sm:text-base md:text-lg text-gray-700 mt-1">{{ edu.duration }}</p>
            </div>
        </a>
        <ul v-if="edu.certificates" class="mt-4 md:mt-6 space-y-4">
            <li v-for="(cert, certIndex) in edu.certificates" :key="certIndex"
                class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                <a :href="cert.link" target="_blank" rel="noopener noreferrer" class="flex-shrink-0">
                    <div class="overflow-hidden relative">
                        <img :src="cert.image" alt="Certificate Image"
                            class="w-56 h-56 md:w-64 md:h-64 object-cover rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110">
                    </div>
                </a>
                <div>
                    <a :href="cert.link" target="_blank" rel="noopener noreferrer"
                        class="text-base sm:text-lg md:text-xl text-gray-900 hover:text-gray-400">
                        <strong>{{ cert.name }}</strong><br>
                    </a>
                    <span class="text-sm sm:text-base md:text-lg text-gray-600">{{ cert.issued }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    education: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div v-for="(edu, index) in education" :key="index" class="bg-white p-6 shadow-lg rounded-lg">
        <!-- Institution Image and Link -->
        <a :href="edu.link" target="_blank" rel="noopener noreferrer" class="flex items-center mb-4 space-x-4">
            <!-- SVG Icon -->
            <div v-html="edu.image"></div>
            <!-- Institution Name -->
            <div>
                <h2 class="text-3xl font-semibold text-gray-900">{{ edu.institution }}</h2>
                <p class="text-gray-700 mt-1">{{ edu.duration }}</p>
            </div>
        </a>
        <!-- Certificates Section -->
        <ul v-if="edu.certificates" class="mt-6 space-y-4">
            <li v-for="(cert, certIndex) in edu.certificates" :key="certIndex" class="flex items-center space-x-4">
                <a :href="cert.link" target="_blank" rel="noopener noreferrer" class="flex-shrink-0">
                    <img :src="cert.image" alt="Certificate Image" class="w-60 h-60 object-cover rounded-md shadow-md">
                </a>
                <div>
                    <a :href="cert.link" target="_blank" rel="noopener noreferrer"
                        class="text-lg text-gray-900 hover:text-gray-400">
                        <strong>{{ cert.name }}</strong><br>
                    </a>
                    <span class="text-gray-600">{{ cert.issued }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

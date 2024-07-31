<script setup lang="ts">
const props = defineProps({
    jobs: {
        type: Object,
        required: true,
    },

});

const { jobs } = props;
</script>

<template>
    <div v-for="(job, index) in jobs" :key="index"
        class="bg-white shadow-lg rounded-lg p-8 transition-transform transform">
        <div class="flex items-center justify-between mb-4">
            <NuxtLink class="text-2xl font-semibold text-blue-600 hover:text-blue-400" target="_blank" :to="job.url">
                <h2>{{ job.companyName }}</h2>
            </NuxtLink>

            <span class="text-sm text-gray-500">{{ job.period }}</span>
        </div>
        <p class="text-lg text-gray-700 mb-6">Position: {{ job.position }}</p>
        <div>
            <h3 class="text-lg font-medium text-gray-700 mb-2">Acquired Skills:</h3>
            <ul class="flex flex-wrap">
                <li v-for="(skill, skillIndex) in job.skills" :key="skillIndex"
                    class="bg-blue-600 text-white py-1 px-3 rounded-full text-sm mr-2 mb-2">
                    {{ skill }}
                </li>
            </ul>
        </div>
    </div>
</template>
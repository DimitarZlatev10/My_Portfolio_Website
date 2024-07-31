<script setup lang="ts">
const props = defineProps({
    projects: {
        type: Object,
        required: true,
    },

});

const { projects } = props;
</script>

<template>
    <div class="bg-black rounded-lg shadow-md overflow-hidden" v-for="project in projects">
        <NuxtLink :to="project.url" target="_blank">
            <div class="overflow-hidden relative">
                <img class="transition-transform duration-300 ease-in-out transform hover:scale-110 w-full"
                    :src="project.image.imagePath" :alt="project.image.alt">
            </div>
        </NuxtLink>
        <div class="p-6 bg-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <NuxtLink :to="project.url" target="_blank" class="block mb-2">
                <h2
                    class="text-2xl sm:text-3xl font-bold text-white hover:text-gray-300 transition-colors duration-300">
                    {{ project.name }}
                </h2>
            </NuxtLink>
            <p class="text-base sm:text-lg text-gray-300 mt-2">
                {{ project.description }}
            </p>
            <div class="flex flex-wrap items-center space-x-2 mt-4">
                <p class="text-sm sm:text-base font-semibold text-gray-400">Skills Used:</p>
                <p class="text-xs sm:text-sm text-gray-200 bg-gray-700 rounded-full px-2 py-1"
                    v-for="skill in project.skillsUsed" :key="skill">
                    {{ skill }}
                </p>
            </div>
        </div>
    </div>
</template>

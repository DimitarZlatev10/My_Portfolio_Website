<script setup lang="ts">

import { ref } from 'vue'

const isMobileMenuOpen = ref(false);

const links = [
    [{
        label: 'Home',
        to: `/`,
        icon: 'i-heroicons-home',
    }, {
        label: 'Skills',
        icon: 'i-heroicons-wrench',
        to: `skills`
    },
    {
        label: 'Projects',
        icon: 'i-heroicons-beaker',
        to: 'projects'
    },
    {
        label: 'Experience',
        icon: 'i-heroicons-briefcase',
        to: 'experience'
    },
    {
        label: "Education",
        icon: "i-heroicons-academic-cap",
        to: 'education'
    },
    {
        label: 'About',
        to: 'about',
        icon: 'i-heroicons-question-mark-circle',
    },
    {
        label: 'Contact',
        icon: 'i-heroicons-envelope',
        to: 'contact'
    }]
]

</script>

<template>
    <nav class="bg-gray-900 sticky top-0 text-gray-100 border-b border-gray-800 z-10">
        <div class="container mx-auto px-4 py-4 flex items-center justify-between">
            <div class="text-2xl font-bold">
                <NuxtLink to="/" class="text-gray-100 hover:text-gray-300">Dimitar Zlatev</NuxtLink>
            </div>
            <div class="hidden md:flex space-x-6">
                <UHorizontalNavigation :links="links" class="space-x-4" />
            </div>
            <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                class="md:hidden focus:outline-none text-gray-100 hover:text-gray-300"
                :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'">
                <UIcon :name="isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-8 h-8" />
            </button>
        </div>
        <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-900 text-gray-100">
            <div class="p-4">
                <UVerticalNavigation @click="isMobileMenuOpen = !isMobileMenuOpen" :links="links" class="space-y-4" />
            </div>
        </div>
    </nav>
</template>
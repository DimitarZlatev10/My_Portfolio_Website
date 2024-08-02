<script setup lang="ts">

import { ref } from 'vue'

const isMobileMenuOpen = ref(false);

const links = [
    [{
        label: 'Home',
        to: `/`,
        icon: 'i-heroicons-home',
        iconClass: 'text-gray-200 group-hover:text-yellow-400',
        labelClass: 'text-gray-200 font-bold group-hover:text-yellow-400'
    }, {
        label: 'Skills',
        icon: 'i-heroicons-wrench',
        to: `skills`,
        iconClass: 'text-gray-200 group-hover:text-yellow-400',
        labelClass: 'text-gray-200 font-bold group-hover:text-yellow-400'
    },
    {
        label: 'Projects',
        icon: 'i-heroicons-beaker',
        to: 'projects',
        iconClass: 'text-gray-200 group-hover:text-yellow-400',
        labelClass: 'text-gray-200 font-bold group-hover:text-yellow-400'
    },
    {
        label: 'Experience',
        icon: 'i-heroicons-briefcase',
        to: 'experience',
        iconClass: 'text-gray-200 group-hover:text-yellow-400',
        labelClass: 'text-gray-200 font-bold group-hover:text-yellow-400'
    },
    {
        label: "Education",
        icon: "i-heroicons-academic-cap",
        to: 'education',
        iconClass: 'text-gray-200 group-hover:text-yellow-400',
        labelClass: 'text-gray-200 font-bold group-hover:text-yellow-400'
    },
    {
        label: 'About',
        to: 'about',
        icon: 'i-heroicons-question-mark-circle',
        iconClass: 'text-gray-200 group-hover:text-yellow-400',
        labelClass: 'text-gray-200 font-bold group-hover:text-yellow-400'
    },
    {
        label: 'Contact',
        icon: 'i-heroicons-envelope',
        to: 'contact',
        iconClass: 'text-gray-200 group-hover:text-yellow-400',
        labelClass: 'text-gray-200 font-bold group-hover:text-yellow-400'
    }]
]
</script>

<template>
    <nav class="bg-black sticky top-0 text-gray-100 border-b border-gray-800 z-10">
        <div class="container mx-auto px-4 py-4 flex items-center justify-between">
            <div class="text-2xl font-bold">
                <NuxtLink to="/" class="text-gray-100 hover:text-yellow-400">Dimitar Zlatev</NuxtLink>
            </div>
            <div class="hidden md:flex space-x-6">
                <UHorizontalNavigation :links="links" class="space-x-4" />
            </div>
            <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                class="md:hidden focus:outline-none text-gray-100 hover:text-yellow-400"
                :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'">
                <UIcon :name="isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-8 h-8" />
            </button>
        </div>
        <div v-if="isMobileMenuOpen" class="md:hidden bg-black text-gray-100">
            <div class="p-4">
                <UVerticalNavigation @click="isMobileMenuOpen = !isMobileMenuOpen" :links="links" class="space-y-4" />
            </div>
        </div>
    </nav>
</template>

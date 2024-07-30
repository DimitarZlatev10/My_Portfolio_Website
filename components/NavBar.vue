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
    }, {
        label: 'Experience',
        icon: 'i-heroicons-briefcase',
        to: 'experience'
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
    }], [
        {
            icon: 'i-bxl:github',
            to: 'https://github.com/DimitarZlatev10',
            target: '_blank'
        },
        {
            icon: 'i-logos:linkedin-icon',
            to: 'https://www.linkedin.com/in/dimitar-zlatev-65b14225b/',
            target: '_blank'
        }
    ]
]

</script>

<template>
    <nav class="bg-gray-900 sticky top-0 text-white border-b border-gray-700 z-10">
        <div class="container mx-auto px-4 py-4 flex items-center justify-between ">
            <div class="text-2xl font-bold">
                <NuxtLink to="/">Dimitar Zlatev</NuxtLink>
            </div>
            <div class="hidden md:flex space-x-6">
                <UHorizontalNavigation :links="links" class="space-x-4" />
            </div>
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden focus:outline-none">
                <UIcon :name="isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-8 h-8" />
            </button>
        </div>
        <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-900 text-white">
            <div class="p-4">
                <UVerticalNavigation @click="isMobileMenuOpen = !isMobileMenuOpen" :links="links" class="space-y-4" />
            </div>
        </div>
    </nav>
</template>
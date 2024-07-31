<script setup lang="ts">
const props = defineProps({
    skills: {
        type: Object,
        required: true,
    },
    skillsName: {
        type: String,
        required: true
    }
});

const { skills, skillsName } = props;
</script>

<template>
    <div>
        <h2 class="text-3xl font-semibold mb-4 text-yellow-300">{{ skillsName }}</h2>
        <ul class="list-disc list-inside space-y-2 pl-4 font-bold">
            <li class="text-lg flex justify-center items-center cursor-pointer" v-for="skill in skills"
                :key="skill.name">
                <p class="mr-2">{{ skill.name }}</p>
                <div v-html="skill.svg"></div>
            </li>
        </ul>
    </div>
</template>
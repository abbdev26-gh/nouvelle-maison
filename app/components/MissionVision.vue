<template>
    <div v-bind="$attrs" class="w-full bg-black relative">
        <div
            v-for="(section, index) in content.sections"
            :key="section.pretitle"
            class="w-full h-screen relative"
        >
            <div class="w-full p-8 md:p-32 h-full">
                <AppPretitle class="!justify-start mb-5">{{ section.pretitle }}</AppPretitle>
                <AppSecondaryHeader class="!text-left max-w-4xl">{{ section.title }}</AppSecondaryHeader>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

type MissionVisionContent = {
    sections: Array<{
        pretitle: string
        title: string
    }>
}

const { content } = defineProps<{
    content: MissionVisionContent
}>()
</script>
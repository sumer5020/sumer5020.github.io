<script setup>
const props = defineProps({
    tags: {
        type: Object,
        default: []
    }
});

const temps = ['PHP','JavaScript','Laravel','Vue.js','SQL','TypeScript','Nuxt.js','MySQL','Vite.js','Three.js','Bash','Depian','API','postgreSQL','HTML5','CSS3','Bootstrap','TailwindCSS','Linux'];
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full min-w-full dir-ltr">
        <div class="w-[80rem] max-w-[90vw] flex shrink-0 flex-col gap-y-4 relative py-6 overflow-hidden">
            <div class="loop-slider" style="--duration:30s; --direction:normal;">
                <div v-if="tags.length > 0" class="inner">
                    <div v-for="tag in tags" :key="tag" class="select-none cursor-pointer uppercase transition duration-500 rounded-full shadow-lg hover:shadow-Accent/50 dark:hover:shadow-Accent2/50 hover:text-Accent dark:hover:text-Accent2 bg-white/20 tag dark:bg-black/20">
                        <span class="text-base md:text-xl">#</span>
                        {{ tag }}
                    </div>
                </div>
                <div v-else class="inner">
                    <div v-for="tag in temps" :key="tag" class="select-none cursor-pointer uppercase transition duration-500 rounded-full shadow-lg hover:shadow-Accent/50 dark:hover:shadow-Accent2/50 hover:text-Accent dark:hover:text-Accent2 bg-white/20 tag dark:bg-black/20">
                        <span class="text-base md:text-xl">#</span>
                        {{ tag }}
                    </div>
                </div>
            </div>
            <div class="fade"></div>
        </div>
    </div>
</template>

<style>
.loop-slider .inner {
    display: flex;
    width: fit-content;
    animation-name: loop;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: var(--direction);
    animation-duration: var(--duration);
}
.tag {
    display: flex;
    align-items: center;
    gap: 0 0.2rem;
    font-size: 0.9rem;
    padding: 0.7rem 1rem;
    margin-right: 1rem;
}
.fade {
    pointer-events: none;
    position: absolute;
    inset: 0;
}
@keyframes loop {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>

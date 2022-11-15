<template>
    <div>
        {{ niceDate }}
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from '@vue/reactivity';
import { onBeforeUnmount } from 'vue';

let now = ref(new Date())
let i = 0;

const idInterval = setInterval(() => {
    // console.log('log it', i);
    // i++;
    
    now.value = new Date()
}, 1000)

const niceDate = computed(() => {
    return now.value.toLocaleTimeString()
})

onBeforeUnmount(() => {
    clearInterval(idInterval)
})
</script>

<style scoped>

</style>


<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import mediumZoom, { Zoom } from 'medium-zoom'

import type { Ref } from 'vue'

defineProps<{
    src: string,
    thumbnail?: string,
    alt: string,
}>()

const img_node = ref()
const zoom: Ref<Zoom> = ref(mediumZoom())

function open() {
    zoom?.open()
}

onMounted(() => {
    zoom.value = mediumZoom(img_node.value, {
        background: 'var(--vp-c-bg)'
    })
})
</script>

<template>
    <figure>
        <img :src="thumbnail || src" :data-zoom-src="src" :alt="alt" tabindex="0" ref="img_node" class="card-photo"
            @keypress.enter="open()" />

        <figcaption>
            <slot />
        </figcaption>
        <div class="hint">Clique para ampliar</div>
    </figure>
</template>

<style>
.medium-zoom-overlay,
.medium-zoom-image--opened {
    z-index: 999;
}
</style>

<style scoped>
figure {
    margin: 16px 0;
    text-align: center;
}
img {
    margin: 0 auto;
}
figcaption {
    margin-top: 8px;
}

.hint {
    color: var(--vp-c-text-2);
    font-weight: thin;
    font-style: italic;
}
</style>
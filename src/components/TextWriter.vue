<template>
  <h1 class="text-white text-xl">
    {{ showText }}
    <span :style="{ opacity: opacity }"> |</span>
  </h1>
</template>

<script setup>
import { useTextWriter } from "./textWriter";
const props = defineProps({ text: String });
const { showText, opacity } = useTextWriter(props.text);
</script>

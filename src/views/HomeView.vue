<template>
  <div class="home">
    <h1>This is {{ name }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("Ali");
</script>

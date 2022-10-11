<template>
  <div class="home">
    <h1>This is test</h1>
    <p>
      Updating...<br />
      {{ updateProgress }}
    </p>
  </div>
</template>

<script setup lang="js">
import {onMounted} from "vue"


const updateProgress = ref()
onMounted(()=>{
  window.ipcRenderer.on("update-progress", (event, message) => {

      updateProgress.value = message

  });

})
</script>

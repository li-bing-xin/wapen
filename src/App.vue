<script setup>
import { RouterView, useRoute } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import { ref } from "vue";

const whiteList = ["/about", "/plans", "/qa"];

const route = useRoute();

const s = ref(true);
const msg = ref("12312");
</script>

<template>
  <div id="container">
    <AppHeader v-if="whiteList.find((c) => c === route.path)" />
    <RouterView />

    <v-snackbar v-model="s" location="top" color="primary">
      {{ msg }}

      <template v-slot:actions>
        <v-btn color="black" variant="text" @click="s = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<style scoped lang="scss">
#container {
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
</style>

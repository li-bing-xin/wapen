<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import { useToast } from "./stores/toast";

const whiteList = ["/about", "/plans", "/qa", "/", "/signin", "/signup"];

const route = useRoute();

const toastStore = useToast();
</script>

<template>
  <div id="container">
    <AppHeader />
    <RouterView />

    <v-snackbar
      v-model="toastStore.visible"
      location="top"
      color="primary"
      :timeout="1000"
    >
      {{ toastStore.msg }}

      <template v-slot:actions>
        <v-btn
          color="black"
          variant="text"
          @click="() => toastStore.setVisible(false)"
        >
          Close
        </v-btn>
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

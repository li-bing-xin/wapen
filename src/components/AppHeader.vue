<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <header>
    <div class="logo">Wapen</div>
    <nav class="ml-3">
      <v-btn variant="text" @click="router.push('/ai-writer')">AI Writer</v-btn>
      <v-btn variant="text" @click="router.push('/plans')">Compare Plans</v-btn>
      <v-btn variant="text" @click="router.push('/qa')">Q&A</v-btn>
      <v-btn variant="text" @click="router.push('/about')">About</v-btn>
      <v-btn variant="text" @click="router.push('/user')">User</v-btn>
    </nav>
    <v-spacer></v-spacer>
    <div class="user">
      <v-btn
        variant="text"
        @click="router.push('/signin')"
        v-if="route.path !== '/signin'"
        >Sign in</v-btn
      >
      <v-btn
        variant="outlined"
        @click="router.push('/signup')"
        v-if="route.path !== '/signup'"
        class="ml-2"
        >Sign up</v-btn
      >
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  height: 67px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;

  .logo {
    user-select: none;
    font-size: 23px;
    font-weight: bold;
  }
}

nav {
  display: flex;
  column-gap: 10px;
}
</style>

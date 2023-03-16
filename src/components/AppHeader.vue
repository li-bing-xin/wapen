<script setup lang="ts">
import { useToast } from "@/stores/toast";
import { useUser } from "@/stores/user";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const toastStore = useToast();

const userStore = useUser();
const singout = () => {
    userStore.setUsername("");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    router.push("/signin");
};

const gotoAiWriter = () => {
    if (!userStore.username) {
        toastStore.setMsg("please signin.");
        return;
    }
    router.push("/ai-writer");
};
</script>

<template>
    <header>
        <!-- @click="router.push('/')" -->
        <div class="logo mr-8">Wapen</div>
        <nav class="ml-3">
            <v-btn variant="text" @click="gotoAiWriter">AI Writer</v-btn>
            <!-- <v-btn variant="text" @click="router.push('/plans')">Compare Plans</v-btn> -->
            <!-- <v-btn variant="text" @click="router.push('/payment')">Payment</v-btn> -->
            <!-- <v-btn variant="text" @click="router.push('/qa')">Q&A</v-btn> -->
            <!-- <v-btn variant="text" @click="router.push('/about')">About</v-btn> -->
            <!-- <v-btn variant="text" @click="router.push('/user')">User</v-btn> -->
        </nav>
        <v-spacer></v-spacer>
        <div class="user">
            <div v-if="userStore.username" class="flex align-center no-select">
                <v-icon icon="mdi-account-outline" class="mr-2" />

                {{ userStore.username }}

                <v-btn
                    variant="text"
                    @click="singout"
                    size="small"
                    color="primary"
                    class="ml-3"
                    >Sign out</v-btn
                >
            </div>
            <div v-else>
                <v-btn variant="text" @click="router.push('/signin')"
                    >Sign in</v-btn
                >
                <v-btn
                    variant="outlined"
                    @click="router.push('/signup')"
                    class="ml-2"
                    >Sign up</v-btn
                >
            </div>
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

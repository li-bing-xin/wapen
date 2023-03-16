<template>
    <h1>Customize</h1>
    <v-divider></v-divider>

    <h2>Profile</h2>
    <div class="label">Name</div>
    <div class="name flex align-center">
        {{ user.name }}
        <v-btn size="small" class="ml-3" variant="text">Update</v-btn>
    </div>
    <div class="label">Email</div>
    <div class="email">{{ user.email }}</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const user = reactive({
    name: "李冰心",
    email: "xxxxxxxxxx@163.com",
});
</script>

<style lang="scss" scoped>
h1 {
    font-size: 28px;
}

h2 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.75rem;
    margin-top: 20px;
}

.label {
    color: #6d758d;
    line-height: 1.5625rem;
    max-width: 200px;
    font-size: 14px;
    margin-top: 12px;
}
.name {
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
    margin-right: 16px;
}

.email {
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
    margin-right: 16px;
    color: #6d758d;
}

.password {
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
    margin-right: 16px;
}

.about-user {
    font-size: 14px;
}

.v-btn {
    color: #2551da;
    font-weight: bolder;
    font-size: 14px;
}
</style>

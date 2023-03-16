<template>
    <h1>Account Settings</h1>
    <v-divider></v-divider>

    <h2>Profile</h2>
    <div class="label">Name</div>
    <div class="name flex align-center">
        {{ user.name }}

        <v-btn size="small" class="ml-3" variant="text"
            >Update

            <v-dialog width="500" v-model="usernameDialog" activator="parent">
                <v-card>
                    <v-card-title> Update name </v-card-title>
                    <v-card-text>
                        <v-form
                            validate-on="input"
                            @submit.prevent="onNameValidate"
                            ref="userForm"
                        >
                            <v-text-field
                                label="new name"
                                type="text"
                                color="primary"
                                variant="outlined"
                                v-model="updatingUsername"
                                :rules="[nameRule]"
                                maxlength="20"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn variant="text" @click="onCancelUpdateName">
                            Cancel
                        </v-btn>
                        <v-btn
                            color="primary"
                            type="submit"
                            @click="onUpdateName"
                            >Update
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-btn>
    </div>
    <div class="label">Email</div>
    <div class="email">{{ user.email }}</div>
    <div class="label">Password</div>
    <div class="password flex align-center">
        •••••••
        <v-btn size="small" class="ml-3" variant="text"
            >{{ user.hasPassword ? "Update" : "Create" }}
        </v-btn>
    </div>

    <h2>Linked Accounts</h2>
    <div class="flex align-center">
        <img src="@/assets/google.svg" alt="google" class="mr-3 my-5" />
        Google
    </div>

    <h2>About You</h2>
    <div class="about-user">
        <div class="my-3">
            Understanding how you use Grammarly helps us develop features
            tailored to your writing needs.
        </div>

        <div class="flex justify-space-between align-center">
            <div>Most of my writing is for:</div>

            <div style="width: 200px">
                <v-select
                    density="compact"
                    variant="outlined"
                    hide-details
                    :items="writingFor"
                    placeholder="Select"
                ></v-select>
            </div>
        </div>

        <div class="my-3">
            Understanding your writing outcome goals when writing at work helps
            us develop features tailored to your writing needs.
        </div>

        <div class="flex justify-space-between align-center">
            <div>My primary function is:</div>
            <div style="width: 200px">
                <v-select
                    density="compact"
                    variant="outlined"
                    hide-details
                    :items="jobs"
                    placeholder="Select"
                ></v-select>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { SubmitEventPromise } from "vuetify/lib/framework.mjs";
import type { VForm } from "vuetify/components";

const writingFor = ["School", "Work", "Other"];
const jobs = ["IT", "Sales", "Marketing"];

const user = reactive({
    name: "李冰心",
    email: "xxxxxxxxxx@163.com",
    hasPassword: false,
});
const usernameDialog = ref(false);
const updatingUsername = ref("");
const userForm = ref<VForm>();

const nameRule = (v: string) => {
    if (!v.trim() || v.includes(" ")) return "invalid name";
    return true;
};

const onCancelUpdateName = () => {
    updatingUsername.value = "";
    usernameDialog.value = false;
};

const onUpdateName = () => {
    userForm.value?.validate().then((res) => {
        if (res.valid) {
            console.log(updatingUsername.value);
            usernameDialog.value = false;
            updatingUsername.value = "";
        }
    });
};

const onNameValidate = async (event: SubmitEventPromise) => {
    const results = await event;
    if (results.valid) onUpdateName();
};
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
    max-width: 800px;
}

.v-btn {
    color: #2551da;
    font-weight: bolder;
    font-size: 14px;
}
</style>

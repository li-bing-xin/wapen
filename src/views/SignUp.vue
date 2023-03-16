<template>
    <main class="flex-center page">
        <v-card title="Sign up" :width="500">
            <div class="pt-4 px-7 pb-8">
                <v-form validate-on="submit" @submit.prevent="onSubmit">
                    <v-text-field
                        label="Email"
                        type="email"
                        color="primary"
                        variant="outlined"
                        :rules="[emailRule]"
                        v-model="form.email"
                    ></v-text-field>

                    <v-text-field
                        label="Password"
                        type="password"
                        color="primary"
                        variant="outlined"
                        :rules="[passwordRule]"
                        v-model="form.password"
                    ></v-text-field>

                    <v-text-field
                        label="Username"
                        type="username"
                        color="primary"
                        variant="outlined"
                        :rules="[usernameRule]"
                        v-model="form.username"
                    ></v-text-field>

                    <div class="text-center">
                        <v-btn
                            variant="text"
                            @click="onGotoSignIn"
                            size="small"
                            class="mb-4"
                        >
                            I have an exist account
                        </v-btn>
                    </div>

                    <v-btn
                        color="primary"
                        block
                        class="mr-3 font-weight-bold"
                        :loading="isLoading"
                        type="submit"
                    >
                        Continue
                    </v-btn>
                </v-form>

                <!-- <div class="other-way">
          <div class="way mt-4" @click="onGoogleSignUp">
            <img src="@/assets/google.svg" alt="Google" />
            <span>Sign up with Google</span>
            <v-icon icon="mdi-chevron-right"> </v-icon>
          </div>
        </div> -->
            </div>
        </v-card>
    </main>
</template>

<script setup lang="ts">
import { googleAuthCodeLogin, decodeCredential } from "vue3-google-login";

import { reactive } from "vue";
import { useRouter } from "vue-router";
import { emailReg, usernameReg } from "@/lib";
import { signUpReq } from "@/api/user";
import { useAsyncState } from "@vueuse/core";
import type { SubmitEventPromise } from "vuetify/lib/framework.mjs";

const router = useRouter();

const form = reactive({
    email: "",
    password: "",
    username: "",
});

const { isLoading, execute: signUp } = useAsyncState(
    () => signUpReq(form),
    null,
    {
        immediate: false,
        onSuccess() {
            router.push("/signin");
        },
    }
);

const onSubmit = async (event: SubmitEventPromise) => {
    const results = await event;
    signUp();
    console.log(results, "results");
};

const emailRule = (value: string) => {
    if (!value) return "Please enter email.";
    if (!emailReg.test(value)) return "Please enter correct email.";
    return true;
};

const passwordRule = (value: string) => {
    if (!value) return "Please enter password.";
    return true;
};

const usernameRule = (value: string) => {
    if (!value) return "Please enter username.";
    if (!usernameReg.test(value)) return "can only use (a-z A-Z 0-9 space)";
    return true;
};

const onGoogleSignUp = () => {
    const GOOGLE_CLIENT_ID =
        "362565683006-903igi6niudpg9tcnj22it2v6rhdjj2u.apps.googleusercontent.com";
    console.log(123123, googleAuthCodeLogin);
    googleAuthCodeLogin({
        clientId: GOOGLE_CLIENT_ID,
    })
        .then((response) => {
            console.log("Handle the response", response);
            // const userData = decodeCredential(response.credential);
            // console.log("Handle the userData", userData);
        })
        .catch((err) => {
            console.log(err, 1);
        });
};

const onGotoSignIn = () => {
    router.push("/signin");
};
</script>

<style lang="scss" scoped>
main {
    display: flex;
    justify-content: center;
    flex: 1;
    min-height: 600px;
}

.way {
    background: #fff;
    border: 1px solid #6d758d;
    color: #4d536e;
    outline: none;
    align-items: center;
    border-radius: 6px;
    display: flex;
    height: 48px;
    justify-content: center;
    padding: 8px 20px;
    cursor: pointer;
    user-select: none;

    img {
        width: 16px;
        height: 16px;
    }

    span {
        flex: 1;
        margin: 0 10px;
    }

    &:hover {
        background: rgb(249, 250, 254);
    }
}

.v-card-title {
    color: #0e101a;
    font-size: 24px;
    line-height: 32px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    margin-left: 10px;
}
</style>

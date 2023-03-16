<template>
    <main class="flex-center page">
        <v-card title="Sign in" :width="500">
            <div class="pt-4 px-7 pb-8">
                <v-form>
                    <v-text-field
                        label="Email"
                        type="email"
                        color="primary"
                        variant="outlined"
                        v-model="form.email"
                    ></v-text-field>

                    <v-text-field
                        label="Password"
                        type="password"
                        color="primary"
                        variant="outlined"
                        v-model="form.password"
                    ></v-text-field>

                    <div class="text-center">
                        <v-btn
                            variant="text"
                            @click="onGotoSignUp"
                            class="mb-4"
                            size="small"
                        >
                            I don't have an account
                        </v-btn>
                    </div>

                    <v-btn
                        color="primary"
                        block
                        class="mr-3 font-weight-bold"
                        @click="signIn"
                        :loading="isLoading"
                    >
                        Continue
                    </v-btn>
                </v-form>

                <!-- <div class="other-way">
          <div class="way mt-4" @click="onGoogleSignIn">
            <img src="@/assets/google.svg" alt="Google" />
            <span>Sign in with Google</span>
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
import { useAsyncState } from "@vueuse/core";
import { signInReq } from "@/api/user";
import { useUser } from "@/stores/user";

const router = useRouter();
const { setUsername } = useUser();

const { isLoading, execute: signIn } = useAsyncState(
    () => signInReq(form),
    null,
    {
        immediate: false,
        onSuccess(res) {
            if (res?.data.username) setUsername(res.data.username);
            router.push("/ai-writer");
        },
    }
);

const form = reactive({
    email: "",
    password: "",
});

const onGoogleSignIn = () => {
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

const onGotoSignUp = () => {
    router.push("/signup");
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

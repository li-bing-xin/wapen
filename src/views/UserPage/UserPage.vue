<template>
    <div class="page">
        <div class="left">
            <div class="user">
                <img src="@/assets/google.svg" alt="user img" width="30" />
                <div class="flex flex-column ml-3">
                    <span class="name">李冰心</span>
                    <span class="email">bx18829292624@gmail.com</span>
                </div>
            </div>
            <v-divider length="90%" class="my-10"></v-divider>
            <div class="pl-10 account-text">MY ACCOUNT</div>
            <nav>
                <ul>
                    <li
                        v-for="menu in menus"
                        :key="menu.index"
                        class="flex align-center"
                        :class="{ active: activeMenu === menu.index }"
                        @click="activeMenu = menu.index"
                    >
                        <v-icon
                            class="mr-2"
                            :icon="menu.icon"
                            size="24"
                        ></v-icon>
                        <span>{{ menu.name }}</span>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="right">
            <account-settings v-if="activeMenu === 0" />
            <my-customize v-if="activeMenu === 1" />
            <my-subscription v-if="activeMenu === 2" />
            <the-security v-if="activeMenu === 3" />
        </div>
    </div>
</template>

<script setup lang="ts">
import AccountSettings from "./AccountSettings.vue";
import TheSecurity from "./TheSecurity.vue";
import MyCustomize from "./MyCustomize.vue";
import MySubscription from "./MySubscription.vue";
import { ref } from "vue";

const menus = [
    {
        name: "Account Settings",
        icon: "mdi-cog-outline",
        index: 0,
    },
    {
        name: "Customize",
        icon: "mdi-tune",
        index: 1,
    },
    {
        name: "Subscription",
        icon: "mdi-currency-usd",
        index: 2,
    },
    {
        name: "Security",
        icon: "mdi-shield-lock-outline",
        index: 3,
    },
];
const activeMenu = ref(0);
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex: 1;
    .left {
        background: #fff;
        box-shadow: 0 4px 16px 0 rgb(96 101 123 / 14%);
        display: flex;
        flex-direction: column;
        left: 0;
        max-width: 313px;
        min-width: 313px;
        padding-bottom: 20px;
        padding-left: 40px;
        padding-top: 58px;
        position: sticky;
        z-index: 1;

        .user {
            display: flex;
            .name {
                color: rgb(14, 16, 26);
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 1rem;
                font-weight: 700;
                line-height: 1.5rem;
                margin: 0;
            }

            .email {
                color: #6d758d;
                font-size: 0.75em;
                letter-spacing: 0.04em;
                line-height: 2em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        .account-text {
            color: #6d758d !important;
            display: -webkit-box;
            font-size: 0.6875rem;
            font-weight: 400;
            letter-spacing: 0.8px !important;
            line-height: 1rem;
            overflow: hidden;
            padding-left: 40px;
            text-overflow: ellipsis;
            width: 200px;
        }

        nav {
            li {
                height: 32px;
                margin-top: 5px;
                cursor: pointer;
                margin-left: -40px;
                padding-left: 40px;
                user-select: none;

                &:hover {
                    background-color: rgb(238, 245, 254);
                }
            }

            .active {
                background-color: rgb(238, 245, 254);
                .v-icon {
                    font-weight: 100;
                }
                span {
                    font-weight: bold;
                    color: #3659b5;
                }
            }
        }
    }

    .right {
        padding: 0 32px 32px 32px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        width: 100%;
        padding-top: 45px;
    }
}
</style>

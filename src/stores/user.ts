import { ref } from "vue";
import { defineStore } from "pinia";

export const useUser = defineStore("user", () => {
    const username = ref("");

    const name = localStorage.getItem("username");
    if (name) setUsername(name);

    function setUsername(name: string) {
        username.value = name;
    }

    return { username, setUsername };
});

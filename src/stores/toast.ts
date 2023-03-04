import { ref } from "vue";
import { defineStore } from "pinia";

export const useToast = defineStore("toast", () => {
  const msg = ref();
  const visible = ref(false);

  function setMsg(v: string) {
    msg.value = v;
    visible.value = !!v;
  }

  function setVisible(v: boolean) {
    visible.value = v;
  }

  return { msg, visible, setMsg, setVisible };
});

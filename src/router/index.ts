import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("../views/HomePage.vue");
const UserPage = () => import("../views/UserPage/UserPage.vue");
const SignIn = () => import("../views/SignIn.vue");
const SignUp = () => import("../views/SignUp.vue");
const AIWriter = () => import("../views/AIWriter.vue");
const OurPlans = () => import("../views/OurPlans.vue");
const QuestionAndAnswer = () => import("../views/QuestionAndAnswer.vue");
const AboutUs = () => import("../views/AboutUs.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/user",
      name: "user",
      component: UserPage,
    },
    {
      path: "/ai-writer",
      name: "ai-writer",
      component: AIWriter,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/plans",
      name: "plans",
      component: OurPlans,
    },
    {
      path: "/qa",
      name: "qa",
      component: QuestionAndAnswer,
    },
    {
      path: "/about",
      name: "about",
      component: AboutUs,
    },
  ],
});

export default router;

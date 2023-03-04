import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const HomePage = () => import("../views/HomePage.vue");
const UserPage = () => import("../views/UserPage/UserPage.vue");
const SignIn = () => import("../views/SignIn.vue");
const SignUp = () => import("../views/SignUp.vue");
const AIWriter = () => import("../views/AIWriter.vue");
const OurPlans = () => import("../views/OurPlans.vue");
const AboutUs = () => import("../views/AboutUs.vue");
const Payment = () => import("../views/Payment.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
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
      path: "/payment",
      name: "payment",
      component: Payment,
    },
    {
      path: "/about",
      name: "about",
      component: AboutUs,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "signin" && to.name !== "signup") {
    if (localStorage.getItem("token")) next();
    else next("signin");
  } else {
    next();
  }
});

export default router;

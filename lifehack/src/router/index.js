import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/LoginPage.vue";

const routes = [
    {
        path: "/loginpage",
        name: "LoginPage",
        component: LoginPage,
    },
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
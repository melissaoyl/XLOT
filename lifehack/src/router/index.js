import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import RegistrationPage from "@/views/RegistrationPage.vue";

const routes = [
    {
        path: "/register",
        name: "RegistrationPage",
        component: RegistrationPage,
    },
    {
        path: "/",
        name: "LoginPage",
        component: LoginPage,
    }
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
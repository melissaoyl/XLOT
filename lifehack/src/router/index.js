import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/LoginPage.vue";
import RegistrationPage from "@/views/RegistrationPage.vue";

const routes = [
    {
        path: "/",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: "/register",
        name: "RegistrationPage",
        component: RegistrationPage,
    }
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
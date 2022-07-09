import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import RegistrationPage from "@/views/RegistrationPage.vue";
import HelloWorld from "@/components/HelloWorld.vue";
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
    },
    {
        path: "/helloworld",
        name: "HelloWorld",
        component: HelloWorld,
    }
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
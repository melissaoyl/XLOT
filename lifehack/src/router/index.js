import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import RegistrationPage from "@/views/RegistrationPage.vue";
import LoginPage from "@/components/LoginPage.vue";
import PhotoUpload from "@/components/PhotoUpload.vue"

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
    },{
        path: "/PhotoUpload",
        name: "PhotoUpload",
        component: PhotoUpload
    }
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/LoginPage.vue";
import PhotoUpload from "@/components/PhotoUpload.vue"

const routes = [
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
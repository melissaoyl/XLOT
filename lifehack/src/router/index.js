import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import RegistrationPage from "@/views/RegistrationPage.vue";
import PhotoUpload from "@/components/PhotoUpload.vue"
import HomePage from "@/views/HomePage.vue";
import ProfileDisplay from "@/components/ProfileDisplay.vue"

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
        path: "/photoupload",
        name: "PhotoUpload",
        component: PhotoUpload
    },{
        path: "/home",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/profiledisplay",
        name: "ProfileDisplay",
        component: ProfileDisplay
    }
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
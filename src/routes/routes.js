import { createRouter, createWebHistory } from 'vue-router';
import HomePages from '@/components/HomePages.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePages,
        meta: { title: 'Ruang Dkv - Klaten' }

    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.afterEach((to) => {
    const title = to.meta.title || DEFAULT_TITLE
    document.title = title
});
export default router;
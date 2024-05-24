import { createRouter, createMemoryHistory } from 'vue-router';
import LogIn from"./LogIn.vue";
import LogIn from"./forgot-password.vue";
import LogIn from"./SinpUp.vue";


export default createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/login',
            component: LogIn
        },
        {
            path: '/forgot-password',
            component: forgot-password
        },
        {
            path: '/SinpUp',
            component: SinpUp
        }


    ]
})
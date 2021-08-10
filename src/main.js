import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            redirect: '/teams',
            // component: TeamsList
        },
        {
            name: 'teams',
            path: '/teams',
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            // alias: '/'
            children: [{
                name: 'team-members',
                path: ':teamId',
                component: TeamMembers,
                props: true
            }]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
        },
        {
            path: '/:notFound(.*)',
            components: NotFound
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return {
            left: 0,
            top: 0
        }
    }
});

const app = createApp(App)

// Make app aware of routes; using the built in "use" method
app.use(router);

app.mount('#app');
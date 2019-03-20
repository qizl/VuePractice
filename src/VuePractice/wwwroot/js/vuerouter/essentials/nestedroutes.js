const User = {
    template: `
        <div class="user">
            <p>User {{ $route.params.id }}</p>
            <router-view></router-view>
        </div>
    `
}

const UserProfile={
    template:'<div>This is UserProfile</div>'
}

const UserPosts={
    template:'<div>This is UserPosts</div>'
}

const router = new VueRouter({
    routes: [{
        path: '/user/:id',
        component: User,
        children: [{
            path: 'profile',
            component: UserProfile
        }, {
            path: 'posts',
            component: UserPosts
        }]
    }]
})

const app = new Vue({
    router
}).$mount('#app')
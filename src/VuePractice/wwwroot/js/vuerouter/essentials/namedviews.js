const Foo = {
    template: '<div>This is Foo</div>',
};
const Bar = {
    template: '<div>This is Bar</div>',
};
const Baz = {
    template: '<div>This is Baz</div>',
};

const router = new VueRouter({
    routes: [{
        path: '/',
        components: {
            default: Foo,
            a: Bar,
            b: Baz
        }
    }]
})

const app = new Vue({
    router
}).$mount('#app')

const UserSettings = {
    template:  `
        <div class="user">
            <p>User {{ $route.params.id }}</p>
            <router-view></router-view>
        </div>
    `
};
const UserEmailsSubscriptions = {
    template: '<div>This is UserEmailsSubscriptions</div>'
};
const UserProfile = {
    template: '<div>This is UserProfile</div>'
};
const UserProfilePreview = {
    template: '<div>This is UserProfilePreview</div>'
};

const router1 = new VueRouter({
    routes: [{
        path: '/settings',
        component: UserSettings,
        children: [{
            path: 'emails',
            component: UserEmailsSubscriptions
        }, {
            path: 'profile',
            components: {
                default: UserProfile,
                helper: UserProfilePreview
            }
        }]
    }]
})

const app1 = new Vue({
    el:'#app1',
    router: router1
})
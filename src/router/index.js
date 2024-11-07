const routes = [
  {
    path: '/',
    name: 'Layout',
    children: [
      {
        path: '',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/home/Home.vue')
      },
      {
        path: 'Demo',
        name: 'Demo',
        component: () =>
          import(/* webpackChunkName: "Demo" */ '@/views/Demo.vue')
      },
      {
        path: 'Demo2',
        name: 'Demo2',
        component: () =>
          import(/* webpackChunkName: "Demo" */ '@/views/Demo2.vue')
      }
    ]
  }
]

export default routes

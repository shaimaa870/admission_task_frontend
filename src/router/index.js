import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import HelpView from '../views/HelpView.vue'
import LoginView from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import AdminModelDetails from '../views/models/AdminModelDetails.vue'
import UserModelDetails from '../views/models/UserModelDetails.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    meta:{isPublic:false},
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    meta:{isPublic:false},
    component:  About
  }
  ,
  {
    path: '/help',
    name: 'help',
    meta:{isPublic:false},
    component:HelpView

    }
    ,
  {
    path: '/login',
    name: 'login',
   meta:{isPublic:true},
    component:LoginView

    }
    ,
  {
    path: '/sign-up',
    name: 'sign-up',
    meta:{isPublic:true},
    component:SignUp

    },
    {
      path: '/model-admin/:id',
      name: 'model-details',
      meta:{isPublic:false},
      component:AdminModelDetails
  
      },
      {
        path: '/model-user/:id',
        name: 'model',
        meta:{isPublic:false},
        component:UserModelDetails
    
        },
    // { path: '*', redirect: '/home' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/sign-up'];
  //const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (!to.meta.isPublic && !loggedIn) {
    return next('/login');
  }
  if (to.meta.isPublic && loggedIn) {
    return next('/');
  }

  next();
})

export default router

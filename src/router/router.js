import { createRouter, createWebHistory } from 'vue-router';
import Sidebar from '@/components/Sidebar.vue';
import Library from '@/components/Library.vue';
import Settings from '@/pages/Settings.vue';
import Login from '@/pages/Login.vue';
import Profile from '@/components/Profile.vue';
import Favorites from '@/components/Favorites.vue';
import Chat from '@/components/Chat.vue';
import Collection from '@/components/Collection.vue';
import Upload from '@/components/Upload.vue';
import Exit from '@/components/Exit.vue';
import Reading from '@/components/Reading.vue'

const routes = [
    { 
    path: '/library', name: Library,
     component: Library 
    },
    {
      path: '/settings', name: Settings,
      component: Settings
    },
    {
      path: '/login', name: Login,
      component: Login
    },
    {
      path: '/profile', name: Profile,
      component: Profile
    },
    {
      path: '/upload', name: Upload,
      component: Upload
    },
    {
      path: '/favorites', name: Favorites,
      component: Favorites
    },
    {
      path: '/chat', name: Chat,
      component: Chat
    },
    {
      path: '/collection', name: Collection,
      component: Collection
    },
    {
      path: '/exit', name: Exit,
      component: Exit
    },
    {
    path: '/reading', name: Reading,
    component: Reading
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

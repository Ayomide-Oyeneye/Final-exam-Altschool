import { Promise } from "core-js"; // Import the Promise module from core-js

// Other imports remain unchanged
import "../styles.css";
import Home from "../routes/Home.vue";
import FAQ from "../routes/FAQ.vue";
import About from "../routes/About.vue";
import Signup from "../routes/Signup.vue";
import Login from "../routes/Login.vue";
import App from "../App.vue";
import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "../firebase/index.js";
import FourzeroFourPage from "../routes/FourzeroFourPage.vue";
import { createRouter, createWebHistory } from "vue-router";

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/FAQ", component: FAQ },
    {
      path: "/Home",
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    { path: "/About", component: About },
    { path: "/", component: App },
    { path: "/Signup", component: Signup },
    { path: "/login", component: Login },
    { path: "/:pathMatch(.*)*", component: FourzeroFourPage },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you dont have access");
      next("/Signup");
    }
  } else {
    next();
  }
});

export default router;

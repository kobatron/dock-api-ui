import { createApp } from "vue";
import { createPinia } from "pinia";
import Echo from "laravel-echo";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Dynamically load Socket.io client from server
const script = document.createElement('script');
script.src = 'http://localhost:6001/socket.io/socket.io.js';
script.onload = () => {
    // Create a new Echo instance
    const echo = new Echo({
        broadcaster: 'socket.io',
        host: 'http://localhost:6001',
        client: window.io
    });

    // Listen to events
    echo.channel('fullstack_challenge_database_private-local-weather-channel')
        .listen(".lwe", (e) => {
            console.log('Received event:', e);
        });

    // Make Echo instance available in all components
    app.config.globalProperties.$echo = echo;
};
document.head.appendChild(script);

app.mount("#app");

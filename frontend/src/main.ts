import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import Echo from "laravel-echo";
import { useWeatherStore } from './stores/weather';

import App from "./App.vue";
import router from "./router";

//import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);
app.use(pinia);
app.use(router);


const script = document.createElement('script');
script.src = 'http://localhost:6001/socket.io/socket.io.js';
script.onload = () => {

    const echo = new Echo({
        broadcaster: 'socket.io',
        host: 'http://localhost:6001',
        //client: window.io
    });

    const eventStore = useWeatherStore();
    echo.channel('fullstack_challenge_database_private-local-weather-channel')
        .listen(".lwe", (e) => {
            //console.log('Received event:', e);
            eventStore.addEvent(e);
        });

    // Make Echo instance available in all components
    app.config.globalProperties.$echo = echo;
};
document.head.appendChild(script);

app.mount("#app");

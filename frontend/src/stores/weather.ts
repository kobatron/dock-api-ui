import { defineStore } from 'pinia';

export const useWeatherStore = defineStore({
    id: 'event',
    persist: true,
    state: () => ({
        events: {}
    }),
    actions: {
        addEvent(event) {
            console.log('addEvent', event);
            // Use the cache_key as the key in the events object
            this.events[event.data.cache_key] = event.data;
        }
    }
});

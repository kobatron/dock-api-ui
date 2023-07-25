<template>
  <div class="list-group w-50">
    <a href="#" class="list-group-item list-group-item-action"
       v-for="(event, cacheKey, index) in events"
       :key="cacheKey"
       @click.prevent="toggleModal(cacheKey)">

      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{event.name}}</h5>
        <small><i :class="['fas', 'fa-fw', 'me-4', 'wi', 'wi-owm-' + event.wid]"></i></small>
      </div>
      <p class="mb-1">{{ event.label }} &amp; {{ event.temperature}}&deg;</p>
      <small>{{ event.description}} and feels like {{ event.feels_like }}&deg;</small>
    </a>
    <b5-modal :cache_key="currentCacheKey" :toggle="toggle"></b5-modal>
  </div>
</template>


<script>
import {useWeatherStore} from "@/stores/weather";
import B5Modal from "@/components/B5Modal.vue";
import { ref } from 'vue';

export default {
  components: {B5Modal},
  setup() {
    const weatherStore = useWeatherStore();
    const toggle = ref(false);
    const currentCacheKey = ref('users:0');

    const toggleModal = (cacheKey) => {
      currentCacheKey.value = cacheKey;
      toggle.value = !toggle.value || false;
    };

    return {
      events: weatherStore.events,
      toggleModal,
      toggle,
      currentCacheKey
    };
  }
}
</script>

<style scoped>
@import '../assets/weather-icons/css/weather-icons.min.css';
</style>

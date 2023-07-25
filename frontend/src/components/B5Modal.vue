<template>
  <div class="modal fade" ref="modalRef" tabindex="-1" aria-labelledby="modal_demo_label" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal_demo_label">{{ record.name }}</h5>
<!--          <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>-->
        </div>
        <div class="modal-body">
          <span>{{ record }}</span>
        </div>
        <div class="modal-footer">
<!--          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, onMounted, ref, computed, watch, defineProps, defineEmits, nextTick} from 'vue'
import {Modal} from 'bootstrap'
import {useWeatherStore} from "@/stores/weather";

const modalRef = ref(null)
const state = reactive({
  modal_demo: null,
})

onMounted(() => {
  state.modal_demo = new Modal(modalRef.value, {
    hide: () => {
      emit('update:toggle', false) // emit event when modal is hidden
    }
  });

})

function openModal() {
  state.modal_demo.show()
}

function closeModal() {
  state.modal_demo.hide()
}

const props = defineProps({
  cache_key: {
    type: String,
    default: 'users:25',
    validator: function (value) {
      // users:69
      return /^users:\d+$/.test(value)
    }
  },
  toggle: {
    type: Boolean,
    default: false
  }
})

//const emit = defineEmits(['update:toggle'])
watch(() => props.toggle, openModal);

const weatherStore = useWeatherStore();
const record = computed(() => weatherStore.events[props.cache_key]
    || {
      name: '',
      description: '',
      feels_like: '',
      label: '',
      temperature: '',
      wid: '',
      //cache_key: '',
      latitude: '',
      longitude: ''
    });
</script>

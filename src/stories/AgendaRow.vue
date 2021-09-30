<template>
  <div class="row most-agenda-row">
    <div
      class="col-4"
      :class="verticelCenter"
    >
      {{ time }}
    </div>

    <div
      class="col"
      :class="verticelCenter"
    >
      {{ label }}
    </div>

    <div
      v-if="meetLabel"
      class="col"
      :class="verticelCenter"
    >
      <a :href="meetLink">
        {{ meetLabel }}
      </a>
    </div>
  </div>
</template>

<script>
import './agenda.css';
import {reactive, computed} from 'vue';

export default {
  name: 'MostAgendaRow',

  components: {
  },

  props: {
    label: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
    meetLink: {
      type: String,
      default: '',
    },
    meetLabel: {
      type: String,
      default: '',
    },
  },

  emits: ['click'],

  setup(props, {emit}) {
    props = reactive(props);
    return {
      verticelCenter: computed(() => ({
        'd-flex flex-column align-items-center justify-content-center': true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
    };
  },
};
</script>

<template>
  <div class="row most-agenda-row mt-4">
    <div
      class="col-4"
      :class="verticelCenter"
    >
      {{ time }}
    </div>

    <div
      v-if="data.length != 0"
      class="col"
    >
      <div
        v-for="(datum, index) in data"
        :key="datum.id"
        class="row"
        :class="index != 0 ? 'mt-4' : 'mt-0'"
      >
        <div
          class="col most-agenda-column-normal"
          :class="verticelCenter"
        >
          {{ datum.label }}
        </div>

        <div
          v-if="datum.meetLabel"
          class="col most-agenda-column-normal"
          :class="verticelCenter"
        >
          <a :href="datum.meetLink">
            {{ datum.meetLabel }}
          </a>
        </div>
      </div>
    </div>

    <div
      v-if="data.length == 0"
      class="col most-agenda-column-normal"
      :class="verticelCenter"
    >
      {{ label }}
    </div>

    <div
      v-if="meetLabel && data.length == 0"
      class="col most-agenda-column-normal"
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
    data: {
      type: Array,
      default: function() {
        return [];
      },
    },
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

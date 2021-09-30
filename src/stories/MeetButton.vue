<template>
  <!-- TODO hover button effect -->
  <a
    :style="style"
    class="most-meet-button"
    type="button"
    :href="href"
    target="_blank"
  >
    <p style="font-size: 42px">
      {{ label }}
    </p>

    <p
      class="my-0 my-md-4"
      style="font-size: 20px"
    >
      點此進入房間
    </p>

    <p
      v-if="checkDate()"
      style="font-size: 12px"
    >
      {{ profssors }}
    </p>
  </a>
</template>

<script>
import './meetButton.css';
import {reactive, computed} from 'vue';

export default {
  name: 'MostMeetButton',

  props: {
    label: {
      type: String,
      required: true,
    },
    profssors: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      default: 'https://meet.google.com/wqx-jjey-dbf',
    },
    backgroundColor: {
      type: String,
      default: '#ffffff',
    },
    fontColor: {
      type: String,
      default: '#000000',
    },
  },

  emits: ['click'],

  setup(props, {emit}) {
    props = reactive(props);
    return {
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
        color: props.fontColor,
      })),
      onClick() {
        emit('click');
      },
      checkDate() {
        const now = new Date();
        const target = new Date('2021-11-19');

        return now >= target;
      },
    };
  },
};
</script>

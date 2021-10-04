<template>
  <div class="most-upload-link-button">
    <a
      :href="href"
      target="_blank"
      style="width: 100%"
    >
      <button
        class="btn"
        :style="`background-color: ${backgroundColor};color: ${fontColor}`"
      >
        {{ buttonText }}
      </button>
    </a>
    <p
      v-if="buttonComment"
    >
      {{ buttonComment }}
    </p>
  </div>
</template>

<script>
import './upload.css';
import {reactive} from 'vue';

export default {
  name: 'MostUploadLink',

  components: {
  },

  props: {
    backgroundColor: {
      type: String,
      default: '#5DA8FF',
    },
    fontColor: {
      type: String,
      default: '#FFFFFF',
    },
    href: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
    buttonComment: {
      type: String,
      default: '',
    },
  },

  emits: ['click'],

  setup(props, {emit}) {
    props = reactive(props);
    return {
      onClick() {
        emit('click');
      },
    };
  },
};
</script>

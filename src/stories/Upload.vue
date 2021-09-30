<template>
  <div>
    <most-info
      title="*上傳資料"
      class="d-none d-sm-block"
    >
      <template #bottom>
        <div class="col-12 col-md-6">
          <a
            target="_blank"
            href="https://forms.gle/RtDKXFJdBFpBUjfM8"
          >
            <button
              class="btn most-upload-button"
            >
              <font-awesome-icon
                icon="cloud-upload-alt"
                style="font-size: 36px"
              />
              <p>
                點此進入上傳資料
              </p>
            </button>
          </a>
        </div>
      </template>
    </most-info>

    <most-info
      class="d-block d-sm-none"
    >
      <template #bottom>
        <div class="col-12">
          <a
            target="_blank"
            href="https://forms.gle/RtDKXFJdBFpBUjfM8"
          >
            <button
              class="btn most-upload-button"
              v-text="'點此上傳資料'"
            />
          </a>
        </div>
      </template>
    </most-info>
  </div>
</template>

<script>
import './upload.css';
import {reactive} from 'vue';

import MostInfo from './Info';

export default {
  name: 'MostUpload',

  components: {
    MostInfo,
  },

  props: {
    backgroundColor: {
      type: String,
      default: '#ffffff',
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

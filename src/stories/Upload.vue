<template>
  <div>
    <most-info
      title="*上傳資料"
      class="d-none d-sm-block"
    >
      <template #bottom>
        <div class="row">
          <div class="col-3">
            <a
              :href="`${publicPath}${summaryName}`"
              target="_blank"
              style="width: 100%"
            >
              <button
                class="btn most-link-button"
                v-text="'摘要格式下載'"
              />
            </a>
          </div>

          <div class="col-3">
            <a
              :href="`${publicPath}${reportName}`"
              target="_blank"
              style="width: 100%"
            >
              <button
                class="btn most-link-button"
              >
                精簡報告格式下載
                <p style="font-size: 14px">(精簡報告撰寫請以10頁內容為限)</p>
              </button>
            </a>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-6 mt-4">
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
      publicPath: process.env.BASE_URL,
      summaryName: '摘要_議程編號.docx',
      reportName: '精簡報告_議程編號.docx',
    };
  },
};
</script>

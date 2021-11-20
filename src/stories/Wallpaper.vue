<template>
  <div>
    <most-info
      title="*壁報資料"
      class="d-none d-sm-block"
    >
      <template #bottom>
        <div class="row">
          <div
            v-if="checkDate()"
            class="col-12 col-md-6 mt-4"
          >
            <a
              target="_blank"
              href="https://reurl.cc/828vLM"
            >
              <button
                class="btn most-upload-button"
              >
                <font-awesome-icon
                  icon="photo-video"
                  style="font-size: 40px"
                />
                <p style="font-size: 26px">
                  點此預覽壁報
                </p>
              </button>
            </a>
          </div>

          <!-- <div
            v-if="!checkDate()"
            style="font-size: 22px;text-align: left"
          >
            本年度成果發表壁報展示已結束，感謝各位與會者的參與與支持
          </div> -->
        </div>
      </template>
    </most-info>

    <most-info
      class="d-block d-sm-none"
    >
      <template #bottom>
        <div
          class="col-12"
        >
          <a
            v-if="checkDate()"
            target="_blank"
            href="https://reurl.cc/828vLM"
          >
            <button
              class="btn most-upload-button"
              v-text="'點此預覽壁報'"
            />
          </a>

          <div
            v-if="!checkDate()"
            style="font-size: 22px;"
          >
            本年度成果發表壁報展示已結束，感謝各位與會者的參與與支持
          </div>
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

    const publicPath = process.env.BASE_URL;

    return {
      onClick() {
        emit('click');
      },
      checkDate() {
        const now = new Date();
        const target = new Date('2021-11-20 11:40');

        return now < target;
      },
      links: [
        {
          href: `${publicPath}摘要_議程編號.docx`,
          buttonText: '摘要格式下載',
        },
        {
          href: `${publicPath}精簡報告_議程編號.docx`,
          buttonText: '精簡報告格式下載',
          buttonComment: '(精簡報告撰寫請以10頁內容為限)',
        },
        {
          href: `${publicPath}109應科學門海報範本.pptx`,
          buttonText: '海報範本下載',
          backgroundColor: '#FFDB5F',
          fontColor: '#0B0D0C',
        },
        {
          href: `${publicPath}109應科學門簡報範本.pptx`,
          buttonText: '簡報格式下載',
          backgroundColor: '#FFDB5F',
          fontColor: '#0B0D0C',
        },
      ],
    };
  },
};
</script>

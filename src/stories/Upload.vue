<template>
  <div>
    <most-info
      title="網站正式啟用!即日起開放上傳檔案!"
      content-text="「104年度應用科學教育學門成果發表暨研習會」官方網站於09月14日正式啟用，報名日期自即日起至10月20日(星期二)止；
      開放報告上傳日期請注意最新消息！"
    >
      <template #bottom>
        <div class="col-12">
          <a href="https://forms.gle/RtDKXFJdBFpBUjfM8">
            <button
              class="btn most-link-button"
              v-text="'點此進入上傳檔案表單'"
            />
          </a>
        </div>
      </template>
    </most-info>
  </div>
</template>

<script>
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

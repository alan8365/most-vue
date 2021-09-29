<template>
  <div>
    <most-info
      title="最新資訊"
      :update-time="new Date('2021-09-30')"
      content-text="注意事項：
1.請將所有檔案請打包成壓縮檔上傳(可接受的格式有*.zip、*.rar、*.7z)。
<span class='most-hightlight-blue'>口頭發表</span>：請上傳 (1)摘要、(2)10頁內精簡報告、(3)簡報PPT
<span class='most-hightlight-blue'>海報發表</span>：請上傳 摘要
檔名命名請以<span class='most-hightlight-red'>各主持人場次之議程編號為命名(以公文內容公布為準)</span>。
例如：
口頭報告者(如：A01)，所繳交之壓縮檔摘要命名為：A01.zip、A01.rar或A01.7z。
海報發表者(如：P01)，所繳交之壓縮檔則命名為P01.zip、P01.rar或P01.7z。
產學型計畫發表者(如：I01)，所繳交之壓縮檔則命名為I01.zip、I01.rar或I01.7z。
同檔名檔案可重複覆蓋(系統會記錄版號)，<span class='most-hightlight-red'>請注意10/20(二)前務必上傳最終版本。</span>
檔案大小上限為100MB。

※報告格式無硬性規定，建議以科技部成果報告格式撰寫。"
    />

    <most-info
      title="成果發表會議注意事項"
      :update-time="new Date('2021-09-30')"
      content-text="「104年度應用科學教育學門成果發表暨研習會」官方網站於09月14日正式啟用，報名日期自即日起至10月20日(星期二)止；開放報告上傳日期請注意最新消息！"
    >
      <template #bottom>
        <div class="col-12">
          <router-link to="/sign">
            <button
              class="btn most-link-button"
              v-text="'點此進入線上報名頁面'"
            />
          </router-link>
        </div>
      </template>
    </most-info>
  </div>
</template>

<script>
import './news.css';
import {reactive, computed} from 'vue';

import MostInfo from './Info';

export default {
  name: 'MostNews',

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
      classes: computed(() => ({
        'most-tab': true,
        'most-tab--selected': props.selected,
        'most-tab--normal': !props.selected,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      },
      backToTop() {
        window.scrollTo(0, 0);
      },
    };
  },
};
</script>

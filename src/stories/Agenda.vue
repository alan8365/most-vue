<template>
  <most-main>
    <most-info
      title="110年度科技部科教發展及國際合作司 應科學學門成果發表會 會議議程表"
      :update-time="new Date('2020-10-31')"
      content-text=""
      :title-full="true"
    >
      <template #bottom>
        <div class="col-12">
          <button
            class="btn most-link-button"
            v-text="'點此下載詳細議程表'"
          />
        </div>

        <div class="container most-agenda">
          <div class="row most-agenda-title">
            <div
              class="col-2 "
              :class="verticelCenter"
            >
              11/19
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              第一天 、11月19日(星期五)
            </div>
          </div>

          <div class="row most-agenda-header">
            <div
              class="col-4"
              :class="verticelCenter"
            >
              活動時間
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              活動議程
            </div>
          </div>

          <div class="row most-agenda-row">
            <div
              class="col-4"
              :class="verticelCenter"
            >
              10:00~10:10
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              報到 (中商大樓二樓)
            </div>
          </div>

          <div class="row most-agenda-row">
            <div
              class="col-4"
              :class="verticelCenter"
            >
              09:30~10:00
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              <div class="most-agenda-row-text">
                <p>長官致詞 (中商大樓國際會議廳)</p>
                <p>國立臺中科技大學 謝俊宏校長</p>
                <p>科教發展及國際合作司 周倩司長</p>
              </div>
            </div>
          </div>

          <div class="row most-agenda-row">
            <div
              class="col-4"
              :class="verticelCenter"
            >
              12:00~13:30
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              用餐會場(中商大樓二樓)
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              午餐
            </div>
          </div>
        </div>
      </template>
    </most-info>
  </most-main>
</template>

<script>
import './agenda.css';
import {reactive, computed} from 'vue';

import MostInfo from './Info';
import MostMain from './Main';

export default {
  name: 'MostAgenda',

  components: {
    MostMain,
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
      verticelCenter: computed(() => ({
        'd-flex flex-column align-items-center justify-content-center': true,
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

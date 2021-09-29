<template>
  <div>
    <most-info
      title="109年度 科技部科教發展及國際合作司 應科學學門成果發表會 會議議程表"
      short-title="109年度 <br> 應用科學教育學門 <br> 成果發表會 會議議程表"
      :update-time="new Date('2020-10-31')"
      content-text=""
      :title-full="true"
    >
      <template #bottom>
        <div class="container most-agenda">
          <div class="row most-agenda-title">
            <div class="row">
              <div
                class="col-5 col-md-4 col-lg-2 most-agenda-date"
                :class="verticelCenter"
              >
                11/19
              </div>
            </div>

            <div
              class="col-8 mt-3 d-flex flex-column align-items-start justify-content-center most-agenda-longdate"
            >
              第一天 、11月19日(星期五)
            </div>

            <div class="col d-flex flex-column align-items-start justify-content-center most-agenda-download">
              <button
                class="btn most-link-button "
                v-text="'點此下載詳細議程表'"
              />
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
            <div
              class="col"
              :class="verticelCenter"
            >
              會議連結
            </div>
          </div>

          <div class="row most-agenda-row">
            <div
              class="col-4"
              :class="verticelCenter"
            >
              09:00~10:00
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              報到 (中商大樓二樓)
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              <a href="asd">
                會議室(7203)
              </a>
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
              長官致詞 (中商大樓國際會議廳) <br>
              國立臺中科技大學 謝俊宏校長 <br>
              科教發展及國際合作司 周倩司長
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              <a href="asd">
                會議室(7203)
              </a>
            </div>
          </div>


          <div class="row most-agenda-row">
            <div
              class="col-4"
              :class="verticelCenter"
            >
              10:10~11:10
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              專題演講 (中商大樓國際會議廳) <br>
              講者：交通大學教研所 佘曉清講座教授
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              <a href="asd">
                會議室(7203)
              </a>
            </div>
          </div>

          <div class="row most-agenda-row">
            <div
              class="col-4"
              :class="verticelCenter"
            >
              11:10~11:30
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              應用科學教育學門年度工作報告 <br>
              (中商大樓國際會議廳)
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              <a href="asd">
                會議室(7203)
              </a>
            </div>
          </div>

          <div class="row most-agenda-row">
            <div
              class="col-4"
              :class="verticelCenter"
            >
              11:30~12:00
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              應用科學教育學門業務座談 <br>
              (中商大樓國際會議廳) <br>
              周司長倩、黃召集人悅民 <br>
              陳副研究員淑美
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              <a href="asd">
                會議室(7203)
              </a>
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
              <div class="most-agenda-row-text">
                用餐會場(中商大樓二樓)
              </div>
            </div>
          </div>

          <div class="row most-agenda-row">
            <div
              class="col-4"
              :class="verticelCenter"
            >
              13:30~15:30
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              複審委員會議
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              <a href="asd">
                會議室(7203)
              </a>
            </div>
          </div>

          <div class="row most-agenda-row">
            <div
              class="col-4"
              :class="verticelCenter"
            >
              15:30~16:00
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              報到
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              <a href="asd">
                會議室一(7204)
              </a>
            </div>
          </div>

          <div class="row most-agenda-row">
            <div
              class="col-4"
              :class="verticelCenter"
            >
              15:30~16:00
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              報到
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              <a href="asd">
                會議室二(7208)
              </a>
            </div>
          </div>

          <div class="row most-agenda-row">
            <div
              class="col-4"
              :class="verticelCenter"
            >
              15:30~16:00
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              報到
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              <a href="asd">
                會議室三(7208)
              </a>
            </div>
          </div>

          <div class="row most-agenda-row">
            <div
              class="col-4"
              :class="verticelCenter"
            >
              18:00~20:30
            </div>
            <div
              class="col"
              :class="verticelCenter"
            >
              <div class="most-agenda-row-text">
                晚宴(自助餐) <br>
                (學術交流 SIG 研討/複審委員會議)
              </div>
            </div>
          </div>
        </div>
      </template>
    </most-info>
  </div>
</template>

<script>
import './agenda.css';
import {reactive, computed} from 'vue';

import MostInfo from './Info';

export default {
  name: 'MostAgenda',

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

<template>
  <div>
    <most-info
      title="109年度 科技部科教發展及國際合作司 應科學學門成果發表會 會議議程表"
      short-title="109年度 <br> 應用科學教育學門 <br> 成果發表會 會議議程表"
      :update-time="new Date('2020-09-30')"
      content-text=""
      :title-full="true"
    >
      <template #bottom>
        <div class="container most-agenda">
          <div class="row">
            <div class="col-4 d-flex flex-column align-items-start justify-content-center most-agenda-download">
              <!-- <a
                :href="pdfLink"
                target="_blank"
                style="width: 100%"
              > -->
              <button
                disabled
                class="btn most-link-button"
                v-text="'點此下載詳細議程表'"
              />
              <!-- </a> -->
            </div>
          </div>
          <div class="row most-agenda-title mt-5">
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

          <most-agenda-row
            v-for="row in firstDayRows"
            :key="row.id"
            v-bind="row"
          />
        </div>

        <div class="container most-agenda mt-5">
          <div class="row most-agenda-title">
            <div class="row">
              <div
                class="col-5 col-md-4 col-lg-2 most-agenda-date"
                :class="verticelCenter"
              >
                11/20
              </div>
            </div>

            <div
              class="col-8 mt-3 d-flex flex-column align-items-start justify-content-center most-agenda-longdate"
            >
              第二天 、11月20日(星期六)
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

          <most-agenda-row
            v-for="row in secondDayRows"
            :key="row.id"
            v-bind="row"
          />
        </div>
      </template>
    </most-info>
  </div>
</template>

<script>
import './agenda.css';
import {reactive, computed} from 'vue';

import MostInfo from './Info';
import MostAgendaRow from './AgendaRow';

export default {
  name: 'MostAgenda',

  components: {
    MostInfo,
    MostAgendaRow,
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

    const reportTimeList = [
      '10:30-12:00',
      '14:00-15:15',
      '15:30-17:00',
      '9:00-10:15',
      '10:25-11:25',
    ];

    const meetingRoom = {
      'A': {label: '會議室A', link: 'a'},
      'B': {label: '會議室B', link: 'a'},
      'C': {label: '會議室C', link: 'a'},
      'D': {label: '會議室D', link: 'a'},
    };

    const otherLink = {
      'sign': {label: '簽到表單連結', link: 'a'},
      'main': {label: '大會議室', link: 'a'},
    };

    const endMeetingNumbers = {
      'A': {
        4: 4,
        5: 4,
      },
      'B': {
        3: 4,
        5: 3,
      },
      'C': {
        5: 4,
      },
      'D': {
        4: 4,
        5: 3,
      },
    };

    const reportInfo = [];

    let count = 0;
    for (const time of reportTimeList) {
      const temp = {
        time: time,
        data: [],
      };
      count++;

      for (const [key, value] of Object.entries(meetingRoom)) {
        const endNumber = endMeetingNumbers[key][count] || 5;

        temp.data.push(
            {
              label: `分組報告${key}場次 ${key}${count}1~${count}${endNumber}`,
              meetLabel: value.label,
              meetLink: value.link,
            },
        );
      }

      reportInfo.push(temp);
    }

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
      // pdfLink: require('../assets/分組議程時間表_V2.pdf'),
      pdfLink: '#',
      firstDayRows: [
        {
          time: '10:30',
          data:
           [
             {
               label: '線上簽到',
               meetLabel: 'bububu',
               meetLink: 'aaa',
             },
             {
               label: '線上簽到',
               meetLabel: 'bububu',
               meetLink: 'aaa',
             },
           ],
        },
        {
          label: '線上簽到',
          time: '10:15-10:30',
          meetLabel: otherLink['sign'].label,
          meetLink: otherLink['sign'].link,
        },
        {
          label: '開幕/工作報告',
          time: '10:00-10:30',
          meetLabel: otherLink['main'].label,
          meetLink: otherLink['main'].link,
        },
        reportInfo[0],
        {
          label: '中午休息',
          time: '12:00-14:00',
        },
        reportInfo[1],
        {
          label: '中場休息',
          time: '15:15-15:30',
        },
        reportInfo[2],
      ],
      secondDayRows: [
        {
          label: '線上簽到',
          time: '8:45-9:00',
          meetLabel: otherLink['sign'].label,
          meetLink: otherLink['sign'].link,
        },
        reportInfo[3],
        {
          label: '中場休息',
          time: '10:15-10:25',
        },
        reportInfo[4],
        {
          label: '應用科學教育學門綜合座談',
          time: '11:30-12:00',
          meetLabel: otherLink['main'].label,
          meetLink: otherLink['main'].link,
        },
      ],
    };
  },
};
</script>

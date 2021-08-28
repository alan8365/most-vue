<template>
  <most-main>
    <most-info
      title="行政事務"
      content-text="徐芳玉
國立臺中科技大學資訊與流通學院祕書
•聯絡電話：04-22196303
•E-Mail：jade@nutc.edu.tw
陳淑美
科技部 科教發展及國際合作司應用科學教育學門承辦人
•聯絡電話：02-27378013
•E-Mail：smchen@most.gov.tw
"
    />
    <most-info
      title="承辦負責人"
      content-text="<h4>黃天麒</h4>
<p>國立臺中科技大學資訊管理系副教授兼研發處學術發展組組長</p>
<ul>
<li>聯絡電話：04-22196626</li>
<li>聯絡電話：04-22195412</li>
<li>E-Mail：tchuang@nutc.edu.tw</li>
</ul>
"
    />
  </most-main>
</template>

<script>
import {reactive, computed} from 'vue';

import MostInfo from './Info';
import MostMain from './Main';

export default {
  name: 'MostContact',

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

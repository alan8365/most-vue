<template>
  <div>
    <most-info
      title="活動承辦聯絡人"
      content-text="
      <h4>黃天麒</h4>
      <p>國立臺中科技大學資訊管理系教授兼研發處學術發展組組長</p>
      <ul>
        <li>E-Mail：tchuang@nutc.edu.tw</li>
      </ul>
      <hr>
      <h4>莫筑涵</h4>
      <p>國立臺中科技大學特色躍升計畫專任助理</p>
      <ul>
        <li>聯絡電話：04-22195615</li>
        <li>E-Mail：pj0071@gm.nutc.edu.tw</li>
      </ul>"
    />
  </div>
</template>

<script>
import {reactive} from 'vue';

import MostInfo from './Info';

export default {
  name: 'MostContact',

  metaInfo: {
    title: '聯絡我們',
  },

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

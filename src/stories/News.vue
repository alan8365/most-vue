<template>
  <div>
    <most-info
      title="最新消息"
      :update-time="new Date('2021-09-30')"
    />

    <most-info
      title="成果發表會議注意事項"
      :update-time="new Date('2021-09-30')"
      content-text="「104年度應用科學教育學門成果發表暨研習會」官方網站於09月14日正式啟用，報名日期自即日起至10月20日(星期二)止；開放報告上傳日期請注意最新消息！"
    />
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

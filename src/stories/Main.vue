<template>
  <div class="most-bg-panel">
    <footer class="row">
      <div class="most-credit col-6">
        <p>網站建置：國立臺中科技大學 資訊管理系</p>
        <p>網站製作：路西</p>
      </div>

      <div class="col-4" />

      <div class="col-2">
        <most-tab
          label="back to top"
          icon-name="chevron-up"
          style="border-radius: 10px"
        />
      </div>
    </footer>
  </div>
</template>

<script>
import './main.css';
import {reactive, computed} from 'vue';

import MostTab from './Tab';

export default {
  name: 'MostMain',

  components: {
    MostTab,
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
    };
  },
};
</script>

<template>
  <div class="most-bg-panel">
    <router-view />

    <footer class="row">
      <div class="most-credit col-lg-6 col-sm-8 col-xs-8">
        <p>網站建置：國立臺中科技大學 資訊管理系</p>
        <p>網站製作：路西｜Wonderful77</p>
      </div>

      <div class="col-xl-2 col-lg-4 offset-xl-4 offset-lg-2 col-sm-4 mt-3 mt-sm-0">
        <most-tab
          label="Back to Top"
          icon-name="chevron-up"
          style="border-radius: 10px;font-size: 16px"
          @click="backToTop()"
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
      backToTop() {
        window.scrollTo(0, 0);
      },
    };
  },
};
</script>

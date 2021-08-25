<template>
  <div class="container">
    <most-header />

    <div class="most-bg-panel">
      <slot />

      <footer class="row">
        <div class="most-credit col-lg-6 col-sm-8 col-xs-8">
          <p>網站建置：國立臺中科技大學 資訊管理系</p>
          <p>網站製作：路西</p>
        </div>

        <div class="col-lg-2 offset-lg-4 col-sm-4">
          <most-tab
            label="back to top"
            icon-name="chevron-up"
            style="border-radius: 10px;font-size: 16px"
            @click="backToTop()"
          />
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import './main.css';
import {reactive, computed} from 'vue';

import MostTab from './Tab';
import MostHeader from './Header';

export default {
  name: 'MostMain',

  components: {
    MostHeader,
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

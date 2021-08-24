<template>
  <header>
    <div class="most-banner">
      <div>
        <img
          src="../assets/most-banner.png"
          alt=""
        >
      </div>
    </div>

    <div class="most-tab-list">
      <div class="row gx-3">
        <div
          v-for="(tab, index) in tabs"
          :key="tab.label"
          class="col-2"
        >
          <most-tab
            :label="tab.label"
            :selected="index == currentIndex"
            v-bind="tab"
            @click="onChangePage(index)"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import './header.css';
import 'bootstrap/dist/css/bootstrap.css';

import MostTab from './Tab';

export default {
  name: 'MostHeader',

  components: {MostTab},

  props: {
    // currentIndex: {
    //   type: Number,
    //   default: 0,
    // },
  },

  emits: ['click', 'changePage'],

  data() {
    return {
      tabs: [
        {label: '最新消息'},
        {label: '會議流程'},
        {label: '會議資訊'},
        {label: '線上報名'},
        {label: '上傳資料'},
        {label: '聯絡我們'},
      ],
      currentIndex: 0,
    };
  },

  methods: {
    onChangePage(pageNumber, event) {
      // props.currentIndex = pageNumber;
      this.currentIndex = pageNumber;
      this.tabs.forEach((tab, index) => {
        tab.selected = pageNumber === index;
      });
      console.log(this.currentIndex);
    },
  },
};
</script>

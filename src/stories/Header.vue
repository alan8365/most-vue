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
          <router-link :to="tab.link || '/'">
            <most-tab
              :label="tab.label"
              :selected="index == currentIndex"
              v-bind="tab"
              @click="onChangePage(index)"
            />
          </router-link>
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
        {label: '最新消息', link: '/'},
        {label: '會議流程', link: '/agenda'},
        {label: '會議資訊', link: '/meet-info'},
        {label: '線上報名', link: '/sign'},
        {label: '上傳資料', link: '/upload'},
        {label: '聯絡我們', link: '/contact'},
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
    },
  },
};
</script>

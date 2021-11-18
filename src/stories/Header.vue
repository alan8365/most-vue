<template>
  <header>
    <div class="most-banner">
      <div>
        <img
          src="../assets/most-banner.png"
          alt=""
          class="d-none d-sm-block"
        >
        <img
          src="../assets/mobile-banner.png"
          alt=""
          class="d-sm-none d-xs-block"
        >
      </div>
    </div>

    <div class="most-navbar d-sm-none d-xs-block">
      <transition name="slide">
        <div
          v-if="navbarShow"
          class="most-navbar-collapse"
        >
          <div class="most-navbar-cancel-icon d-flex flex-row-reverse">
            <button
              class="btn"
              @click="navbarHide()"
            >
              <font-awesome-icon
                icon="times"
              />
            </button>
          </div>
          <div
            v-for="tab in tabs"
            :key="tab.label"
            class="most-navbar-link"
          >
            <router-link
              :to="tab.link || '/'"
              class="most-non-under"
              @click="navbarHide()"
            >
              <div>
                <font-awesome-icon
                  icon="caret-right"
                />
                {{ tab.label }}
              </div>
            </router-link>
          </div>
        </div>
      </transition>

      <nav class="navbar navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          @click="navbarShow = true"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </nav>
    </div>

    <div class="most-tab-list d-none d-sm-block">
      <div class="row gx-3">
        <div
          v-for="(tab, index) in tabs"
          :key="tab.label"
          class="col-sm-4 mb-sm-3 col-md-4 col-lg"
        >
          <router-link
            :to="tab.link || '/'"
          >
            <most-tab
              :selected="tab.link == currentPath()"
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
    currentIndex: {
      type: Number,
      default: 0,
    },
  },

  emits: ['click', 'changePage'],

  data() {
    return {
      tabs: [
        {label: '最新消息', link: '/'},
        {label: '會議議程', link: '/agenda'},
        {label: '會議連結', link: '/meet-info'},
        // {label: '上傳資料', link: '/upload'},
        {label: '壁報資料', link: '/wallpaper'},
        {label: '聯絡我們', link: '/contact'},
      ],
      navbarShow: false,
      // currentIndex: 0,
    };
  },

  methods: {
    onChangePage(pageNumber, event) {
      // props.currentIndex = pageNumber;
      // this.props.currentIndex = pageNumber;
      this.tabs.forEach((tab, index) => {
        tab.selected = pageNumber === index;
      });
    },
    currentPath() {
      return this.$route.path;
    },
    navbarHide() {
      this.navbarShow = false;
    },
  },
};
</script>

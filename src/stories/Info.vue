<template>
  <div class="most-info-bg">
    <div
      :class="titleLengthCalss"
      class="col-xs-12"
    >
      <div
        v-if="title"
        class="most-info-title"
      >
        <div class="most-info-title-dark">
          <!-- TODO display normal when no update time -->
          <div
            class="d-xl-flex justify-content-between d-none"
            style="min-height: 62px"
          >
            <div class="d-flex align-items-center most-info-title-text">
              {{ title }}
            </div>
            <div class="d-flex align-items-center most-info-time">
              <span v-if="updateTime">
                更新時間：{{ getDate() }}
              </span>
            </div>
          </div>

          <div
            class="d-xl-none d-block p-1"
            style="height:100%"
          >
            <div
              class="most-info-title-text"
              v-html="getShortTitle()"
            />
            <div
              v-if="updateTime"
              class="most-info-time"
            >
              <span v-if="updateTime">
                更新時間：{{ getDate() }}
              </span>
            </div>
          </div>
        </div>

        <div class="most-info-title-white" />
      </div>
    </div>

    <div
      v-if="contentText"
      class="most-info-content"
    >
      <!-- eslint-disable vue/no-v-html -->
      <p
        v-for="text in getContentTexts()"
        :key="text.id"
        v-html="text"
      />
    </div>

    <div
      class="most-info-bottom"
    >
      <slot name="bottom" />
    </div>
  </div>
</template>

<script>
import './info.css';
import {reactive, computed} from 'vue';

export default {
  name: 'MostInfo',

  props: {
    title: {
      type: String,
      default: '',
    },
    shortTitle: {
      type: String,
      default: '',
    },
    titleFull: {
      type: Boolean,
      default: false,
    },
    updateTime: {
      type: Date,
      default: undefined,
    },
    contentText: {
      type: String,
      default: '',
    },
  },

  emits: ['click'],

  setup(props, {emit}) {
    props = reactive(props);
    return {
      titleLengthCalss: computed(() => ({
        'col-md-6': !props.titleFull,
        'col-12': props.titleFull,
      })),
      onClick() {
        emit('click');
      },
      getShortTitle() {
        return props.shortTitle ? props.shortTitle : props.title;
      },
      getDate() {
        const date = props.updateTime;

        if (date) {
          const formatedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
          return formatedDate;
        } else {
          return '';
        }
      },
      getContentTexts() {
        const contentTexts = props.contentText.split('\n');
        for (let index = 0; index < contentTexts.length; index++) {
          contentTexts[index] = contentTexts[index].trim();
        }
        return contentTexts;
      },
      urlify(text) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function(url) {
          return '<a href="' + url + '">' + url + '</a>';
        });
      },
    };
  },
};
</script>

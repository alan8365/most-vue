<template>
  <div class="most-info-bg">
    <div :class="titleLengthCalss">
      <div
        v-if="title"
        class="most-info-title"
      >
        <div>
          <div>{{ title }}</div>
          <!-- TODO RWD updated time -->
          <div>
            <span v-if="updateTime">
              更新時間：{{ getDate() }}
            </span>
          </div>
        </div>

        <div />
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
        v-html="urlify(text)"
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
    console.log(props);
    return {
      titleLengthCalss: computed(() => ({
        'col-6': !props.titleFull,
        'col-12': props.titleFull,
      })),
      onClick() {
        emit('click');
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

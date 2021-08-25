<template>
  <div class="most-info-bg">
    <div :class="titleLengthCalss">
      <div class="most-info-title">
        <div>
          <div>{{ title }}</div>
          <!-- TODO RWD updated time -->
          <div>更新時間：{{ getDate() }}</div>
        </div>

        <div />
      </div>
    </div>

    <div class="most-info-content">
      <p
        v-for="text in getContentTexts()"
        :key="text.id"
        v-text="text"
      />
    </div>

    <div
      ref="asd"
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
      required: true,
    },
    titleFull: {
      type: Boolean,
      default: false,
    },
    updateTime: {
      type: Date,
      required: true,
    },
    contentText: {
      type: String,
      required: true,
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
        const formatedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        return formatedDate;
      },
      getContentTexts() {
        const contentTexts = props.contentText.split('\n');
        for (let index = 0; index < contentTexts.length; index++) {
          contentTexts[index] = contentTexts[index].trim();
        }
        return contentTexts;
      },
    };
  },
};
</script>

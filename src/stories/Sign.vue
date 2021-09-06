<template>
  <div>
    <most-info class="d-none d-md-block">
      <template #bottom>
        <img
          id="most-loading"
          src="../assets/Spinner-1s-200px.svg"
          alt=""
        >
        <div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfeWR1loT7iFKL8Smjk8pdRVOjkTQCa6OOYM8o9m0NBEnAuEg/viewform?embedded=true"
            width="640"
            height="1950"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            onload="document.getElementById('most-loading').style.display='none';"
          />
        </div>
      </template>
    </most-info>

    <most-info
      class="d-block d-md-none"
    >
      <template #bottom>
        <div class="col-12">
          <a href="https://forms.gle/ExcSW8V8Df7aeXs18">
            <button
              class="btn most-link-button"
              style="font-size: 22px"
              v-text="'點此進入線上報名'"
            />
          </a>
        </div>
      </template>
    </most-info>
  </div>
</template>

<script>
import {reactive, computed} from 'vue';

import MostInfo from './Info';

export default {
  name: 'MostSign',

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

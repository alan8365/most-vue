<template>
  <div>
    <most-info>
      <template #bottom>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfeWR1loT7iFKL8Smjk8pdRVOjkTQCa6OOYM8o9m0NBEnAuEg/viewform?embedded=true"
          width="640"
          height="1950"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >Loading…</iframe>
      </template>
    </most-info>
  </div>
</template>

<script>
import {reactive} from 'vue';

import MostInfo from './Info';

export default {
  name: 'MostUpload',

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
      onClick() {
        emit('click');
      },
    };
  },
};
</script>

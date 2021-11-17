<template>
  <div>
    <most-info
      title="*會議室連結"
    >
      <template #bottom>
        <div
          class="container px-0"
          style="margin-bottom: 27px"
        >
          <div class="row gx-5">
            <div
              v-for="meetRoom in meetRooms"
              :key="meetRoom.id"
              class="col-12 col-lg-6 mb-3 mb-lg-0"
            >
              <!-- TODO hide professor before taget day -->
              <most-meet-button
                v-bind="meetRoom"
                class="mb-4"
              />
            </div>
          </div>
        </div>
      </template>
    </most-info>
  </div>
</template>

<script>
import {reactive, computed} from 'vue';

import MostInfo from './Info';
import MostMeetButton from './MeetButton';

export default {
  name: 'MostMeetInfo',

  components: {
    MostInfo,
    MostMeetButton,
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
      verticelCenter: computed(() => ({
        'd-flex flex-column align-items-center justify-content-center': true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      meetRooms: [
        {
          label: '會議室A',
          profssors: '(ＸＸＸ教授、ＸＸＸ教授、ＸＸＸ教授)',
          backgroundColor: '#FFD8D8',
          fontColor: '#F27373',
          href: 'https://meet.google.com/qbc-jzee-cvi',
        },
        {
          label: '會議室B',
          profssors: '(ＸＸＸ教授、ＸＸＸ教授、ＸＸＸ教授)',
          backgroundColor: '#FFF9D1',
          fontColor: '#F4D159',
          href: 'https://meet.google.com/tcn-wcej-uao',
        },
        {
          label: '會議室C',
          profssors: '(ＸＸＸ教授、ＸＸＸ教授、ＸＸＸ教授)',
          backgroundColor: '#d1fff1',
          fontColor: '#67cb8d',
          href: 'https://meet.google.com/hxy-cxwu-hyh',
        },
        {
          label: '會議室D',
          profssors: '(ＸＸＸ教授、ＸＸＸ教授、ＸＸＸ教授)',
          backgroundColor: '#D6F2FF',
          fontColor: '#6795CB',
          href: 'https://meet.google.com/qip-ktfr-faq',
        },
      ],
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

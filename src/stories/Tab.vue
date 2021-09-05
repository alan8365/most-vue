<template>
  <button
    type="button"
    :class="classes"
    :style="style"
    @click="onClick"
  >
    <font-awesome-icon
      v-if="iconName"
      icon="chevron-up"
    />
    {{ label }}
  </button>
</template>

<script>
import './tab.css';
import {reactive, computed} from 'vue';

export default {
  name: 'MostTab',

  props: {
    label: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: '#ffffff',
    },
    iconName: {
      type: String,
      default: '',
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
      // TODO click effect
    };
  },
};
</script>

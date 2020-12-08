<template lang='pug'>
  div
    // div covering whole screen, uses fixed + inset-0 to take up whole screen. Flex will center the modal within whole screen
    transition(name='modal')
      div.overflow-x-hidden.overflow-y-auto.fixed.inset-0.z-50.justify-center.items-center.flex(v-if="isVisible")
        // modal body
        div.flex.flex-col.max-w-5xl.rounded-lg.shadow-lg.bg-white
          // header
          div.p-5.flex.items-start.justify-between
            h3.text-2xl.font-semibold
              slot(name='title')
                p Modal Title
            button.p-1.leading-none(@click="emitCancel")
              div.h-6.w-6.text-xl.font-semibold
                span ×
          // body
          div.p-6
            slot
          // footer
          div.p-6.flex.items-center.justify-end
            button(@click="emitCancel")
              slot(name='cancel-button')
                button.btn-outline Cancel
            button.ml-2(@click="emitConfirm")
              slot(name='confirm-button')
                button.btn Ok
    transition(name='modal')
      div(v-if="isVisible")
        div.opacity-25.fixed.inset-0.z-40.bg-black
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { Prop } from 'vue-property-decorator';

  @Component({})
  export default class Modal extends Vue {
    @Prop() isVisible: boolean;

    emitCancel() {
      this.$emit('cancel');
    }

    emitConfirm() {
      this.$emit('confirm');
    }
  }
</script>

<style scoped>
  .modal-leave-active, .modal-enter-active {
    @apply transition-all;
    @apply duration-200;
  }

  .modal-leave-to, .modal-enter {
    opacity: 0;
  }

  .modal-enter-to, .modal-leave {
    opacity: 1;
  }
</style>

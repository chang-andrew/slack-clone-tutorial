<template lang='pug'>
  div
    // div covering whole screen, uses fixed + inset-0 to take up whole screen. Flex will center the modal within whole screen
    transition(name='modal-body')
      div.overflow-x-hidden.overflow-y-auto.fixed.inset-0.z-50.justify-center.items-center.flex(v-if="isVisible")
        // wrapper div for the modal body, helps size the div
        div.relative.w-auto.my-6.mx-auto.max-w-5xl
          // content
          div.rounded-lg.shadow-lg.relative.flex.flex-col.w-full.bg-white
            // header
            div.flex.items-start.justify-between.p-5
              h3.text-2xl.font-semibold
                slot(name='title')
                  p Modal Title
              button.p-1.ml-auto.float-right.leading-none(@click="emitCancel")
                div.text-black.h-6.w-6.text-2xl.font-semibold
                  span ×
            // body
            div.relative.p-6.flex-auto
              slot
            // footer
            div.flex.items-center.justify-end.p-6
              button(@click="emitCancel")
                slot(name='cancel-button')
                  button.btn-outline Cancel
              button.ml-2(@click="emitConfirm")
                slot(name='confirm-button')
                  button.btn Ok
    transition(name='modal-background')
      div.opacity-25.fixed.inset-0.z-40.bg-black(v-if="isVisible")
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
  .modal-body-leave-active, .modal-body-enter-active, .modal-background-leave-active, .modal-background-enter-active {
    @apply transition-all;
    @apply duration-200;
  }

  .modal-body-leave-to, .modal-background-leave-to, .modal-body-enter, .modal-background-enter {
    opacity: 0;
  }

  .modal-body-enter-to {
    opacity: 1;
  }

  .modal-background-enter-to {
    opacity: .25;
  }
</style>

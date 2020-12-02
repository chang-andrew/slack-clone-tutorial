<template lang='pug'>
  div
    // modal
    transition(name='modal-transition')
      div.overflow-x-hidden.overflow-y-auto.fixed.inset-0.z-50.outline-none.justify-center.items-center.flex(v-if='showModal' class='focus:outline-none')
        div.relative.w-auto.my-6.mx-auto.max-w-3xl
          // content
          div.border-0.rounded-lg.shadow-lg.relative.flex.flex-col.w-full.bg-white.outline-none(class='focus:outline-none')
            // header
            div.flex.items-start.justify-between.p-5
              h3.text-2xl.font-semibold
                slot(name='title')
              button.p-1.ml-auto.bg-transparent.border-0.text-black.opacity-5.float-right.text-3xl.leading-none.font-semibold.outline-none(@click='closeModal()' class='focus:outline-none')
                span.bg-transparent.text-black.opacity-5.h-6.w-6.text-2xl.block.outline-none(class='focus:outline-none')
                  | ×
            // body
            div.relative.p-6.flex-auto
              slot(name='body-content')
            // footer
            div.flex.items-center.justify-end.p-6
              slot(name='cancel-button')
                button.btn-outline(@click="closeModal") Cancel
              slot(name='confirm-button')
      // grey out background
    transition(name='background-transition')
      div.opacity-25.fixed.inset-0.z-40.bg-black(v-if='showModal')
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { Prop } from 'vue-property-decorator';

  @Component({})
  export default class Modal extends Vue {
    @Prop({ default: false }) showModal!: boolean;

    closeModal() {
      this.$emit('update:showModal', false);
    }
  }
</script>

<style scoped>
  .modal-transition-enter-active {
    @apply ease-out;
    @apply duration-200;
  }
  .modal-transition-enter {
    @apply opacity-0;
    @apply translate-y-4;
  }
  .modal-transition-enter-to {
    @apply opacity-100;
    @apply translate-y-0;
  }
  .background-transition-enter-active {
    @apply ease-out;
    @apply duration-200;
  }
  .background-transition-enter {
    @apply opacity-0;
  }
  .modal-transition-enter-to {
    @apply opacity-100;
  }
</style>

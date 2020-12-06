<template lang='pug'>
  div.flex.justify-center
    div
      p Just a testing page
      button.btn(@click="showModal") Show Modal
    Modal(:isVisible="modalVisible"  @cancel="modalCancel")
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import Modal from '@/components/util/Modal.vue';

  @Component({
    components: {
      Modal,
    }
  })
  export default class Test extends Vue {
    modalVisible = false;

    showModal() {
      this.modalVisible = true;
    }

    modalCancel() {
      this.modalVisible = false;
    }
  }
</script>

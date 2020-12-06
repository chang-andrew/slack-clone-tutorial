<template lang='pug'>
  div
    p Just a testing page
    Modal
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
  }
</script>

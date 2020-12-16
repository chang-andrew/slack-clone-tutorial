<template lang='pug'>
  div.flex.justify-center
    div
      h1.text-4xl Just a testing page
      button.btn(@click="modalVisible = true") Open Modal
      Carousel
    Modal(:isVisible="modalVisible" @cancel="modalVisible = false" @confirm="modalVisible = false")
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import Modal from '@/components/util/Modal.vue';
  import Carousel from '@/components/util/Carousel.vue';

  @Component({
    components: {
      Modal,
      Carousel
    }
  })
  export default class Test extends Vue {
    modalVisible = false;
  }
</script>

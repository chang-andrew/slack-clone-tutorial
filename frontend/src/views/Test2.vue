<template lang='pug'>
  div.flex.justify-center
    div
      h1.text-4xl Just a testing page
      button.btn(@click="modalVisible = true") Open Modal
    Modal(:isVisible="modalVisible" @cancel="modalVisible = false" @confirm="modalVisible = false")
      template(v-slot:title)
        p Modal Title Example
      template(v-slot:body)
        p Some text for the modal body, this will show up in the middle of the modal.
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import Modal from '@/components/util/Modal.vue';

  @Component({
    components: {
      Modal
    }
  })
  export default class Test extends Vue {
    modalVisible = false;
  }
</script>

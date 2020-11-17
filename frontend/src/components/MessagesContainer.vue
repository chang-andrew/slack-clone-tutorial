<template lang='pug'>
  div.pt-4.mb-1.flex-1.overflow-y-scroll
    SingleMessage(v-for="i in 50" :key="i")
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import SingleMessage from '@/components/SingleMessage.vue';

  @Component({
    components: {
      SingleMessage
    }
  })
  export default class MessagesContainer extends Vue {
  }
</script>

<template lang='pug'>
  div.pt-3.mb-1.flex-1.overflow-y-scroll
    SingleMessage(v-for="message in allMessages" :key="message.id" :message="message")
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import SingleMessage from '@/components/SingleMessage.vue';
  import { Prop } from 'vue-property-decorator';

  @Component({
    components: {
      SingleMessage
    }
  })
  export default class MessagesContainer extends Vue {
    @Prop({ required: true }) allMessages!: any[];
  }
</script>

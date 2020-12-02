<template lang='pug'>
  div.pt-3.mb-1.flex-1.overflow-y-scroll(ref="messageScrollContainer")
    transition-group(name='message-list' @after-enter="afterEnter")
      SingleMessage(v-for="message in allMessages" :key="message.id" :message="message")
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import SingleMessage from '@/components/SingleMessage.vue';
  import { Prop, Watch } from 'vue-property-decorator';

  @Component({
    components: {
      SingleMessage
    }
  })
  export default class MessagesContainer extends Vue {
    @Prop({ required: true }) allMessages!: any[];

    afterEnter() {
      const el = this.$refs.messageScrollContainer as HTMLElement;
      el.scrollTop = el.scrollHeight;
    }
  }
</script>

<style scoped>
  .message-list-leave-active {
    @apply transition-all;
    @apply duration-200;
  }
  .message-list-leave-to {
    opacity: 0;
  }
</style>

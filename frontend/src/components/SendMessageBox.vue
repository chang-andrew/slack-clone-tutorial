<template lang='pug'>
  div.mb-2.px-4.flex-none
    div.flex.rounded-lg.border-2.border-gray-500.overflow-hidden
      input.w-full.px-3.pb-4.pt-2(@keyup.enter="sendMessage" type="text" v-model="messageText" placeholder="Message Channel Name")
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';

  @Component({})
  export default class SendMessageBox extends Vue {
    messageText = '';

    sendMessage() {
      if (this.messageText) {
        this.$bus.$emit('message:send', this.messageText);
        this.messageText = '';
      }
    }
  }
</script>

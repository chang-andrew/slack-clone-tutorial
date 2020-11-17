<template lang='pug'>
  div.border-b.px-6.py-2
    div.flex.flex-col
      h3.mb-1.font-bold Channel Name!!
      div.text-gray-700.text-sm Conversation description: this is a channel
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';

  @Component({})
  export default class ConversationHeader extends Vue {
  }
</script>

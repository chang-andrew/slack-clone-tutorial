<template lang="pug">
  div.h-screen.w-full.flex.overflow-hidden.antialised
    ChatSidebar
    div.flex.flex-1.flex-col.bg-white.overflow-hidden
      ConversationHeader
      MessagesContainer
      SendMessageBox
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ChatSidebar from '@/components/ChatSidebar.vue';
  import ConversationHeader from '@/components/ConversationHeader.vue';
  import MessagesContainer from '@/components/MessagesContainer.vue';
  import SendMessageBox from '@/components/SendMessageBox.vue';

  @Component({
    components: {
      ChatSidebar,
      ConversationHeader,
      MessagesContainer,
      SendMessageBox
    },
  })
  export default class Chat extends Vue {
  }
</script>

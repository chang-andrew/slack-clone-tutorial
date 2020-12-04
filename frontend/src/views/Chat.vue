<template lang="pug">
  div.h-screen.w-full.flex.overflow-hidden.antialised
    ChatSidebar(:conversations="allConversations")
    div.flex.flex-1.flex-col.bg-white.overflow-hidden
      ConversationHeader(:conversation="currentConversation")
      MessagesContainer(:allMessages="currentMessages")
      SendMessageBox
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ChatSidebar from '@/components/ChatSidebar.vue';
  import ConversationHeader from '@/components/ConversationHeader.vue';
  import MessagesContainer from '@/components/MessagesContainer.vue';
  import SendMessageBox from '@/components/SendMessageBox.vue';
  import assign from 'lodash/assign';

  @Component({
    components: {
      ChatSidebar,
      ConversationHeader,
      MessagesContainer,
      SendMessageBox
    },
  })
  export default class Chat extends Vue {
    allConversations: any[] = [
      {
        id: '0',
        name: 'general',
        description: 'Default general channel',
        is_channel: true
      },
      {
        id: '1',
        name: 'music',
        description: 'A channel to talk about music',
        is_channel: true
      },
      {
        id: '2',
        name: 'product',
        description: 'All chat relating to product design',
        is_channel: true
      },
      {
        id: '3',
        name: 'Andrew, Bob',
        description: '',
        is_channel: false
      },
      {
        id: '4',
        name: 'Andrew, Bob, Janet',
        description: '',
        is_channel: false
      },
      {
        id: '5',
        name: 'Bob',
        description: '',
        is_channel: false
      },
      {
        id: '6',
        name: 'Janet',
        description: '',
        is_channel: false
      }
    ];
    currentConversation = null;
    currentMessages: any[] = [];
    presetMessages: any[] = [
      {
        id: '0',
        sender: {
          first_name: 'Another',
          last_name: 'User',
          profile_src: 'https://i.picsum.photos/id/638/200/200.jpg?hmac=64UpQ4ouFUNEG9cnXLQ9GxchDShg-mL1rdCrZGfc94U',
        },
        timestamp: new Date().toLocaleString(),
        body: 'This is a preset sample message!'
      },
      {
        id: '1',
        sender: {
          first_name: 'My',
          last_name: 'Name',
          profile_src: 'https://i.picsum.photos/id/879/200/200.jpg?hmac=_4fWz44KoPcfzc5VRuEhms_-fXjdx1VsijYO3xVD9b0'
        },
        timestamp: new Date().toLocaleString(),
        body: 'I appear in every conversation...'
      },
    ];
    messageIdCount = 2;

    created() {
      this.currentConversation = this.allConversations[0];
      this.currentMessages = [...this.presetMessages];

      this.$bus.$on('conversation:selected', (convId: string) => this.setConversationByid(convId));
      this.$bus.$on('message:send', (text: string) => this.sendMessage(text));
      this.$bus.$on('message:edit', (messageData: any) => this.editMessage(messageData));
      this.$bus.$on('message:delete', (messageId: string) => this.deleteMessage(messageId));
    }

    sendMessage(text: string) {
      this.currentMessages.push({
        id: `${this.messageIdCount++}`,
        sender: {
          first_name: 'Andrew',
          last_name: 'Chang',
          profile_src: 'https://i.picsum.photos/id/552/200/200.jpg?hmac=99yztwFcmd6Y23V7ViL1mArbh9wwdxbIjS9bhO8xyY8'
        },
        timestamp: new Date().toLocaleString(),
        body: text
      });
    }

    editMessage(messageData: any) {
      const messageObj = this.currentMessages.find((m) => m.id === messageData.id);
      assign(messageObj, messageData);
    }

    deleteMessage(messageId: string) {
      this.currentMessages = this.currentMessages.filter((m) => m.id !== messageId);
    }

    setConversationByid(convId: string) {
      this.currentConversation = this.allConversations.find((c) => c.id === convId);
      this.currentMessages = [...this.presetMessages];
    }
  }
</script>

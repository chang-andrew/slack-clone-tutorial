<template lang="pug">
  div.h-screen.w-full.flex.overflow-hidden.antialised
    ChatSidebar(:conversations="allConversations")
    div.flex.flex-1.flex-col.bg-white.overflow-hidden
      ConversationHeader(:conversation="currentConversation")
      MessagesContainer(:allMessages="currentMessages")
      SendMessageBox
    DeleteMessageModal(:showModal.sync="showDeleteMessageModal" @modal-confirm="deleteMessage")
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ChatSidebar from '@/components/ChatSidebar.vue';
  import ConversationHeader from '@/components/ConversationHeader.vue';
  import MessagesContainer from '@/components/MessagesContainer.vue';
  import SendMessageBox from '@/components/SendMessageBox.vue';
  import assign from 'lodash/assign';
  import DeleteMessageModal from '@/components/DeleteMessageModal.vue';
  import Modal from '../components/util/Modal.vue';

  @Component({
    components: {
      ChatSidebar,
      ConversationHeader,
      MessagesContainer,
      SendMessageBox,
      DeleteMessageModal
    },
  })
  export default class Chat extends Vue {
    currentConversation = null;
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
    currentMessages: any[] = [];
    presetMessages: any[] = [
      {
        id: 0,
        sender: {
          first_name: 'Another',
          last_name: 'User',
          profile_src: 'https://i.picsum.photos/id/638/200/200.jpg?hmac=64UpQ4ouFUNEG9cnXLQ9GxchDShg-mL1rdCrZGfc94U'
        },
        timestamp: Date.now(),
        body: 'This is a preset sample message!'
      },
      {
        id: 1,
        sender: {
          first_name: 'My',
          last_name: 'Name',
          profile_src: 'https://i.picsum.photos/id/879/200/200.jpg?hmac=_4fWz44KoPcfzc5VRuEhms_-fXjdx1VsijYO3xVD9b0'
        },
        timestamp: Date.now(),
        body: 'I appear in every conversation...'
      },
    ];
    messageIdCount = 2;
    messageToDelete: any = null;
    showDeleteMessageModal = false;

    created() {
      // get all conversations
      this.setConversationById(this.allConversations[0].id);
      this.$bus.$on('message:send', (text: string) => this.sendMessage(text));
      this.$bus.$on('message:delete', (message: any) => this.confirmDeleteMessage(message));
      this.$bus.$on('message:edit', (message: any) => this.editMessage(message));
      this.$bus.$on('conversation:selected', (convId: string) => this.setConversationById(convId));
    }

    sendMessage(text: string) {
      this.currentMessages.push({
        id: `${this.messageIdCount++}`,
        sender: this.$store.state.currentUser,
        timestamp: Date.now(),
        body: text
      });
    }

    confirmDeleteMessage(message: any) {
      this.showDeleteMessageModal = true;
      this.messageToDelete = message;
    }

    deleteMessage() {
      this.showDeleteMessageModal = false;
      if (this.messageToDelete) {
        this.currentMessages = this.currentMessages.filter((m) => m.id !== this.messageToDelete.id);
      }
      this.messageToDelete = null;
    }

    editMessage(message: any) {
      const messageObj = this.currentMessages.find((m) => m.id === message.id);
      assign(messageObj, message);
    }

    setConversationById(conversationId: string) {
      this.currentConversation = this.allConversations.find((c) => c.id === conversationId);
      this.currentMessages = [...this.presetMessages];
    }
  }
</script>

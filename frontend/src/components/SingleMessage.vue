<template lang='pug'>
  div.px-4.relative(@mouseover="isHovered = true" @mouseleave="isHovered = false" :class="{'bg-gray-100': isHovered}")
    div.flex.items-start.text-sm.mb-3
      img.w-10.h-10.rounded(:src="senderProfileSrc")
      div.flex-1(v-if="isEditing")
        div.mb-2.px-2.flex-none
          div.flex.rounded-lg.border-2.border-gray-500.overflow-hidden
            input.w-full.px-1.pb-2.pt-1(ref="messageEditInput" @keyup.enter="saveEdit" type="text" v-model="newText")
        div.flex
          button.btn-outline.ml-2(@click="resetEdit") Cancel
          button.btn.ml-2(@click="saveEdit") Save
      div.flex-1.ml-3(v-if="!isEditing")
        div
          span.font-bold {{ senderFullName }}
          span.text-gray-500.text-xs.ml-1 {{ messageTimestamp }}
        span {{ messageBodyText }}
      // action buttons
      SingleMessageActions(v-if="isHovered" :message="message" @edit='startEdit' @delete='deleteMessage')
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { Prop } from 'vue-property-decorator';
  import SingleMessageActions from './SingleMessageActions.vue';

  @Component({
    components: {
      SingleMessageActions
    }
  })
  export default class SingleMessage extends Vue {
    @Prop() message: any;

    isEditing = false;
    newText = '';
    isHovered = false;

    created() {
      this.resetEdit();
    }

    get senderFullName() {
      return `${this.message.sender.first_name} ${this.message.sender.last_name}`;
    }

    get senderProfileSrc() {
      return this.message.sender.profile_src;
    }

    get messageTimestamp() {
      return this.message.timestamp;
    }

    get messageBodyText() {
      return this.message.body;
    }

    resetEdit() {
      this.isEditing = false;
      this.newText = this.message.body;
    }

    startEdit() {
      this.isEditing = true;
      this.$nextTick(() => {
        (this.$refs.messageEditInput as HTMLElement).focus();
      });
    }

    saveEdit() {
      if (this.newText) {
        this.$bus.$emit('message:edit', { id: this.message.id, body: this.newText });
        this.resetEdit();
      }
    }

    deleteMessage() {
      this.$bus.$emit('message:delete', this.message.id);
    }
  }
</script>

<template lang='pug'>
  div.border-b.px-6.py-2
    div.flex.flex-col
      h3.mb-1.font-bold
        span(v-if="conversationIsChannel") # &nbsp
        span {{ conversationName }}
      div.text-gray-700.text-sm {{ conversationDescription }}
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
import { Prop } from 'vue-property-decorator';

  @Component({})
  export default class ConversationHeader extends Vue {
    @Prop() conversation: any;

    get conversationName() {
      return this.conversation.name;
    }

    get conversationDescription() {
      return this.conversation.description;
    }

    get conversationIsChannel() {
      return this.conversation.is_channel;
    }
  }
</script>

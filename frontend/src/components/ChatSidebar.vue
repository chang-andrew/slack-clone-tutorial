<template lang='pug'>
  div.bg-teal-600.flex-none.w-64.h-full
    div.text-white.py-3.px-4
      h1.font-semibold Sample Workspace
    hr.py-2.border-gray-300
    // Channels Section
    div.my-4
      // section header
      div.px-4.mb-2.text-white.flex.items-center.justify-between.cursor-pointer(@click="toggleChannelsDropdown")
        div.flex.items-center.justify-start
          ChevronRightIcon(size='1x' v-if="!showChannels")
          ChevronDownIcon(size='1x' v-if="showChannels")
          div.ml-3.opacity-75 Channels
        div
          PlusCircleIcon(size='1x')
      // section body
      div(v-if="showChannels")
        div.px-4.pb-1.pl-6.text-white.cursor-pointer(v-for="i in 10")
          span.w-2.h-2.opacity-50 #
          span.ml-2.text-white.opacity-50 Channel Name
    // Direct Message Section
    div.my-4
      // section header
      div.px-4.mb-2.text-white.flex.items-center.justify-between.cursor-pointer(@click="toggleDmsDropdown")
        div.flex.items-center.justify-start
          ChevronRightIcon(size='1x' v-if="!showDms")
          ChevronDownIcon(size='1x' v-if="showDms")
          div.ml-3.opacity-75 Direct Messages
        div
          PlusCircleIcon(size='1x')
      // section body
      div(v-if="showDms")
        div.px-4.pb-1.pl-6.text-white.cursor-pointer.flex.items-center(v-for="i in 10")
          span.bg-green-500.rounded-full.block.w-2.h-2
          span.ml-2.text-white.opacity-50 Person Name
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { ChevronRightIcon, ChevronDownIcon, PlusCircleIcon } from 'vue-feather-icons';

  @Component({
    components: {
      ChevronRightIcon,
      ChevronDownIcon,
      PlusCircleIcon,
    }
  })
  export default class ChatSidebar extends Vue {
    showChannels = false;
    showDms = false;

    toggleChannelsDropdown() {
      this.showChannels = !this.showChannels;
    }

    toggleDmsDropdown() {
      this.showDms = !this.showDms;
    }
  }
</script>

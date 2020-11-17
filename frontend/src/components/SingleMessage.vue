<template lang='pug'>
  div.px-4.relative(@mouseover="isHovered = true" @mouseleave="isHovered = false" :class="{'bg-gray-100': isHovered}")
    div.flex.items-start.text-sm.mb-3
      img.w-10.h-10.rounded(src="https://i.picsum.photos/id/142/200/200.jpg?hmac=L8yY8tFPavTj32ZpuPiqsLsfWgDvW1jvoJ0ETDOUMGg")
      div.flex-1.ml-3
        div
          span.font-bold SENDER Name
          span.text-gray-500.text-xs.ml-1 12:50 pm
        span This is a sample dummy message body text!
      // action buttons
      SingleMessageActions(v-if="isHovered")
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import SingleMessageActions from './SingleMessageActions.vue';

  @Component({
    components: {
      SingleMessageActions
    }
  })
  export default class SingleMessage extends Vue {
    isHovered = false;
  }
</script>

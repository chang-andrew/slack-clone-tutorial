<template lang='pug'>
  div.flex.justify-center.mt-10
    div.list-container
      div.item(v-for="(item, i) in allItems")
        div
          input.mr-2(type='checkbox')
          span {{ item }}
        div.action-btn(@click="deleteItem(i)")
          Trash2Icon.action-icon.text-red-500
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { Trash2Icon } from 'vue-feather-icons';

  @Component({
    components: {
      Trash2Icon
    }
  })
  export default class Test extends Vue {
    itemDeleteModalVisible = false;
    allItems = [
      'Grocery shopping',
      'Pick up mail',
      'Pay bills',
      'Finish publication draft'
    ];

    deleteItem(itemIndex: any) {
      this.allItems.splice(itemIndex, 1);
    }
  }
</script>

<style scoped>
  .list-container {
    width: 350px;
    @apply border;
    @apply border-black;
    @apply p-4;
  }

  .item {
    @apply flex;
    @apply items-center;
    @apply justify-between;
    @apply p-2;
  }

  .action-btn {
    @apply h-8;
    @apply w-8;
    @apply rounded-sm;
    @apply flex;
    @apply items-center;
    @apply justify-center;
    @apply cursor-pointer;
  }
  .action-icon {
    @apply h-4;
    @apply w-4;
  }
</style>

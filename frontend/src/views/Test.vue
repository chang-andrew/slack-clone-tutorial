<template lang='pug'>
  div.flex.justify-center.mt-20
    div.list-container
      div.item(v-for="(item, i) in allItems")
        div
          input.mr-2(type='checkbox')
          span {{ item }}
        div.action-btn(@click="confirmDeleteItem(i)")
          Trash2Icon.action-icon.text-red-500
    Modal(:isVisible="deleteItemModalVisible" @cancel="deleteItemModalVisible = false" @confirm="deleteItem(itemToDelete)")
      template(v-slot:title)
        p Confirm Delete
      template(v-slot:body)
        p Are you sure you want to delete this item? This cannot be undone.
      template(v-slot:confirm-button)
        button.btn-danger Delete
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { Trash2Icon } from 'vue-feather-icons';
  import Modal from '@/components/util/Modal.vue';

  @Component({
    components: {
      Trash2Icon,
      Modal
    }
  })
  export default class Test extends Vue {
    deleteItemModalVisible = false;
    itemToDelete = 0;
    allItems = [
      'Grocery shopping',
      'Pick up mail',
      'Pay bills',
      'Finish publication draft'
    ];

    confirmDeleteItem(itemIndex: number) {
      this.deleteItemModalVisible = true;
      this.itemToDelete = itemIndex;
    }

    deleteItem(itemIndex: number) {
      this.allItems.splice(itemIndex, 1);
      this.deleteItemModalVisible = false;
    }
  }
</script>

<style scoped>
  .list-container {
    width: 350px;
    @apply border-2;
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

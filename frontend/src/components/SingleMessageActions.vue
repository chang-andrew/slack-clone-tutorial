<template lang='pug'>
  div.action-placement
    div.action-btn-container
      div.action-btn
        SmileIcon.action-icon
      div.action-btn(@click="startEdit")
        EditIcon.action-icon
      div.action-btn(@click="confirmDelete")
        Trash2Icon.action-icon.text-red-500
    Modal(:isVisible="deleteModalVisible" @cancel="deleteModalVisible = false" @confirm="deleteMessage")
      p Are you sure you want to delete this message? This cannot be undone.
      template(v-slot:confirm-button)
        button.btn-danger Delete
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { SmileIcon, EditIcon, Trash2Icon } from 'vue-feather-icons';
  import { Prop } from 'vue-property-decorator';
  import Modal from '@/components/util/Modal.vue';

  @Component({
    components: {
      SmileIcon,
      EditIcon,
      Trash2Icon,
      Modal,
    }
  })
  export default class SingleMessageActions extends Vue {
    @Prop() message: any;

    deleteModalVisible = false;

    startEdit() {
      this.$bus.$emit('message:startEdit', this.message.id);
    }

    confirmDelete() {
      this.deleteModalVisible = true;
    }

    deleteMessage() {
      this.$bus.$emit('message:delete', this.message.id);
    }
  }
</script>

<style scoped>
  .action-placement {
    @apply absolute;
    @apply bg-white;
    top: -16px;
    right: 27px;
  }

  .action-btn-container {
    @apply flex;
    @apply rounded-lg;
    @apply border;
    @apply border-gray-500;
    padding: 2px;
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

  .action-btn:hover {
    @apply bg-gray-200;
  }

  .action-icon {
    @apply h-4;
    @apply w-4;
  }

</style>

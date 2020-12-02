<template lang='pug'>
  Modal(ref='deleteMessageModal' :showModal="showModal" @update:showModal="$emit('update:showModal', $event)")
    template(v-slot:title) Delete message
    template(v-slot:body-content) Are you sure you want to delete this message? This cannot be undone
    template(v-slot:confirm-button)
      button.btn.ml-2(@click='$emit("modal-confirm")') Delete
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import Modal from '@/components/util/Modal.vue';
  import { Prop } from 'vue-property-decorator';

  @Component({
    components: {
      Modal,
    }
  })
  export default class DeleteMessageModal extends Vue {
    @Prop({ default: false }) showModal!: boolean;
  }
</script>

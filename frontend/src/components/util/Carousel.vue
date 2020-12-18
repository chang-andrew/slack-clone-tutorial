<template lang='pug'>
  div.mt-5
    h1 Carousel Test
    div.flex.justify-between.items-center
      button.btn.m-4.h-8(@click="prevPhoto") <
      div.carousel-body
        img.carousel-img(:src="activePhotoSrc")
      button.btn.m-4.h-8(@click="nextPhoto") >
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { Prop } from 'vue-property-decorator';

  @Component({})
  export default class Carousel extends Vue {
    photos: string[] = [
      'https://i.picsum.photos/id/928/200/200.jpg?hmac=5MQxbf-ANcu87ZaOn5sOEObpZ9PpJfrOImdC7yOkBlg',
      'https://i.picsum.photos/id/460/200/200.jpg?hmac=hL3I5G2p0p6vDGPyV9hergug-KipbUJVxqnnGIEBXg4',
    ]
    activePhotoId = 0;

    get activePhotoSrc() {
      return this.photos[this.activePhotoId];
    }

    nextPhoto() {
      this.activePhotoId = (this.activePhotoId + 1) % this.photos.length;
    }

    prevPhoto() {
      this.activePhotoId -= 1;
      if (this.activePhotoId < 0) {
        this.activePhotoId = this.photos.length - 1;
      }
    }
  }
</script>

<style scoped>
  .carousel-body {
    position:relative;
    height: 200px;
    width: 200px;
    @apply mt-5;
  }
  .carousel-img {
    position:absolute;
    left: 0;
    bottom: 0;
  }
</style>

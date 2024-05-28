<template>
  <div class="live-wrapper"></div>
</template>
<style lang="scss" scoped>
.live-wrapper {
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    width: 100%;
    object-fit: cover;
  }

  img {
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    color: rgb(229, 229, 229);
  }
}
</style>

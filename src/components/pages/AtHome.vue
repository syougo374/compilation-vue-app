<template>
  <CommonHeader header-title="HOME PAGE"></CommonHeader>
  <div class="main-contents">
    <section class="grid grid-cols-2">
      <article class="text-center">
        <h2>記事１</h2>
        <img class="object-contain h-100 w-96 mt-4" src="@/assets/images/81618759_480x522.png" alt="金木くん">
        <p>vue 練習用 金木くんです</p>
      </article>
      <article class="text-center">
        <h2>記事2</h2>
        <img class="object-contain h-100 w-96 mt-4" src="@/assets/images/visual2.jpeg" alt="金木くん">
        <p>vue 集大成 金木くんです</p>
      </article>
    </section>
    <section class="grid grid-cols-2">
      <article class="text-center">
        <h2>記事１</h2>
        <img class="object-contain h-100 w-96 mt-4" src="@/assets/images/81618759_480x522.png" alt="金木くん">
        <p>vue 練習用 金木くんです</p>
      </article>
      <article class="text-center">
        <h2>記事2</h2>
        <img class="object-contain h-100 w-96 mt-4" src="@/assets/images/visual2.jpeg" alt="金木くん">
        <p>vue 集大成 金木くんです</p>
      </article>
    </section>
  </div>
</template>

<script>
import CommonHeader from '@/components/molecules/CommonHeader.vue'

export default {
  components: {
    CommonHeader,
  }
}
</script>

<style lang="scss">
article{
  & img{
    margin: 0 auto;
  }
}
</style>
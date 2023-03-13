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
    <Form font-size="30px"
          bg-color="bg-red-500"
          color="pink"
    >
    </Form>
    <p>{{ $store.state.count }}</p>
    <BPrimary @click="increment">btn</BPrimary>
    <button class="bg-blue-500 ml-3" @click="apiTest">getTestBtn</button>
    <button class="bg-green-500 ml-3" @click="postApi">postTestBtn</button>
  </div>
  <h2>{{ result }}</h2>
</template>

<script>
import CommonHeader from '@/components/molecules/CommonHeader.vue'
import Form from '@/components/atoms/forms/BForm.vue'
import BPrimary from '@/components/atoms/buttons/BPrimaryBtn.vue'
import axios from '@/axios.js'
export default {
  data(){
    return {
      data: {
        name:"vueから愛を込めて",
      },
      result: "",
    }
  },
  components: {
    CommonHeader,
    Form,
    BPrimary,
  },
  methods: {
    increment(){
      this.$store.commit('increment');
    },
    apiTest(){
      axios.get("/getTest")
      .then((response) =>{
        this.result = response.data;
        console.log(response);
      })
      .catch((error) =>{
        console.log("失敗しましたよ");
        console.log(error);
      })
    },
    postApi(){
      axios.post("/postTest",this.data)
      .then((response) =>{
        console.log(response);
      })
      .catch((error) =>{
        console.log(error);
      });
    }
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
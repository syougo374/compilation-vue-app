<template>
  <div class="main_container">
    <!-- <Header></Header> -->
    <div class="formContents">
      <Form prop-btn-name="送信" prop-btn-color="bg-blue-500" ></Form>
    </div>
  </div>
</template>

<script>
import Form from "@/components/molecules/forms/BForm.vue";
// import Header from "@/components/molecules/CommonHeader.vue";
export default {
  data (){
    return {

    }
  },
  name: 'userInfo',
  components: {
    // Header,
    Form,
  }
}
</script>

<style lang="scss">

</style>
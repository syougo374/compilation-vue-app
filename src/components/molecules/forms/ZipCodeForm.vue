<template>
  <div class="zip_serarch">
    <h2>郵便検索</h2>
    <form>
      <input @change="postZipCode" type="text" name="zip_code" id="zip_code" v-model="zip_code">
    </form>
    <p>県  : {{ address1 }}</p>
    <p>市  : {{ address2 }}</p>
    <p>町  : {{ address3 }}</p>
  </div>
</template>

<script>
import zip_axios from "@/zip_axios";
export default {
  data (){
    return {
      zip_code: "",
      address1: "",
      address2: "",
      address3: "",
    }
  },
  methods: {
    postZipCode(){
      zip_axios.get("https://zipcloud.ibsnet.co.jp/api/search?zipcode="+this.zip_code)
      .then((response)=>{
        this.address1 = response.data.results[0].address1;
        this.address2 = response.data.results[0].address2;
        this.address3 = response.data.results[0].address3;
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },
  computed: {
    fullpath(){
      return this.location.address1 + this.location.address2 + this.location.address3;
    }
  }

}
</script>

<style lang="scss">

</style>
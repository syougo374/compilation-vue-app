<template>
  <div class="main-container">
    <h1>ユーザー登録画面</h1>
    <div class="form-main flex flex-col">
      <label for="first_name">苗字</label>
      <input type="text" id="first_name" placeholder="テスト" name="first_name" v-model="this.requests.first_name" :style="styles">
      <label for="last_name">姓名</label>
      <input type="text" id="last_name" placeholder="太郎" name="last_name" v-model="this.requests.last_name" :style="styles">
      <label for="zip_code">郵便番号</label>
      <input type="text" id="zip_code" placeholder="1230000" name="zip_code" v-model="this.requests.zip_code" :style="styles" @change="postZipCode">
      <label for="address1">県名</label>
      <input type="text" id="address1" placeholder="熊本県" name="address1" v-model="this.requests.address1" :style="styles">
      <label for="address2">市名</label>
      <input type="text" id="address2" placeholder="天草市" name="address2" v-model="this.requests.address2" :style="styles">
      <label for="address3">町名</label>
      <input type="text" id="address3" placeholder="枦宇土町" name="address3" v-model="this.requests.address3" :style="styles">
      <Button class="radius mt-5 w-20" :btn-name="propBtnName" :btn-color="propBtnColor" @click="postName"></Button>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import Button from "@/components/atoms/buttons/BPrimaryBtn.vue";
export default {
    data (){
      return {
        requests: {
            zip_code: "",
            address1: "",
            address2: "",
            address3: "",
            first_name: "",
            last_name: "",
        },
        styles: {
          'font-size': this.$props.fontSize,
          color: this.$props.color,
        }
      }
    },
    components: {
      Button,
    },
    props: {
      propBtnName: {
        type: String,
        default: '登録',
      },
      propBtnColor: {
        type: String,
        default: 'bg-pink-500',
      }
    },
    methods: {
      postName(){
        axios.post("/postTest",this.requests)
        .then(() => {
          Object.keys(this.requests).forEach(request => {
            this.requests[request] = "";
          })
          this.$router.push("/index")
        })
        .catch((error) => {
          console.log(error);
        })
      },
      postZipCode(){
      axios.get("https://zipcloud.ibsnet.co.jp/api/search?zipcode="+this.requests.zip_code)
      .then((response)=>{
        console.log(response);
        this.requests.address1 = response.data.results[0].address1;
        this.requests.address2 = response.data.results[0].address2;
        this.requests.address3 = response.data.results[0].address3;
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    }
  }
</script>

<style lang="scss">
.form-main {
  margin: 5% 10%;
  & > input {
    margin-bottom: 10px;
  }
}
.main-container {
  & > h1 {
    margin-top: 5%;
    font-size: 1.5em;
    text-align: center;
  }
}
.radius {
  border-radius: 50%;
}
</style>

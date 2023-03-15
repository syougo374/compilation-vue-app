<template>
  <label>first_name</label>
  <input type="text" v-model="item.first_name" :style="styles">
  <label>last_name</label>
  <input type="text" v-model="item.last_name" :style="styles">
  <input:button :class="bgColor"
                class="shadow-lg shadow-teal-500/50 text-white rounded px-2 py-1"
                @click="postName"
  >btn</input:button>

  <p :style="styles">first_name: {{ item.first_name }}</p>
  <p :style="styles">last_name: {{ item.last_name }}</p>
</template>

<script>
import axios from "@/axios";

  export default {
    data (){
      return {
        item: {
          first_name: "",
          last_name: "",
        },
        styles: {
          'font-size': this.$props.fontSize,
          color: this.$props.color,
        }
      }
    },
    props: {
      fontSize:{
        type: String,
        default: '10px',
      } ,
      color: {
        type: String,
        default: 'red'
      },
      bgColor: {
        type: String,
        default: 'bg-teal-500'
      }
    },
    methods: {
      postName(){
        axios.post("/postTest", this.item)
        .then(() => {
          this.item.first_name = "";
          this.item.last_name = "";
          this.$router.push("/index")
        })
        .catch((error) => {
          console.log(error);
        })
      },
    }
  }
</script>

<style lang="scss">

</style>

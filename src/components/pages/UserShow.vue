<template>
  <div>
    <table class="border border-slate-500 w-4/5 selectUser text-center">
      <tr>
        <th :class="table_cols">共通ID</th>
        <td :class="table_cols">{{this.userInfo.emp_id}}</td>
      </tr>
      <tr>
        <th :class="table_cols">苗字</th>
        <td :class="table_cols">{{this.userInfo.last_name}}</td>
      </tr>
      <tr>
        <th :class="table_cols">姓名</th>
        <td :class="table_cols">{{this.userInfo.first_name}}</td>
      </tr>
      <tr>
        <th :class="table_cols">県名</th>
        <td :class="table_cols">{{this.userInfo.address1}}</td>
      </tr>
      <tr>
        <th :class="table_cols">市名</th>
        <td :class="table_cols">{{this.userInfo.address2}}</td>
      </tr>
      <tr>
        <th :class="table_cols">町名</th>
        <td :class="table_cols">{{this.userInfo.address3}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "@/axios"
export default {
  data (){
    return {
      userInfo:[],
      table_cols: [
        "border",
        "border-slate-600",
      ],
    }
  },
  created(){
    axios.post('/selectUser',{emp_id: this.$route.query.emp_id})
    .then((response) =>{
      console.log(response)
      this.userInfo = response.data;
    })
    .catch((error) =>{
      console.log(error);
    })
  },
}
</script>

<style lang="scss">
.selectUser {
  margin: 20% auto;
}
</style>
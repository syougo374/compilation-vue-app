<template>
  <!-- <Header></Header> -->
  <div class="text-center mt-10">
    <table class="hover:border-collapse border border-slate-500 w-4/5">
      <thead>
        <tr>
          <th :class="table_cols">苗字</th>
          <th :class="table_cols">姓名</th>
          <th :class="table_cols">id</th>
        </tr>
      </thead>
      <tbody v-for="(name, n) in names" :key="n">
        <tr>
          <td :class="table_cols">{{ name.first_name }}</td>
          <td :class="table_cols">{{ name.last_name }}</td>
          <td :class="table_cols"><button class="bg-green-100 rounded-sm border-2 border-red-200 border-solid" @click="getUserShow(name.emp_id)">詳細</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- <postZipCode></postZipCode> -->
</template>

<script>
// import Header from "@/components/molecules/CommonHeader.vue";
// import postZipCode from "@/components/atoms/forms/ZipCodeForm.vue";
import axios from "@/axios";
export default({
  data(){
    return{
      names: [],
      table_cols: [
        "border",
        "border-slate-600",
      ]
    }
  },
  components: {

  },
  computed: {
  },
  created(){
    axios.get('/getIndex')
    .then((response) =>{
      this.names = response.data;
      console.log(response);
    })
    .catch((error) =>{
      console.log(error);
    })
  },
  methods: {
    getUserShow(e){
      this.$router.push({name:"userShow",  query:{emp_id: e}});
    }
  }
})

</script>

<style lang="scss" scoped>
table {
  margin: 0 auto;
}
th {
  color: red;
}
</style>
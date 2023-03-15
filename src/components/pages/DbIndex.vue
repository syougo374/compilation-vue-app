<template>
  <Header></Header>
  <div class="text-center mt-10">
    <table class="hover:border-collapse border border-slate-500 w-4/5">
      <thead>
        <tr>
          <th :class="table_cols">苗字</th>
          <th :class="table_cols">姓名</th>
        </tr>
      </thead>
      <tbody v-for="(name, n) in names" :key="n">
        <tr>
          <td :class="table_cols">{{ name.first_name }}</td>
          <td :class="table_cols">{{ name.last_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Header from "@/components/molecules/CommonHeader.vue";
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
    Header,
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
    getIndex(){
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
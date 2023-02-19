<template>
  <div class="main-area cursor-pointer" @click="isShow = !isShow">
    <div class="bars" >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <transition name="fade" mode="out-in" appear>
      <div v-if="isShow" class="flex flex-col bg-gray-200 w-3/12 delay-75" fade>
        <router-link active-class="actice" exact class="w-20 text-center mt-3 ml-3 ml-4shadow-lg bg-orange-500 shadow-orange-500/50 text-white rounded px-2 py-1 hover:text-gray-600" to="/home">Home</router-link>
        <router-link active-class="actice" exact class="w-20 text-center mt-3 ml-3 ml-4shadow-lg bg-orange-500 shadow-orange-500/50 text-white rounded px-2 py-1 hover:text-gray-600" to="/signup">SignUp</router-link>
        <router-link active-class="actice" exact class="w-20 text-center mb-3 mt-3 ml-3 ml-4shadow-lg bg-orange-500 shadow-orange-500/50 text-white rounded px-2 py-1 hover:text-gray-600" to="login">Login</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow: false,
    }
  }
}

</script>

<style scoped>

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
.actice {
  color: red;
  background-color: black;
}
  .main-area {

  }

  .bar1 {
    width: 30px;
    height: 5px;
    background-color:gray;
    margin-top:3px;
  }
  .bar2 {
    width: 30px;
    height: 5px;
    background-color:gray;
    margin-top:3px;
  }
  .bar3 {
    width: 30px;
    height: 5px;
    background-color:gray;
    margin-top:3px;
  }
</style>
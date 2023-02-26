<template>
  <div class="main-area cursor-pointer" @click="isShow = !isShow">
    <div class="bars" >
      <p>メニュー</p>
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="isShow" class="flex flex-col bg-gray-200 pr-3 delay-75" fade>
        <router-link active-class="actice" exact class="w-20 text-center mt-3 ml-3 ml-4shadow-lg bg-orange-500 shadow-orange-500/50 text-white rounded px-2 py-1 hover:text-gray-600" to="/lifullHomes">lifullHomes</router-link>
        <router-link active-class="actice" exact class="w-20 text-center mt-3 ml-3 ml-4shadow-lg bg-orange-500 shadow-orange-500/50 text-white rounded px-2 py-1 hover:text-gray-600" to="/">Home</router-link>
        <router-link active-class="actice" exact class="w-20 text-center mb-3 mt-3 ml-3 ml-4shadow-lg bg-orange-500 shadow-orange-500/50 text-white rounded px-2 py-1 hover:text-gray-600" to="/">Home</router-link>
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

<style scoped lang="scss">

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

  .bars{
    & > p {
      font-size:1px;
    }
    & >.bar1, .bar2, .bar3 {
      width: 30px;
      height: 3px;
      background-color:rgb(250, 140, 44);
      margin-top:3px;
    }
  }

</style>
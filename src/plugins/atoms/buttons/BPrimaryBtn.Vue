<template>
  <button class="bg-gradient-to-b from-green-200 to-green-800 hover:bg-gradient-to-l text-white rounded px-4 py-2">{{ btnName }}</button>
</template>
<script>
  export default {
    props: {
      btnName: {
        type: String,
        default: 'btn',
      }
    }
  }
</script>
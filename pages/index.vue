<template>
<div><Navbar></Navbar>
<h1 id="title">TO-DO LIST</h1>
</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<style>
body {
  background-color: rgb(29, 31, 51);
}
#title {
    color: rgb(158, 172, 255);
    font-family: 'Calibri';
    font-size: 200px;
    text-align: center;
    line-height: 2;
}
</style>

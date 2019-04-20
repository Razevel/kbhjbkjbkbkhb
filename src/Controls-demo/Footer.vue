<template>
  <div class="qwe">
    <div style="width: 100%">
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Footer from './../components/Footer'
   export default {
     components: {
        Footer
     }
   }
</script>

<style scoped>
.qwe{
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
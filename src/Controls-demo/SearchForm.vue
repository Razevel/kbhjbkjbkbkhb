<template>
  <div class="qweqwe">
    <SearchForm/>
  </div>
</template>

<script>
   import SearchForm from "./../components/SearchForm.ts"

   export default {
      components: {
         SearchForm
      },
      data() {
         return {

         }
      }
   }
</script>

<style scoped>
  .qweqwe {
    width: 800px;
    margin: 0 auto;
  }
</style>
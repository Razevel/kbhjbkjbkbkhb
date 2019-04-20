<template>
  <div class="wrap">
    <div style="" class="demo-mainMenu">
      <plain-panel caption="Заголовок" captionPosition="right">
        <template v-slot:header>
          <div>
            Header
          </div>
        </template>

        <template v-slot:body>
          <div>
            Body
          </div>
        </template>

        <template v-slot:footer>
          <div>
            Footer
          </div>
        </template>

      </plain-panel>
    </div>
  </div>
</template>

<script>
   import PlainPanel from "./../components/Panels/Plane.ts";

   export default {
      components: {
         'plain-panel': PlainPanel
      }
   }
</script>

<style lang="scss" scoped>

</style>
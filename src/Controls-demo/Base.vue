<template>
    <div>
        <Button
                :caption="inputCaption"/>

        <Button :caption="inputCaption"/>

        <Button
                :caption="buttonCaption"
                tag="button" />

        <Button tag="button">
            <div>123</div>
        </Button>
        <div>
            <a href="">Button</a>
        </div>
    </div>
</template>

<script>
   import Vue from 'vue';
   import Button from '@/components/Button'

   export default Vue.extend({
      components: {
         Button
      },
      data(){
         return {
            inputCaption: 'Я кнопка input',
            buttonCaption: 'Я кнопочная кнопка'
         }
      }
   })

</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
        outline: none;
        display: inline-block;
        padding: 20px 30px;
        margin: 10px 20px;
        position: relative;
        color: $color-text_default;
        border: 1px solid $color-text_default;
        background: none;
        font-weight: 300;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    a:before,
    a:after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        box-sizing: border-box;
    }
    a:before {
        bottom: 0;
        left: 0;
        border-left: 1.5px solid $primary;
        border-top: 1.5px solid $primary;
        transition: 0s ease opacity .8s, .2s ease width .4s, .2s ease height .6s;
    }
    a:after {
        top: 0;
        right: 0;
        border-right: 1.5px solid $primary;
        border-bottom: 1.5px solid $primary;
        transition: 0s ease opacity .4s, .2s ease width  .2s ease height .2s;
    }
    a:hover:before,
    a:hover:after{
        height: 100%;
        width: 100%;
        opacity: 1;
    }
    a:hover:before {transition: 0s ease opacity 0s, .2s ease height, .2s ease width .2s;}
    a:hover:after {transition: 0s ease opacity .4s, .2s ease height .4s , .2s ease width .6s;}
    a:hover {background: rgba(255,255,255,.2);}
</style>
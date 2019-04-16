<template>
    <div id="app">
        <div id="nav">
            <router-link to="/Controls-demo">Controls-demo</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">

    $headerHeight: 40px;

    html, body {
        padding: 0;
        margin: 0;
    }

    #app {
        padding: 0;
        padding-top: $headerHeight;
        font-family: 'Open Sans', 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #nav {
        z-index: 10;
        position: fixed;
        background-color: #fff;
        top: 0;
        left: 0;
        right: 0;
        height: $headerHeight;
        display: flex;
        padding: 0 10px;
        align-items: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        a {
            font-weight: bold;
            color: #2c3e50;
            text-decoration: none;
            font-size: 16px;
            &:hover {
                color: $color_DemoComponent-link-primary;
            }
            &.router-link-exact-active {
                font-size: 20px;
            }
        }
    }
</style>

<template>
    <nut-navbar
            @on-click-back="back"
            @on-click-title="title"
            @on-click-more="more"

    >
        {{titleInfo}}
    </nut-navbar>
</template>

<script>
    export default {
        name:'Header',
        props:{
            props: ['titleInfo']
        },
        data(){
           return{
                titleInfo:'登录'
            }
        },
        watch:{
         '$route'(to,from){
             if(to.name=='RockMap'){
                 this.titleInfo='野外路书';
             }else if(to.name=='Home'){
                 this.titleInfo='登录';
             }
         }
        },
        methods: {
            back(){
              //  alert('header头部， 点击返回')
            },
            title(){
                //alert('header头部， 点击title')
            },
            more(){
                //alert('header头部， 点击更多')
            }
        }
    };
</script>

<style scoped>

</style>

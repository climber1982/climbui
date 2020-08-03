<template>
    <div>
        <span style="color:darkgreen">{{rockName}}-></span>线路

        <div>
            <nut-elevator
                    :dataArray="dataList"
                    :showIndicator="true"
                    :navHeight="40"
                    :otherHeight="60"
                    :initIndex="0"
                    :hiddenTime='500'
                    @clickNav="clickNav"
                    @clickList="clickList"
            >
            </nut-elevator>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LineList",
        data(){
            return{
                initIndex:0,
                rockName:'',
                dataList:[
                    {
                        title:"四川",
                        list:[//可以为空数组
                            {
                                name:'乐山龙岩',
                                id:'a'

                            },
                            {
                                name:'安琪',
                                id:'a2'
                            }
                        ]
                    },
                    {
                        title:"H",
                        list:[//可以为空数组
                            {
                                name:'安其拉2',
                                id:'a1'//id字段可以没有
                            },
                            {
                                name:'安琪2',
                                id:'a2'
                            }
                        ]
                    }

                ]
            }
        },
        mounted() {
           this.rockName=  this.$route.query.nameRock;
        },
        methods:{
            clickNav:function (index,title) {
                this.initIndex=index;
            },
            clickList:function (obj) {

            }
        }
    }
</script>

<style scoped>

</style>
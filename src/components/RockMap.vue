<template>
  <div>
     <span style="padding-right: 10px">全国岩场</span>
    <nut-icon
            type="action"
    >
    </nut-icon>
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
        name: "RockMap",
        data(){
          return{
              initIndex:0,
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
                  },   {
                      title:"B",
                      list:[//可以为空数组
                          {
                              name:'安其拉2',
                              id:'B1'//id字段可以没有
                          },
                          {
                              name:'安琪2',
                              id:'B2'
                          }
                      ]
                  },
                  {
                      title:"C",
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
                  }, {
                      title:"d",
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
                  }, {
                      title:"e",
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
                  }, {
                      title:"g",
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
                  }, {
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
        methods:{
            clickNav:function (index,title) {
                  this.initIndex=index;
            },
            clickList:function (obj) {
              this.$router.push({
                path:'/LineList',
                query: {
                  nameRock: obj.name
                }

              });
            }
        }

    }
</script>

<style scoped>

</style>
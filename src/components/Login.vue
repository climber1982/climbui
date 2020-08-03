<template>
    <div style="margin: 10px;">
        <nut-row>
            <nut-col :span="24">
                <nut-textinput
                        v-model="userName"
                        label="登录用户："
                        type="text"
                        placeholder="userName"
                        :clearBtn="true"
                        :disabled="false"
                />
            </nut-col>

        </nut-row>
        <div style="margin-top: 10px"></div>
        <nut-row>
            <nut-col :span="24">
                <nut-textinput
                        v-model="password"
                        label="登录密码："
                        type="password"
                        placeholder="password"
                        :clearBtn="true"
                        :disabled="false"
                />
            </nut-col>

        </nut-row>
        <div style="margin-top: 10px"></div>
        <nut-row>
            <nut-buttongroup>
                <nut-button
                        type="light"
                        @click="resetLoin"
                >
                    重置
                </nut-button>
                <nut-button @click="login">
                    确定
                </nut-button>
            </nut-buttongroup>
        </nut-row>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Login",
        data(){
            return{
              userName:"",
              password:"",
                name:""
            }
        },
      methods:{
            login:function () {
                const  that=this;

                // axios
                //     .get('http://127.0.0.1:8001/login',{
                //         params: {
                //             userName: this.userName,
                //             password: this.password
                //         }
                //     })
                //     .then(function (token) {
                //        if(token.data!=""){
                //            sessionStorage.setItem("token",token);
                //            that.$router.push({path:'/RockMap'});
                //        }
                //     })
                that.$router.push({path:'/RockMap'});
            },
          resetLoin:function () {
                this.userName="";
                this.password="";

          }
      }
    }

</script>

<style scoped>

</style>

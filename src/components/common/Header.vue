<template>
    <div class="header">
        <div class="logo">Hisense 营销洞察平台</div>        
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/img.jpg">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="setting">
            <el-dropdown trigger="click">
                <span class="el-icon-setting"></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
     import axios from 'axios';
    export default {
        data() {
            return {
                name: 'linxin'
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                console.log(command);
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        },
        created () {
             axios.get('/voc/user/getMenus').then( (res) => {
                console.log(res);
            })
        //  this.$http.get().then(response => {
        //      this.goodsData = response.body.data
        //      this.foods = this.goodsData[0].foods
        //      console.log(this)
        //      this.$nextTick(() => {
        //          this._initScroll()
        //      })
        //  })
       }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        font-size: 22px;
        line-height: 60px;
        color: #fff;
        background-color: #00aaa6;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .setting {
        float: right;
        padding-right: 30px;
        font-size: 20px;
    }
    .setting .el-icon-setting {
       font-size: 20px;
    }
    .user-info {
        float: right;
        padding-right: 20px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:9px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>

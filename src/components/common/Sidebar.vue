<template>
    <div class="sidebar">
        <ul class="main-menu">
            <li class="menu-item" v-for="item in mainMenuData">
                <!--<router-link :to="{path:'/pro',query: { type: 'phone' }}">{{item.text}}</router-link>-->
                <router-link :to="{path:'/pro/'+type}">{{item.text}}</router-link>
            </li>
        </ul>
        <ul class="sub-menu">
            <li>
                <h3>市场洞察</h3>
                <ul class="second-menu">
                    <li>
                        <router-link :to="{path: '/pro/'+type+'/brand'}" class="item">品牌认知</router-link>
                    </li>
                    <li>
                        <router-link :to="{path: '/pro/'+type+'/onlineMarket'}" class="item">线上市场</router-link>
                    </li>
                    <li>
                        <router-link :to="{path: '/pro/'+type+'/infoMonitor'}"  class="item">信息监测</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
   import axios from 'axios';
    export default {
        data() {
            return {
                mainMenuData: [{
                        text: '手机'
                    }, {
                        text: '电视'
                    }, {
                        text: '冰箱'
                    }, {
                        text: '空调'
                    }, {
                        text: '洗衣机'
                    }

                ],
                type: 'phone'
            }
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        },
         created () {
             axios.post('/voc/user/getMenus',{}).then( (res) => {
                console.log(res);
            })
       }
    }

</script>
<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        width: 240px;
        left: 0;
        top: 60px;
        bottom: 0;
        background: #2E363F;
        /*overflow: auto;*/
    }
    
    .sidebar .main-menu {
        width: 80px;
        float: left;
        height: 100%;
        background: #333;
    }
    
    .sidebar .main-menu>li {
        height: 70px;
        /*color: #666;*/
        line-height: 70px;
        text-align: center;
        color: #fff;
    }
    
    .sub-menu {
        width: 160px;
        float: right;
        /*background: green;*/
        color: #fff;
        margin-top: 20px;
    }
    .sub-menu h3 {
        color: #fff;
        font-size: 14px;
        height: 28px;
        line-height: 28px;
    }
    .sub-menu>li {
        text-align: center;
    }
    .sub-menu>li .item  {
        display: inline-block;
        width: 140px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
    }
    .sub-menu .second-menu {
        margin-left: 10px;
        margin-right: 10px;
    }
    
    .sub-menu .second-menu>li {
        height: 30px;
        line-height: 30px;
    }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    
     ::-webkit-scrollbar {
        width: 16px;
        height: 16px;
        background-color: #F5F5F5;
    }
    /*定义滚动条轨道 内阴影+圆角*/
    
     ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }
    /*定义滑块 内阴影+圆角*/
    
     ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #555;
    }

</style>

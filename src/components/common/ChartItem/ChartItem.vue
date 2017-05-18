<template>
    <div class="chart-item">
       我是一个item  
       <button @click="up">点击</button>
    </div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue';
    import axios from 'axios';
    export default {
        props: {
            cpt: {
                type: Object
            },
        },
        components: {
            IEcharts
        },
        data() {
            return {
                loading: true,
                bar: {
                    title: {
                        // text: 'ECharts Hello World'
                    },
                    tooltip: {},
                    xAxis: {
                        // data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
                    },
                    yAxis: {},
                    series: []
                }

            }
        },
        computed: {
            
        },
        methods: {
            up () {
                console.log("触发点击事件");
                this.$emit("parentEvent","子组件到父组件");
            },
            handleCommand(command) {
                console.log(command);
                if (command == 'loginout') {
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        },
        created () {
            console.log("我是从父组件传到子组件的值");
            console.log(this.cpt);
            axios.post('/voc/cptInst/getData', {
                "cptInstId": 1187,
                "anlsDateAttr": {
                    "anlsStartDate": "2017-02-01",
                    "anlsEndDate": "2017-04-30"
                },
                "prdTypeCd": "tmbl101",
                "mediaType": {
                    "mediaTypeCd": "the005",
                    "mediaTypeName": "社交"
                }
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        }
    }

</script>
<style scoped>
    .chart-item {
        height: 200px;
        width: 200px;
        border: 1px solid #ccc;
        display: inline-block;
        margin: 20px;
    }
    
    .echarts {
        width: 300px;
        height: 300px;
    }

</style>

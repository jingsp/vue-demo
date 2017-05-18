<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 图表</el-breadcrumb-item>
                <el-breadcrumb-item>混合图表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            vue-echarts-v3：基于vue2和eCharts.js3的图表组件。 访问地址：
            <a href="https://github.com/xlsdg/vue-echarts-v3" target="_blank">vue-echarts-v3</a>
        </div>
        <div class="echarts">
            <IEcharts :option="bar"></IEcharts>
        </div>
    </div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue';
    import axios from 'axios';
    export default {
        data() {
            return {
                bar: {
                    title: {
                        text: 'ECharts Hello World'
                    },
                    tooltip: {},
                    xAxis: {
                        data: []
                    },
                    yAxis: {},
                    series: [{
                        name: 'Sales',
                        type: 'bar',
                        data: []
                    }]
                }
            }
        },
        components: {
            IEcharts
        },
        created() {
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
                console.log('created');
                this.bar = {
                    title: {
                        text: 'Hello World'
                    },
                    tooltip: {},
                    xAxis: {
                        data: [1,2,3,4,5,6]
                    },
                    yAxis: {},
                    series: [{
                        name: 'Sales',
                        type: 'bar',
                        data: [100, 22, 110, 220, 0, 23]
                    }]
                }

            })
        },


        // // beforeMount() {
        // //     axios.post('/voc/cptInst/getData', {
        // //         "cptInstId": 1187,
        // //         "anlsDateAttr": {
        // //             "anlsStartDate": "2017-02-01",
        // //             "anlsEndDate": "2017-04-30"
        // //         },
        // //         "prdTypeCd": "tmbl101",
        // //         "mediaType": {
        // //             "mediaTypeCd": "the005",
        // //             "mediaTypeName": "社交"
        // //         }
        // //     }).then((res) => {
        // //         console.log('beforeMount');
        // //         this.bar = {
        // //             title: {
        // //                 text: 'ECharts Hello World'
        // //             },
        // //             tooltip: {},
        // //             xAxis: {
        // //                 data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
        // //             },
        // //             yAxis: {},
        // //             series: [{
        // //                 name: 'Sales',
        // //                 type: 'bar',
        // //                 data: [5, 20, 36, 10, 10, 20]
        // //             }]
        // //         }
        // //     })
        // }
    }

</script>
<style scoped>
    .echarts {
        width: 400px;
        height: 400px;
    }

</style>

<template>
    <div class="charts-container">
        <div class="container-title">
            <h4>品牌认知</h4>
        </div>
        <div class="charts">
            <!--<chart-item v-for="item in cptList" :cpt="item">{{item.cptInstId}}</chart-item>-->
            <chart-item  @parentEvent="acceptV" ></chart-item>
            <chart-item  :cpt="cptList[0]"  @parentEvent="acceptV"></chart-item>
            <chart-item  :cpt="cptList[0]"></chart-item>
            <chart-item  :cpt="cptList[0]"></chart-item>
            <chart-item  :cpt="cptList[0]"></chart-item>
            <chart-item  :cpt="cptList[0]"></chart-item>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import ChartItem from '../ChartItem/ChartItem'
    export default {
        data() {
            return {
                cptList: [{
                        cptInstId: 1009,
                        cptBaseId: null,
                        cptKey: "productNpsContrastAnalysis"
                    },
                    {
                        cptInstId: 1000,
                        cptBaseId: null,
                        cptKey: "productComparativeAnalysis",
                    },
                    {
                        cptInstId: 1001,
                        cptBaseId: null,
                        cptKey: "productBrandAcceptanceAnalysis",
                    },
                    {
                        cptInstId: 1014,
                        cptBaseId: null,
                        cptKey: "productPostiveAnalysis",
                        induCd: "productPostiveAnalysis",
                    },
                    {
                        cptInstId: 1019,
                        cptBaseId: null,
                        cptKey: "productBadAnalysis",
                        induCd: "productBadAnalysis",
                    },
                    {
                        cptInstId: 685,
                        cptBaseId: null,
                        cptKey: "brandVolumeTrendCpt",
                        induCd: "brandVolumeTrendCpt",
                    },
                    {
                        cptInstId: 688,
                        cptBaseId: null,
                        cptKey: "brandImageAnalyseCpt",
                        induCd: "brandImageAnalyseCpt",
                    }
                ]
            }
        },
        components: {
            ChartItem
        },
        computed: {
            username() {
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods: {
            handleCommand(command) {
                console.log(command);
                if (command == 'loginout') {
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            },
            acceptV (msg) {
                console.log(msg);
            }
        },
        created() {
            // 获取cptList
            // axios.post('/').then( (res) => {
            //     console.log(res);
            // }).catch( (err) => {
            //     console.log(err);
            // });
        }
    }

</script>
<style scoped>
    .charts-container {
        background-color: #ddd;
        padding: 0 20px;
        /*border: 1px solid #ccc;*/
    }
    
    .container-title {
        height: 40px;
        line-height: 40px;
    }
    
    .charts {
        padding: 10px;
        border: 1px solid #ccc;
        background-color: #fff;
    }

</style>

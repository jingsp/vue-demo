<template>
    <div class="date-picker">
        <span class="demonstration">分析时间:</span>
        <el-date-picker v-model="value1" type="date" :picker-options="pickerOptions0">
        </el-date-picker>
        <span>至</span>
         <el-date-picker v-model="value2" type="date" :picker-options="pickerOptions0">
        </el-date-picker>
        <el-button type="primary">确定</el-button>
        <el-button type="text">上周</el-button>
        <el-button type="text">上两周</el-button>
        <el-button type="text">本月</el-button>
        <el-button type="text">上月</el-button>
        <el-button type="text">上三月</el-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                value1: '',
                value2: '',
            };
        }
    }

</script>
<style scoped>
  .date-picker {
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
      border-bottom: 1px solid #ccc;
  }
</style>

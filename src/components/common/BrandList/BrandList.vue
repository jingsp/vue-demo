<template>
    <div class="brand-container">
       <div class="brand-list">
        <span>需分析的品牌:</span>
        <el-tag :key="tag" v-for="tag in dynamicTags" :closable="true" :close-transition="false" @close="handleClose(tag)">
            {{tag}}
        </el-tag>
        <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="mini" @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </div>
    </div>
    
</template>
<script>
    export default {
        data() {
            return {
                dynamicTags: ['标签一', '标签二', '标签三'],
                inputVisible: false,
                inputValue: ''
            };
        },
        methods: {
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        }
    }

</script>
<style scoped>
   .brand-container {
       background-color: #ddd;
       padding-top: 15px;
   }
   .brand-list {
       height: 50px;
       line-height: 50px;
       border: 1px solid #ccc;
       padding-left: 20px;
       margin: 0px 20px;
       background-color: #fff;
   }

</style>

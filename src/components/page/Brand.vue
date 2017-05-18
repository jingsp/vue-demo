<template>
    <div>
        <date-picker></date-picker>
        <page-title></page-title>
        <brand-list></brand-list>
        <charts-container></charts-container>
    </div>
    
</template>

<script>
    import DatePicker from '../common/DatePicker/Datepicker';
    import PageTitle from '../common/PageTitle/PageTitle';
    import BrandList from '../common/BrandList/BrandList';
    import ChartsContainer from '../common/ChartsContainer/ChartsContainer'
    export default {
        components: {
            DatePicker,
            PageTitle,
            BrandList,
            ChartsContainer
        },
            
    }
</script>

<style scoped>
    
</style>
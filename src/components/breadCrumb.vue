<template>
    <div>
        <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>后台管理系统</BreadcrumbItem>
            <BreadcrumbItem v-for="(item,index) in $route.meta" :key="index">{{item}}</BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>

<script>
export default{
    data(){
        return{

        }
    }
}
</script>

<style lang="less">

</style>
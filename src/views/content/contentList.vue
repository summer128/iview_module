<template>
   <div>
       <Input v-model="value1" size="large" placeholder="large size" />
       <div>{{value1 | capitalize}}</div>
        <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="id">
            <strong>{{ row.id }}</strong>
        </template>
        <template slot-scope="{ row }" slot="linkUrl">
            <strong>{{ row.linkUrl }}</strong>
        </template>
        <template slot-scope="{ row }" slot="createdAt">
            <strong>{{ row.createdAt }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
            <Button type="error" size="small" @click="remove(index)">Delete</Button>
        </template>
    </Table>
   </div>
</template>
<script>
import { resquest } from "@/api/api";
import { get, post } from "@/api/http";
import axios from "axios";
    export default {
        data () {
            return {
                value1:'',
                columns12: [
                    {
                        title: 'Id',
                        slot: 'id'
                    },
                    {
                        title: '链接',
                        key: 'linkUrl',
                        slot: 'linkUrl'
                    },
                    { 
                        title: '日期',
                        key: 'createdAt',
                        slot:'createdAt'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data6: []
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            // 获取文章列表
            async getLists(){
                const getlistsData = data => get(`${resquest.v3}/admin/links`,{})
                try{                                        
                    const allList = await getlistsData()
                    console.log(allList)
                    this.data6 = allList.data.data
                }catch(err){
                    console.log(':::获取列表失败',err)
                }
            }
        },
        created(){
            this.getLists()
        },
        filters:{
            capitalize: function (value) {
                console.log(value)
                var chuanValue='nishiyigewangbadandaopangxiaozi'
                console.log(chuanValue.split(value)) 

            }
        }
    }
</script>
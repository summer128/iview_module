<template>
  <div>
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
// import {getListAPI,postFormAPI} from '@/api/api'
import { resquest } from "@/api/api";
import { get, post } from "@/api/http";
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    drawChart() {
      
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "手机"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20, 40],
          },
        ],
      };
      let optionPie = {
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            roseType: 'angle', //按百分比不规则排序
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" },
            ],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(optionPie);
    },
    async getLists() {
      // let datas = await get(`${resquest.news}/web/getNewsList?type=news_report&page=0&limit=10`).then(res=>console.log(res))
    },
  },
  mounted() {
    this.drawChart();
  },
  created() {
    this.getLists();
  },
};
</script>

<style lang="less" scoped>
</style>
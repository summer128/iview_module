<template>
  <div class="homePage">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">
              <img
                src="../assets/images/loginLogo.png"
                alt=""
                style="width: 40px"
              />
            </div>
            <div class="layout-nav">
              <MenuItem name="1">
                <!-- <Icon type="ios-navigate"></Icon> -->
                <Icon
                  @click.native="collapsedSider"
                  :class="rotateIcon"
                  :style="{ margin: '0 20px' }"
                  type="md-menu"
                  size="24"
                ></Icon>
              </MenuItem>
              <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                欢迎来到后台管理系统！
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <Layout>
          <Sider
            ref="side1"
            hide-trigger
            collapsible
            :collapsed-width="78"
            :style="{ background: '#fff' }"
            v-model="isCollapsed"
          >
            <Menu
              active-name="1-2"
              theme="light"
              width="auto"
              :class="menuitemClasses"
            >
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  首页管理
                </template>
                <MenuItem name="1-1" to="firstPage">系统首页</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  内容管理
                </template>
                <MenuItem name="2-1" to="contentList">内容列表</MenuItem>
                <MenuItem name="2-2" to="recommendArticle">文章推荐</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  Item 3
                </template>
                <MenuItem name="3-1">Option 1</MenuItem>
                <MenuItem name="3-2">Option 2</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{ padding: '0 24px 24px' }">
            <Content
              :style="{
                padding: '24px',
                minHeight: '280px',
                background: '#fff',
              }"
            >
              <breadCrumb />
              <router-view></router-view>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>
import breadCrumb from "../components/breadCrumb";
export default {
  components: {
    breadCrumb,
  },
  data() {
    return {
      isCollapsed: false,
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
  methods: {
    collapsedSider() {
      console.log("000");
      this.$refs.side1.toggleCollapse();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.homePage {
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo {
    width: 100px;
    height: 30px;
    // background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .menu-icon {
    transition: all 0.3s;
  }
  .rotate-icon {
    transform: rotate(-90deg);
  }
  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }
  .menu-item i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span {
    width: 0px;
    transition: width 0.2s ease;
  }
  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
  }
}
</style>

<template>
  <div class="loginPage">
    <div class="loginFrame">
      <h1>后台管理系统</h1>
      <div class="loginBox">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="user">
            <Input
              class="userName"
              prefix="ios-contact-outline"
              v-model="formInline.user"
              placeholder="用户名"
              clearable
              style="width: 100%"
            />
          </FormItem>
          <FormItem prop="password">
            <Input
              prefix="ios-lock-outline"
              v-model="formInline.password"
              placeholder="密码"
              clearable
              style="width: 100%"
            />
          </FormItem>
          <FormItem>
            <Button type="success" long @click="handleSubmit('formInline')"
              >登录</Button
            >
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "root",
        password: "123456",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
          this.$router.push('/home')
        } else {
          this.$Message.error("Fail!");
        }
      })
    }
  }
};
</script>

<style lang="less" scpoed>
.loginPage {
  width: 100%;
  height: 969px;
  background: rgba(0, 0, 0, 0.4);
  .loginFrame {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    h1 {
      font-size: 45px;
      margin-bottom: 180px;
      text-align: center;
    }
    .loginBox {
      width: 422px;
      height: 226px;
      border-radius: 4px;
      background: white;
      padding: 35px 35px 0 35px;
      .userName {
        // margin-bottom: 18px;
      }
      /deep/.ivu-input-inner-container {
        height: 40px;
      }
      /deep/.ivu-input,
      .ivu-input-icon {
        height: 40px;
      }
      /deep/.ivu-input-inner-container,
      .ivu-input-prefix i,
      .ivu-input-icon {
        line-height: 40px;
      }
      /deep/.ivu-form-item {
        width: 100%;
      }
    }
  }
}
</style>
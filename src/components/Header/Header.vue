<template>
  <header class="header">
    <!-- 头部第一行:顶部登陆注册和操作列表 -->
    <div class="top">
      <div class="container">
        <div class="loginlist">
          <p>顾渊商城欢迎您!</p>
          <p>
            <router-link to="/login">登录</router-link>
          </p>
          <p>
            <router-link class="register" to="/register">注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <ul>
            <li>我的订单</li>
            <em>|</em>
            <li>我的购物车</li>
            <em>|</em>
            <li>我的顾渊商城</li>
            <em>|</em>
            <li>顾渊商城会员</li>
            <em>|</em>
            <li>企业采购</li>
            <em>|</em>
            <li>关注顾渊商城</li>
            <em>|</em>
            <li>合作招商</li>
            <em>|</em>
            <li>商家后台</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 头部第二行:搜索 -->
    <div class="bottom">
      <div class="container">
        <div class="logo">
          <router-link to="/">
            <img src="./images/logo.png" alt="" />
          </router-link>
        </div>
        <div class="search">
          <input type="text" placeholder="输入商品名称进行搜索" v-model="keyword" />
          <button @click="goSearch">搜索</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    // 搜索按钮点击跳转
    goSearch() {
      // 路由传递参数
      // 1.字符串形式
      // this.$router.push('/search/' + this.keyword + '?k=' + this.keyword.toUpperCase())
      // 2.模板字符串
      // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
      // 3.对象
      this.$router.push({ name: 'search', params: { keyword: this.keyword || undefined }, query: { k: this.keyword.toUpperCase() } })
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 120px;
  .top {
    background-color: #f5f5f5;
    height: 30px;
    .loginlist {
      p {
        float: left;
        padding: 5px;
      }
    }
    .typeList {
      ul {
        float: right;
        li {
          display: inline-block;
          padding: 5px;
        }
      }
    }
  }
  .bottom {
    padding-top: 20px;
    .logo {
      float: left;
    }
    .search {
      padding-top: 10px;
      float: right;
      input {
        padding-left: 5px;
        border: 2px solid red;
        height: 30px;
        width: 450px;
      }
      button {
        height: 30px;
        background-color: red;
        color: #f5f5f5;
        width: 50px;
      }
    }
  }
}
</style>
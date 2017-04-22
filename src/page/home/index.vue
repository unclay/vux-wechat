<template>
  <div>
    <search :autoFixed="false" v-model="searchKey"></search>
    <group gutter="-1px" class="msg-box">
      <cell class="msg-cell" title="微信运动" inline-desc="[应用消息]">
        <img slot="icon" class="msg-avatar" src="../../assets/temp/img/avatar.jpg">
      </cell>
      <cell class="msg-cell" title="微信公众平台" inline-desc="公众号群发文章支持添加小程序">
        <img slot="icon" class="msg-avatar" src="../../assets/temp/img/avatar.jpg">
      </cell>
    </group>
    <navbar type="/"></navbar>
  </div>
</template>

<script>
import { Group, Cell, Search } from 'vux'
import { Navbar } from '../../components'
export default {
  name: 'home',
  components: {
    Navbar,
    Group,
    Cell,
    Search
  },
  data () {
    return {
      searchKey: ''
    }
  }
}
</script>

<template>
  <div>
    <tabbar>
      <tabbar-item :selected="type === '/'" badge="2" link="/">
        <img slot="icon" src="../../assets/tabbar/tabbar_mainframe@2x.png">
        <img slot="icon-active" src="../../assets/tabbar/tabbar_mainframeHL@2x.png">
        <span slot="label">微信</span>
      </tabbar-item>

      <tabbar-item :selected="type === '/contacts'" link="/contacts">
        <img slot="icon" src="../../assets/tabbar/tabbar_contacts@2x.png">
        <img slot="icon-active" src="../../assets/tabbar/tabbar_contactsHL@2x.png">
        <span slot="label">通讯录</span>
      </tabbar-item>

      <tabbar-item :selected="type === '/discover'" link="/discover">
        <img slot="icon" src="../../assets/tabbar/tabbar_discover@2x.png">
        <img slot="icon-active" src="../../assets/tabbar/tabbar_discoverHL@2x.png">
        <span slot="label">发现</span>
      </tabbar-item>
      
      <tabbar-item :selected="type === '/me'" link="/me" show-dot>
        <img slot="icon" src="../../assets/tabbar/tabbar_me@2x.png">
        <img slot="icon-active" src="../../assets/tabbar/tabbar_meHL@2x.png">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  props: {
    type: String
  },
  mounted () {
    console.log(this.type)
  }
}
</script>

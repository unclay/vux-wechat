<template>
  <div>
    <search :autoFixed="false" v-model="searchKey"></search>
    <group style="margin-top: -21px;">
      <cell title="新的朋友">
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/contacts/plugins_FriendNotify@2x.png">
      </cell>
      <cell title="群聊">
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/contacts/add_friend_icon_addgroup@2x.png">
      </cell>
      <cell title="标签">
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/contacts/Contact_icon_ContactTag@2x.png">
      </cell>
      <cell title="公众号">
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/contacts/add_friend_icon_offical@2x.png">
      </cell>
    </group>

    <group v-for="userItem of users" :key="userItem" :title="userItem.title">
      <cell v-for="item of userItem.list" :key="item" :title="item.name">
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/contacts/add_friend_icon_offical@2x.png">
      </cell>
    </group>
    <navbar type="/contacts"></navbar>
  </div>
</template>

<script>
import { Group, Cell, Search } from 'vux'
import { Navbar } from '../../components'
export default {
  name: 'contacts',
  components: {
    Navbar,
    Group,
    Cell,
    Search
  },
  data () {
    return {
      searchKey: '',
      users: [{
        title: 'A',
        list: [
          {
            avatar: '../../assets/contacts/add_friend_icon_offical@2x.png',
            name: '阿爸'
          }
        ]
      },
      {
        title: 'B',
        list: [
          {
            avatar: '../../assets/contacts/add_friend_icon_offical@2x.png',
            name: '宝宝'
          }
        ]
      }]
    }
  }
}
</script>

<template>
  <div>
    <group gutter="15px">
      <!-- <cell-box style="padding: 11px 15px 12px 14px;" is-link>
        <cell title="相册" is-link>
          <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/temp/img/avatar.jpg">
          <img slot="icon" width="40" style="display: block; margin-right: 12px;" :src="avatar">
        </cell>
      </cell-box> -->
      <!-- <cell-box> -->
      <cell title="Clay" link="123" inline-desc="微信号：Megolin">
        <!-- <x-img slot="icon" class="me-avatar" :src="avatar" :webp-src="`${avatar}?type=webp`"></x-img> -->
        <img slot="icon" class="me-avatar" src="../../assets/temp/img/avatar.jpg">
        <!-- <x-img slot="default" class="me-qrcode" :src="qrcode" :webp-src="`${qrcode}?type=webp`"></x-img> -->
        <img slot="default" class="me-qrcode" src="../../assets/me/qrcode.png">
      </cell>
        
      <!-- </cell-box> -->
    </group>

    <group>
      <cell title="相册" is-link>
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/me/MoreMyAlbum@2x.png">
      </cell>
      <cell title="收藏" is-link>
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/me/MoreMyFavorites@2x.png">
      </cell>
      <cell title="钱包" is-link>
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/me/MoreMyBankCard@2x.png">
      </cell>
      <cell title="卡包" is-link>
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/me/MyCardPackageIcon@2x.png">
      </cell>
    </group>

    <group>
      <cell title="表情" is-link>
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/me/MoreExpressionShops@2x.png">
      </cell>
    </group>

    <group>
      <cell title="设置" is-link>
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/me/MoreSetting@2x.png">
      </cell>
    </group>
    <navbar type="/me"></navbar>
  </div>
</template>

<script>
import { Group, Cell, CellBox, Flexbox, FlexboxItem, XImg } from 'vux'
import { Navbar } from '../../components'
import avatar from '../../assets/temp/img/avatar.jpg'
import qrcode from '../../assets/me/qrcode.png'

export default {
  name: 'me',
  components: {
    Navbar,
    Group,
    Cell,
    CellBox,
    Flexbox,
    FlexboxItem,
    XImg
  },
  data () {
    return {
      avatar: avatar,
      qrcode: qrcode,
      avatar1: avatar,
      qrcode1: qrcode
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style lang="less">
@import url(./me.less);
</style>

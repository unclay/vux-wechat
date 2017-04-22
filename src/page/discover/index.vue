<template>
  <div>
    <group gutter="15px">
      <cell title="朋友圈" is-link>
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/discover/ff_IconShowAlbum@2x.png">
      </cell>
    </group>

    <group>
      <cell title="扫一扫" is-link>
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/discover/ff_IconQRCode@2x.png">
      </cell>
      <cell title="摇一摇" is-link>
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/discover/ff_IconShake@2x.png">
      </cell>
    </group>

    <group>
      <cell title="附近的人" is-link>
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/discover/ff_IconLocationService@2x.png">
      </cell>
      <cell title="漂流瓶" is-link>
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/discover/ff_IconBottle@2x.png">
      </cell>
    </group>

    <group>
      <cell title="购物" is-link>
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/discover/CreditCard_ShoppingBag@2x.png">
      </cell>
      <cell title="游戏" is-link>
        <img slot="icon" width="24" style="display: block; margin-right: 12px;" src="../../assets/discover/MoreGame@2x.png">
      </cell>
    </group>
    <navbar type="/discover"></navbar>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import { Navbar } from '../../components'
export default {
  name: 'discover',
  components: {
    Navbar,
    Group,
    Cell
  }
}
</script>

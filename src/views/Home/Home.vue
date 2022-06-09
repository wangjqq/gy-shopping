<template>
  <div class="home">
    <!-- 三级联动全局组件 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer/ListContainer.vue'
import Recommend from '@/views/Home/Recommend/Recommend.vue'
import Rank from '@/views/Home/Rank/Rank.vue'
import Like from '@/views/Home/Like/Like.vue'
import Floor from '@/views/Home/Floor/Floor.vue'
import Brand from '@/views/Home/Brand/Brand.vue'
export default {
  components: {
    Recommend,
    ListContainer,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style lang="less" scoped>
</style>
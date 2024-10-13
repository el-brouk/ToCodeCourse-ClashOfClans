<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr" />
      <h1 style="color: #ffffff" class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>

      <CardItemStats :item="item" />
      <div>
        <router-link to="/" class="btn btnWhite">Back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items.js'
import CardItemStats from '@/components/UI/CardItemStats.vue'

export default {
  components: {
    CardItemStats
  },

  data() {
    return {
      item: null
    }
  },

  async created() {
    const alias = this.$route.params.itemAlias
    const item = alias && items.find(el => el.alias === alias)
    console.log(item)
    if (!item) {
      return await this.$router.push({ name: '404' })
    } else {
      this.item = item
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss">
.wrapper-person {
  text-align: center;
  .card-stats {
    margin: 30px 0;
    border-radius: 14px;
  }
}
</style>

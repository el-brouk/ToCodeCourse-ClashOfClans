<template>
  <div class="wrapper">
    <HeaderBase :title="title" />
    <div class="wrapper-content">
      <div class="container">
        <!-- <h1>Hello</h1> -->
        <router-view />
      </div>
    </div>
    <FooterBase />
  </div>
</template>

<script>
import HeaderBase from "@/components/HeaderLayout.vue"
import FooterBase from "@/components/FooterLayout.vue"

export default {
  components: { HeaderBase, FooterBase },

  data() {
    return {
      title: "MyTitle",
    }
  },
}
</script>

<style lang="scss"></style>

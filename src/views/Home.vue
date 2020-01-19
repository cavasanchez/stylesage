<template>
  <v-container>
    <v-row>
      <v-col>
        <router-link class="link-home" to="/cat-clicker">Cat clicker</router-link>
      </v-col>
      <v-col>
        <router-link class="link-home" to="/animated-gifs">Animated Gifs</router-link>
      </v-col>
      <v-col>
        <router-link class="link-home" to="/coupons">Coupons</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.link-home{
  font-size: 20px;
}
</style>
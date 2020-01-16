<template>
  <v-container>
    <v-row>
      <v-col>
        <router-link to="/cat-clicker">Cat clicker</router-link>
      </v-col>
      <v-col>
        <router-link to="/animated-gifs">Animated Gifs</router-link>
      </v-col>
      <v-col>
        <router-link to="/coupons">Coupons</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home"
};
</script>

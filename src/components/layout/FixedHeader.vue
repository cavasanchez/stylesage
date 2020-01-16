<template>
  <v-app-bar app color="primary" dark>
    <div id="brand-logo">ACME</div>
    <v-spacer></v-spacer>
    <div id="current-user">Hello John!</div>
  </v-app-bar>
</template>
<style lang="scss" scoped>
#brand-logo {
  color: whitesmoke;
}
#current-user {
  text-transform: capitalize;
}
</style>
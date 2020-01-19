<template>
  <v-card class="mx-auto" height="375px">
    <v-img height="250px" :src="gifurl" :alt="title"></v-img>

    <v-card-text class="text--primary">
      <div class="card-title">{{title}}</div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="purple" text>Go</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    gifurl: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.card-title {
  min-height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
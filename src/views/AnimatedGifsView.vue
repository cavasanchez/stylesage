<template>
  <v-app>
    <FixedHeader />

    <v-content id="main-content">
      <v-container>
        <h1>Nice pictures</h1>
        <v-row>
          <v-col cols="6" sm="4" md="4" lg="3" v-for="eachGif in gifList" :key="eachGif.gifurl">
            <GifDetail :gifurl="eachGif.gifurl" :title="eachGif.title" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <FixedFooter />
  </v-app>
</template>

<style lang="scss" scoped>
#main-content {
  margin-bottom: 56px;
}
</style>

<script>
import GifDetail from "@/components/gif/GifDetail";
import FixedHeader from "@/components/layout/FixedHeader";
import FixedFooter from "@/components/layout/FixedFooter";

export default {
  data() {
    return {
      gifList: []
    };
  },
  components: {
    GifDetail,
    FixedHeader,
    FixedFooter
  },
  created() {
    //Get mock cats.json
    fetch("/gifs.json")
      .then(res => res.json())
      .then(gifs => (this.gifList = gifs));
  }
};
</script>
<template>
  <div>
    <CatNameList :cats="catList" @selectCat="selectCat" />
    <CatDetail v-if="catSelected" :catDetails="catSelected" @incrementClick="incrementClick" />
    <p v-else>Click on a cat name!</p>
  </div>
</template>
<script>
import CatNameList from "@/components/cat/CatNameList";
import CatDetail from "@/components/cat/CatDetail";

export default {
  data() {
    return {
      catList: [],
      catSelected: null
    };
  },
  methods: {
    selectCat(catSelectedId) {
      this.catSelected = this.catList.find(el => el.id == catSelectedId);
    },
    incrementClick(catSelectedId) {
      const catSelected = this.catList.find(el => el.id == catSelectedId);
      if (catSelected) {
        catSelected.clicks++;
      }
    }
  },
  components: { CatNameList, CatDetail },

  created() {
    //Get mock cats.json
    fetch("/cats.json")
      .then(res => res.json())
      .then(cats => (this.catList = cats));
  }
};
</script>
<style lang="sass" scoped>

</style>
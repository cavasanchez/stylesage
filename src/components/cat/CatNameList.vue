<template>
  <div>
    <ul>
      <li @click="selectCat(eachCat)" v-for="eachCat in cats" :key="eachCat.id">{{eachCat.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["cats"],
  methods: {
    selectCat(cat) {
      this.$emit("selectCat", cat.id);
    }
  }
};
</script>
<style lang="scss" scoped>
ul > li {
  display: inline-block;
  margin: 4px;
}
</style>
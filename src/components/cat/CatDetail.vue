<template>
  <div @click="incrementClick(catDetails.id)" class="cat-container">
    <p>
      <span>
        Name:
        <strong>{{catDetails.name}}</strong>
      </span>
      <span>
        Clicks:
        <strong>{{catDetails.clicks}}</strong>
      </span>
    </p>
    <img :src="catDetails.image" width="300" :alt="catDetails.name" />
  </div>
</template>

<script>
export default {
  props: ["catDetails"],
  methods: {
    incrementClick(id) {
      this.$emit("incrementClick", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.cat-container {
  padding: 12px;
}
</style>
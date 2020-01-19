<template>
  <div>
    <h3>Retailers</h3>
    <v-row>
      <v-col v-for="(retailerData, retailerName) in retailersData" :key="retailerName">
        <RetailerDetails :retailerData="retailerData" :retailerName="retailerName" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import RetailerDetails from "@/components/retailer/RetailerDetails";
export default {
  props: ["retailersData"],
  components: {
    RetailerDetails
  }
};
</script>
<style lang="scss" scoped>
</style>
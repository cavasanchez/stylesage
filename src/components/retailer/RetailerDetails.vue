<template>
  <v-col>
    <h2 class="title-retail">{{retailerName}}</h2>
    <v-row>
      <v-col>
        <CouponDetailCard
          v-if="percentOffDetails"
          title="Percent Off"
          :couponData="percentOffDetails"
          unit="%"
        />
      </v-col>
      <v-col>
        <CouponDetailCard
          v-if="dollarOffDetails"
          title="Dollar Off"
          :couponData="dollarOffDetails"
          unit="$"
        />
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
import CouponDetailCard from "@/components/coupon/CouponDetailCard";
const _ = require("lodash");

export default {
  props: ["retailerData", "retailerName"],
  data() {
    return {
      percentOffDetails: {},
      dollarOffDetails: {}
    };
  },
  methods: {
    getPercentOffDetails() {
      const couponsPercentOff = this.retailerData.filter(
        el => el.promotion_type === "percent-off"
      );

      this.percentOffDetails = _(couponsPercentOff)
        .groupBy("value")
        .value();
    },

    getDollarOffDetails() {
      const couponsDollarOff = this.retailerData.filter(
        el => el.promotion_type === "dollar-off"
      );

      this.dollarOffDetails = _(couponsDollarOff)
        .groupBy("value")
        .value();
    }
  },
  components: {
    CouponDetailCard
  },
  created() {
    this.getDollarOffDetails();
    this.getPercentOffDetails();
  }
};
</script>
<style lang="scss" scoped>
.title-retail{
    text-transform: capitalize;
    color: black
}
</style>
<template>
  <v-container>
    <h1>Coupons Dashboard</h1>

    <v-row class="dashboard-section">
      <v-col>
        <h3>Num coupon types</h3>
        <CouponTypesTable :couponsType="couponsType" />
      </v-col>
    </v-row>

    <v-row class="dashboard-section">
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
    <v-row class="dashboard-section">
      <RetailersList :retailersData="retailersData" />
    </v-row>

    <v-row class="dashboard-section">
      <v-col>
        <v-row>
          <v-col>
            <h3>Title and description important words:</h3>
            <WordCloud :words="importantTitles" />
            <WordCloud :words="importantDescriptions" />
          </v-col>
        </v-row>
        <v-row>
          <div id="cloudDraw"></div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const _ = require("lodash");
import CouponDetailCard from "@/components/coupon/CouponDetailCard";
import RetailersList from "@/components/retailer/RetailersList";
import CouponTypesTable from "@/components/coupon/CouponTypesTable";
import MOCK_COUPONS from "../../public/coupons";
import WordCloud from "@/components/chart/WordCloud";
export default {
  data() {
    return {
      couponsList: [],
      couponsType: 0,
      percentOffDetails: {},
      dollarOffDetails: {},
      retailersData: {},
      importantTitles: {},
      importantDescriptions: {}
    };
  },
  methods: {
    getCouponsType() {
      const allCoupons = this.couponsList;
      this.couponsType = _(allCoupons)
        .groupBy("promotion_type")
        .value();
    },

    getPercentOffDetails() {
      const couponsPercentOff = this.couponsList.filter(
        el => el.promotion_type === "percent-off"
      );

      this.percentOffDetails = _(couponsPercentOff)
        .groupBy("value")
        .value();
    },

    getDollarOffDetails() {
      const couponsDollarOff = this.couponsList.filter(
        el => el.promotion_type === "dollar-off"
      );

      this.dollarOffDetails = _(couponsDollarOff)
        .groupBy("value")
        .value();
    },

    getRetailerDetails() {
      this.retailersData = _(this.couponsList)
        .groupBy("webshop_id")
        .value();
    },

    getImportantWords(arrayWords) {
      let allWordsTogether = [];
      arrayWords.forEach(el => {
        allWordsTogether = allWordsTogether.concat(el.split(" "));
      });

      //remove short words and numbers
      const pattern = new RegExp("^[^0-9]{4,20}$", "g");
      allWordsTogether.filter(el => pattern.test(el));

      const occurences = _.values(_.groupBy(allWordsTogether)).map(d => ({
        name: d[0],
        count: d.length
      }));

      //return elements with 10 or more occurences
      const commonWords = occurences.filter(el => {
        if (el.count > 10) {
          return el.name;
        }
      });

      return _.map(commonWords, "name");
    },

    getKeywords() {
      const allTitles = _.map(this.couponsList, "title");
      const allDescriptions = _.map(this.couponsList, "description");

      this.importantTitles = this.getImportantWords(allTitles);
      this.importantDescriptions = this.getImportantWords(allDescriptions);
    }
  },
  components: {
    CouponDetailCard,
    RetailersList,
    CouponTypesTable,
    WordCloud
  },
  created() {
    //Simulate an API request and get coupon data
    this.couponsList = MOCK_COUPONS.coupons;
    this.getCouponsType();
    this.getPercentOffDetails();
    this.getDollarOffDetails();
    this.getRetailerDetails();
    this.getKeywords();
  }
};
</script>

<style lang="scss" scoped>
.dashboard-section {
  border: solid 1px #949494;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-top: 8px;
}
</style>
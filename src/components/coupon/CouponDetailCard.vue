<template>
  <div>
    <h4>{{title}}</h4>
    <v-row>
      <v-col cols="8">
        <LineChart :chartdata="dataPie" />
      </v-col>
      <v-col cols="4">
        <p>
          Max:
          <strong>{{max}}</strong>
        </p>
        <p>
          Min:
          <strong>{{min}}</strong>
        </p>
        <p>
          AVG:
          <strong>{{avg}} {{unit}}</strong>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LineChart from "@/components/chart/LineChart";
import CONSTANTS from "@/utils/constants.js";
export default {
  props: ["title", "couponData", "unit"],
  data() {
    return {
      max: 0,
      min: 0,
      avg: 0,
      dataPie: {}
    };
  },
  methods: {
    calculateValueDetails() {
      this.min = Object.keys(this.couponData)[0];
      this.max = Object.keys(this.couponData)[
        Object.keys(this.couponData).length - 1
      ];

      const arrayKeys = Object.keys(this.couponData);
      this.avg = parseInt(
        arrayKeys.reduce((a, b) => {
          a = parseInt(a);
          b = parseInt(b);
          return (a += b);
        }) / arrayKeys.length
      );
    },
    generateLineChart() {
      let dataset = [];
      let labels = [];
      for (var prop in this.couponData) {
        dataset.push(this.couponData[prop].length);
        labels.push(`${prop}${this.unit} discount`);
      }

      const color =
        CONSTANTS.backgroundColors[
          Math.floor(Math.random() * CONSTANTS.backgroundColors.length)
        ];

      this.dataPie = {
        datasets: [
          {
            data: dataset,
            label: "Discounts",
            backgroundColor: color
          }
        ],
        labels
      };
    }
  },
  components: { LineChart },
  created() {
    this.calculateValueDetails();
    this.generateLineChart();
  }
};
</script>
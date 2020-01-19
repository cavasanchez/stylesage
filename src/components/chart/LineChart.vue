
<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    }
  },
  mounted() {
    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: false
    };
    this.renderChart(this.chartdata, defaultOptions);
  }
};
</script>
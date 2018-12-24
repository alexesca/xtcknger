<template>
  <div class="company">
    <h1>{{company.companyName}}</h1>
    <apexchart width="100%" height="500" type="area" :options="options" :series="series"></apexchart>
    <p>
        {{company.description}}
    </p>
  </div>
</template>

<script>
import { get } from "axios";

export default {
  data: function() {
    return {
      data: null,
      company: null,
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [2013, 2014, 2015, 2016, 2017, 2018]
        }
      },
      series: [
        {
          name: "series-1",
          data: []
        }
      ]
    };
  },
  created() {
      this.fetchData();
      this.fetchCompanyData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      get(
        `https://api.iextrading.com/1.0/stock/${
          this.$route.params.symbol
        }/chart/5y`
      ).then(res => {
        this.series[0].data = this.extractClosingPrice(res.data);
        this.loading = false;
      });
    },
    fetchCompanyData() {
      this.error = this.post = null;
      this.loading = true;
      get(
        `https://api.iextrading.com/1.0/stock/${
          this.$route.params.symbol
        }/company`
      ).then(res => {
        this.company = res.data;
        this.loading = false;
      });
    },
    extractClosingPrice(data) {
        const list = [];
        for (let i = 0; i < data.length; i +=5) {
            const trade = data[i];
            list.push(trade.close)
        }
        return list;
    }    
  }
};
</script>

<style lang="scss" scoped>
.company {
    width: 100%;
}
</style>


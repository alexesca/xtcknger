<template>
  <div class="companies">
    <ul>
      <li v-for="company in companies" v-bind:key="company.symbol">
         <router-link v-bind:to="composeLink(company.symbol)">{{ company.symbol }}</router-link>
        {{ company.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { get } from "axios";

export default {
  name: "companies",
  data() {
    return {
      loading: false,
      companies: null,
      error: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      get("https://api.iextrading.com/1.0/ref-data/symbols").then(companies => {
        this.companies = companies.data;
        this.loading = false;
      });
    },
    composeLink: function(symbol) {
      return `/company/${symbol}`;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

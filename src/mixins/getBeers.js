export const getBeers = {
  methods: {
    getBeers() {
      const baseURI = `./beers.json`;
      this.$http.get(baseURI).then(result => {
        this.beers = result.data;
      });
    }
  }
};

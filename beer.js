Vue.component('beer', {
  props: ['beer'],
  data: function() {
    return {
      active: false
    };
  },
  methods: {
    mouseOver: function() {
      this.active = !this.active;
    }
  },
  computed: {
    highPercentage: function() {
      if (this.beer.percentage > 5) {
        return true;
      }
    },
    highPercentageClass: function() {
      if (this.highPercentage) {
        return 'danger';
      }
    }
  },
  template: `<div class="beer-container">
        <span>{{beer.title}}</span> -
        <span>{{beer.brewery}}</span> -
        <span @mouseover="mouseOver" @mouseout="mouseOver" :class="highPercentageClass">{{beer.percentage.toFixed() }} %</span>
        <div :class="highPercentageClass" class="tool-tip" v-if="active">
            <span v-if="highPercentage">
                Dit bier bevat een hoog percentage alcohol en kan schadelijk zijn voor de gezondheid.
            </span>
            <span v-else>
                Dit bier bevat alcohol.
            </span>
        </div>
    </div>`
});

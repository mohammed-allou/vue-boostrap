let config = {
  el: "#app",
  data: {
    basket: {
      products: [],
      total: 0,

    },
    products: [
      {
        name: "Tajin",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card s content.",
        price: 30
      },
      {
        name: "Plat de dinde",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card s content.",
        price: 15
      },
      {
        name: "klouklou",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card s content.",
        price: 20
      }
    ]
  },
  methods: {
    addToBasketGlobal: function (product) {
      this.basket.products.push(product)
    }
  },
  computed: {
    totalAchat() {
      let total = 0
      this.basket.products.forEach(product => {
        total += product.price
      })
      return total
    }
  }
};

Vue.component("product", {
  props: {
    product: Object,
    n: {
      type: Number,
      default: 0
    },

  },
  data() {
    return {
      nbClick: 0
    };
  },
  methods: {
    incrementNbClick: function () {
      this.nbClick++;
    },
    addToBasket: function () {
      // this.action(this.product);
      this.$emit("actionmohammed", this.product)
    }
  },
  
  template: `<div class="card-deck ">
    
    <div class="card rounded-lg" style="width: 18rem; padding:3px;margin:25px">
          <img
              :src='"https://lorempixel.com/800/400/food/" + (n + 1)'
              class="card-img-top"
          >
          <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <a href="#" class="btn btn-primary btn-sm" @click="addToBasket" >Acheter
              <span class="badge badge-light" data-toggle="tooltip" data-placement="bottom" title="Cliqué ici pour acheter">
              {{ product.price }} DH</span></a>
              <a href="#" class="btn btn-primary btn-sm" @click="incrementNbClick">Incrementer
              <span class="badge badge-light">{{ nbClick }}</span></a>
          </div>
      </div>
      </div>
      `
});

let vue = new Vue(config);
console.log(vue);

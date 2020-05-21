
Vue.component('product', {
    template: `
    <div class="card" style="width: 18rem;" >
    <img  :src='"https://lorempixel.com/800/400/food/" + (n + 1)' class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <p class="card-text">{{product.description}}</p>
      <button type="button" class="btn btn-success">Acheté</button>
       </div>
  </div>`,
    props: ['product'],
})
let app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                name: "Tajin",
                price: 45,
                description: "Kefta, Dinde, Legume + viande"
            },
            {
                name: " Sandwitch",
                price: 25,
                description: "Kefta, Dinde, Legume + viande"

            },
            {
                name: "Tacos",
                price: 30,
                description: "Kefta, Dinde, Legume + viande"
            }
        ]
    },
    commandes: []
})


import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.29/vue.esm-browser.min.js';

const apiUrl = 'https://vue3-course-api.hexschool.io/v2';
const api_path = '124478313';

const app = createApp({
    data() {
        return {
            cartData: {},
            product: [],
        };
    },
    methods: {
        getProducts() {
            axios.get(`${apiUrl}/api/${api_path}/products/all`)
                .then((res) => {
                    console.log(res);
                    this.products = res.data.products;
                });
        },
        openProductModal() {

        }

    },
    mounted() {
        this.getProduct();
    }
});
//$refs
app.component('product-modal', {
    template: '#userProductModal',
    data() {
        return {
            modal: {}
        };
    },
    methods: {
        openModal() {
            myModal.show();
        }
    },
    mounted() {
        this.modal = new bootstrap.Modal(this.$refs.modal);

    },
});
app.mount('#app');

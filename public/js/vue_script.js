const vm = new Vue({
    el: '#burgers',
    data: {
        menu: food
    }
})

const getBurgers = function() {
    let result = [];
    let burgers = document.getElementsByName('burger');
    for (let item in burgers) {

        if (burgers[item].checked == true) {
            result.push(burgers[item].value)
        }
    }
    return result
}


const vmOne = new Vue({
    el: '#main',
    data: {
        burgers: [],
        name: '',
        email: '',
        streetname: '',
        housenr: '',
        payment: '',
        gender: ''
    },

    methods: {
        submit: function() {
            this.burgers = getBurgers()
            console.log(this.burgers)
        },

    }
});
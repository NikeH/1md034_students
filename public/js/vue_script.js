/* jslint es6:true, indent: 2 */
/* global Vue, io */
/* exported vm */

'use strict';
const socket = io();


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
        payment: '',
        gender: '',
        orders: {},
        orderId: 0,
        localOrder: {
            details: {
                x: 0,
                y: 0
            }
        }
    },

    methods: {
        submit: function() {
            this.burgers = getBurgers()
            console.log(this.burgers)
        },
        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            this.orderId++;
            return this.orderId;
        },
        addOrder: function() {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            this.burgers = getBurgers();
            console.log(this.burgers)
            socket.emit('addOrder', {
                orderId: this.getNext(),
                details: {
                    x: this.localOrder.details.x,
                    y: this.localOrder.details.y
                },
                orderItems: this.burgers,
                infoArray: [this.name, this.email, this.payment, this.gender]
            });
        },
        displayOrder: function(event) {
            /* */
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            this.localOrder.details = {
                x: event.clientX - 10 - offset.x,
                y: event.clientY - 10 - offset.y,
            };

        }
    }
});
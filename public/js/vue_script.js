let chickenBurger = new menuItem('Chicken Burger',
    'meat',
    650,
    'gluten & lactose',
    "https://media.giphy.com/media/66e8QBYiL0COs/giphy.gif")

const vm = new Vue({
    data: chickenBurger
})

console.log(vm.info());
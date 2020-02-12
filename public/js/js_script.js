function menuItem(name, ingredients, kcal, allergies, image) {
    this.name = name
    this.ingredients = ingredients;
    this.kcal = kcal;
    this.allergies = allergies;
    this.image = image;
    this.info = function() {
        return this.name + ' ' + this.kcal;
    }
}

let burgerOne = new menuItem('No Chicken Burger',
    'vegan',
    750,
    'gluten & nuts',
    "https://media.giphy.com/media/66e8QBYiL0COs/giphy.gif");
let burgerTwo = new menuItem('Plant Beef',
    'veggie',
    650,
    'soy & nuts',
    "https://media.giphy.com/media/WBTUlyKBVlTTa/giphy.gif");

let burgerThree = new menuItem('Halloumi',
    'veggie',
    760,
    'gluten & eggs',
    "https://media.giphy.com/media/yoJC2JdQQSQA3PWovu/giphy.gif");


let burgerFour = new menuItem('Tripple fake beef',
    'veggie',
    630,
    'lactose',
    "https://media.giphy.com/media/3oEdv5S8Th6b9gsNqM/giphy.gif");

let burgerFive = new menuItem('Quatro quesos',
    'veggie',
    720,
    'lactose & eggs',
    "https://media.giphy.com/media/l4Ki5FgQxmVUfkOvC/giphy.gif");

let menu = [burgerOne, burgerTwo, burgerThree, burgerFour, burgerFive]

let myElement = document.getElementById("menuID");


for (let burger in menu) {

    if (menu[burger].allergies == "gluten & nuts") {
        let listItem = document.createElement("li")
        let nodeItem = document.createTextNode(menu[burger].name + ' ' + menu[burger].allergies)
        console.log(menu[burger])

        listItem.appendChild(nodeItem)
        myElement.appendChild(listItem)
    }
}
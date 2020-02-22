/*function menuItem(name, ingredients, kcal, allergies, image) {
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



for (let burger in menu) {

    {
        let myElement = document.getElementById("burgers");

        console.log(myElement)
        let burgerDiv = document.createElement("div")

        let burgerP = document.createElement("p")
        let burgerName = document.createTextNode(menu[burger].name)
        burgerP.appendChild(burgerName)

        let burgerImage = document.createElement("img")
        burgerImage.src = menu[burger].image

        let burgerList = document.createElement("ul")
        let burgerIngredients = document.createElement("li")
        let IngtNode = document.createTextNode(menu[burger].ingredients)
        burgerIngredients.appendChild(IngtNode)
        burgerList.appendChild(burgerIngredients)

        let burgerKcal = document.createElement("li")
        let KcalNode = document.createTextNode(menu[burger].kcal)
        burgerKcal.appendChild(KcalNode)
        burgerList.appendChild(burgerKcal)

        let burgerAllergies = document.createElement("li")
        let AllNode = document.createTextNode(menu[burger].allergies)
        burgerAllergies.appendChild(AllNode)
        burgerList.appendChild(burgerAllergies)

        burgerDiv.appendChild(burgerP)
        burgerDiv.appendChild(burgerImage)
        burgerDiv.appendChild(burgerList)
        myElement.appendChild(burgerDiv)

    }
}*/
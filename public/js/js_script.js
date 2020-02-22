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
}
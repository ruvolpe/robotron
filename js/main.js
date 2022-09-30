const controlerAdjuster = document.querySelectorAll("[data-controler]")
const statistics = document.querySelectorAll("[data-statistic]")


const equipments = {
    "arms": {
        "strenght": 29,
        "power": 35,
        "energy": -21,
        "speed": -5
    },

    "shielding": {
        "strenght": 41,
        "power": 20,
        "energy": 0,
        "speed": -20
    },
    "cores":{
        "strenght": 0,
        "power": 7,
        "energy": 48,
        "speed": -24
    },
    "guns":{
        "strenght": 27,
        "power": 21,
        "energy": -32,
        "speed": 42
    },
    "rockets":{
        "strenght": 0,
        "power": 28,
        "energy": 0,
        "speed": -2
    }
}


controlerAdjuster.forEach((element) => {
    element.addEventListener("click", (event) =>{
        addEquipment(event.target.dataset.controler, event.target.parentNode, event.target.dataset.equipment)
    })
})

function addEquipment (operator, controlerAdjuster, equipment) {
    const component = controlerAdjuster.querySelector("[data-counter]")

    if (operator === "+"){
        component.value = parseInt(component.value) + 1
        statistics.forEach((element) => {
            element.textContent = parseInt(element.textContent) + equipments[equipment][element.dataset.statistic]
        })
    } else {
        if(component.value > 0){
            component.value = parseInt(component.value) - 1
            statistics.forEach((element) => {
                element.textContent = parseInt(element.textContent) - equipments[equipment][element.dataset.statistic]
            })
        }
    }
}
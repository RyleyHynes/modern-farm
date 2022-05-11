import {createPlan} from "./plan.js"
import { addPlant } from "./field.js"
import { usePlants} from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"


//Our created plan is now our yearly plan so we need to invoke the function from plan module and assigning its return value to yearlyPlan
const yearlyPlan = createPlan();
console.log(yearlyPlan)

//**** 4th Step **** invoke the function addPlant and reassign its return value to a new variable

// const asparagusPlant = addPlant(createAsparagus())
// const cornPlant = addPlant(createCorn())
// const potatoPlant = addPlant(createPotato())
// const soybeanPlant = addPlant(createSoybean())
// const sunflowerPlant = addPlant(createSunflower())
// const wheatPlant = addPlant(createWheat())

// console.log(asparagusPlant, cornPlant, potatoPlant, soybeanPlant, sunflowerPlant, wheatPlant)

//**** 5th Step ****invoke the function plantSeeds with the yearlyPlan as its argument and assign its return value to plantedSeeds 

const plantedSeeds = plantSeeds(yearlyPlan)




const plantsHarvested = harvestPlants(usePlants())
console.log(plantsHarvested)


//We then need to check our logic and invoke the Catalog function on the main.
const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = Catalog(plantsHarvested)




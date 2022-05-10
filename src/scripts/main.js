import {createPlan} from "./plan.js"
import { addPlant } from "./field.js"
import { usePlants} from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
// import {harvestPlants} from "./harvester.js"
import { Catalog } from "./catalog.js"

//invoke the different crp functions and assign their return value to a new variable
//invoking function from plan module and assigning its return value to yearlyPlan
const yearlyPlan = createPlan();
console.log(yearlyPlan)

//invoke the function addPlant and reassign its return value to a new variable
// const asparagusPlant = addPlant(createAsparagus())
// const cornPlant = addPlant(createCorn())
// const potatoPlant = addPlant(createPotato())
// const soybeanPlant = addPlant(createSoybean())
// const sunflowerPlant = addPlant(createSunflower())
// const wheatPlant = addPlant(createWheat())

// console.log(asparagusPlant, cornPlant, potatoPlant, soybeanPlant, sunflowerPlant, wheatPlant)

//invoke the function usePlants and reassign its return value to a new variable

const plantedSeeds = plantSeeds(yearlyPlan)


// console.log(usePlants())



const plantsHarvested = harvestPlants(usePlants())
console.log(plantsHarvested)


//We then need to check our logic and invoke the Catalog function on the main.
const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = Catalog(plantsHarvested)



// // console.log("Welcome to the main module")
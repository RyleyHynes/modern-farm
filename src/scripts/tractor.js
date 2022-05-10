import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"



export const plantSeeds = (yearlyPlan) => {
    for (const seeds of yearlyPlan) {
        for (const seed of seeds) {
    if (seed === "Asparagus") {
    addPlant(createAsparagus())
    } else if (seed === "Corn") {
     addPlant(createCorn())
    } else if (seed === "Potato") {
    addPlant(createPotato())
    } else if (seed === "Soybean") {
   addPlant(createSoybean())
    } else if (seed === "Sunflower") {
     addPlant(createSunflower())
    } else if (seed === "Wheat") {
    addPlant(createWheat())
    }
}
}
}

// const asparagusSeed = createAsparagus()

// const cornSeed = createCorn()
// // console.log(cornSeed)

// const potatoSeed = createPotato()
// // console.log(potatoSeed)

// const soybeanSeed = createSoybean()
// // console.log(soybeanSeed)

// const sunflowerSeed = createSunflower()
// // console.log(sunflowerSeed)

// const wheatSeed = createWheat()
// // console.log(wheatSeed)




//  console.log(asparagusSeed, cornSeed, potatoSeed, soybeanSeed, sunflowerSeed, wheatSeed)
import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


//here we are creating an exportable function named plantSeeds.
export const plantSeeds = (yearlyPlan) => {
    //in this function we are using a forOf loop to iterate through the yearlyPlan
    for (const seeds of yearlyPlan) {
        for (const seed of seeds) {
            //for each crop if the seed is "this specific crop", We are invoking the createAsparagus argument inside of the addPlant function which pushes an asparagus object into a copy of the plantsGrowing array in the field file. 
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


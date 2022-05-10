//Defining a variable in this module whose initial value is an empty array
//This array will store all of the plants that are growing in the field
const plantsGrowing = [];

//Define and export a function named addPlant.
//This function must accept a seed object as an input
//The function will add the seed to the field.
export const addPlant = (seedObj) => {
    let arrayCheck = Array.isArray(seedObj)
    if (arrayCheck === true) {
        plantsGrowing.push(seedObj[0])
        plantsGrowing.push(seedObj[1])
    } else {
        plantsGrowing.push(seedObj)
    }
    return plantsGrowing
}

//Define and export a function named usePlants that returns a copy of the array of plants
export const usePlants = () => {
    let plantsGrowingArray = Array.from(plantsGrowing)
    return plantsGrowingArray
}
//Define and export a function with plantsGrowing as a parameter
export const harvestPlants = (plantsGrowing) => {
//create an empty array of seed objects
    let harvestedFoods = []
    //iterate the array of growingPlants from the field module. 
    //On each plant, get the value of the output property
    // to iterate through the plants we use a forOf loop
    for (const plant of plantsGrowing) {
        if (plant.type === "Corn") {
            plant.output = plant.output / 2}
        for (let i = 0; i < plant.output; i++) {
                harvestedFoods.push(plant)
        }
    }
    return harvestedFoods
}

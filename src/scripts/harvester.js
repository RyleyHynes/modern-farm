//Define and export a function harvestedPlants with plantsGrowing as a parameter
export const harvestPlants = (plantsGrowing) => {
    //create an empty array of seed objects
    let harvestedFoods = []
    //iterate the array of growingPlants from the field module. 
    //On each plant, get the value of the output property
    // to iterate through the plants we use a forOf loop
    for (const plant of plantsGrowing) {
        if (plant.type === "Corn") {
            plant.output = plant.output / 2}
                //in this for loops initialization we declare a variable that keeps track of how many times our loop has executed. 

                //index or i = 0 tells our counter to start at 0. 

                //The condition of this for loop is (index < plant.output). This tells the program that our loop should only run when the variable is less than 3. If i is equal to or greater than plant.output, our loop will stop.

                // index or i++ is an increment. This feature tells our program to add 1 to the variable each time the loop is executed. 
                for (let i = 0; i < plant.output; i++) {
                //here we are pushing all of the plants into the harvestedFoods array
                harvestedFoods.push(plant)
            }
        }
    return harvestedFoods
}


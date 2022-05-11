//module is responsible for defining 3 rows of crops to be planted.
//In each row, there are 6 plots of land.
//Each plot is randomly assigned one of the following types of food to grow
const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]
//here we are creating an exportable function createPlan
export const createPlan = () => {
        //contains an empty array named plan.
        const plan = []
        //in this for loops initialization we declare a variable that keeps track of how many times our loop has executed. 

        //index or i = 0 tells our counter to start at 0. 

        //The condition of this for loop is (index < 3). This tells the program that our loop should only run when the variable is less than 3. If i is equal to or greater than 3, our loop will stop.

        // index or i++ is an increment. This feature tells our program to add 1 to the variable each time the loop is executed. 
    for (let index = 0; index < 3; index++) {
                //inside of this loop we have an empty array that is assigned to the variable "row"
                const row = []
                //This loop starts at 0 and runs until our variable is less than 6. It also increments with every loop
                for (let j = 0; j < 6; j++) {
                //this loop pushes a random crop into the "row" array 6 times
                row.push(crop.next().value)
                }
                //once it is complete it pushes this row array into our plan
                plan.push(row)
        
    }
            //we then return the plan because this is the end result we are wanting
    return plan
}



//In a nested for loop like the one above it goes into the first loop, into the array, and then it goes through the second loop loop 6 times before returning to the outer one. The outer one will be visited in total 3 times before the entire nested loop is complete.


/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()







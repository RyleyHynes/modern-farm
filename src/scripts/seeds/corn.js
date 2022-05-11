//define and export a function for creating a seed. The corn function should return an array with two identical objects in it. 
export const createCorn = (cornObj) => {
    cornObj = [
    {
    type: "Corn",
    height: 180,
    output: 6
    },
    {
    type: "Corn",
    height: 180, 
    output: 6
    }
    ]
    return cornObj 
}
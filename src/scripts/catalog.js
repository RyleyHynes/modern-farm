//Defining and exporting a function named Catalog.
//This function accepts harvestedFoods array from the harvester module as a parameter.
export const Catalog = (harvestedFoods) => {
// We then need to create a variable for the HTML string to equal an empty string.
    let plantHTMLString = "";
//Iterate through the harvested foods array
 for (const plants of harvestedFoods) {
//Part of this code was provided but we interpolated the plant type.
    plantHTMLString += `<section class="plant">${plants.type}</section>`
}
// We then return the plantHTML string because that is what we want as our end result
return plantHTMLString
}

//We then need to check our logic and invoke the Catalog function on the main.

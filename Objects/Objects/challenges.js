// ================================================
// JavaScript Object Challenges
// ================================================

// Challenge 1: Make Your First Object
// Create an object called car with three properties:
// brand, model, and year. Give them any values you like.
// Log the whole object, then log just the brand.

// Your code here:

let car = {
    brand : " WayneTech",
    model :" Camry",
    year : 2005,
    color : " black"
}

console.log(car.brand);


let students = {
    John: {
        Math : 92,
        Art : 95
    },

    Patrick: {
        Math : 97,
        Art : 100
    }
}





// -----------------------------------------------

// Challenge 2: Change a Property
// Using your car object from Challenge 1, change the year to a newer one.
// Then log a message like "My car is now a 2023 Toyota!"

// Your code here:

car.year = 2023
console.log("my car is now a "+ car.year + car.brand)

// -----------------------------------------------

// Challenge 3: Add a New Property
// Add a new property called color to your car object.
// Then log "My car is [color]" using the color you added.

// Your code here:

console.log("my car is" + car.color)


// -----------------------------------------------

// Challenge 4: Nested Object
// Create an object called students with two student objects inside.
// Both students should have a grade for math and art.
// Log each student's art score.

// Your code here:

console.log("The art score for John is " + students.John.Art)
console.log("The art score for Patrick is " + students.Patrick.Art)

// -----------------------------------------------

// Challenge 5: Combining Objects and Functions
// Create an object called player with properties: name and score.
// Add a function called addPoints(points) inside the object
// that increases player.score by the number given and logs the new score.
// Call addPoints() a few times to test it.

// Your code here:




let player = {
    name : "Patrick",
    score : 0,
    addPoints : function(plusScore) {
        this.score = this.score + plusScore;
        console.log(this.score);
    }
}

player.addPoints(3);
player.addPoints(1);
player.addPoints(2232);
player.addPoints(324234242);




// ================================================
// End of Object Challenges
// ================================================

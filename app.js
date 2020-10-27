// importing data from data.js
const { data } = require('./data')

// Getting argument as a string
const filter = process.argv.slice(2)[0];

// Checking if argument is --count
if(filter === '--count'){

    // Looping through contries
    for(let country of data){
        // Counting people under each country and adding it to country name
        country.name += " ["+country.people.length+"]"
        
        // Looping through people
        for(let people of country.people){
            // Counting animals under each people and adding it to people name
            people.name += " ["+people.animals.length+"]"
        }
    }

    // Output results
    console.log(JSON.stringify(data, null, 3))

}

// Checking if argument is --filter=
if(filter.slice(0,9) === "--filter="){
   
    // Extracting filter term
    const q = filter.slice(9,filter.length)

    // Initializing result array
    result = []

    // Filter country where people isn't empty
    result = data.filter((country)=>{
        // Filter people where animals isn't empty
        country.people = country.people.filter((people) => {
            // Filter animals where animal name include filter term
            people.animals = people.animals.filter((animal) => {
                return animal.name.includes(q)
            })
            return people.animals.length > 0
        }) 
        return country.people.length > 0;
    })
    
    // Output results
    console.log(JSON.stringify(result, null, 3))

}

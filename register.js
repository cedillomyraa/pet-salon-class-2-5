let salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        ZIPcode:"22414",
        number:"262-K"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"777-777-7777"
        },
        {
            name:"Lola",
            age:8,
            gender:"Female",
            breed:"Chihuahua",
            service:"Grooming",
            owner:"Sam",
            phone:"777-777-8888"
        },
        {
            name:"Sushi",
            age:12,
            gender:"Male",
            breed:"Bulldog",
            service:"Nail Care",
            owner:"Yessy",
            phone:"999-777-7777"
        },
        {
            name:"Taco",
            age:5,
            gender:"Male",
            breed:"Chihuahua",
            service:"Dental Care",
            owner:"Anna",
            phone:"999-777-7777"
        }
    ]
}

//console.log(salon.pets);
// salon.pets[0].age // You can change the array index from zero up to the length of the array. If array has 3 objects, then the length of the array starts from 0 and ends at 2

// for (let i = 0; i < salon.pets.length; i++) {
//     const petsAge = salon.pets[i].age;
//     console.log('Index of array is ', i , ' And age of pets is ', petsAge);
    
// }

const displayAllPetsNames = function () {
    for (let i= 0; i<salon.pets.length; i++) {
    console.log(salon.pets[i].name);
    }
}


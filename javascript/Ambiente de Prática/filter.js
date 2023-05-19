let ages = [12, 27, 35, 14, 21]
let legalAges = ages.filter(age => age >=21)
let ilegalAges = ages.filter(age => age <21)
console.log('Maiores de idade: '+legalAges)
console.log('Menores: ' + ilegalAges)
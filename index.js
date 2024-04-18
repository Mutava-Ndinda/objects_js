//1.Given an array of objects, each object representing a person with a name and age property,
// write a function that returns a new array containing the names of all people who are 18 years old or older.

const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
]
const grownUps= people.filter(person=>{
    return(person.age>=18)
})
console.log({grownUps})



//2.Write a function that takes an array of objects, where each object represents a product with a name, price, and category property. 
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' },
];

const ProductCategories =Object.groupBy(products,({category}) =>{
    return category;
   })
   console.log( ProductCategories );


   //3. write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.
   const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];

  function studAverage(){
    return students.filter(student => {
      let avgScore =student.scores.reduce((acc, cur) => acc + cur) / student.scores.length;
      return avgScore >=85;
    })
    .map(student => student.name);
  }
 console.log(studAverage(students));


 //4.write a function that takes the car object and adds a new method to the object called age
 //The age method should return the current age of the car based on the current year and the car's year property

 const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
    age: function() {
      const currYear = 2025 - this.year
     console.log( currYear);
    }
  };
  car.age();
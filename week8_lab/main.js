/*** Object Constructors ***/
function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image = "cat.jpg";
  this.type = "Cat";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.jpg"
  this.type = "Dog";
}

function Bird(name, age) {
  this.name = name;
  this.age = age;
  this.image = "bird.jpg"
  this.type = "Bird";
}

/*** Global Variables ***/
var animals = [new Cat(), new Dog(), new Bird()];
var names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Cat) 
  {
    return new Cat(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Dog) 
  {
    return new Dog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Bird) 
  {
    return new Bird(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

/*** Document Load ****/
$(document).ready(function() {

  // get savedAnimal
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));

  // have we savedAnimal?
  var hasSavedAnimal = false;

  // check local storage
  if (animal === null) 
  {
    // button text
    $("#button-storage").text("Save Animal");

    // if no saved animal
    animal = generateRandomAnimal();
  } 
  else 
  {
    // if there is saved animal, button text
    $("#button-storage").text("Clear Animal");

    // animal saved
    hasSavedAnimal = true;
  }

  // update page
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);


  $("#button-storage").click(function() {
    // clear
    if (hasSavedAnimal) 
    {
      // clearing
      localStorage.removeItem("savedAnimal");

      // message
      $("#button-storage").css("display", "none");
      $("#button-storage-text").text("Cleared!");
    } 

    // save
    else 
    {
      // saving
      localStorage.setItem("savedAnimal", JSON.stringify(animal));

      // message
      $("#button-storage").css("display", "none");
      $("#button-storage-text").text("Saved!");
    }
  });

});

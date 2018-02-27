function dolphin(name, age) {
  this.name = name;
  this.age = age;
  this.type = 'dolphin';
  this.image = 'dolphin.jpeg';
}

function owl(name, age) {
  this.name = name;
  this.age = age;
  this.type = 'owl';
  this.image = 'owl.jpg';
}

function tiger(name, age) {
  this.name = name;
  this.age = age;
  this.type = 'tiger';
  this.image = 'tiger.jpg';
}

var animals = [new dolphin(), new owl(), new tiger()];

var names = ['George', 'Riva', 'Martin'];

function generateRandomIndex(maxIndex) {
	Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
	var randomIndex = generateRandomIndex(names.length);
	return randomIndex;
}

function generateRandomAge() {
	return generateRandomIndex(10);
}

function generateRandomAnimal() {
	var randomIdx = generateRandomIndex(animals.length)
	var randomAnimal = animals[randomIdx]
	if (randomAnimal instanceof dolphin) {
		return new dolphin(generateRandomName(), generateRandomAge());
	}
	if (randomAnimal instanceof owl) {
		return new owl(generateRandomName(), generateRandomAge());
	}
	if (randomAnimal instanceof tiger) {
		return new tiger(generateRandomName(), generateRandomAge());
	}

}

$(document).ready(function() {

	var animal = generateRandomAnimal();
	$("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  	$("#animal-img").attr("src", animal.image);
  	
});







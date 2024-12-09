class Cantante {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compareAge(userToCompare) {
    if (this.age > userToCompare.age) {
      return `${this.firstName} è più vecchio di ${userToCompare.firstName}.`;
    } else if (this.age < userToCompare.age) {
      return `${this.firstName} è più giovane di ${userToCompare.firstName}.`;
    } else {
      return `${this.firstName} e ${userToCompare.firstName} hanno la stessa età.`;
    }
  }
}

const cantante1 = new Cantante ("Maurizio" ,"Pisciuto" , 40 , "Olbia");
const cantante2 = new Cantante ("Davide" ,"De Luca" , 36 , "Roma");
const cantante3 = new Cantante ("Matteo" ,"Professione" , 28 , "Milano");
const cantante4 = new Cantante ("William" ,"Mezzanotte" , 30 , "Isernia");


console.log(cantante1.compareAge(cantante2)) ;
console.log(cantante2.compareAge(cantante3)) ;
console.log(cantante3.compareAge(cantante4)) ;
console.log(cantante3.compareAge(cantante1)) ;
console.log(cantante2.compareAge(cantante4)) ;




class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }



}

let pets = [];


function addPet(event) {
    event.preventDefault();


    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);

  
    pets.push(newPet);

    document.getElementById('petForm').reset();

  
    displayPets();
}


function displayPets() {
    const petList = document.getElementById('petList');
    petList.innerHTML = ''; 

  
    pets.forEach((pet) => {
        const li = document.createElement('li');
        li.textContent = `${pet.petName} (Specie: ${pet.species}, Razza: ${pet.breed}) - Padrone: ${pet.ownerName}`;
        petList.appendChild(li);
    });
}


document.getElementById('petForm').addEventListener('submit', addPet);

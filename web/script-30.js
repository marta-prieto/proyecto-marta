function getFetch() {
  console.log('getFuncion');
  fetch('http://localhost:5000/madrilenia')
    .then(function(response) {
      console.log('response', response);
      // The API call was successful!
      return response.text();
    })
    .then(function(html) {
      console.log('get-html');
      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');

      //array de cards
      var dogs = doc.querySelectorAll('.card');

      console.log('doc', doc);
      console.log('dogs', dogs);
      if (dogs && dogs.length != 0) {
        console.log('listado-perros', dogs[0]);
      }
      //crear array
      var arrList = [];

      //recorrer TODAS las cards
      for (i = 0; i < dogs.length; i++) {
        //pinto CADA UNA de las cards
        console.log(dogs[i]);
        //conseguir la información de cada perro
        var name = dogs[i].querySelector('.card-title').textContent;
        var img = dogs[i].querySelector('.card-img-top').src;
        var age = dogs[i].querySelector('.car_listado-edad').textContent;
        var gender = dogs[i].querySelector('.car_listado-sexo').textContent;

        console.log('name', name);
        console.log('name', img);
        console.log('name', age);
        console.log('name', gender);
        //OBJETO que guarda la información de cada card, dentro del for para recorrer cada una de las cards
        var newDogList = {
          name: name,
          img: img,
          age: age,
          gender: gender
        };
        console.log('newDogList', newDogList);
        //añadir al array cada uno de los objetos
        arrList.push(newDogList);
      }

      console.log('arrList', arrList);

      /*var dogsResult = '';
      dogsResult += `<li> "${newDogList}"</li>`;*/

      //recojo cada objeto en li
      var dogsList = document.querySelectorAll('li');
      for (i = 0; i < dogsList.length; i++) {
        var ref = document.querySelector('li');
        ref.insertAdjacentHTML('afterbegin', newDogList);
      }
      //opción parsear objeto 
      /*var arrList = new Object();
      arrList.toString();
      var dogsList = document.querySelectorAll('li');
      for (i = 0; i < dogsList.length; i++) {
        var ref = document.querySelector('li');
        ref.insertAdjacentHTML('afterbegin', getObject);
      }*/



      /*
              var dogsResult = '';
              dogsResult += '< ul >';
              for (i = 0; i < dogs.length; i++) {
                dogs += '< li >' + dogs[i] + '< /li>';
              }
              dogsResult += '< /ul>';

              console.log('dogs.length', dogs.length);
              console.log('dogsResult', dogsResult);
*/
    })
    .catch(function(err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
}
var animalTitle = document.querySelector('.animal-title');
animalTitle.addEventListener('click', getFetch);

/*
function clickList() {
  var animalTitle = document.querySelector('.animal-title');
  var mainAnimalList = document.querySelector("li");
  var mainAnimalContainer = document.querySelector(".animal-container");
  console.log('animalTitle', animalTitle);
  console.log('mainAnimalList', mainAnimalList);
  console.log('mainAnimalContainer', mainAnimalContainer);
  animalTitle.addEventListener('click', function() {
    mainAnimalList.classList.toggle('get-list');
    mainAnimalContainer.classList.toggle('get-list');
  });
}
clickList();*/
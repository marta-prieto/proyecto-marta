//FUNCION LA MADRILEÑA


function getFetch() {
  console.log('getFuncion');
  var dogsList = document.querySelector('ul');
  dogsList.style.display = 'grid';
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
      var arrayDogs = [];

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
        arrayDogs.push(newDogList);
      }

      console.log('arrayDogs', arrayDogs);


      //recojo cada objeto en li
      /*var dogsList = document.querySelectorAll('li');
      for (i = 0; i < dogsList.length; i++) {
        var ref = document.querySelector('li');
        ref.insertAdjacentHTML('afterbegin', newDogList);
      }*/
      var resultItems = '';

      for (const dog of arrayDogs) {
        resultItems += `
            <li class="dog__list">
            <h3 class="dog-title" data-name="${dog.name}">${dog.name}</h3>
              <img class="img-dog" src="${dog.img}">
              <p class="dog-age" data-name="${dog.age}">${dog.age}</p>
              <p class="dog-gender" data-name="${dog.gender}">${dog.gender}</p>
            </li>`;
      }
      document.querySelector('ul').innerHTML = resultItems;


    })
    .catch(function(err) {
      // There was an error
      console.error('Something went wrong.', err);
    });

  hideDogList();
}
var animalTitle = document.querySelector('.get-collapsable');
animalTitle.addEventListener('click', getFetch);


function hideDogList() {
  var animalTitle = document.querySelector('.get-collapsable-up');
  var dogsList = document.querySelector('ul');
  var resultItems = '';
  console.log('hideDogList');

  animalTitle.addEventListener('click', function() {
    console.log('click-hide-list');
    dogsList.style.display = 'none';

  });

}
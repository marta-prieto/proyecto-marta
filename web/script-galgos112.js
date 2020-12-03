//FUNCION BAASGALGO


function getFetch112() {
  console.log('getFuncion');

  fetch('http://localhost:5000/galgos112')
    .then(function(response) {
      console.log('response-112', response);
      // The API call was successful!
      return response.text();
    })
    .then(function(html) {
      console.log('get-html');
      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');

      //array de cards
      var dogs = doc.querySelectorAll('.m_bottom_20.clearfix');

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
        var name = dogs[i].querySelector('.m_bottom_5').textContent;
        var img = dogs[i].querySelector('.tr_all_long_hover').src;
        var age = dogs[i].querySelector('.f_size_medium.m_bottom_10').textContent;
        //var gender = dogs[i].querySelector('.car_listado-sexo').textContent;

        console.log('name', name);
        console.log('name', img);
        console.log('name', age);
        //console.log('name', gender);
        //OBJETO que guarda la información de cada card, dentro del for para recorrer cada una de las cards
        var newDogList = {
          name: name,
          img: img,
          age: age

        };
        console.log('newDogList', newDogList);
        //añadir al array cada uno de los objetos
        arrayDogs.push(newDogList);
      }

      console.log('arrayDogs', arrayDogs);


      //recojo cada objeto en li
      var dogsList = document.querySelectorAll('li');
      for (i = 0; i < dogsList.length; i++) {
        var ref = document.querySelector('li');
        ref.insertAdjacentHTML('afterbegin', newDogList);
      }
      var resultItems = '';

      for (const dog of arrayDogs) {
        resultItems += `
              <li class="dog__list">
              <h3 class="dog-title" data-name="${dog.name}">${dog.name}</h3>
                <img class="img-dog" src="${dog.img}">
                <p class="dog-age" data-name="${dog.age}">${dog.age}</p>
              
              </li>`;
      }
      document.querySelector('.ul-dogs-galgos112').innerHTML = resultItems;


    })
    .catch(function(err) {
      // There was an error
      console.error('Something went wrong.', err);
    });
}
var animalTitle = document.querySelector('.animal-title.second-dog');
animalTitle.addEventListener('click', getFetch112);
//FUNCION BAASGALGO-pag 2

/*
function getFetch112Page2() {
  console.log('getFuncion112-page2');

  fetch('http://localhost:5000/galgos112/1')
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
        var name112 = dogs[i].querySelector('.m_bottom_5').textContent;
        var img112 = dogs[i].querySelector('.tr_all_long_hover').src;
        var age112 = dogs[i].querySelector('.f_size_medium.m_bottom_10').textContent;
        //var gender = dogs[i].querySelector('.car_listado-sexo').textContent;

        console.log('name112', name112);
        console.log('name112', img112);
        console.log('name112', age112);
        //console.log('name112', gender);
        //OBJETO que guarda la información de cada card, dentro del for para recorrer cada una de las cards
        var newDogList112 = {
          name112: name112,
          img112: img112,
          age112: age112

        };
        console.log('newDogList112', newDogList112);
        //añadir al array cada uno de los objetos
        arrayDogs.push(newDogList112);
      }

      console.log('arrayDogs', arrayDogs);


      //recojo cada objeto en li
      /*var dogsList112 = document.querySelectorAll('li');
      for (i = 0; i < dogsList112.length; i++) {
        var ref = document.querySelector('li');
        ref.insertAdjacentHTML('afterbegin', newDogList112);
      }*/

/* var resultItems112 = '';

      for (const dog112 of arrayDogs) {
        resultItems112 += `
              <li class="dog__list112">
              <h3 class="dog-title" data-name112="${dog112.name112}">${dog112.name112}</h3>
                <img class="img-dog" src="${dog112.img112}">
                <p class="dog-age112" data-name112="${dog112.age112}">${dog112.age112}</p>
              
              </li>`;
      }
      document.querySelector('.ul-dogs-galgos112-page-2').innerHTML = resultItems112;


    })
    .catch(function(err) {
      // There was an error
      console.error('Something went wrong.', err);
    });
}
var animalTitle112 = document.querySelector('.get-collapsable-112-page-2');
animalTitle112.addEventListener('click', getFetch112Page2);*/
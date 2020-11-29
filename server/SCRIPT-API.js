function getFetch() {
  console.log('getFuncion');
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response) {
      console.log('get-url');
      // The API call was successful!
      return response.text();
    })
    .then(function(html) {
      console.log('get-html');
      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');

      var dogs = document.querySelectorAll('.card');

      console.log('parser', parser);
      console.log('doc', doc);
      console.log('dogs', dogs);

      dogsResult += '< ul >';
      for (i = 0; i < dogs.length; i++) {
        dogs += '< li >' + dogs[i] + '< /li>';
      }
      dogsResult += '< /ul>';
      console.log('dogs.length', dogs.length);
      console.log('dogsResult', dogsResult);


      // Get the image file
      var img = doc.querySelectorAll('.card-img-top');
      console.log('img', img);

    })
    .catch(function(err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
}
getFetch();


function clickList() {
  var animalTitle = document.querySelector('.animal-title');
  var mainAnimalList = document.querySelector("li");
  var mainAnimalContainer = document.querySelector(".animal-container");
  animalTitle.addEventListener('click', function() {
    mainAnimalList.classList.toggle('get-list');
    mainAnimalContainer.classList.toggle('get-list');
  });
}
clickList();
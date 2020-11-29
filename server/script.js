function getFetch() {
  console.log('getFuncion');
  fetch('http://localhost:5000/madrilenia')
    .then(function(response) {
      console.log('url');
      // The API call was successful!
      return response.text();
    })
    .then(function(html) {
      console.log('entrahtml');
      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, '<div>PRUEBA</div>');

      var dogs = document.querySelectorAll('.card');

      for (let i = 0; i < dogs.length; i++) {
        dogs[i].addEventListener('click', getFetch);
      }
      // Get the image file
      var img = doc.querySelector('');
      console.log(img);

    })
    .catch(function(err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
}
getFetch();
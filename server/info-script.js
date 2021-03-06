/*const title = document.querySelector('.card-title');

const result = document.querySelector('.listado');

const url = 'http://localhost:5000/madrilenia';
*/

function getFetch() {
  fetch('http://localhost:5000/madrilenia')
    .then(function(response) {
      // The API call was successful!
      return response.text();
    })
    .then(function(html) {

      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');

      // Get the image file
      var img = doc.querySelector('.listado.card-title');
      console.log(img);

    })
    .catch(function(err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
}
getFetch();





/*
function getList() {
  
  const urlWeb = window.location.href;
  
  fetch('http://localhost:5000/madrilenia')
    .then(response => response.text())
    .then(data => {
      let dogsResult = '';
  
  
  
  
      result.innerHTML += dogsResult;
  
      const dogs = document.querySelectorAll('.list_title');
  
      for (let i = 0; i < dogs.length; i++) {
        dogs[i].addEventListener('click', getList);
      }
    });
  
  
}
  
getList();
  
function getApis() {
  fetch('https://adopcioneslamadrilena.org/')
    .then(response => response.json())
    .then(data => console.log(data));
}
  
getApis();
  
  
function getList() {
  const urlWeb = window.location.href;
  
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      let dogsResult = '';
      for (const item of data) {
        if (item.listado === null) {
          dogsResult += `
          <li class="list_title" data-id="${item.listado.card-body}"data-name="${item.listado.card-title}" data-img="">
            <h2 class="title__line"> "${item.listado.card-title}"</h2>
            <img class="img__dogs" src="" alt="imagen de:${item.listado.card-title}">
          </li>
        `;
        } else {
          dogsResult += `
          <li class="list_title" data-id="${item.listado.card-body}"     data-name="${item.listado.card-title}" data-img= "${item.listado.card-img-top}">
            <h2 class="title__line"> ${item.listado.card-title}</h2>
            <img class="img__dogs" src="${item.listado.card-img-top}" alt="imagen de:${item.listado.card-title} ">
          </li>
        `;
        }
      }
      result.innerHTML += dogsResult;
  
      const dogs = document.querySelectorAll('.list_title');
  
      for (let i = 0; i < dogs.length; i++) {
        dogs[i].addEventListener('click', getFavs);
      }
    });
}
  
*/

/*
function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = fetch(url, {
  
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Access-Control-Allow-Origin': '*'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
  
postData('https://baasgalgo.org/galgos-en-adopcion/', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
  
  
  
/*
fetch('https://adopcioneslamadrilena.org/')
.then(response => response.json())
.then(data => console.log(data));
(async () => {
    const response = await fetch('https://baasgalgo.org/galgos-en-adopcion/');
    const text = await response.text();
    console.log(text.match(/(?<=\<h1>).*(?=\<\/h1>)/));
  })()*/
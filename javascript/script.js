function getApis(url = '', data = {}) {

  const response = fetch('https://adopcioneslamadrilena.org/', {

  });
  return response.json();
  //.then(data => console.log(data));
}
getApis();


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
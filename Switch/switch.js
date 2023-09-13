const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}

var h1=document.querySelector('h1')
var arr=['Example Domain','First Click','Second Click','Third Click']
function handleClicks(){
  switch(h1.innerText){
    case arr[0]: h1.innerText=arr[1];break;
    case arr[1]: h1.innerText=arr[2];break;
    case arr[2]: h1.innerText=arr[3];break;
    default: h1.innerText=arr[0];
  }
}
h1.addEventListener('click',handleClicks);

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list";
let breeds =[]

// fetch
fetch(imgUrl)
  .then((resp) => resp.json())
  .then((data) => data.message.forEach((dogImage) => renderImage(dogImage)));

fetch(breedUrl)
  .then((resp) => resp.json())
  .then((data) => {
    let breeds =data.message
    renderBreeds(breeds);
  });

//DOM selectors
const dropDown = document.getElementById("breed-dropdown")
const ul = document.querySelector("#dog-breeds");




// eventListeners/eventHandlers
dropDown.addEventListener("change", handleChange);

//render functions
function renderImage(dogImage) {
  const container = document.querySelector(`#dog-image-container`);
  const Image = document.createElement("img");
  Image.src = dogImage;
  Image.alt = dogImage;
  container.appendChild(Image)
}

function renderBreeds(breeds) {
//   const ul = document.querySelector("#dog-breeds");
  breeds.forEach(breed => {
    const li = document.createElement("li")
    li.innerText = breed
        ul.append(li)
        li.addEventListener('click',changeColor)
  });
}

// callback functions
function changeColor(e){
    e.target.style.color="red"
    
    // const li = e.target;
    // const color = li.style.color;
    // li.style.color = color ==='red'? 'green' :'red';
}
function handleChange(e){
    let letter = e.target.value
    let filteredBreeds= breeds.filter(breed =>breed.startsWith(letter))
    ul.innerHTML=''
    renderBreeds(filteredBreeds)
    console.log(handleChange)
}
  
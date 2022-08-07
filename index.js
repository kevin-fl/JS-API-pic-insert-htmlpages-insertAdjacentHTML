const dataAPI = fetch("https://jsonplaceholder.typicode.com/photos");

dataAPI.then(async(responseData) => {       //-> promise
//console.log(responseData);


const response = await responseData.json();
console.log(response[1]);

try{
// objet 0 capture data API avec les 2 photos 
const albumId = response[1].albumId;
const id = response[1].id;
const thumbnailUrl = response[1].thumbnailUrl;
const title = response[1].title;
const url = response[1].url;
const Image = response[1].Image;

//console.log(albumId);
//console.log(id);
//console.log(thumbnailUrl);
//console.log(title);
//console.log(url);
//console.log(Image);

//DOM objet affichage textes et photos 

const affichage_albumId  = document.querySelector("#albumId");
const affichage_id  = document.querySelector("#id");
const affichage_thumbnailUrl  = document.querySelector("#thumbnailUrl");
const affichage_title  = document.querySelector("#title");
const affichage_url  = document.querySelector("#url");
const affichage_image  = document.querySelector("#image01");

affichage_albumId.innerHTML = albumId;
affichage_id.innerHTML = id;
affichage_thumbnailUrl.innerHTML = thumbnailUrl;
affichage_title.innerHTML =title;
affichage_url.innerHTML = url;


//affichage des 2 photos

const image01_thumbnailUrl = `<img src="${thumbnailUrl}">`;


//affichage image 

affichage_image.insertAdjacentHTML("afterbegin", image01_thumbnailUrl);


} catch (err) {
console.log(err);

}
 })

.catch((err)=>{

    console.log(err);
});
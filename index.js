const dataAPI = fetch("https://jsonplaceholder.typicode.com/photos");


dataAPI.then(async(responseData) => {       //-> promise
//console.log(responseData);


const response = await responseData.json();
console.log(response[0]);
// ctrl+maj+f -> donner le mot , le number  et changer ttes ces occurences , gain de temps 

try{
// objet 0 capture data API avec les 2 photos 
const albumId = response[0].albumId;
const id = response[0].id;
const thumbnailUrl = response[0].thumbnailUrl;
const title = response[0].title;
const url = response[0].url;
const Image = response[0].Image;

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
const affichage_image  = document.querySelector("#image00");

affichage_albumId.innerHTML = albumId;
affichage_id.innerHTML = id;
affichage_thumbnailUrl.innerHTML = thumbnailUrl;
affichage_title.innerHTML =title;
affichage_url.innerHTML = url;


//affichage des 2 photos

const image00_thumbnailUrl = `<a href="${url}" target="_blank"><img src="${thumbnailUrl}"></a>`;
//target ="_blank" permet d ouvrir la photo dans un autre onglet 

//affichage image 

affichage_image.insertAdjacentHTML("afterbegin", image00_thumbnailUrl);

// NB : issue with the img viewing , probably caused by the website not by the method , err 522 , photos do not contain the keyword image ...

} catch (err) {
console.log(err);

}
 })

.catch((err)=>{

console.log(err);
});
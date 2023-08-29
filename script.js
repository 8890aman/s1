const key="az-SogFHUKRxk2h-bBed7A4c2Rfvjuqd_zv1g-3zwvw";
const formel=document.querySelector("form");
const input =document.getElementById("Search");
const searcresult=document.querySelector(".search-results");
const showbtn=document.getElementById("show-btn");

let inputdata="";
let page=2;

async function searchimages(){
    inputdata=input.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${key}`

    const response= await fetch(url);
    const data=await response.json();
    const results=data.results;
    console.log(results);
    if(page === 2){
        searcresult.innerHTML ="";
    }
    results.map((result)=>{
        const imagewrapper =document.createElement('div');
        imagewrapper.classList.add("search-result");
        const image=document.createElement('img')
        image.src=result.urls.small + "&w=1500&dpr=2";
        image.alt=result.alt_description;
        const imagelink=document.createElement('a');
        imagelink.href=result.links.html;
        imagelink.target="_blank"
        imagelink.textContent=result.alt_description;
        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imagelink);
        searcresult.appendChild(imagewrapper);
    });
    page++;
    if(page>1){
        showbtn.style.display="block"
    }
}
formel.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=2;
    searchimages();
})
showbtn.addEventListener("click",(event)=>{
    event.preventDefault()
    page=2;
    searchimages();
})
const formBox=document.getElementById("form-box");
const SearchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMore=document.getElementById("show_more");
// const showMore=document.getElementsById("show_more");
const accesskey="SqT4vKV_wRNyD0Zbs1WWLkQNYFhyATEb769dlVObapQ";

let keyword="";
let page=1;

async function searchImage(){
    keyword=SearchBox.value;
    // console.log(keyword);

    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response= await fetch(url);
    const data = await response.json();

    // console.log(data);

    if(page==="1"){
            searchResult.innerHTML="";
    }

    const results=data.results;

    results.map((result)=>{

        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);


        
    })
    showMore.style.display="block";

    showMore.addEventListener('click',()=>{
        page++;
        searchImage();
    })

    
}

formBox.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})
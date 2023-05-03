console.log("helloooo");

let imagedefault = "https://images.unsplash.com/photo-1615824430511-cfbef5f3964e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60";
let imageloading = "https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarksete.jpg";

let DOMimagefordisplay = document.getElementById("image");
DOMimagefordisplay.src = imagedefault;

let DOMdate = document.getElementById("date");
let DOMtitle = document.getElementById("title");
let DOMexplanation = document.getElementById("explanation");

function loadNASAdata(){
    console.log("clicked");

  DOMimagefordisplay.src = imageloading;
  
    let endpoint="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

    console.log(endpoint);

    fetch(endpoint).then(function (response){
        return response.json();
    }).then(function (json){
        console.log(json);

        // show date
        DOMdate.innerHTML = json.date;
        // show title
        DOMtitle.innerHTML = json.title;
        // show explanation
        DOMexplanation.innerHTML = json.explanation;
        // show picture of NASA
        DOMimagefordisplay.src = json.url;
    }).catch(function (error){
        console.log(error);
    });
}

















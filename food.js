const baseURL = "https://api.edamam.com/search?q="//cheese&app_id=d1fd634c&app_key=eae9a525ecd75f348130b08de5e95920";
const app_id = "d1fd634c";
const app_key = "eae9a525ecd75f348130b08de5e95920";
let url;



//let app_id = document.getElementById('app_id').value;
//let app_key = document.getElementById('app_key').value;
//let recipe = document.getElementById('recipe').value;
//let calories = document.getElementById('calories').value;
const searchTerm = document.getElementById('search');
const searchForm = document.getElementById('formId');
//const nav = document.querySelector('nav');
const section = document.querySelector('section');
//const maxCal = document.getElementById('maxCal');


searchForm.addEventListener('submit', fetchResults);
function fetchResults(e) {
    e.preventDefault();
    url = `${baseURL}${searchTerm.value}&from=0&to=2&app_id=${app_id}&app_key=${app_key}`;  //&q=${search.value}`;   //
    // url = baseURL;
    console.log('URL:', url);
    //if(search.value !== ''){
    //   console.log(search.value)
    // url += '&search_term=' + search.value;

    //};

    fetch(url)
        .then(function (result) {
            console.log(result)
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            displayResults(json);

        })
};

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    console.log(json);


    console.log(json.hits.length);
    if (json.hits === 0) {
        console.log("no results");

    } else {
        for (let i = 0; i < json.hits.length; i++) {
            console.log("starting loop");
            let article = document.createElement('article');

            let para1 = document.createElement('p');
            para1.innerText = json.hits[i].recipe.label;
            article.appendChild(para1);


            let img = document.createElement('img');
            img.src = json.hits[i].recipe.image;
            article.appendChild(img);

            let link = document.createElement('a');
            link.href = json.hits[i].recipe.url;
            link.appendChild(img);
            article.appendChild(link);
            article.className = "result" + i;
            section.appendChild(article);

            // let para2 = document.createElement('p');
            // para2.innerText = json.hits[i].recipe.url;
            // section.appendChild(para2);

            

            // let current = json.hit[i].recipe.url;
            // link.href = current.json.hit[i].recipe.url;
            // link.img = current.json.hit[i].recipe.url;

            //let a = document.createElement('a');
             //= json.hits[i].recipe.url;

            // let para3 = document.createElement('p');
            // para3.innerText = json.hits[i].recipe.calories;
            // section.appendChild(para3);

            // let para4 = document.createElement('p');
            // para4.innerText = json.hits[i].recipe.ingredients[0].text;
            // section.appendChild(para4);

            


            // let nutrients = document.createElement('nutrients');
            //console.log(json.hints[i].food.nutrients.ENERC_KCAL);

        }
    }

};
      //let nutrients = document.createElement('nutrients');
      //let food = document.createElement('food');

//       console.log(json.hints[i].food.label);
//       console.log(json.parsed[""].nutrients);

//       let para1 = document.createElement('p');
//         para1.setAttribute("class","food");
//       let para2 = document.createElement('p');
//         para2.setAttribute("class","nutrients");

//         
//         para2.innerText = json.hint[i].food.label.nutrients;

//         
//         section.appendChild(para2);

//     };

//     hints[""0""].food.label
//       //parsed[""0""].food.nutrients
//       //let nutrients = json.food.nutrients;

//       //let nutrients = document.createElement('nutrients');
//       //let food = document.createElement('food');
//       //


//   food:
// category: "Generic foods"
// categoryLabel: "food"
// foodId: "food_a2b3q33bnje4iual2pba2at89tzi"
// label: "Cheese, cheddar"
// nutrients:
// CHOCDF: 1.33
// ENERC_KCAL: 406
// FAT: 33.82
// PROCNT: 24.04 
//let label = document.createElement('label');
            //label = json.hints[i].food.label;
            //para1.setAttribute("class",label);
const baseURL ="https://api.edamam.com/api/food-database/parser";
const app_id = "f70677f6";
const app_key = "b7460474033829fd16a4927f735e570e";
let url;



//let app_id = document.getElementById('app_id').value;
//let app_key = document.getElementById('app_key').value;
//let recipe = document.getElementById('recipe').value;
//let calories = document.getElementById('calories').value;
const searchTerm = document.getElementById('search');
const searchForm = document.getElementById('formId');
const nav = document.querySelector('nav');
const section = document.querySelector('section');


searchForm.addEventListener('submit', fetchResults); 
function fetchResults(e) { 
   e.preventDefault();
    url = `${baseURL}?app_id=${app_id}&app_key=${app_key}&ingr=${encodeURIComponent(search.value)}`;  //&q=${search.value}`;   //'https://api.edamam.com/api/nutrition-details &nutrients=${nutrients}
    console.log('URL:', url);
   //if(search.value !== ''){
     //   console.log(search.value)
       // url += '&search_term=' + search.value;
    
    //};

    fetch(url)
    .then(function(result) {
      console.log(result)
      return result.json(); 
    })
    .then(function(json) {
      console.log(json);
      displayResults(json);
    })
};
//let label = document.createElement('label');

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
      } console.log(json);

      

        if (label.length === 0){
            console.log("no results")
        } else {
        for( let i = 0; i < label.length; i++){
            let para1 = document.createElement('p');
            let label = json.hints[i].food.label;
            para1.setAttribute("class",label);
            section.appendChild(para1);
            }
        }

    };
      //let nutrients = document.createElement('nutrients');
      //let food = document.createElement('food');

//       console.log(json.parsed[""].food);
//       console.log(json.parsed[""].nutrients);

//       let para1 = document.createElement('p');
//         para1.setAttribute("class","food");
//       let para2 = document.createElement('p');
//         para2.setAttribute("class","nutrients");

//         para1.innerText = json.parsed[""].food;
//         para2.innerText = json.parsed[""].nutrients;

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

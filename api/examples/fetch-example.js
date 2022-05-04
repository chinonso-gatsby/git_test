//fetch built-in
//promised based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR. Fetch is just alternative approach that has simpler and cleaner syntax. the end result is the same .still get dynamically, behinde the scenes

////fetch
// const url = "./api/people.json";

// const response = fetch(url);
// console.log(response); we will get the fulfilled state

// fetch(url).then((resp) => {
//   //response object
//   //useful prop and methods
//   // console.log(resp);
//   // convert Response into JSON data
//   //returns promises
//   return resp.json();
// }).then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// });

// fetch(url).then((response)=response.json())////return
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err));

//////2fetch error gatcha
///response.json() is triggering the error on the console and the net work

////3FETCH - BIG PICTURE
//we dont need the fuctionality of using RESOLVE AND REJECT
///fetch(url).

/////4Fetch with function
const url = "./api/people.json";
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data);
      displayItems(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const displayItems = (items) => {
  /////items = data
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join("");
  // console.log(displayData);
  const element = document.createElement("div");
  element.innerHTML = displayData; ////display data can only be called in this block  becos its was defined here
  document.body.appendChild(element);
};

/////5


/////Fetch - with Async/await
// const url = "./api/people.json";
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   // console.log(data)
//   displayItems(data);
// });



// const displayItems = (items)=>{/////items = data 
//   const displayData =items.map((item)=>{
//     const{name}=item;
//     return `<p>${name}</p>`;
//   })
//   .join('');
//   // console.log(displayData);
//   const element = document.createElement('div');
//   element.innerHTML = displayData;////display data can only be called in this block  becos its was defined here 
//   document.body.appendChild(element)
// };


// /////TRY / CATCH
// const url = "./api/people.json";
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.log(data)
//     displayItems(data);
    
//   } catch (error) {
//     console.log(error)
//   }
// });


// const displayItems = (items) => {
//   /////items = data
//   const displayData = items
//     .map((item) => {
//       const { name } = item;
//       return `<p>${name}</p>`;
//     })
//     .join("");
//   // console.log(displayData);
//   const element = document.createElement("div");
//   element.innerHTML = displayData; ////display data can only be called in this block  becos its was defined here
//   document.body.appendChild(element);
// };

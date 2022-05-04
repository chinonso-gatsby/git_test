//1///AJAX --Asynchronous Javascript and XML-(json format= NEW)

///AJAX is a developer's dream, because you can:
// Update a web page without reloading the page
// Request data from a server - after the page has loaded
// Receive data from a server - after the page has loaded
// Send data to a server - in the background

////HTTP Requests - communication between client(our application) and server
//get data from the server, put data on a server, we can modify data server

/////API - Application programing interface
// most over used terminology
//is like instruction on how you want to communicate
//like closure

/////Sample TEXT
// const xhr = new XMLHttpRequest();///onces you see new = know its a constructor function
///XMLHttpRequest objects are used to interact with server same as ajax-xml
//XMLHttpRequest.open(method, url[, async[, user[, password]]] )/////open method
//'get','post', 'put' ,'delete' = ALL METHODS
//GET- as a way to request a resourse from the server
//post- when we want to add data to the service
//put- when we want to edit
//delete- when we want to delete something on the resource on the server
///URL- A DOMString representing the URL TO SEND the request to(whats the path of our resource)
// const xhr = new XMLHttpRequest();
// // console.log(xhr); //readyState=0, status= 0; this  value will change
// xhr.open("GET", "./api/sample.txt");

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//       const text = document.createElement('p');
//       text.textContent = xhr.responseText;
//       document.body.appendChild(text)
//       console.log(xhr.responseText)
//   } else {
//     console.log({
//       status: xhr.status,
//       text: xhr.statusText,
//       state: xhr.readyState,
//     });
//   }
// };
// xhr.send();

// console.log('hello');

//2//////////ADD BUTTON   once we click it does not refresh the page
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', ()=>{
//     getData();
// });

// function getData(){
//     const xhr = new XMLHttpRequest();

//     xhr.open("GET", "./api/sample.txt");

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         const text = document.createElement("p");
//         text.textContent = xhr.responseText;
//         document.body.appendChild(text);
//         console.log(xhr.responseText);
//       } else {
//         console.log({
//           status: xhr.status,
//           text: xhr.statusText,
//           state: xhr.readyState,
//         });
//       }
//     };
//     xhr.send();///// we send here

// } /////we have 2 method and one property- method(open and send)and statechange which is equal to our call back function

//3////////JSON- JAVA SCRIPT OBJECT NOTATION
const btn = document.querySelector(".btn");
const url = "./api/people.json";
btn.addEventListener("click", () => {
  getData();
});

function getData() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log(typeof xhr.responseText);
      const data = JSON.parse(xhr.responseText);
      // console.log(typeof data);
      // console.log(data);
      const displayData = data
        .map((item) => {
          return `<p>${item.name}<P>`;
        })
        .join("");
      const element = document.createElement("div");
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  xhr.send(); ///// we send here
}

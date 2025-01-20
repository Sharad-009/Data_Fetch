async function doTask() {
  let fetch_Data = await fetch("http://localhost:3000/Mobiles");
  let res = await fetch_Data.json();
  //   console.log(res);
  let data = res
    .map(
      (e) => `

<div id="card">
            
            <h3>${e.name}</h3> <hr>

            <img  src="${e.img}" alt=""> <br>
            <hr>
             <h3>Rating : ${e.rating}</h3> 
             <h3>Price : ${e.price}</h3>
             <button onclick="deleteItem(${e.id})">Delete</button>
            <button id="clickBtn">show Any Other</button>
        </div>

`
    )
    .join(" ");
  document.querySelector("#show_Info").innerHTML = data;
}
doTask();

function deleteItem(id) {
  fetch(`http://localhost:3000/Mobiles/${id}`, {
    method: "DELETE",
  }).then((re) => alert("deletessss succeded..." + re));
}

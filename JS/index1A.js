// function checkEven(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num % 2 === 0) {
//                 resolve("even number");
//             } else {
//                 reject("odd number");
//             }
//         }, 1000);
//     });
// }

// checkEven(35)
//     .then((result) => {
//         let mainresult = `updated msg is: ${result}`;
//         console.log(mainresult);
//     })
//     .catch((error) => console.log(error));



const mainDiv=document.getElementById("main-content");
async function getData(){
    try{
        const result=await fetch("https://fakestoreapi.com/products/");
        const data=await result.json();
        console.log(data);
        data.map((element) => {
            const subDiv = document.createElement("div");
            subDiv.className = "card";

            subDiv.innerHTML = `
                <img src="${element.image}" alt="" />
                <h1>${element.title}</h1>
                <p>${element.description}</p>
                <p class="price">Rs ${element.price}</p>
            `;

            mainDiv.append(subDiv);
        });

    } catch (error) {
        console.log("Error:", error);
    }
}

getData();
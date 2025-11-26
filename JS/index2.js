
// function calmax(numrArr){
//     let max=numrArr[0]
//     for (let i=1; i<numrArr.length; i++){
//         if (numrArr[i]>max){
//             max=numrArr[i]
//         }
//     }
//     return max;
// }
// const maxval = calmax([5,12,8000,130,44])
// console.log(maxval)


// let b=[]
// function cal(a){
//     target=15
//     for (let i=0; i<a.length; i++){
//         if (a[i]>target){
//             b.push(a[i])
//         }
//     }
//     return b;
// }
// const res=cal([3,6,9,16,150,1000])
// console.log(res);
// console.log(b);


// // first method for function declaration
// function sum(y,z){
// return y+z
// }                                                                       
// console.log(sum(5,10))

// // second method for function declaratoion (only for single line of code)...it is called anonymous function
// const sumTwo=(a,b)=>a+b
// console.log(sumTwo(7,13))

function checksum(sum){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (num%2==0){
                resolve("even number")
            } else {
                reject("odd number")
            }
        },1000);
    });
}

checkEven(34).
then((result)=>{
    let mainresult=`updated msg is: ${result}`
    console.log(mainresult)})
.catch(error=> console.log(error))




async function getData(){
    try {
        const result=await fetch("https://fakestoreapi.com/products/")
        const data = await result.json()
        console.log(data);
    } catch (error) {
        console.log(error);   
    }
}
getData()
var marks=56
if(marks<35){
    console.log("Fail")
}else if(marks>=35 && marks<60){
    console.log("3rd grade")
}else if(marks>=60 && marks<80){
    console.log("2nd grade")
}else if (marks>=80 && marks<=100){
    console.log("1st grade")
}else{
    console.log("Invalid marks")
}   


let numArray=[1,22,-4,36,37,0,48,-9]
let resultArr = []
for(let i=0;i<numArray.length;i++){
    if (numArray[i]>20){
        resultArr.push(numArray[i])
    }
} console.log(resultArr)

let evenArr = []
let oddArr = []
for (let i=0; i<numArray.length; i++){
    if(numArray[i]%2==0){
        evenArr.push(numArray[i])
    }
    else if (numArray[i]%2!=0){
        oddArr.push(numArray[i])
    }
    else {
        console.log("Invalid Array")
    }
} 
console.log("Even Numbers: ",evenArr)
console.log("Odd Numbers: ",oddArr) 


let studentObj={
    name: "Kirti Pooja",
    age: 20,
    hobbies : ["Reading","Dancing","Traveling"],
    address: {
        city : "Mumbai" ,
        state : "Maharashtra"
    },
    "full name": "Kirti Pooja Suryawanshi Muthe"
}
let studentName=studentObj.name
console.log("Student Name: ",studentName) 

let studentAdd = studentObj.address
studentAdd.pincode=400104
studentAdd["Street name"]="MG Road"
console.log(studentAdd)


let studentData=[
    {name: "Kirti", age:20 , gender: "Female"},
    {name: "Pooja", age:21, gender: "Female"},
    {name: "Kanishka", age:15, gender: "Female"},
    {name: "Rahul", age:17, gender: "Male"},
    {name: "Amit", age:19, gender: "Male"}
]
let DataArr = []
for (let i=0; i<studentData.length; i++){
    if (studentData[i].age>=18)
    DataArr.push(studentData[i])
}
console.log("Students above 18: ",DataArr)



let food = ["nasiGoreng", "rendang", "rawon", "mieGoreng"];
console.log(food[1]);
for (let i = 0; i < food.length; i++){
    if (food[i] === "rendang"){
        console.log("foodName:", food[i]);
    }
}

const person = {
    nama: "Muhammad",
    age: 23,
    universitas: "Institut Teknologi Sumatera",
};
console.log(person["nama"]);
// ===============================
// 1-misol: Salom berish
// ===============================
let name = "Hamrozbek";
console.log("Salom, " + name);

// ===============================
// 2-misol: Ikki sonni qo‘shish
// ===============================
let a = 5;
let b = 7;
console.log("Yig‘indi:", a + b);

// ===============================
// 3-misol: Juft yoki toq son
// ===============================
let son = 10;
if (son % 2 === 0) {
    console.log(son + " juft son");
} else {
    console.log(son + " toq son");
}

// ===============================
// 4-misol: Son musbat yoki manfiy
// ===============================
let x = -3;
if (x > 0) {
    console.log("Musbat son");
} else if (x < 0) {
    console.log("Manfiy son");
} else {
    console.log("Nolga teng");
}

// ===============================
// 5-misol: 1 dan 5 gacha sonlar
// ===============================
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ===============================
// 6-misol: Array uzunligi
// ===============================
let fruits = ["olma", "banan", "anor"];
console.log("Array uzunligi:", fruits.length);

// ===============================
// 7-misol: Eng katta sonni topish
// ===============================
let num1 = 12;
let num2 = 20;
if (num1 > num2) {
    console.log("Katta son:", num1);
} else {
    console.log("Katta son:", num2);
}

// ===============================
// 8-misol: Funksiya (kvadrat)
// ===============================
function kvadrat(n) {
    return n * n;
}
console.log("Kvadrat:", kvadrat(4));

// ===============================
// 9-misol: String uzunligi
// ===============================
let text = "JavaScript";
console.log("Belgilar soni:", text.length);

// ===============================
// 10-misol: Array elementlarini chiqarish
// ===============================
let numbers = [1, 2, 3, 4];
for (let n of numbers) {
    console.log(n);
}

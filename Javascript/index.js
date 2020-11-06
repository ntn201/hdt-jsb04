// Variable
// let name = prompt("Tên cậu là gì ???")
// alert("Chào " + name)
// name = "Quang"
// alert("Chào " + name)

// Data types
// let number = 123.456
// let string = "Hello"
// let boolean = true

// Operators
// Number + - * / ** %  17%5->2
// String +    "1" + "1" -> "11"    "abc" + "xyz" = "abcxyz"
// Boolean and or not
// T && T -> T
// T && F -> F
// F && F -> F
// T || T -> T
// T || F -> T
// F || F -> F
// !T -> F
// !F -> T

// let a = prompt("Enter a:")

// if (a < 5){
//     alert("Baby")
// }
// else if (a < 18){
//     alert("Teenager")
// }
// // else if ...
// else{
//     alert("Adult")
// }
// let b = prompt("Enter b:")
// let c = prompt("Enter c:")

// let delta = b*b - 4*a*c

// if (delta > 0){
//     let x1 = (-b + delta**0.5)/(2*a)
//     let x2 = (-b - delta**0.5)/(2*a)
//     alert(x1)
//     alert(x2)
// }
// if (delta == 0){
//     let x = -b/2/a
//     alert(x)
// }
// if (delta < 0){
//     alert("No solution")
// }

// iterator
// for (let i = 0; i < 10; i = i+1){
//     console.log(i)
// }

// 20
// 3 6 9 12 15 18
// Nhap vao mot so N
// In ra cac boi cua 3 nho hon N
// for i 1 -> n
//     if i%3==0
//         console.log(i)

// a = a + 1
// a += 1
// b = 20*b
// b*=20

// for (let i = 0;i < n; i-=2){
//     if (i%3==0){
//         console.log(i)
//     }
// }

// let n = Number(prompt())
// let sum = 0
// for (let i = 1;i <= n;i ++){
//     sum += i
// }
// console.log(sum)

prime = true
for (let i = 2;i < n;i ++){
    if (n % i == 0){
        prime = false
    }
}
console.log(prime)
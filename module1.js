
// Модуль 1. Основы JavaScript. Практика



//---------------------------------------------------- task-1-1.---------------------------------------------
//Выведите какой-нибудь текст в консоль с помощью console.log

// console.log("привет")



// ----------------------------------------------------task-1-2.-----------------------------------------------
// Создайте переменную message и присвойте ей значение "Привет Мир". Выведите значение этой переменной на экран с помощью функции alert

// let message = "Привет мир!"
// alert(message)



// ----------------------------------------------------task-1-3.-----------------------------------------------
// Создайте переменную num1. Запишите в нее значение 10, выведите его на экран (функция alert). Затем запишите в нее значение 20, выведите его на экран

// let num1 = 10
// alert(num1)
// num1 = 20
// alert(num1)



// ---------------------------------------------------task-1-4.--------------------------------------------------
// Создайте переменную sum. Запишите в нее сумму чисел 1, 2 и 3 с помощью оператора +. С помощью функции alert выведите на экран содержимое переменной sum.

// let sum = 1 + 2 + 3
// alert(sum)



// ---------------------------------------------------- task-1-5.----------------------------------------------------
// Создайте переменную test со значением 0
// Создайте условие: если переменная test больше 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'

// let test = 0
// if (test > 10) {
//     alert('верно')
//   } else {
//     alert('неверно')
//   }



// ---------------------------------------------------------task-1-6.----------------------------------------------------
// Напишите следующую программу, которая считает корни квадратного уравнения:
// Запрашивается переменная a через prompt.
// Запрашивается переменная b через prompt
// Запрашивается переменная c через prompt
// Затем считается дискриминант и сохраняется в переменную D, используйте формулу b^2-4*a*c для подсчета дискриминанта.
// Если D < 0 выведите в консоль «Корней нет»
// Если D = 0 посчитайте корень по формуле b/(2*a) и выведите значение корня в консоль.
// Если D > 0 посчитайте два корня по формулам
// (-b + Math.sqrt(d) )/(2*a)
// (-b - Math.sqrt(d) )/(2*a)

// let a = Number(prompt('a'))
// let b = Number(prompt('b'))
// let c = Number(prompt('c'))
// let D = b ** 2 - 4 * a * c
// let x = -b / (2 * a)
// let x1 = (-b + Math.sqrt(D) ) / (2 * a)
// let x2 = (-b - Math.sqrt(D) ) / (2 * a)

// if (D < 0) {
//     console.log("Корней нет")
//   }
// else if (D === 0) {
//     console.log(x)
//   } 
// else {
//     console.log(x1)
//     console.log(x2)
//   } 



// -----------------------------------------------------------Создайте файл task-2-1.-----------------------------------------------
// Ваша задача реализовать игру-викторину. Количество и сами вопросы на ваше усмотрение. То есть сначала пользователю задаются вопросы и возможность ввести ответ. Если ответ правильный, то показываем сообщение "Правильный ответ", иначе "Неправильный ответ".
// В конце показываем пользователю, на сколько правильных вопросов, он ответил.

// let c = 0
// let a = prompt(`Слолица России 
// 1 - Москва 
// 2 - Пекин`)
// if (a == 1) {
//     alert('Правильный ответ')
//     c++
// }
// else {
//     alert('Неправильный ответ')
// }

// let b = prompt(`Столица Китая
// 1 - Москва 
// 2 - Пекин`)
// if (b == 2) {
//     alert('Правильный ответ')
//     c++
// }

// else {
//     alert('Неправильный ответ')
// }
// alert(c)



// -------------------------------------------------------------task-2-2.-------------------------------------------------------
// Реализуйте игру «Угадай число». При загрузке страницы ваша программа должна генерировать случайное число от 1 до 10, можно использовать следующий код:
// const randomNumber = Math.floor(Math.random() * 10) + 1;
// Затем у пользователя есть три попытки, чтобы угадать сгенерированное, путем ввода своего варианта ответа через prompt
// Когда пользователь угадает число, необходимо показать ему сообщение "Вы угадали"
// Если пользователь за три попытки не смог угадать число, то вывести сообщение "Вы проиграли"

// const randomNumber = Math.floor(Math.random() * 10) + 1;
// let b = 0
// for (let i = 0; i < 3; i++) {
//     let a = Number(prompt('введите число от 1 до 10'))
//     if (randomNumber == a) {
//         alert("Вы угадали")
//         break
//     } else { b++ }

// }
// if (b > 2) { alert("Вы проиграли") } 



// ---------------------------------------------------task-2-3.-----------------------------------------------------------------------
// Напишите следующую программу, которая работает по следующему принципу:
// Пользователь должен попасть по птичке путем ввода правильного числа угла наклона, под которым он попадет в птицу.
// У пользователя есть 2 попытки;
// Если пользователь выбрал в первой попытке число больше правильного, то вывести сообщение "Промах, возьмите чутка выше.". Если наоборот меньше выбрал, то "Промах, возьмите чутка ниже."

// let corner = 6
// let b = 0
// for (let i = 0; i < 2; i++) {
//     let a = Number(prompt('введите угол для попадания'))
//     if (corner == a) {
//         alert("Вы угадали")
//         break
//     } else {
//         if (a < corner) {
//             alert("Промах, возьмите чутка выше.")
//         }
//         if (a > corner) {
//             alert("Промах, возьмите чутка ниже.")
//         }
//     }
//     b++
// }
// if (b > 1) { alert("Вы проиграли") }

// Решите задачу через switch-case.
//Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее.


// let num
// num = Number(prompt('какое число вы загадали') )
// let result
// switch(num){
//     case 1: result = 'зима'
//     break;
//     case 2: result = 'весна'
//     break;
//     case 3: result = 'лето'
//     break;
//     case 4: result = 'осень'
//     break;
//     default: console.log('ошибка')
// }
// console.log(result)


// Игра угадай число, укажите в переменную число от 1 до 20
// Спросите у пользователя какое число вы загадали.
// Если он угадал, то поздравьте его с победой, если нет,
// то скажите больше или меньше ваше число.
// Спросите пользователя еще 3 раза, если он не ответит правильно,
// то скажите что он проиграл


// let counter = 0
// let answer = 10
// let num = Number(prompt('какое число вы загадали'))
// if (num == answer) {
//     alert('победа')
// }

// else {
//     for (i = 0; i < 3; i++) {

//         counter++

//         if (counter < 3) {

//             if (num < 10) {
//                 alert('число меньше')
//                 num = Number(prompt('какое число вы загадали'))

//             } else if (num > 10) {
//                 alert('число больше')
//                 num = Number(prompt('какое число вы загадали'))
//             }

//         } else { alert('проиграл') }

//     }
// }




// function showMyinfo(name, surname, age){
//     console.log(`${name} ${surname} ${age}`)
// }

// showMyinfo('Алексей', 'Пак', '26')
// showMyinfo('Евгений', 'Заводян', '27')




// ------------------1----------------
// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.


// function getSquareTheNumber(number){
//     return number ** 2
// }
// console.log(getSquareTheNumber(3))


// // ------------------2----------------
// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.


// function counts(number1, number2, number3){
//     (number1 - number2) / number3
// }
// console.log(counts(1, 2, 3))


// // ------------------3----------------
// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.


// function returnTheDayOfTheWeek(numberDay){
//     switch (numberDay){
//         case 1: return numberDay = "понедельник"
//         break
//         case 2: return numberDay = "вторник"
//         break
//         case 3: return numberDay = "среда"
//         break
//         case 4: return numberDay = "четверг"
//         break
//         case 5: return numberDay = "пятница"
//         break
//         case 6: return numberDay = "суббота"
//         break
//         case 7: return numberDay = "воскресенье"
//         break
//     }
// }
// console.log(returnTheDayOfTheWeek(3))
 

// -------------------------4-----------------------
// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.


// function isEven(number){
//     if (number % 2 === 0) {
//         return true
//     } else {return false}
// }
// console.log(isEven(7))

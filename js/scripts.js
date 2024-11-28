// Домашние задания №1

const timeOfDay = prompt("Введите время суток (утро, день, вечер):").trim();
const morning = timeOfDay === "утро"
const day = timeOfDay === "день"
const evening = timeOfDay === "вечер"

if (typeof timeOfDay !== "string" || timeOfDay === "") {
    alert("Ошибка: вы должны ввести время суток (утро, день, вечер). Попробуйте снова.");
}
 else if (morning) {
    alert(`Рекомендуемый напиток для ${timeOfDay}: кофе!`);
} else if (day) {
    alert(`Рекомендуемый напиток для ${timeOfDay}: чай!`);
} else if (evening) {
    alert(`Рекомендуемый напиток для ${timeOfDay}: горячий шоколад!`);
} else {
    alert("Ошибка: введите одно из следующих значений: утро, день, вечер.");
}

// Домашние задания №2

const student = {};

student.name = prompt("Введите имя:").trim();
student.age = parseInt(prompt("Введите возраст:"), 10);
student.subject = prompt("Введите предмет:").trim();
student.grade = prompt("Введите оценку:").trim();

console.log("Объект после заполнения:", student);

student.age += 5;

console.log("Объект после увеличения возраста:", student);

// Домашние задания №3

const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];

console.log(movies[1].director);
console.log(movies[3].genre);

// Домашние задания №4

const products = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];

products.unshift("мандарины");
console.log(products);

products.pop();
console.log(products);

products.splice(2, 1, "ягоды", "винограды");
console.log(products);
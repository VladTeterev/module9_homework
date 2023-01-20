// JSON, который будем парсить
const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

// Получение данных
const parser = JSON.parse(jsonString);
const person1 = parser.list[0];
const person2 = parser.list[1];

// Запись данных в результирующий объект
const result = {
  list: [
    {
      name: person1.name,
      age: Number(person1.age),
      prof: person1.prof,
    },
    {
      name: person2.name,
      age: Number(person2.age),
      prof: person2.prof,
    },
  ],
};
console.log(result);

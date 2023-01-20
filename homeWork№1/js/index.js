// Создание экземпляра класса DOMParser
const parser = new DOMParser();

// XML, который будем парсить
const xmlString = `
<list>
  <student id = "first-student">
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student id = "second-student">
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const firstStudNode = listNode.querySelector("#first-student");
const firstStudNameNode = firstStudNode.querySelector("name");
const firstNameFirstStudNode = firstStudNameNode.querySelector("first");
const secondNameFirstStudNode = firstStudNameNode.querySelector("second");
const ageFirstStudNode = firstStudNode.querySelector("age");
const profFirstStudNode = firstStudNode.querySelector("prof");

const secondStudNode = listNode.querySelector("#second-student");
const secondStudNameNode = secondStudNode.querySelector("name");
const firstNameSecondStudNode = secondStudNameNode.querySelector("first");
const secondNameSecondStudNode = secondStudNameNode.querySelector("second");
const ageSecondtStudNode = secondStudNode.querySelector("age");
const profSecondtStudNode = secondStudNode.querySelector("prof");

// Получение данных из атрибутов
const langAttrFirstStud = firstStudNameNode.getAttribute("lang");
const langAttrSecondStud = secondStudNameNode.getAttribute("lang");

// Запись данных в результирующий объект
const result = {
  list: [
    {
      name: `${firstNameFirstStudNode.textContent} ${secondNameFirstStudNode.textContent}`,
      age: Number(ageFirstStudNode.textContent),
      prof: profFirstStudNode.textContent,
      lang: langAttrFirstStud,
    },
    {
      name: `${firstNameSecondStudNode.textContent} ${secondNameSecondStudNode.textContent}`,
      age: Number(ageSecondtStudNode.textContent),
      prof: profSecondtStudNode.textContent,
      lang: langAttrSecondStud,
    },
  ],
};

console.log(result);
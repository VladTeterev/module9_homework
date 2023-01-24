# module9_homework
Задание №1.<br>
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код,<br>
который будет преобразовывать XML в JS-объект и выводить его в консоль.<br>

Задание №2.<br>
Вам дана заготовка и результат, который вы должны получить.<br>
Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.<br>

Задание №3<br>
Напишите код приложения, интерфейс которого представляет собой input и кнопку.<br>
В input можно ввести любое число.При клике на кнопку происходит следующее:<br>
Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».<br>
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10,<br>
где get-параметр limit — это введённое число.<br>
Пример. Если пользователь ввёл 5, то запрос будет вида: https://picsum.photos/v2/list?limit=5.<br>
После получения данных вывести ниже картинки на экран.<br>

Задание №4<br>
Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.<br>
При клике на кнопку происходит следующее:<br>
Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;<br>
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300,<br><br>
где первое число — ширина картинки, второе — высота.<br>
Пример. Если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.<br>
После получения данных вывести ниже картинку на экран.<br>

Задание №5<br>
Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.<br>
Заголовок первого input — «номер страницы».<br>
Заголовок второго input — «лимит».<br>
Заголовок кнопки — «запрос».<br>
При клике на кнопку происходит следующее:<br>
Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;<br>
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;<br>
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;<br>
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10,<br>
где GET-параметр page — это число из первого input,а GET-параметр limit — это введённое число второго input.<br>
Пример. Если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.<br>
После получения данных вывести список картинок на экран.<br>
Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).
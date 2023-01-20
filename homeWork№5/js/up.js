const btn = document.querySelector(".btn");

useRequest();

function useRequest() {
  // Ищем элементы страницы
  const pageNumber =
    +document.querySelector(".j-input-request1").value ||
    localStorage.getItem("pageNumber");
  const limit =
    +document.querySelector(".j-input-request2").value ||
    localStorage.getItem("limit");
  const resultNode = document.querySelector(".j-result");

  // Запись в localStorage
  localStorage.setItem("pageNumber", pageNumber);
  localStorage.setItem("limit", limit);

  //   Проверка инпутов по условиям задания
  const validateInputs = function () {
    let validatedFirst = true;
    let validatedSecond = true;

    if (
      pageNumber > 10 ||
      pageNumber === 0 ||
      isNaN(pageNumber) ||
      pageNumber === ""
    ) {
      validatedFirst = false;
    }

    if (limit > 10 || limit === 0 || isNaN(limit) || limit === "") {
      validatedSecond = false;
    }
    if (!validatedFirst && !validatedSecond) {
      resultNode.innerHTML = `<p class="massage">Номер страницы и лимит вне диапазона от 1 до 10</p>`;
      return false;
    } else if (!validatedFirst) {
      resultNode.innerHTML = `<p class="massage">Номер страницы вне диапазона от 1 до 10</p>`;
      return false;
    } else if (!validatedSecond) {
      resultNode.innerHTML = `<p class="massage">Лимит вне диапазона от 1 до 10</p>`;
      return false;
    }
    return true;
  };

  //   Запрос и обработка запроса
  if (validateInputs()) {
    fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
      // Парсим в json
      .then((response) => {
        console.log("response", response);

        let json = response.json();
        console.log("promise", json);
        return json;
      })
      //   Встраиваем карточки картинок из обработанного запроса
      .then((json) => {
        let cards = "";
        json.forEach((item) => {
          const cardBlock = `
          <div class="card">
            <img
              src="${item.download_url}"
              class="card-image"
            />
            <p>${item.author}</p>
          </div>
        `;
          cards = cards + cardBlock;
        });

        resultNode.innerHTML = cards;
      })
      .catch(() => console.log("error"));
  }
}

// Обработчик на клик по кнопке, выполняем асинхронный запрос и ждем ответ от сервера
btn.addEventListener("click", async () => await useRequest());

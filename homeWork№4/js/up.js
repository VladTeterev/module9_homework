const btn = document.querySelector(".btn");

const useRequest = () => {
  let width = +document.querySelector(".j-input-request1").value;
  let heigth = +document.querySelector(".j-input-request2").value;
  const resultNode = document.querySelector(".j-result");

  //   Проверка инпутов
  const validateInput = function () {
    if (width === "" || isNaN(width) || width < 100 || width > 300) {
      return false;
    } else if (heigth === "" || isNaN(heigth) || heigth < 100 || heigth > 300) {
      return false;
    }

    return true;
  };

  // Запрос
  if (validateInput()) {
    return fetch("https://picsum.photos/150/200")
      .then((response) => {
        const cardBlock = `
        <div class="card">
          <img
            src="${response.url}"
            style="height:${heigth}px; width:${width}px;"
          />
        </div>
      `;
        resultNode.innerHTML = cardBlock;
      })
      .catch(() => {
        console.log("error");
      });
  } else {
    resultNode.innerHTML = `
        <p class="some_text">Одно из чисел вне диапазона от 100 до 300!</p>
        `;
  }
};

// Обработчик клика на кнопку
btn.addEventListener("click", async () => await useRequest());

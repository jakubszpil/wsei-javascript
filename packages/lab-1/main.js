import "./style.css";

const form = document.getElementById("form");
const info = document.getElementById("info");

function getSum(...items) {
  return items.reduce((sum, item) => sum + item, 0);
}

function getAverage(...items) {
  return getSum(...items) / items.length;
}

function getMinValue(...items) {
  return items.reduce(
    (min, item) => (item < min ? item : min),
    Number.MAX_VALUE
  );
}

function getMaxValue(...items) {
  return items.reduce(
    (max, item) => (item > max ? item : max),
    Number.MIN_VALUE
  );
}

function renderMessage(sum, average, min, max) {
  info.innerHTML = `
    <div class="info__wrapper">
      <p class="info__line">Suma wartości: ${sum}</p>
      <p class="info__line">Średnia wartości: ${average}</p>
      <p class="info__line">Najmniejsza wartość: ${min}</p>
      <p class="info__line">Największa wartość: ${max}</p>
    </div>
  `;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const a = parseInt(formData.get("a"), 10);
  const b = parseInt(formData.get("b"), 10);
  const c = parseInt(formData.get("c"), 10);
  const d = parseInt(formData.get("d"), 10);

  renderMessage(
    getSum(a, b, c, d),
    getAverage(a, b, c, d),
    getMinValue(a, b, c, d),
    getMaxValue(a, b, c, d)
  );
});

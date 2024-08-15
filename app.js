// async function fetchData() {

// }

const btn = document.querySelector(".convert");
const input = document.querySelector(".input");
const from = document.querySelector("#fromSelect");
const to = document.querySelector("#toSelect");

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let fromVal = from.value;
  let toVal = to.value;
  let inputVal = +input.value;

  let response = await fetch(
    `https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=${fromVal}&currencies=${toVal}`,
    {
      headers: {
        "x-rapidapi-key": "fb323d50aemsh021cce6e22c7eccp14cda2jsn5f18a9634617",
      },
    }
  );
  let data = await response.json();

  let result = data.result[toVal.toUpperCase()];

  result = (result * inputVal).toFixed(2);
  console.log(result);

  const cardWr = document.querySelector(".card1");
  const card = document.createElement("div");
  const h2 = document.createElement("h2");

  cardWr.appendChild(card);
  card.appendChild(h2);
  h2.textContent = `${result} ${toVal.toUpperCase()}`;
  h2.classList.add("font-semibold");
  input.value = "";
});

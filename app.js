document.addEventListener('DOMContentLoaded', () => {
  const url = "https://restcountries.com/v3.1/all";
  const btn = document.querySelector(".btn");
  const input = document.querySelector(".input");
  async function country(params) {
    let response = await fetch(url);
    let data = await response.json();
    btn.addEventListener("click", () => {
      const filters = data.filter((item) => {
        return (item.name.cca3 === indexOF(input.value)) === 0;
      });

      input.value = "";
    });
    flags(data);
  }

  country();

  function flags(flagsData) {
    console.log(flagsData);

    flagsData.forEach((element) => {
      const wrap = document.querySelector(".wrapper");
      const div = document.createElement("div");
      const card = document.createElement("div");

      const h2 = document.createElement("h2");
      const h3 = document.createElement("h2");
      const h4 = document.createElement("h2");
      const img = document.createElement("img");
      card.appendChild(img);
      card.classList.add(
        "w-[400px]",
        "h-[300px]",
        "overflow-hidden",
        "bg-white",
        "h-[200px]"
      );
      h2.textContent = element.name.common;
      h3.textContent = element.region;
      h4.textContent = element.cca3;
      img.src = element.flags.png;
      div.append(card, h2, h3, h4);
      img.classList.add("w-full", "h-[300px]");
      wrap.appendChild(div);
      h2.classList.add("mt-10", "pl-4");
      h4.classList.add("pl-4", "pb-5");
      h3.classList.add("pl-4");

      div.classList.add(
        "w-[400px]",
        "min-h-[400px]",
        "bg-black",
        "rounded-xl",
        "overflow-hidden",
        "text-white"
      );

      if (element.name.common == "Switzerland") {
        img.classList.add("h-[100px]", "sw");
      }
    });
  }

  const btn1 = document.querySelector(".btn1");
  const body = document.querySelector(".body");
  const shar = document.querySelector(".shar");

  if (localStorage.getItem("dark-mode") === "dark") {
    body.classList.add("bg-black");
  } else body.classList.add("bg-white");

  btn1.addEventListener("click", () => {
    shar.classList.toggle("translate-x-[19px]");
    shar.classList.toggle("bg-white");
    btn1.classList.toggle("border-white");
    shar.classList.toggle("border-white");
    shar.classList.add("transition-all");
    body.classList.toggle("bg-black");
    const contain = body.classList.contains("bg-black");
    if (contain) {
      localStorage.setItem("dark-mode", "dark");
    } else {
      localStorage.setItem("dark-mode", "light");
    }
  });

})


import { writable } from "svelte/store";

export const countryDataStore = writable([]);
export const countryPopulation = writable([]);

export const featchData = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    if (res.ok) {
      const data = await res.json();
      let cunPopu = data.map((item) => {
        const newArr = {
          country: item.name.common,
          population: item.population,
        };
        return newArr;
      });
      cunPopu.sort((a, b) => b.population - a.population);
      cunPopu = cunPopu.slice(0, 10);
      const sliceData = data.slice(0, 15);
      countryDataStore.set(sliceData);
      countryPopulation.set(cunPopu);
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (e) {
    console.log(e);
  }
};

const arr = [
  {
    name: "country 1",
    population: 5352000,
  },
  {
    name: "country 2",
    population: 542589,
  },
  {
    name: "country 3",
    population: 65443612,
  },
  {
    name: "country 4",
    population: 79465873,
  },
  {
    name: "country 5",
    population: 4654564364,
  },
  {
    name: "country 6",
    population: 86337862,
  },
  {
    name: "country 7",
    population: 463455635,
  },
  {
    name: "country 8",
    population: 5345564572,
  },
  {
    name: "country 9",
    population: 55632,
  },
  {
    name: "country 10",
    population: 7513,
  },

  {
    name: "country 11",
    population: 56632,
  },
  {
    name: "country 12",
    population: 6336413,
  },
  {
    name: "country 13",
    population: 5464632,
  },
  {
    name: "country 14",
    population: 79463,
  },
  {
    name: "country 15",
    population: 36433654,
  },
  {
    name: "country 16",
    population: 246965,
  },
  {
    name: "country 17",
    population: 8663564663,
  },
];

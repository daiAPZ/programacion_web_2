const item = [
  {
    id: 1,
    title: "Avenger End Game",
    year: 2019,
    img: "https://www.metroecuador.com.ec/resizer/Lv6RAEhAL65nScOAcfjALLILx1k=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/HV3E5IZAEVFALJYDZUM3KXGGW4.jpg",
  },

  {
    id: 2,
    title: "harry potter",
    year: 2001,
    img: "https://m.media-amazon.com/images/I/717E6RcrE9L.jpg",
  },

  {
    id: 3,
    title: "REC [•]",
    year: 2008,
    img: "https://m.media-amazon.com/images/M/MV5BZTJmNTZlZWUtZTQ2Yi00YTFjLWFiNzctYzFlNmZmZGMzYTlmXkEyXkFqcGdeQXVyMjQ2MTk1OTE@._V1_.jpg",
  },

  {
    id: 4,
    title: "Shrek",
    year: 2001,
    img: "https://i.etsystatic.com/18324742/r/il/f07978/3916990603/il_570xN.3916990603_cv4t.jpg",
  },

  {
    id: 5,
    title: "Trainspotting",
    year: 1997,
    img: "https://www.themoviedb.org/t/p/original/bhY62Dw8iW54DIhxPQerbuB9DOP.jpg",
  },

  {
    id: 6,
    title: "Spider-man HomeComing",
    year: 2017,
    img: "https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_.jpg",
  },

  {
    id: 7,
    title: "The Batman",
    year: 2022,
    img: "https://http2.mlstatic.com/D_NQ_NP_752748-MLA48914506397_012022-O.webp",
  },

  {
    id: 8,
    title: "Taxi Driver",
    year: 1977,
    img: "https://static.displate.com/857x1200/displate/2020-07-06/6378753f0fa7d0cd58d616ed0dd0ef8c_824089360fc99361ea5ce22c58be24af.jpg",
  },
];

function onload() {
  const list = document.getElementById("lista");

  array.map((item) => {
    const listElement = document.createElement("li");

    const title = document.createElement("h3");
    const year = document.createElement("label");
    const img = document.createElement("img");

    title.textContent = item.title; //crear las etiquetas/elementos
    year.textContent = item.year;
    img.src = item.img;

    listElement.appendChild(title); //asignar valores
    listElement.appendChild(year);
    listElement.appendChild(img);

    list.appendChild(listElement); //Appender los elementos a los padres correspondientes
  });
}

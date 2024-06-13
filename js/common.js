
$(document).ready(function () {

  // VARIABLES:
  const portlet_main = document.querySelector('.portlet[data-portlet="tabla-liga2"]');
  const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3';
  const API_KEY = '455d68b50dmsh0af0a6836873b4bp178cc7jsn0bb76fff3151'

  // FUNCTION TO GET DATA:
  const __get__data = async (param) => {
    const resp = await fetch(`${BASE_URL}${param}`, {
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${API_KEY}`
      }
    })
    const data = await resp.json();
    return data;
  }

  // DATA OF EACH TEAM:
  const __teams = [
    {
      id: 0,
      public: "Alianza Universidad",
      name: "ALIANZA UNIVERSIDAD",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__0).png"
    },
    {
      id: 1,
      public: "San Marcos",
      name: "FÚTBOL CLUB SAN MARCOS",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__1).png"
    },
    {
      id: 2,
      public: "Deportiva Agropecuaria",
      name: "AGROPECUARIA",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__3).png"
    },
    {
      id: 3,
      public: "Juan Pablo II College",
      name: "JUAN PABLO II COLLEGE",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__4).png"
    },
    {
      id: 4,
      public: "Deportivo Llacuabamba",
      name: "DEPORTIVO LLACUABAMBA",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__5).png"
    },
    {
      id: 5,
      public: "Carlos Stein",
      name: "CARLOS STEIN",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__6).png"
    },
    {
      id: 6,
      public: "Molinos El Pirata",
      name: "EL PIRATA",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__2).png"
    },
    {
      id: 7,
      public: "Union Huaral",
      name: "UNION HUARAL",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__7).png"
    },
    {
      id: 8,
      public: "Juan Aurich",
      name: "JUAN AURICH",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__8).png"
    },
    {
      id: 9,
      public: "Academia Cantolao",
      name: "AD CANTOLAO",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__9).png"
    },
    {
      id: 10,
      public: "Deportivo Municipal",
      name: "DEPORTIVO MUNICIPAL",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__10).png"
    },
    {
      id: 11,
      public: "UCV Moquegua",
      name: "UCV MOQUEGUA",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__11).png"
    },
    {
      id: 12,
      public: "U. San Martin",
      name: "SAN MARTÍN",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__12).png"
    },
    {
      id: 13,
      public: "Santos",
      name: "SANTOS",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__13).png"
    },
    {
      id: 14,
      public: "Comerciantes",
      name: "COMERCIANTES FC",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__14).png"
    },
    {
      id: 15,
      public: "Deportivo Binacional",
      name: "BINACIONAL",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__15).png"
    },
    {
      id: 16,
      public: "Deportivo Coopsol",
      name: "DEPORTIVO COOPSOL",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__16).png"
    },
    {
      id: 17,
      public: "Ayacucho FC",
      name: "AYACUCHO FC",
      img: "https://www.claro.com.pe/assets/havas/landing-deportes/liga2/assets/general/teams/equipo__17).png"
    },
  ]

  // FUNCTIONS:
  const __pad = (d) => {
    return d.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
  }

  const __team__f = (name) => {
    return __teams.find(t => t.public === name)
  }

  __get__data('/standings/?league=282&season=2024').then(({ response }) => {

    const content1 = response[0].league.standings[0];
    const content2 = response[0].league.standings[1];
    // const total = response[0].league.standings.flat()



    const content__tabs = portlet_main.querySelectorAll('.section[data-section] .section__tabs li');
    const content__view = portlet_main.querySelector('.section[data-section] .section__views');


    let HTML1 = "";

    const header__table = '<ul class="section__view__header"><li>EQUIPO </li><li>PJ</li><li>PG </li><li>PE </li><li>PP </li><li>GF </li><li>GC </li><li>+/-</li><li>PUNTOS</li></ul>';

    HTML1 += "<div class='section__view'>"
    HTML1 += header__table;

    content1.forEach((child) => {
      HTML1 += `
      <ul class="section__view__item" id="${child.team.id}"> 
        <li> <img src="${__team__f(child.team.name).img}" alt=""/><span>${__team__f(child.team.name).name}</span></li>
        <li>${__pad(child.all.played)}</li>
        <li>${__pad(child.all.win)}</li>
        <li>${__pad(child.all.draw)}</li>
        <li>${__pad(child.all.lose)}</li>
        <li>${__pad(child.all.goals.for)}</li>
        <li>${__pad(child.all.goals.against)}</li>
        <li>${__pad(child.all.goals.for - child.all.goals.against)}</li>
        <li>${__pad(child.points)}</li>
      </ul>
      `
    })

    HTML1 += "</div>"

    HTML1 += "<div class='section__view'>"
    HTML1 += header__table;

    content2.forEach((child) => {
      HTML1 += `
      <ul class="section__view__item" id="${child.team.id}"> 
        <li> <img src="${__team__f(child.team.name).img}" alt=""/><span>${__team__f(child.team.name).name}</span></li>
        <li>${__pad(child.all.played)}</li>
        <li>${__pad(child.all.win)}</li>
        <li>${__pad(child.all.draw)}</li>
        <li>${__pad(child.all.lose)}</li>
        <li>${__pad(child.all.goals.for)}</li>
        <li>${__pad(child.all.goals.against)}</li>
        <li>${__pad(child.all.goals.for - child.all.goals.against)}</li>
        <li>${__pad(child.points)}</li>
      </ul>
      `
    })

    HTML1 += "</div>"

    content__view.innerHTML = HTML1;

    const content__views = portlet_main.querySelectorAll('.section[data-section] .section__view');

    const content__glider = portlet_main.querySelector('.section[data-section] .section__tabs .glider');

    // FUNCTIONALITIES:
    content__tabs.forEach((e, i) => {
      e.addEventListener('click', function () {
        content__tabs.forEach(item => item.classList.remove('active'));
        content__views.forEach(item => item.classList.remove('active'));


        content__views[i].classList.add('active');
        content__glider.style.left = this.offsetLeft + 'px';
        e.classList.add('active');
      });
    })

    content__tabs[0].click();
  })

})

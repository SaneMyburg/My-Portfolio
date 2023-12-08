const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('open-mobileMenu');
});

document.querySelectorAll('.menu').forEach((n) => n.addEventListener('click', () => {
  mobileMenu.classList.remove('open-mobileMenu');
}));

const projects = [
  {
    id: 'project1',
    img: {
      src: './images/besu-food1.png',
      alt: 'Picture of project',
    },
    title: 'BESA Italian Food',
    list: ['CANOPY', 'Back End Dev', '2015'],
    description:
      "Embark on a visual journey through a captivating display of Italian culinary delights and recipes &period;",
    languages: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://sanemyburg.github.io/Module2-Capstone/dist/',
    sourceUrl: 'https://github.com/SaneMyburg/Module2-Capstone',
  },
  {
    id: 'project2',
    img: {
      src: './images/project-2.svg',
      alt: 'Picture of project',
    },
    title: 'Multi-Post <br> Stories',
    list: ['Canopy', 'Back End Dev', '2015'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['HTML', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    id: 'project3',
    img: {
      src: './images/project-3.svg',
      alt: 'Picture of project',
    },
    title: 'Facebook 360',
    list: ['Canopy', 'Back End Dev', '2015'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    languages: ['HTML', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    id: 'project4',
    img: {
      src: './images/project-4.svg',
      alt: 'Picture of project',
    },
    title: 'Uber Navigation',
    list: ['Canopy', 'Back End Dev', '2015'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    languages: ['HTML', 'Ruby on rails', 'css', 'javascript'],
  },
];

const modalOverlay = document.querySelector('.modal-overlay');
function createModal() {
  projects.forEach((input) => {
    modalOverlay.innerHTML += `
    <div class="modal" aria-controls="${input.id}">
      <h6>${input.title}</h6> 
      <span class="close">&times;</span>
      <ul class="modal-list">
      </ul>
        <img class="modal-img" src="${input.img.src}" alt="${input.img.alt}" />
        <div class="description-container">
          <p class="modal-description">
            ${input.description}
          </p>
          <div class="program-language">
            <ul id="language-names">
              <li>${input.languages[0]}</li>
              <li>${input.languages[1]}</li>
              <li>${input.languages[2]}</li>
            </ul>
            <hr>
            <div class="modal-btns">
              <button id="seeLive" class="seeLiveBtn" data-url="${input.liveUrl}">
              See Live
              <img src="./images/see-live.png" alt="Live img" />
              </button>
              <button class="seeSourceBtn" data-url="${input.sourceUrl}">
              See Source
              <img src="./images/see-source.png" alt="Github logo" />
              </button>
            </div>
          </div>
        </div>
      
    </div> `;
  });
  addEventListeners();
}
const addEventListeners = () => {
  const seeLiveBtns = document.querySelectorAll('.seeLiveBtn');
  const seeSourceBtns = document.querySelectorAll('.seeSourceBtn');

  const redirectToLive = (event) => {
    const liveUrl = event.currentTarget.getAttribute('data-url');
    window.open(liveUrl, '_blank');
  }

  const redirectToSource = (event) => {
    const sourceUrl = event.currentTarget.getAttribute('data-url');
    window.open(sourceUrl, '_blank');
  }

  seeLiveBtns.forEach((btn) => btn.addEventListener('click', redirectToLive));
  seeSourceBtns.forEach((btn) => btn.addEventListener('click', redirectToSource));
}
createModal();

const popupOverlay = document.querySelector('.modal-overlay');
const seeProjects = document.querySelectorAll('.see-projects');
const modal = popupOverlay.querySelectorAll('.modal');

seeProjects.forEach((card) => {
  card.onclick = () => {
    popupOverlay.style.display = 'flex';

    const link = card.getAttribute('data-card');
    modal.forEach((s) => {
      const button = s.getAttribute('aria-controls');
      if (link === button) {
        s.classList.add('active');
      }
    });
  };
});

modal.forEach((close) => {
  close.querySelector('.close').onclick = () => {
    close.classList.remove('active');
    popupOverlay.style.display = 'none';
  };
});

const form = document.getElementById('form');
const email = document.getElementById('mail');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', (e) => {
  const message = 'Email must be small letters';
  if (email.value.toLowerCase() === email.value) {
    form.submit();
  } else {
    e.preventDefault();
    errorMsg.innerText = message;
    errorMsg.style.opacity = 1;
  }
});
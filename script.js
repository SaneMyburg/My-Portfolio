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
      'Embark on a visual journey through a captivating display of Italian culinary delights and recipes &period;',
    languages: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://sanemyburg.github.io/Module2-Capstone/dist/',
    sourceUrl: 'https://github.com/SaneMyburg/Module2-Capstone',
  },
  {
    id: 'project2',
    img: {
      src: './images/Forexdesktop.png',
      alt: 'Picture of project',
    },
    title: 'ForeignExchange <br> Application',
    list: ['Canopy', 'Back End Dev', '2015'],
    description:
      'Showcases forex pairs through integration with an API.',
    languages: ['HTML', 'Ruby on rails', 'css', 'javascript'],
    liveUrl: 'https://sanemforex-app.netlify.app/',
    sourceUrl: 'https://github.com/SaneMyburg/forex-app/tree/features',
  },
  {
    id: 'project3',
    img: {
      src: './images/spacedesktop.png',
      alt: 'Picture of project',
    },
    title: 'Space Travelors Club',
    list: ['Canopy', 'Back End Dev', '2015'],
    description:
      'A reservation website for rockets and spaceship travelers.',
    languages: ['HTML', 'React', 'css', 'javascript'],
    liveUrl: 'https://our-space-misssions.onrender.com/',
    sourceUrl: 'https://github.com/zdnahom/space-travelers-hub',
  },
  {
    id: 'project4',
    img: {
      src: './images/budgetdesktop.png',
      alt: 'Picture of project',
    },
    title: 'Budget App',
    list: ['Canopy', 'Back End Dev', '2015'],
    description:
      'Elevated financial organization with a user-friendly budget application designed to effortlessly manage and streamline your expenses.',
    languages: ['HTML', 'Ruby on rails', 'css', 'javascript'],
    liveUrl: 'https://smartbudget-41er.onrender.com/',
    sourceUrl: 'https://github.com/SaneMyburg/Budget-App-V2/tree/budget-app',
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
  addEventListeners(); // eslint-disable-line no-use-before-define
}
const addEventListeners = () => {
  const seeLiveBtns = document.querySelectorAll('.seeLiveBtn');
  const seeSourceBtns = document.querySelectorAll('.seeSourceBtn');

  const redirectToLive = (event) => {
    const liveUrl = event.currentTarget.getAttribute('data-url');
    window.open(liveUrl, '_blank');
  };

  const redirectToSource = (event) => {
    const sourceUrl = event.currentTarget.getAttribute('data-url');
    window.open(sourceUrl, '_blank');
  };

  seeLiveBtns.forEach((btn) => btn.addEventListener('click', redirectToLive));
  seeSourceBtns.forEach((btn) => btn.addEventListener('click', redirectToSource));
};
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

const toggleLanguages = () => { // eslint-disable-line no-unused-vars
  const languageContainer = document.getElementById('language-container');
  const toggleArrow = document.getElementById('toggle-arrow');

  if (languageContainer.style.display === 'none' || languageContainer.style.display === '') {
    languageContainer.style.display = 'flex';
    toggleArrow.innerHTML = '<img src=".images/right-pointer.svg" alt="Right arrow" />';
  } else {
    languageContainer.style.display = 'none';
    toggleArrow.innerHTML = '<img src=".images/down-pointer.svg" alt="Down arrow" />';
  }
};

const toggleFrameworks = () => { // eslint-disable-line no-unused-vars
  const languageContainer = document.getElementById('framework-container');
  const toggleArrow = document.getElementById('toggle-arrow');

  if (languageContainer.style.display === 'none' || languageContainer.style.display === '') {
    languageContainer.style.display = 'flex';
    toggleArrow.innerHTML = '<img src=".images/right-pointer.svg" alt="Right arrow" />';
  } else {
    languageContainer.style.display = 'none';
    toggleArrow.innerHTML = '<img src=".images/down-pointer.svg" alt="Down arrow" />';
  }
};

const toggleSkills = () => { // eslint-disable-line no-unused-vars
  const languageContainer = document.getElementById('skills-container');
  const toggleArrow = document.getElementById('toggle-arrow');

  if (languageContainer.style.display === 'none' || languageContainer.style.display === '') {
    languageContainer.style.display = 'flex';
    toggleArrow.innerHTML = '<img src=".images/right-pointer.svg" alt="Right arrow" />';
  } else {
    languageContainer.style.display = 'none';
    toggleArrow.innerHTML = '<img src=".images/down-pointer.svg" alt="Down arrow" />';
  }
};

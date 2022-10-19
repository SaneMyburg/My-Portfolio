const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menu-icon");

menuIcon.onclick = function () {
  mobileMenu.classList.toggle("open-mobileMenu");
};

document.querySelectorAll(".menu").forEach((n) =>
  n.addEventListener("click", () => {
    mobileMenu.classList.remove("open-mobileMenu");
  })
);

const projects = [
  {
    id: "project1",
    img: {
      src: "./images/project1.svg",
      alt: "Picture of project",
    },
    title: "Tonic",
    list: ["CANOPY", "Back End Dev", "2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages: ["HTML", "css", "Ruby and rails", "javascript"],
  },
  {
    id: "project2",
    img: {
      src: "./images/project-2.svg",
      alt: "Picture of project",
    },
    title: "Multi-Post Stories",
    list: ["Canopy", "Back End Dev", "2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages: ["HTML", "Ruby on rails", "css", "javascript"],
  },
  {
    id: "project3",
    img: {
      src: "./images/project-3.svg",
      alt: "Picture of project",
    },
    title: "Facebook 360",
    list: ["Canopy", "Back End Dev", "2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages: ["HTML", "Ruby on rails", "css", "javascript"],
  },
  {
    id: "project4",
    img: {
      src: "./images/project-4.svg",
      alt: "Picture of project",
    },
    title: "Uber Navigation",
    list: ["Canopy", "Back End Dev", "2015"],
    description:
      "A daily selection of privately personalized reads; no accounts o sign-ups required.",
    languages: ["HTML", "Ruby on rails", "css", "javascript"],
  },
];

const modalOverlay = document.querySelector(".modal-overlay");
function createModal() {
  projects.forEach((input) => {
    modalOverlay.innerHTML += `
    <div class="modal" data-target="${input.id}">
      <h6>${input.title}</h6> 
      <span class="close">&times;</span>
      <ul class="modal-list">
        <li id="canopy-modal">${input.list[0]}</li>
        <li><img src="./images/Counter.svg" alt="Bullet point image" /></li>
        <li>${input.list[1]}</li>
        <li><img src="./images/Counter.svg" alt="Bullet point image" /></li>
        <li>${input.list[2]}</li>
      </ul>
        <img class="modal-img" src="${input.img.src}" alt="${input.img.alt}" />
        <div class="preview-info">
          <p class="modal-description">
            ${input.description}
          </p>
          <div class="program-language">
            <ul id="language-names">
              <li>${input.languages[0]}</li>
              <li>${input.languages[1]}</li>
              <li>${input.languages[2]}</li>
              <li>${input.languages[3]}</li>
            </ul>
            <hr>
            <div class="modal-btns">
              <button href="">
              See Live
              <img src="./images/see-live.png" alt="Live img" />
              </button>
              <button href="">
              See Source
              <img src="./images/see-source.png" alt="Github logo" />
              </button>
            </div>
          </div>
        </div>
      
    </div> `;
  });
}
createModal();

const popupOverlay = document.querySelector(".modal-overlay");
const seeProjects = document.querySelectorAll(".see-projects");
const modal = popupOverlay.querySelectorAll(".modal");

seeProjects.forEach((card) => {
  card.onclick = () => {
    popupOverlay.style.display = "block";

    const link = card.getAttribute("data-card");
    modal.forEach((s) => {
      const button = s.getAttribute("data-target");
      if (link === button) {
        s.classList.add("active");
      }
    });
  };
});

modal.forEach((close) => {
  close.querySelector(".close").onclick = () => {
    close.classList.remove("active");
    popupOverlay.style.display = "none";
  };
});

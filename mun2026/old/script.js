// =========================
// INITIALIZE AOS
// =========================
AOS.init();

// =========================
// ITINERARY DATA
// =========================
const itineraries = {
  day1: [
    { time: "9:00 AM", event: "REGISTRATION & BREAKFAST" },
    { time: "10:30 AM", event: "OPENING CEREMONY" },
    { time: "11:30 AM", event: "COMMITTEE SESSION 1 BEGINS" },
    { time: "1:30 PM", event: "LUNCH BREAK" },
    { time: "2:30 PM", event: "COMMITTEE SESSION 2" },
  ],
  day2: [
    { time: "9:30 AM", event: "COMMITTEE SESSION 3" },
    { time: "1:00 PM", event: "LUNCH BREAK" },
    { time: "2:00 PM", event: "COMMITTEE SESSION 4" },
    { time: "4:00 PM", event: "CLOSING CEREMONY & AWARDS" },
  ],
};

// =========================
// COMMITTEES DATA
// =========================
const committees = [
  {
    id: 1,
    name: "UNSC",
    fullName: "United Nations Security Council",
    logo: "🛡️",
    description:
      "The Security Council has primary responsibility for the maintenance of international peace and security. It is the premier crisis committee dealing with pressing global conflicts.",
    members: [
      { name: "Sarah Johnson", role: "Chairperson" },
      { name: "Michael Chen", role: "Vice-Chair" },
      { name: "Aisha Patel", role: "Rapporteur" },
    ],
    color: "#800000",
  },
  {
    id: 2,
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    logo: "⚖️",
    description:
      "The Human Rights Council addresses situations of human rights violations and makes recommendations on them. It discusses thematic human rights issues and situations requiring attention.",
    members: [
      { name: "James Rodriguez", role: "Chairperson" },
      { name: "Emma Thompson", role: "Vice-Chair" },
      { name: "Yuki Tanaka", role: "Rapporteur" },
    ],
    color: "#B8860B",
  },
  {
    id: 3,
    name: "DISEC",
    fullName: "Disarmament & International Security Committee",
    logo: "☮️",
    description:
      "DISEC deals with disarmament, global challenges and threats to peace that affect the international community. Topics include nuclear weapons, conventional arms, and cyber warfare.",
    members: [
      { name: "Hassan Ahmed", role: "Chairperson" },
      { name: "Sofia Martinez", role: "Vice-Chair" },
      { name: "David Kim", role: "Rapporteur" },
    ],
    color: "#8B0000",
  },
  {
    id: 4,
    name: "UNODC",
    fullName: "United Nations Office on Drugs and Crime",
    logo: "🔒",
    description:
      "UNODC works to combat illicit drugs and international crime, as well as terrorism. It focuses on justice, crime prevention, and criminal justice reform.",
    members: [
      { name: "Isabella Costa", role: "Chairperson" },
      { name: "Omar Hassan", role: "Vice-Chair" },
      { name: "Mei Wong", role: "Rapporteur" },
    ],
    color: "#B8860B",
  },
];

// =========================
// SECRETARIAT MEMBERS DATA
// =========================
const secretariat = [
  {
    name: "PAVAN",
    role: "PRESIDENT",
    quote: "When the going gets tough, only the toughest will keep going",
    image: "officer bearers/pavan.jpg",
  },
  {
    name: "THEJAS AVILA MARGRET YP",
    role: "VICE PRESIDENT",
    quote: "Making Impact look Effortless",
    image: "officer bearers/avila.jpg",
  },
];

// =========================
// RENDER ITINERARY
// =========================
function renderItinerary(day, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <h3 class="itinerary-title">${day.toUpperCase()} ITINERARY</h3>
    <div class="itinerary-timeline">
      ${itineraries[day]
        .map((item, index) => {
          const rightClass = index % 2 === 1 ? "right" : "";
          return `
            <div class="timeline-item ${rightClass}">
              <span class="time">${item.time}</span>
              <span class="event">${item.event}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

// =========================
// ITINERARY TAB LOGIC
// =========================
document.addEventListener("DOMContentLoaded", () => {
  renderItinerary("day1", "day1");
  renderItinerary("day2", "day2");

  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".itinerary-day");
  const slider = document.querySelector(".tab-slider");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.add("hidden"));

      tab.classList.add("active");
      const targetId = tab.getAttribute("data-tab");
      document.getElementById(targetId).classList.remove("hidden");

      const tabWidth = tab.offsetWidth;
      const offset = tabWidth * index + 5 * index;
      slider.style.transform = `translateX(${offset}px)`;
    });

    if (tab.classList.contains("active")) {
      const tabWidth = tab.offsetWidth;
      const offset = tabWidth * index + 5 * index;
      slider.style.transform = `translateX(${offset}px)`;
    }
  });
});

// =========================
// RENDER COMMITTEES SECTION
// =========================
function renderCommitteesSection() {
  const container = document.getElementById("committees-section-container");
  if (!container) return;

  container.className = "committee-section-bg min-h-screen py-16 px-4";
  container.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-5xl font-bold committee-title-gradient mb-3 subheadings">
          Committees
        </h2>
        <div class="h-1 w-32 bg-gradient-to-r from-transparent via-[#800000] to-transparent mx-auto rounded-full"></div>
      </div>
      <div id="committee-buttons" class="flex justify-center gap-6 mb-12 flex-wrap"></div>
      <div id="committee-content-box" class="relative committee-content-box rounded-3xl border border-amber-900/30 shadow-2xl overflow-hidden"></div>
    </div>
  `;

  let activeCommittee = committees[0];
  renderButtons();
  renderContent();

  function renderButtons() {
    const buttonContainer = document.getElementById("committee-buttons");
    buttonContainer.innerHTML = "";

    committees.forEach((committee) => {
      const isActive = activeCommittee.id === committee.id;
      const button = document.createElement("button");
      button.className = `relative group transition-all duration-300 ${
        isActive ? "scale-110" : "scale-100 hover:scale-105"
      }`;
      button.onclick = () => {
        activeCommittee = committee;
        renderButtons();
        renderContent();
      };

      const innerDiv = document.createElement("div");
      innerDiv.className = `w-28 h-28 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-2xl transition-all duration-300 ${
        isActive ? "committee-button-active" : "committee-button-inactive"
      }`;
      innerDiv.innerHTML = `<span class="text-lg">${committee.name}</span>`;
      button.appendChild(innerDiv);

      if (isActive) {
        const triangle = document.createElement("div");
        triangle.className = "triangle-down";
        button.appendChild(triangle);
      }

      buttonContainer.appendChild(button);
    });
  }

  function renderContent() {
    const contentBox = document.getElementById("committee-content-box");
    const committee = activeCommittee;
    const backgroundLogo = `
      <div class="absolute inset-0 flex items-center justify-center opacity-10 text-[400px] pointer-events-none" style="color: ${committee.color};">
        ${committee.logo}
      </div>
    `;
    const content = `
      <div class="relative z-10 p-10">
        <div class="text-center mb-8 animate-fade-up">
          <div class="text-6xl mb-4">${committee.logo}</div>
          <h3 class="text-4xl font-bold text-amber-400 mb-2">${committee.name}</h3>
          <p class="text-xl text-amber-200/80">${committee.fullName}</p>
        </div>
        <div class="bg-slate-950/50 rounded-2xl p-8 border border-amber-900/20 mb-8 animate-fade-up">
          <h4 class="text-2xl font-semibold committee-text-gradient mb-4 flex items-center">
            <span class="mr-3 text-[#FFD700]">📋</span> Committee Overview
          </h4>
          <p class="text-slate-300 leading-relaxed text-lg">${committee.description}</p>
        </div>
        <div class="bg-slate-950/50 rounded-2xl p-8 border border-amber-900/20 animate-fade-up">
          <h4 class="text-2xl font-semibold committee-text-gradient mb-6 flex items-center justify-center">
            <span class="mr-3 text-[#FFD700]">👥</span> Executive Board
          </h4>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            ${committee.members
              .map(
                (m, i) => `
                <div class="bg-slate-900/70 rounded-xl p-4 border border-amber-900/10 flex flex-col items-center text-center flex-1 min-w-[200px] animate-fade-up" style="animation-delay: ${i *
                  0.2 +
                  0.9}s;">
                  <div class="member-image-placeholder">PIC</div>
                  <p class="font-semibold text-amber-300 text-lg">${m.name}</p>
                  <p class="text-slate-400 text-sm">${m.role}</p>
                </div>
              `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
    contentBox.innerHTML = backgroundLogo + content;
  }
}

// =========================
// RENDER SECRETARIAT MEMBERS
// =========================
function renderSecretariat() {
  const container = document.getElementById("secretariat-container");
  container.innerHTML = secretariat
    .map(
      (person) => `
      <div class="peoplecard" data-aos="flip-right">
        <div class="Box">
          <img src="${person.image}" alt="${person.name} - ${person.role}" />
        </div>
        <div class="details">
          <span>${person.name}</span>
          <p class="peoplerole">${person.role}</p>
          <p class="peoplecontent">${person.quote}</p>
        </div>
      </div>
    `
    )
    .join("");
}

// =========================
// ON PAGE LOAD
// =========================
document.addEventListener("DOMContentLoaded", () => {
  renderCommitteesSection();
  renderSecretariat();
});

/* ========================================
   COMPONENTS
   SVCEMUN'26 - UI Component Renderers
   ======================================== */

import { committees, itineraries, secretariat, faqData } from './data.js';

/* ==================
   COMMITTEES SECTION
   ================== */

export function renderCommitteesSection() {
  const container = document.getElementById("committees-section-container");
  if (!container) return;

  // Show loading spinner
  container.innerHTML = '<div class="loading-spinner"></div>';

  // Simulate async loading with error handling
  setTimeout(() => {
    try {
      if (!committees || committees.length === 0) {
        throw new Error('No committee data available');
      }

      container.className = "committee-section-bg";
      container.innerHTML = `
        <div class="container">
          <h2 class="section-heading">Committees</h2>
          <div id="committee-tabs" class="committee-tabs"></div>
          <div id="committee-content" class="committee-content"></div>
        </div>
      `;

      let activeCommittee = committees[0];
      renderCommitteeTabs();
      renderCommitteeContent();

      function renderCommitteeTabs() {
        const tabsContainer = document.getElementById("committee-tabs");
        tabsContainer.innerHTML = "";

        committees.forEach((committee) => {
          const isActive = activeCommittee.id === committee.id;
          const tab = document.createElement("button");
          tab.className = `committee-tab ${isActive ? 'active' : ''}`;
          tab.textContent = committee.name;
          tab.setAttribute('aria-selected', isActive);
          tab.setAttribute('role', 'tab');

          tab.addEventListener('click', () => {
            activeCommittee = committee;
            renderCommitteeTabs();
            renderCommitteeContent();
          });

          tabsContainer.appendChild(tab);
        });
      }

      function renderCommitteeContent() {
        const contentBox = document.getElementById("committee-content");
        const committee = activeCommittee;

        const membersHtml = committee.members.map((member, index) => `
          <div class="team-card" style="animation-delay: ${index * 0.1}s;">
            <div class="team-card-content">
              <div class="team-card-name">${member.name}</div>
              <div class="team-card-role">${member.role}</div>
            </div>
          </div>
        `).join('');

        contentBox.innerHTML = `
          <div style="text-align: center; margin-bottom: var(--space-6);">
            <div style="font-size: 4rem; margin-bottom: var(--space-3);">${committee.logo}</div>
            <h3 class="subsection-heading">${committee.name}</h3>
            <p class="lead" style="color: var(--text-secondary);">${committee.fullName}</p>
          </div>

          <div class="card-simple" style="margin-bottom: var(--space-6);">
            <h4 style="color: var(--accent-gold); margin-bottom: var(--space-3); font-size: var(--text-lg);">
              📋 Committee Overview
            </h4>
            <p style="color: var(--text-secondary); line-height: var(--leading-relaxed);">
              ${committee.description}
            </p>
          </div>

          <div class="card-simple">
            <h4 style="color: var(--accent-gold); margin-bottom: var(--space-4); font-size: var(--text-lg); text-align: center;">
              👥 Executive Board
            </h4>
            <div class="grid grid-cols-3 gap-4">
              ${membersHtml}
            </div>
          </div>
        `;
      }
    } catch (error) {
      container.innerHTML = `
        <div style="text-align: center; padding: var(--space-12); color: var(--text-secondary);">
          <p style="font-size: var(--text-xl); margin-bottom: var(--space-4);">⚠️ Failed to load committee information</p>
          <p style="font-size: var(--text-base);">${error.message}</p>
        </div>
      `;
      console.error('Error rendering committees:', error);
    }
  }, 300);
}

/* ==================
   ITINERARY SECTION
   ================== */

export function renderItinerary(dayKey, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const dayData = itineraries[dayKey];
  if (!dayData) {
    console.error(`No itinerary data found for ${dayKey}`);
    return;
  }

  const timelineItems = dayData.map((item, i) => {
    const alignClass = i % 2 === 0 ? 'left' : 'right';
    return `
      <div class="timeline-item">
        <div class="timeline-content">
          <div class="timeline-time">${item.time}</div>
          <div class="timeline-event">${item.event}</div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="timeline">
      ${timelineItems}
    </div>
  `;
}

/* ==================
   SECRETARIAT SECTION
   ================== */

export function renderSecretariat() {
  const container = document.getElementById("secretariat-container");
  if (!container) return;

  container.innerHTML = secretariat.map((person) => `
    <div class="team-card hover-lift" tabindex="0" role="article" aria-label="${person.name}, ${person.role}">
      <img
        src="${person.image}"
        alt="${person.name} - ${person.role}"
        class="team-card-image"
        loading="lazy"
        onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27600%27 height=%27300%27%3E%3Crect fill=%27%236c3f44%27 width=%27600%27 height=%27300%27/%3E%3Ctext fill=%27%23f1e5ac%27 font-size=%2730%27 x=%2750%25%27 y=%2750%25%27 text-anchor=%27middle%27 dy=%27.3em%27%3E${person.name}%3C/text%3E%3C/svg%3E'"
      />
      <div class="team-card-content">
        <div class="team-card-name">${person.name}</div>
        <div class="team-card-role">${person.role}</div>
        <div class="team-card-quote">"${person.quote}"</div>
      </div>
    </div>
  `).join("");
}

/* ==================
   FAQ SECTION
   ================== */

export function renderFAQ() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  container.innerHTML = faqData.map((faq, index) => `
    <div class="faq-item">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${index}">
        <span>${faq.question}</span>
      </button>
      <div class="faq-answer" id="faq-answer-${index}">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');

  // Add event listeners for accordion
  const questions = container.querySelectorAll('.faq-question');
  questions.forEach((question, index) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');

      // Close all other FAQs
      questions.forEach((q, i) => {
        if (i !== index) {
          q.classList.remove('active');
          q.setAttribute('aria-expanded', 'false');
          q.nextElementSibling.classList.remove('active');
        }
      });

      // Toggle current FAQ
      question.classList.toggle('active');
      answer.classList.toggle('active');
      question.setAttribute('aria-expanded', !isActive);
    });

    // Keyboard support
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
}

/* ==================
   ITINERARY TABS
   ================== */

export function initItineraryTabs() {
  const tabs = document.querySelectorAll(".itinerary-tabs .tab-button");
  const contents = document.querySelectorAll(".itinerary-day");
  const slider = document.querySelector(".tab-slider");

  if (!tabs.length || !slider) return;

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.add("hidden"));

      tab.classList.add("active");
      const targetId = tab.getAttribute("data-tab");
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        targetContent.classList.remove("hidden");
      }

      // Animate slider
      const tabWidth = tab.offsetWidth;
      const offset = tabWidth * index + 5 * index;
      slider.style.transform = `translateX(${offset}px)`;
    });

    // Initial slider position
    if (tab.classList.contains("active")) {
      const tabWidth = tab.offsetWidth;
      const offset = tabWidth * index + 5 * index;
      slider.style.transform = `translateX(${offset}px)`;
    }
  });
}

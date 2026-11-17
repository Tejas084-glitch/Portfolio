/**
 * ====================================================================
 * PORTFOLIO CLIENT APPLICATION JAVASCRIPT
 * ====================================================================
 * Connects profileData to DOM, handles filtering, theme toggling,
 * mobile drawer, modals, and multi-channel "Text Me" actions.
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.profileData;
  if (!data) {
    console.error("profileData not found! Make sure profile-data.js is loaded first.");
    return;
  }

  // ==================== 1. POPULATE HERO & PERSONAL ====================
  const populatePersonal = () => {
    const { personal, stats } = data;

    // Title & Headlines
    const heroName = document.getElementById("heroName");
    const heroHeadline = document.getElementById("heroHeadline");
    const heroBio = document.getElementById("heroBio");
    const heroStatus = document.getElementById("heroStatusText");
    const heroAvatar = document.getElementById("heroAvatar");
    const footerName = document.getElementById("footerName");
    const currentYear = document.getElementById("currentYear");

    if (heroName) heroName.textContent = personal.fullName;
    if (heroHeadline) heroHeadline.textContent = personal.headline;
    if (heroBio) heroBio.textContent = personal.shortBio;
    if (heroStatus) heroStatus.textContent = personal.statusBadge;
    if (heroAvatar && personal.avatarUrl) heroAvatar.src = personal.avatarUrl;
    if (footerName) footerName.textContent = personal.fullName;
    if (currentYear) currentYear.textContent = new Date().getFullYear();

    // Social Links
    const heroSocials = document.getElementById("heroSocials");
    if (heroSocials && personal.socials) {
      heroSocials.innerHTML = personal.socials.map(s => {
        let svg = getSocialSvg(s.icon);
        return `
          <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-link" title="${s.name}" aria-label="${s.name}">
            ${svg}
          </a>
        `;
      }).join("");
    }

    // Stats Grid
    const statsGrid = document.getElementById("statsGrid");
    if (statsGrid && stats) {
      statsGrid.innerHTML = stats.map(stat => `
        <div class="stat-card">
          <div class="stat-val">${stat.value}</div>
          <div class="stat-name">${stat.label}</div>
        </div>
      `).join("");
    }
  };

  // Helper for SVGs
  const getSocialSvg = (type) => {
    switch (type) {
      case "github":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`;
      case "linkedin":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;
      case "twitter":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>`;
      case "mail":
      default:
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
    }
  };

  // ==================== 2. ACHIEVEMENTS SECTION ====================
  const achievementsGrid = document.getElementById("achievementsGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  const renderAchievements = (filterCategory = "all") => {
    if (!achievementsGrid || !data.achievements) return;

    const filtered = filterCategory === "all"
      ? data.achievements
      : data.achievements.filter(a => a.category.toLowerCase() === filterCategory.toLowerCase());

    if (filtered.length === 0) {
      achievementsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
          No achievements listed under "${filterCategory}" yet.
        </div>
      `;
      return;
    }

    achievementsGrid.innerHTML = filtered.map(item => `
      <div class="achievement-card">
        <div class="achieve-header">
          <span class="achieve-category">${item.category}</span>
          <span class="achieve-badge">${item.badge || "Milestone"}</span>
        </div>
        <h3 class="achieve-title">${item.title}</h3>
        <div class="achieve-meta">
          <span>${item.issuer}</span>
          <span class="dot">&bull;</span>
          <span>${item.date}</span>
        </div>
        <p class="achieve-desc">${item.description}</p>
        <div class="achieve-footer">
          <span class="achieve-link">
            <span>Verified Milestone</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </span>
        </div>
      </div>
    `).join("");
  };

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderAchievements(filter);
    });
  });

  // ==================== 3. ABOUT ME SECTION ====================
  const populateAbout = () => {
    const aboutParas = document.getElementById("aboutParagraphs");
    const aboutHigh = document.getElementById("aboutHighlights");
    const aboutPhilosophy = document.getElementById("aboutPhilosophyCard");
    const aboutInterests = document.getElementById("aboutInterestsCard");
    const aboutGoals = document.getElementById("aboutGoalsCard");

    if (aboutParas && data.about && data.about.paragraphs) {
      aboutParas.innerHTML = data.about.paragraphs.map(p => `<p>${p}</p>`).join("");
    }

    if (aboutPhilosophy && data.about && data.about.philosophy) {
      aboutPhilosophy.innerHTML = `
        <h4>
          <span>💡</span>
          <span>Personal Philosophy</span>
        </h4>
        <p>"${data.about.philosophy}"</p>
      `;
    }

    if (aboutInterests && data.about && data.about.interests) {
      aboutInterests.innerHTML = `
        <h4>
          <span>✨</span>
          <span>Interests &amp; Creative Passions</span>
        </h4>
        <div class="interest-chips">
          ${data.about.interests.map(item => `<span class="interest-chip">${item}</span>`).join("")}
        </div>
      `;
    }

    if (aboutHigh && data.about && data.about.highlights) {
      aboutHigh.innerHTML = data.about.highlights.map(h => {
        let iconSvg = getHighlightIcon(h.icon);
        return `
          <div class="highlight-card">
            <div class="highlight-icon-box">${iconSvg}</div>
            <div class="highlight-info">
              <h4>${h.title}</h4>
              <p>${h.desc}</p>
            </div>
          </div>
        `;
      }).join("");
    }

    if (aboutGoals && data.about && data.about.goals) {
      aboutGoals.innerHTML = `
        <h4>Goals &amp; Aspirations</h4>
        <div class="goals-group">
          <div class="goals-group-title">🎯 Short-Term Focus</div>
          <ul class="goals-list">
            ${data.about.goals.shortTerm.map(g => `<li><span class="goal-bullet">&bull;</span><span>${g}</span></li>`).join("")}
          </ul>
        </div>
        <div class="goals-group">
          <div class="goals-group-title">🚀 Long-Term Vision</div>
          <ul class="goals-list">
            ${data.about.goals.longTerm.map(g => `<li><span class="goal-bullet">&bull;</span><span>${g}</span></li>`).join("")}
          </ul>
        </div>
      `;
    }
  };

  const getHighlightIcon = (iconName) => {
    switch (iconName) {
      case "zap":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
      case "trophy":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>`;
      case "code":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
      case "compass":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`;
      case "users":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
      case "book-open":
      default:
        return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`;
    }
  };

  // ==================== 4. SKILLS SECTION ====================
  const populateSkills = () => {
    const skillsGrid = document.getElementById("skillsGrid");
    if (!skillsGrid || !data.skills) return;

    skillsGrid.innerHTML = data.skills.map(cat => `
      <div class="skill-category-card">
        <h3 class="skill-category-title">
          <span>⚡</span>
          <span>${cat.category}</span>
        </h3>
        <div class="skill-pills">
          ${cat.items.map(skill => `<span class="skill-pill">${skill}</span>`).join("")}
        </div>
      </div>
    `).join("");
  };

  // ==================== 5. PROJECTS SECTION ====================
  const populateProjects = () => {
    const projectsGrid = document.getElementById("projectsGrid");
    if (!projectsGrid || !data.projects) return;

    projectsGrid.innerHTML = data.projects.map(proj => `
      <div class="project-card">
        <span class="project-category">${proj.category}</span>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="project-tag">#${t}</span>`).join("")}
        </div>
        <div class="project-links">
          ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">Live Demo &nearr;</a>` : ""}
          ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">Source Code &rarr;</a>` : ""}
        </div>
      </div>
    `).join("");
  };

  // ==================== 6. TIMELINE SECTION ====================
  const populateTimeline = () => {
    const timelineContainer = document.getElementById("timelineContainer");
    if (!timelineContainer || !data.timeline) return;

    timelineContainer.innerHTML = data.timeline.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-year">${item.year}</div>
          <h4 class="timeline-role">${item.role}</h4>
          <div class="timeline-inst">${item.institution}</div>
          <p class="timeline-desc">${item.description}</p>
        </div>
      </div>
    `).join("");
  };

  // ==================== 7. "TEXT ME" CHANNELS & ACTIONS ====================
  const setupTextMeFeatures = () => {
    const { personal } = data;
    const phone = personal.phoneNumber || "";
    const cleanWhatsApp = (personal.whatsappNumber || "").replace(/[^0-9]/g, "");
    const email = personal.email || "";
    const defaultMsg = personal.defaultTextMessage || "Hi Tejas, I'd like to connect!";

    // Direct link elements
    const waLink = document.getElementById("whatsappDirectLink");
    const smsLink = document.getElementById("smsDirectLink");
    const mailLink = document.getElementById("emailDirectLink");
    const phoneDisplay = document.getElementById("phoneDisplay");
    const emailDisplay = document.getElementById("emailDisplay");

    if (phoneDisplay) phoneDisplay.textContent = phone;
    if (emailDisplay) emailDisplay.textContent = email;

    // Set hrefs
    if (waLink) {
      waLink.href = `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(defaultMsg)}`;
    }
    if (smsLink) {
      smsLink.href = `sms:${phone}?&body=${encodeURIComponent(defaultMsg)}`;
    }
    if (mailLink) {
      mailLink.href = `mailto:${email}?subject=Hello%20from%20Portfolio&body=${encodeURIComponent(defaultMsg)}`;
    }

    // Copy Phone button
    const copyPhoneBtn = document.getElementById("copyPhoneBtn");
    const copyBtnText = document.getElementById("copyBtnText");
    if (copyPhoneBtn) {
      copyPhoneBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(phone).then(() => {
          if (copyBtnText) copyBtnText.textContent = "Copied!";
          setTimeout(() => {
            if (copyBtnText) copyBtnText.textContent = "Copy";
          }, 2000);
        }).catch(() => {
          alert(`Phone: ${phone}`);
        });
      });
    }

    // Quick prompt template chips on contact form
    const promptChips = document.querySelectorAll(".prompt-chip");
    const messageTextarea = document.getElementById("messageText");

    promptChips.forEach(chip => {
      chip.addEventListener("click", () => {
        const msg = chip.getAttribute("data-msg");
        if (messageTextarea) {
          messageTextarea.value = msg;
          messageTextarea.focus();
        }
      });
    });

    // Contact Form Buttons: Send via WhatsApp / Send via SMS / Submit Form
    const sendViaWhatsAppBtn = document.getElementById("sendViaWhatsAppBtn");
    const sendViaSmsBtn = document.getElementById("sendViaSmsBtn");
    const contactForm = document.getElementById("contactForm");
    const formAlert = document.getElementById("formSuccessMessage");

    const getFormDraft = () => {
      const name = document.getElementById("senderName").value.trim() || "A visitor";
      const contactInfo = document.getElementById("senderContact").value.trim();
      const body = messageTextarea.value.trim() || defaultMsg;
      let fullMessage = `Hi Tejas, this is ${name}.\n\n${body}`;
      if (contactInfo) {
        fullMessage += `\n\n(My contact: ${contactInfo})`;
      }
      return fullMessage;
    };

    if (sendViaWhatsAppBtn) {
      sendViaWhatsAppBtn.addEventListener("click", () => {
        const draft = getFormDraft();
        const url = `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(draft)}`;
        window.open(url, "_blank");
      });
    }

    if (sendViaSmsBtn) {
      sendViaSmsBtn.addEventListener("click", () => {
        const draft = getFormDraft();
        const url = `sms:${phone}?&body=${encodeURIComponent(draft)}`;
        window.location.href = url;
      });
    }

    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("senderName").value.trim() || "Portfolio Visitor";
        const draft = getFormDraft();
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent("Portfolio Message from " + name)}&body=${encodeURIComponent(draft)}`;

        if (formAlert) {
          formAlert.style.display = "block";
          setTimeout(() => {
            formAlert.style.display = "none";
          }, 4000);
        }

        window.location.href = mailtoUrl;
      });
    }
  };

  // ==================== 8. QUICK TEXT MODAL / POPUP ====================
  const setupModal = () => {
    const modal = document.getElementById("textModalOverlay");
    const closeBtn = document.getElementById("closeModalBtn");
    const modalQuickMessage = document.getElementById("modalQuickMessage");
    const modalWhatsAppBtn = document.getElementById("modalWhatsAppBtn");
    const modalSmsBtn = document.getElementById("modalSmsBtn");
    const modalEmailBtn = document.getElementById("modalEmailBtn");
    const openModalBtns = document.querySelectorAll(".open-text-modal");

    const cleanWhatsApp = (data.personal.whatsappNumber || "").replace(/[^0-9]/g, "");
    const phone = data.personal.phoneNumber || "";
    const email = data.personal.email || "";

    if (modalQuickMessage && data.personal.defaultTextMessage) {
      modalQuickMessage.value = data.personal.defaultTextMessage;
    }

    const openModal = () => {
      if (modal) modal.classList.add("open");
    };

    const closeModal = () => {
      if (modal) modal.classList.remove("open");
    };

    openModalBtns.forEach(btn => btn.addEventListener("click", openModal));
    if (closeBtn) closeBtn.addEventListener("click", closeModal);

    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal && modal.classList.contains("open")) {
        closeModal();
      }
    });

    // Modal Action buttons
    if (modalWhatsAppBtn) {
      modalWhatsAppBtn.addEventListener("click", () => {
        const text = modalQuickMessage.value || data.personal.defaultTextMessage;
        window.open(`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(text)}`, "_blank");
        closeModal();
      });
    }

    if (modalSmsBtn) {
      modalSmsBtn.addEventListener("click", () => {
        const text = modalQuickMessage.value || data.personal.defaultTextMessage;
        window.location.href = `sms:${phone}?&body=${encodeURIComponent(text)}`;
        closeModal();
      });
    }

    if (modalEmailBtn) {
      modalEmailBtn.addEventListener("click", () => {
        const text = modalQuickMessage.value || data.personal.defaultTextMessage;
        window.location.href = `mailto:${email}?subject=Hello%20from%20Portfolio&body=${encodeURIComponent(text)}`;
        closeModal();
      });
    }
  };

  // ==================== 9. THEME TOGGLE & MOBILE MENU ====================
  const setupNavAndTheme = () => {
    // Theme toggle
    const themeToggle = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("portfolio-theme", next);
      });
    }

    // Mobile menu toggle
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const navMenu = document.getElementById("navMenu");

    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener("click", () => {
        mobileBtn.classList.toggle("active");
        navMenu.classList.toggle("open");
      });

      // Close when clicking nav link
      navMenu.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
          mobileBtn.classList.remove("active");
          navMenu.classList.remove("open");
        });
      });
    }
  };

  // Run initialization
  populatePersonal();
  renderAchievements("all");
  populateAbout();
  populateSkills();
  populateProjects();
  populateTimeline();
  setupTextMeFeatures();
  setupModal();
  setupNavAndTheme();
});

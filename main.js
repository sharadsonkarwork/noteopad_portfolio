/* ========================================================
   RAKNOS EDITORIAL NOTEBOOK PORTFOLIO — MAIN JAVASCRIPT
   - Hand-Drawn "SOLVE REAL PROBLEMS" Progressive Draw Animation
   - Interactive Node Hover Links with Arrow Highlighting
   - Lo-Fi Ambient Audio Synthesizer
   - "Press K" Interactive Design Thoughts + Confetti
   - Case Study & Engagement Modal Dialogs
   - Day / Night Notebook Theme Toggle
   - Mobile Navigation
   ======================================================== */

// Design thoughts for the "Press K" interaction
const THOUGHTS = [
  "Don't design for features. Design for decisions. ☆",
  "Good UX is invisible. The product works, the user wins.",
  "Complexity is the enemy of adoption. Clarity is the reason to stay.",
  "Design systems are not about components. They are about consistency of thinking.",
  "Ship early. Learn faster. Iterate forever.",
  "Design is a conversation between people, business and technology. We just make it beautiful.",
  "People don't follow titles. They follow trust. ☆",
  "Real impact comes from decisions, not deliverables. 👑",
  "Curiosity is a superpower. 🚀",
  "I don't just make things look better. I make things work better."
];

// Rich Modal Content Directory
const MODAL_DATA = {
  "rosterix": {
    title: "ROSTERIX 2.0 — Enterprise Workforce Management",
    tagline: "Modernizing shift scheduling, tagging, and allowance payroll with trustworthy AI.",
    body: `
      <p><strong>The Challenge:</strong> Shift rosters were rebuilt from memory every month, conflicts surfaced only after saves or payroll queries, and every escalation level was deciding with less context than the level before it.</p>
      <p><strong>The Solution:</strong> Designed an intuitive shift matrix, conflict resolution system, and an explainable AI layer across 9 mission-critical use cases without compromising audit rigor.</p>
      <p><strong>The Impact:</strong> 9 AI workflows designed, 5 user tiers unified, and high trust earned across 10k+ monthly shift approvals.</p>
      <p style="margin-top: 1rem;"><a href="rosterix_casestudy.html" class="case-study-link" style="font-weight: 700; text-decoration: underline;">Read Full Case Study &rarr;</a></p>
    `
  },
  "monalisa": {
    title: "MONALISA — Gym Management SaaS",
    tagline: "Simplifying fitness club operations across 300+ gyms.",
    body: `
      <p><strong>The Challenge:</strong> Gym managers were drowning in fragmented tools for attendance, point-of-sale, trainer schedules, and member subscriptions. Churn was high due to billing errors.</p>
      <p><strong>The Solution:</strong> Designed a unified, high-contrast dark console that reduces daily check-in time from 45 seconds to 6 seconds. Built real-time capacity monitoring and automated recurring billing flows.</p>
      <p><strong>The Impact:</strong> +38% increase in staff efficiency, 94.8% annual member retention, and scaled to over $48k MRR within 6 months of relaunch.</p>
    `
  },
  "ping": {
    title: "PING — AI Assistant for Teams",
    tagline: "Context-aware intelligence inside product sprints.",
    body: `
      <p><strong>The Challenge:</strong> Remote engineering and design teams spent 4+ hours per week manually writing sprint status updates and searching through scattered documentation.</p>
      <p><strong>The Solution:</strong> Integrated an ambient AI copilot that listens to sprint velocity, surfaces blocker patterns before they escalate, and auto-generates release notes with one click.</p>
      <p><strong>The Impact:</strong> Saved teams an average of 3.2 hours per developer weekly with a 92% positive sentiment rating.</p>
    `
  },
  "dac": {
    title: "DAC — Data & Analytics Console",
    tagline: "Making millions of telemetry points readable at a glance.",
    body: `
      <p><strong>The Challenge:</strong> Cloud infrastructure telemetry dashboards were overly noisy, causing critical alert fatigue among Site Reliability Engineers.</p>
      <p><strong>The Solution:</strong> Applied progressive disclosure and sparkline clusters to highlight actionable anomalies without visual clutter. Designed a modular widget layout that adapts to incident severity.</p>
      <p><strong>The Impact:</strong> Decreased Mean Time to Detection (MTTD) by 41% across 2.8M daily tracked events.</p>
    `
  },
  "design-system": {
    title: "DESIGN SYSTEM — The Foundation",
    tagline: "A scalable design system that teams actually adopt.",
    body: `
      <p><strong>The Challenge:</strong> Disjointed design files and rogue CSS led to inconsistent user interfaces and slow frontend feature velocity across 4 disparate product squads.</p>
      <p><strong>The Solution:</strong> Built a multi-brand token pipeline (Figma Tokens → Style Dictionary → CSS Variables) with accessible contrast rules, automated documentation, and strict component governance.</p>
      <p><strong>The Impact:</strong> Reduced new screen design time by 60% and slashed frontend bug reports by 45%.</p>
    `
  },
  "Working Product Prototype": {
    title: "Working Product Prototype",
    tagline: "From scribble on a napkin to testable reality in 10 days.",
    body: `
      <p>We take your vision and build a high-fidelity interactive prototype that you can put directly in front of customers and investors.</p>
      <p>Instead of guessing which features matter, we validate hypotheses fast so you know exactly what to build, what to park, and what to kill.</p>
    `
  },
  "Design System Foundation": {
    title: "Design System Foundation",
    tagline: "One shared vocabulary for designers and engineers.",
    body: `
      <p>We architect custom design systems that eliminate repetitive work. From atomic tokens to polished components with clear interactive states and documentation.</p>
      <p>Your team stops redesigning tables and modals and starts assembling new experiences in minutes.</p>
    `
  },
  "Embedded Senior Product Design": {
    title: "Embedded Senior Product Design",
    tagline: "High-impact product leadership without lengthy recruitment.",
    body: `
      <p>Direct hands-on leadership embedded within your existing squad. We run user discovery, shape roadmaps, design end-to-end flows, and mentor junior talent.</p>
      <p>When the engagement concludes, you get full documentation and a smooth handover—never a knowledge cliff.</p>
    `
  },
  "Brand, Identity & Experience": {
    title: "Brand, Identity & Experience",
    tagline: "Distinctive character in a sea of homogenous interfaces.",
    body: `
      <p>Transform your product from feeling generic to unforgettable. We craft holistic visual identities, micro-interactions, typography, and motion systems that reflect your brand ethos.</p>
    `
  },
  "The Last Portal": {
    title: "The Last Portal — Speculative UX Case Study",
    tagline: "When the interface becomes a collaborative mind-space (2028–2038).",
    body: `
      <p><strong>The Challenge:</strong> Today's booking experience forces travelers across 47 disconnected steps, repetitive preference forms, and 200+ filters.</p>
      <p><strong>The Solution:</strong> An autonomous agent-to-agent delegation model where on-device agents negotiate dynamic bundles with hotel and flight AI concierges, presenting humans with a single explainable apex decision.</p>
      <p><a href="./sidequest/the-last-portal.html" style="font-weight:700; color:var(--ink-red);">Read Full Case Study &rarr;</a></p>
    `
  },
  "Design Sync": {
    title: "Design Sync — Figma Plugin",
    tagline: "Automatic bi-directional token synchronization.",
    body: `
      <p>Keeps tokens, colors, and typography styles synced across complex multi-file Figma libraries and GitHub repositories automatically.</p>
    `
  },
  "Auto Layout Grid": {
    title: "Auto Layout Grid — Figma Plugin",
    tagline: "Instant mathematical grids with zero headache.",
    body: `
      <p>Construct 8pt, 12-column, or modular Bento grids in Figma with a single click. Over 15,000 active community installs.</p>
    `
  },
  "Product Hub 2030": {
    title: "Product Hub 2030",
    tagline: "Speculative exploration of spatial collaboration.",
    body: `
      <p>An experimental interactive concept envisioning how designers and AI agents co-author design systems in ambient digital canvases.</p>
    `
  },
  "Glass Morph UI": {
    title: "Glass Morph UI",
    tagline: "Tactile depth with modern CSS backdrop filters.",
    body: `
      <p>An interactive experiment testing the balance between translucent elegance and accessible text contrast in dark/light modes.</p>
    `
  },
  "3D Dashboard": {
    title: "3D Dashboard",
    tagline: "Spatial data exploration through Three.js.",
    body: `
      <p>Visualizing high-dimensional customer journeys in an interactive 3D topography to uncover hidden conversion drop-offs.</p>
    `
  },
  "Aligning teams with conflicting views": {
    title: "Leadership Log #01: Aligning Teams with Conflicting Views",
    tagline: "When Sales, Product, and Engineering disagree on the problem.",
    body: `
      <p>Instead of arguing opinions in endless slide meetings, we invited stakeholders to watch 3 unfiltered customer session recordings together.</p>
      <p>Observing real user frustration shifted the focus from 'who is right' to 'what solves the user’s friction.' Consensus was reached in 45 minutes.</p>
    `
  },
  "Building a design critique culture": {
    title: "Leadership Log #02: Building a Design Critique Culture",
    tagline: "Fostering psychological safety and honest craft feedback.",
    body: `
      <p>How we replaced defensive design reviews with structured critiques based on user goals, constraints, and measurable design principles.</p>
      <p>Feedback became a gift rather than an interrogation, lifting overall quality across all designers.</p>
    `
  },
  "Designing at scale without chaos": {
    title: "Leadership Log #03: Designing at Scale Without Chaos",
    tagline: "Process and habits that maintain velocity without red tape.",
    body: `
      <p>Structured async design reviews, weekly office hours, and automated Figma linting that allow multiple squads to ship cohesive features simultaneously.</p>
    `
  },
  "Mentorship and growth": {
    title: "Leadership Log #04: Mentorship and Growth",
    tagline: "Helping designers level up from execution to strategy.",
    body: `
      <p>Frameworks for helping junior and mid-level designers cultivate business acumen, communicate with executives, and drive cross-functional alignment.</p>
    `
  },
  "Saying no (the right way)": {
    title: "Leadership Log #05: Saying No (The Right Way)",
    tagline: "Protecting product clarity with empathy and data.",
    body: `
      <p>Saying 'yes' to every feature request produces bloated, unusable software. We established transparent prioritization scorecards that empower teams to say 'not now' constructively.</p>
    `
  }
};

/* ================= HERO DIAGRAM PROGRESSIVE ANIMATION ================= */
function initDiagramAnimation() {
  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ovalPath = document.querySelector(".oval-stroke-path");
  const arrowPaths = document.querySelectorAll(".diagram-arrow-path");
  const nodeResearch = document.getElementById("node-user-research");
  const nodeInteraction = document.getElementById("node-interaction-design");
  const nodeUi = document.getElementById("node-ui-design");
  const nodeSystems = document.getElementById("node-design-systems");
  const nodeBuild = document.getElementById("node-build-prototype");
  const redNote = document.getElementById("diagram-red-note");

  if (isReducedMotion) {
    return;
  }

  // Setup initial stroke dasharray & dashoffset
  if (ovalPath && ovalPath.getTotalLength) {
    const ovalLen = ovalPath.getTotalLength();
    ovalPath.style.strokeDasharray = ovalLen;
    ovalPath.style.strokeDashoffset = ovalLen;
  }

  arrowPaths.forEach((path) => {
    if (path.getTotalLength) {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
    }
  });

  const nodes = [
    { el: nodeResearch, delay: 250, arrow: ".arrow-user-research" },
    { el: nodeInteraction, delay: 450, arrow: ".arrow-interaction-design" },
    { el: nodeUi, delay: 650, arrow: ".arrow-ui-design" },
    { el: nodeSystems, delay: 850, arrow: ".arrow-design-systems" },
    { el: nodeBuild, delay: 1050, arrow: ".arrow-build-prototype" }
  ];

  nodes.forEach(({ el }) => {
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "scale(0.85)";
    }
  });

  if (redNote) {
    redNote.style.opacity = "0";
    redNote.style.transform = "rotate(-3deg) translateY(6px)";
  }

  // Animate oval
  setTimeout(() => {
    if (ovalPath) {
      ovalPath.style.transition = "stroke-dashoffset 0.6s ease-out";
      ovalPath.style.strokeDashoffset = "0";
    }
  }, 40);

  // Animate each satellite node & arrow progressively
  nodes.forEach(({ el, delay, arrow }) => {
    setTimeout(() => {
      const arrowEl = document.querySelector(arrow);
      if (arrowEl) {
        arrowEl.style.transition = "stroke-dashoffset 0.4s ease-out";
        arrowEl.style.strokeDashoffset = "0";
      }
      if (el) {
        el.style.transition = "opacity 0.35s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        el.style.opacity = "1";
        el.style.transform = "scale(1)";
        setTimeout(() => {
          el.style.transform = "";
          el.style.transition = "";
        }, 450);
      }
    }, delay);
  });

  // Red Note
  setTimeout(() => {
    if (redNote) {
      redNote.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      redNote.style.opacity = "1";
      redNote.style.transform = "rotate(-3deg) translateY(0)";
      setTimeout(() => {
        redNote.style.transform = "";
        redNote.style.transition = "";
      }, 550);
    }
  }, 1250);
}

/* ================= HERO DIAGRAM HOVER INTERACTIONS & PARALLAX ================= */
function initDiagramInteractions() {
  const satelliteNodes = document.querySelectorAll(".node-satellite");
  const centerNode = document.getElementById("node-center");

  const arrowMapping = {
    "user-research": ".arrow-user-research",
    "interaction-design": ".arrow-interaction-design",
    "ui-design": ".arrow-ui-design",
    "build-prototype": ".arrow-build-prototype",
    "design-systems": ".arrow-design-systems"
  };

  satelliteNodes.forEach((node) => {
    const nodeKey = node.getAttribute("data-node");
    const arrowSelector = arrowMapping[nodeKey];
    const arrowEl = arrowSelector ? document.querySelector(arrowSelector) : null;

    node.addEventListener("mouseenter", () => {
      if (arrowEl) {
        arrowEl.classList.add("active");
      }
      if (centerNode) {
        centerNode.style.transform = "scale(1.05)";
      }
    });

    node.addEventListener("mouseleave", () => {
      if (arrowEl) {
        arrowEl.classList.remove("active");
      }
      if (centerNode) {
        centerNode.style.transform = "";
      }
    });
  });
}



/* ================= WEB AUDIO LO-FI SYNTHESIZER ================= */
class LoFiEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.timerId = null;
    this.trackIndex = 0;
    this.tracks = [
      "lofi beats • warm sketchbook",
      "rhodes chords • late night flow",
      "tape flutter • quiet coffee"
    ];
    // Warm Rhodes jazz chords (Ebmaj7, Cm7, Fm7, Bb7)
    this.chords = [
      [155.56, 196.00, 233.08, 293.66], // Ebmaj7
      [130.81, 155.56, 196.00, 233.08], // Cm7
      [174.61, 207.65, 261.63, 311.13], // Fm7
      [116.54, 146.83, 174.61, 207.65]  // Bb7
    ];
    this.chordStep = 0;
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  playChord(freqs, duration = 3.2) {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;

    freqs.forEach((freq) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const filter = this.audioCtx.createBiquadFilter();

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(420, now);
      filter.Q.setValueAtTime(1.1, now);

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);

      const warble = (Math.random() - 0.5) * 6;
      osc.detune.setValueAtTime(warble, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.035, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + duration);
    });

    this.playSoftBeat(now);
  }

  playSoftBeat(now) {
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(95, now);
    osc.frequency.exponentialRampToValueAtTime(32, now + 0.16);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  toggle() {
    this.initContext();
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  start() {
    this.isPlaying = true;
    this.chordStep = 0;
    this.playNextChord();
    this.timerId = setInterval(() => this.playNextChord(), 3200);
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  playNextChord() {
    if (!this.isPlaying) return;
    const currentChord = this.chords[this.chordStep % this.chords.length];
    this.playChord(currentChord);
    this.chordStep++;
  }

  nextTrack() {
    this.trackIndex = (this.trackIndex + 1) % this.tracks.length;
    return this.tracks[this.trackIndex];
  }

  prevTrack() {
    this.trackIndex = (this.trackIndex - 1 + this.tracks.length) % this.tracks.length;
    return this.tracks[this.trackIndex];
  }
}

/* ================= CUSTOM NOTEBOOK INK CURSOR ================= */
function initCustomCursor() {
  const isTouch = window.matchMedia("(hover: none) or (pointer: coarse)").matches;
  if (isTouch) return;

  const cursor = document.getElementById("sketch-cursor");
  const dot = cursor?.querySelector(".cursor-dot");
  const ring = cursor?.querySelector(".cursor-ring");
  if (!cursor || !dot || !ring) return;

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let isMoving = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      cursor.classList.add("active");
      ringX = mouseX;
      ringY = mouseY;
      isMoving = true;
    }
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  // Smooth lerp loop for the sketch ring follower
  function renderCursor() {
    if (isMoving) {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover detection across interactive elements
  const interactiveSelector = "a, button, input, textarea, .sketch-card, .work-card, .side-card, .lead-card, .sticky-note, .node-satellite, .lofi-widget, .pill-tag, [role='button'], .brand-link, .tool-badge";

  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      cursor.classList.add("is-hovering");
    } else {
      cursor.classList.remove("is-hovering");
    }
  });

  window.addEventListener("mousedown", () => {
    cursor.classList.add("is-clicking");
  });

  window.addEventListener("mouseup", () => {
    cursor.classList.remove("is-clicking");
  });

  document.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
    isMoving = false;
  });

  document.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });
}

/* ================= SECTION LOAD & SCROLL REVEAL ANIMATIONS ================= */
function initScrollAndLoadAnimations() {
  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (isReducedMotion) {
    document.querySelectorAll(".section-container").forEach(el => el.classList.add("is-revealed"));
    return;
  }

  // GSAP ScrollTrigger for clean section header reveal only
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll(".section-container");
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        onEnter: () => {
          section.classList.add("is-revealed");
        },
        once: true
      });
    });
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(".section-container").forEach((el) => {
      observer.observe(el);
    });
  }
}

// Multilingual Greetings for Curtain Loader
const GREETINGS = [
  { lang: "English", word: "Hello" },
  { lang: "Hindi", word: "नमस्ते" },
  { lang: "Spanish", word: "Hola" },
  { lang: "French", word: "Bonjour" },
  { lang: "Japanese", word: "こんにちは" },
  { lang: "German", word: "Hallo" },
  { lang: "Italian", word: "Ciao" },
  { lang: "Chinese", word: "你好" },
  { lang: "Arabic", word: "مرحبا" },
  { lang: "Portuguese", word: "Olá" },
  { lang: "Russian", word: "Привет" },
  { lang: "Korean", word: "안녕하세요" },
  { lang: "English", word: "Hello." }
];

/* ================= THEATRICAL CURTAIN LOADER ================= */
function initLoader() {
  const greetingWord = document.getElementById("greeting-word");
  const greetingLang = document.getElementById("greeting-lang");
  const loaderProgress = document.getElementById("loader-progress");
  const curtainLoader = document.getElementById("curtain-loader");
  const curtainLeft = document.querySelector(".curtain-left");
  const curtainRight = document.querySelector(".curtain-right");
  const loaderCenterpiece = document.querySelector(".loader-centerpiece");

  if (!curtainLoader || !greetingWord || !greetingLang || !loaderProgress) return;

  document.body.classList.add("loading-locked");

  let currentIndex = 0;
  const total = GREETINGS.length;
  const intervalTime = 130; // 130ms per greeting

  const greetingInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex < total) {
      const item = GREETINGS[currentIndex];
      greetingWord.textContent = item.word;
      greetingLang.textContent = item.lang;
      const pct = Math.round((currentIndex / (total - 1)) * 100);
      loaderProgress.style.width = `${pct}%`;
    } else {
      clearInterval(greetingInterval);
      openCurtains();
    }
  }, intervalTime);

  function openCurtains() {
    curtainLoader.style.pointerEvents = "none";
    if (typeof gsap !== "undefined") {
      const tl = gsap.timeline({
        onStart: () => {
          document.body.classList.remove("loading-locked");
        },
        onComplete: () => {
          curtainLoader.style.display = "none";
          if (typeof initDiagramAnimation === "function") {
            initDiagramAnimation();
          }
        }
      });

      tl.to(loaderCenterpiece, {
        scale: 0.85,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in"
      })
      .to(curtainLeft, {
        xPercent: -100,
        duration: 1.1,
        ease: "power4.inOut"
      }, "-=0.08")
      .to(curtainRight, {
        xPercent: 100,
        duration: 1.1,
        ease: "power4.inOut"
      }, "<");

    } else {
      curtainLoader.style.opacity = "0";
      curtainLoader.style.transition = "opacity 0.4s ease";
      setTimeout(() => {
        curtainLoader.style.display = "none";
        document.body.classList.remove("loading-locked");
      }, 400);
    }
  }
}

/* ================= APPLICATION INITIALIZATION ================= */
document.addEventListener("DOMContentLoaded", () => {
  // 0. Theatrical Multilingual Curtain Loader
  initLoader();

  // 1. Initialize Hero Diagram Animation & Hover Interactions
  initDiagramAnimation();
  initDiagramInteractions();

  // 2. Initialize Custom Mouse Pointer Animation
  initCustomCursor();

  // 3. Initialize Section Load & Scroll Reveal Animations
  initScrollAndLoadAnimations();

  // Toast Notification helper defined first
  let toastTimeout = null;
  function showToast(msg) {
    const toast = document.getElementById("thought-toast");
    const messageEl = document.getElementById("toast-message");
    if (!toast || !messageEl) return;
    messageEl.textContent = msg;
    toast.classList.add("show");

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3600);
  }

  // 4. Lo-Fi Web Audio Player & Disc Rotation
  const lofi = new LoFiEngine();
  const lofiPlayer = document.getElementById("lofi-player");
  const lofiToggleBtn = document.getElementById("lofi-toggle-btn");
  const playIcon = lofiToggleBtn?.querySelector(".play-icon");
  const pauseIcon = lofiToggleBtn?.querySelector(".pause-icon");
  const lofiVibeBtn = document.getElementById("lofi-vibe-btn");

  lofiToggleBtn?.addEventListener("click", () => {
    const playing = lofi.toggle();
    if (playing) {
      if (playIcon) playIcon.style.display = "none";
      if (pauseIcon) pauseIcon.style.display = "inline";
      lofiPlayer?.classList.add("playing");
      showToast("🎧 Lo-Fi ambient chords playing");
    } else {
      if (playIcon) playIcon.style.display = "inline";
      if (pauseIcon) pauseIcon.style.display = "none";
      lofiPlayer?.classList.remove("playing");
    }
  });

  lofiVibeBtn?.addEventListener("click", () => {
    lofiVibeBtn.classList.add("spinning");
    setTimeout(() => lofiVibeBtn.classList.remove("spinning"), 500);

    lofi.initContext();
    lofi.chordStep = Math.floor(Math.random() * lofi.chords.length);
    if (lofi.isPlaying) {
      lofi.playNextChord();
    } else {
      lofi.playChord(lofi.chords[lofi.chordStep]);
    }
    showToast("↺ Lo-Fi chords refreshed");
  });

  // Ensure any cached dark mode class is cleaned up
  document.body.classList.remove("theme-night");

  // 3. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navLinksList = document.getElementById("nav-links-list");
  mobileMenuBtn?.addEventListener("click", () => {
    const isOpen = navLinksList?.classList.toggle("mobile-open");
    mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close mobile nav when clicking link
  document.querySelectorAll(".nav-item").forEach((link) => {
    link.addEventListener("click", () => {
      navLinksList?.classList.remove("mobile-open");
      mobileMenuBtn?.setAttribute("aria-expanded", "false");
    });
  });

  // 5. "Press K" / Thought Generator Interaction
  const pressKBtn = document.getElementById("press-k-btn");

  function triggerNewThought() {
    const randomThought = THOUGHTS[Math.floor(Math.random() * THOUGHTS.length)];
    showToast(randomThought);

    if (typeof confetti === "function") {
      confetti({
        particleCount: 20,
        spread: 40,
        origin: { y: 0.8 },
        colors: ["#fde047", "#86efac", "#93c5fd", "#f43f5e"]
      });
    }
  }

  pressKBtn?.addEventListener("click", triggerNewThought);

  window.addEventListener("keydown", (e) => {
    if ((e.key === "k" || e.key === "K") && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      e.preventDefault();
      triggerNewThought();
    }
  });

  // 6. Interactive Modal Dialog

  // 7. Interactive Modal Dialog
  const modal = document.getElementById("case-study-modal");
  const modalContent = document.getElementById("modal-dynamic-content");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  function openModal(data) {
    if (!modal || !modalContent || !data) return;
    modalContent.innerHTML = `
      <h3>${data.title}</h3>
      <p class="modal-tagline">${data.tagline}</p>
      ${data.body}
    `;
    modal.showModal();
  }

  modalCloseBtn?.addEventListener("click", () => modal.close());

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  // Case study links
  document.querySelectorAll(".case-study-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && !href.startsWith("#")) {
        playMechanicalClick();
        return; // Allow standard navigation to case study pages like rosterix_casestudy.html
      }
      e.preventDefault();
      const id = link.getAttribute("data-id");
      if (MODAL_DATA[id]) openModal(MODAL_DATA[id]);
    });
  });

  // Direct card click for Rosterix
  const rosterixCard = document.querySelector('.work-card[data-project="rosterix"]');
  if (rosterixCard) {
    rosterixCard.style.cursor = "pointer";
    rosterixCard.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") {
        playMechanicalClick();
        window.location.href = "rosterix_casestudy.html";
      }
    });
  }

  // "How this works" links
  document.querySelectorAll(".modal-trigger").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const title = link.getAttribute("data-title");
      if (MODAL_DATA[title]) openModal(MODAL_DATA[title]);
    });
  });

  // "Side quests" links
  document.querySelectorAll(".side-card-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && !href.startsWith("#")) {
        playMechanicalClick();
        return; // Allow standard navigation to ./sidequest/the-last-portal.html
      }
      e.preventDefault();
      const title = link.getAttribute("data-title");
      if (MODAL_DATA[title]) openModal(MODAL_DATA[title]);
    });
  });

  // Direct card click for The Last Portal
  const portalSideCard = document.querySelector('.side-card[data-quest="The Last Portal"]');
  if (portalSideCard) {
    portalSideCard.style.cursor = "pointer";
    portalSideCard.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") {
        playMechanicalClick();
        window.location.href = "./sidequest/the-last-portal.html";
      }
    });
  }

  // "Leadership Log" links
  document.querySelectorAll(".lead-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const title = link.getAttribute("data-title");
      if (MODAL_DATA[title]) openModal(MODAL_DATA[title]);
    });
  });

  // Card click triggers
  document.querySelectorAll(".sketch-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") {
        const modalId = card.getAttribute("data-modal");
        if (MODAL_DATA[modalId]) openModal(MODAL_DATA[modalId]);
      }
    });
  });

  /* ================= MECHANICAL MACROPAD AUDIO & INTERACTION ================= */
  let macropadAudioCtx = null;

  function playMechanicalClick() {
    try {
      if (!macropadAudioCtx) {
        macropadAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (macropadAudioCtx.state === "suspended") {
        macropadAudioCtx.resume();
      }
      const t = macropadAudioCtx.currentTime;

      // Click transient (sharp tactile click)
      const osc = macropadAudioCtx.createOscillator();
      const gain = macropadAudioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(1200, t);
      osc.frequency.exponentialRampToValueAtTime(240, t + 0.028);

      gain.gain.setValueAtTime(0.14, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.028);

      osc.connect(gain);
      gain.connect(macropadAudioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.03);

      // Thock noise burst (switch bottoming out)
      const bufferSize = Math.floor(macropadAudioCtx.sampleRate * 0.025);
      const noiseBuffer = macropadAudioCtx.createBuffer(1, bufferSize, macropadAudioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }
      const noise = macropadAudioCtx.createBufferSource();
      noise.buffer = noiseBuffer;

      const filter = macropadAudioCtx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(750, t);

      const noiseGain = macropadAudioCtx.createGain();
      noiseGain.gain.setValueAtTime(0.16, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.025);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(macropadAudioCtx.destination);

      noise.start(t);
      noise.stop(t + 0.03);
    } catch (e) {
      // Audio not supported or blocked
    }
  }

  const macropadReadout = document.getElementById("macropad-readout");
  const keycaps = document.querySelectorAll(".tool-badge.keycap-badge");
  const macropadChassis = document.querySelector(".tools-grid.macropad-chassis");

  keycaps.forEach((key) => {
    const tool = key.getAttribute("data-tool") || "";
    const sub = key.getAttribute("data-sub") || "";

    key.addEventListener("mouseenter", () => {
      if (macropadReadout) {
        macropadReadout.textContent = `[ ${tool.toUpperCase()} ] // ${sub}`;
        macropadReadout.style.color = "#34d399";
      }
    });

    key.addEventListener("mousedown", () => {
      playMechanicalClick();
      key.classList.add("is-actuated");
    });

    key.addEventListener("mouseup", () => {
      key.classList.remove("is-actuated");
    });

    key.addEventListener("mouseleave", () => {
      key.classList.remove("is-actuated");
    });

    // Keyboard accessibility: Enter or Space triggers actuation
    key.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        playMechanicalClick();
        key.classList.add("is-actuated");
        setTimeout(() => key.classList.remove("is-actuated"), 120);
      }
    });
  });

  if (macropadChassis) {
    macropadChassis.addEventListener("mouseleave", () => {
      if (macropadReadout) {
        macropadReadout.textContent = "[ HOVER TO ACTUATE ]";
        macropadReadout.style.color = "#f1ebd8";
      }
    });
  }
});

/* ============================================================
   GIANT DESIGNS — main.js
   Multi-page site edition
   Architect: Ezeugwu Tochukwu David
   ============================================================ */

"use strict";

/* ============================================================
   SHARED DATA
   ============================================================ */
const PROJECTS = [
  {
    id: "aku",
    num: "01",
    images: [
      "/Assets/Imgs/Working Drawings/WhatsApp Image 2026-05-27 at 11.14.22 PM.jpeg",
      "/Assets/Imgs/Working Drawings/WhatsApp Image 2026-05-27 at 11.14.21 PM (1).jpeg",
      "/Assets/Imgs/3d Building/WhatsApp Image 2026-05-27 at 11.19.37 PM (1).jpeg",
    ],
    name: "AKU 1 & 2",
    subtitle: "WEALTH",
    location: "Abuja, Nigeria",
    plotSize: "650 SQM",
    type: "Residential",
    status: "construction",
    statusLabel: "Under Construction",
    cat: ["residential"],
    desc: 'AKU, meaning "Wealth" in Igbo language, is a residential design that embodies prosperity, modern living, and architectural excellence. The concept creates a lasting impression through timeless architectural identity, functional spaces and sustainable design.',
    highlights: [
      "Vertical openings",
      "Sustainable materials",
      "Spatial harmony",
      "Lasting impression",
    ],
    style: "Contemporary · Minimal · Elegant",
    materials: [
      {
        name: "Textured Concrete",
        image: "/Assets/Imgs/Materials/Textured Concrete.jpg",
      },
      {
        name: "Wood Cladding",
        image: "/Assets/Imgs/Materials/Wood Cladding.avif",
      },
      {
        name: "Stone Finish",
        image: "/Assets/Imgs/Materials/Stone finish.jpg",
      },
      {
        name: "Glass Balustrade",
        image: "/Assets/Imgs/Materials/Glass Balustrade.jpg",
      },
      {
        name: "Metal Finish",
        image: "/Assets/Imgs/Materials/Metal Finish.jpg",
      },
      {
        name: "Painted Plaster",
        image: "/Assets/Imgs/Materials/Painted Plaster.jpg",
      },
    ],
    tags: [
      "Working drawings",
      "Floor plans",
      "Building section",
      "4 design options",
    ],
    drawings: [
      {
        image: "/Assets/Imgs/Working Drawings/AKU/GF.png",
        title: "Ground floor plan",
        desc: "Kitchen, living room, dining, lobby, guest room, ante room",
      },
      {
        image: "/Assets/Imgs/Working Drawings/AKU/FF.png",
        title: "First floor plan",
        desc: "Bedrooms 1–3, master suite, family lounge, balconies",
      },
      {
        image: "/Assets/Imgs/Working Drawings/AKU/SF.png",
        title: "Second floor plan",
        desc: "Master bedroom (44m²), lounge/living, maid room, WIC",
      },
      {
        image: "/Assets/Imgs/Working Drawings/AKU/BS AA.png",
        title: "Building section (A-A)",
        desc: "Full vertical section showing all floor levels and heights",
      },
      {
        image: "/Assets/Imgs/Working Drawings/AKU/BS AA.png",
        title: "Design options A–D",
        desc: "Four distinct exterior facade options for client selection",
      },
      {
        image:
          "/Assets/Imgs/3d Building/WhatsApp Image 2026-05-27 at 11.19.37 PM (1).jpeg",
        title: "3D Renders",
        desc: "High-quality photorealistic exterior visualisations",
      },
    ],
    sitePhotos: [
      "/Assets/Imgs/Gallery/WhatsApp Image 2026-05-27 at 11.16.37 PM (1).jpeg",
      "/Assets/Imgs/Gallery/WhatsApp Image 2026-05-27 at 11.16.37 PM.jpeg",
      "/Assets/Imgs/Gallery/WhatsApp Image 2026-05-27 at 11.16.38 PM (1).jpeg",
      "/Assets/Imgs/Gallery/WhatsApp Image 2026-05-27 at 11.16.38 PM.jpeg",
    ],
    galleryCount: 6,
    hasConstruction: true,
    constructionProgress: 55,
    stages: [
      { label: "Foundation completed", done: true },
      { label: "Structural frame in progress", done: true },
      { label: "Blockwork in progress", done: false },
      { label: "Finishing works", done: false },
      { label: "Final handover", done: false },
    ],
  },
  {
    id: "ulo",
    num: "02",
    images: [
      "/Assets/Imgs/Working Drawings/WhatsApp Image 2026-05-27 at 11.14.21 PM.jpeg",
      "/Assets/Imgs/3d Building/WhatsApp Image 2026-05-27 at 11.19.40 PM.jpeg",
    ],
    name: "ULO",
    subtitle: "HOME IN IGBO LANGUAGE",
    location: "Enugu, Nigeria",
    plotSize: "850 SQM",
    type: "Residential · 7 Bedrooms",
    status: "construction",
    statusLabel: "Under Construction",
    cat: ["residential"],
    desc: 'ULO, meaning "Home" in Igbo, is a luxury residence that embodies classical architecture, elegance, and timeless beauty. Features Corinthian columns, symmetrical proportions and refined architectural details for a grand yet welcoming home.',
    highlights: [
      "Classical architecture",
      "Natural light & ventilation",
      "Sustainable living",
      "Spacious & functional",
    ],
    style: "Classical · Timeless · Elegant",
    materials: [
      {
        name: "Textured Paint (Ivory)",
        image: "/Assets/Imgs/Materials/Painted Ivory.jpg",
      },
      {
        name: "Corinthian Column Finish",
        image: "/Assets/Imgs/Materials/Corinthian Column.jpg",
      },
      {
        name: "Natural Stone Cladding",
        image: "/Assets/Imgs/Materials/Stone Cladding.jpg",
      },
      {
        name: "Marble Stone",
        image: "/Assets/Imgs/Materials/Marble Finish.jfif",
      },
      {
        name: "Aluminium Window Frame",
        image: "/Assets/Imgs/Materials/Aluminium Window.webp",
      },
      {
        name: "Roof Tiles (Dark Grey)",
        image: "/Assets/Imgs/Materials/Roof tiles.jpg",
      },
    ],
    tags: [
      "Working drawings",
      "Ground floor plan",
      "First floor plan",
      "Building section",
    ],
    drawings: [
      {
        image: "/Assets/Imgs/Working Drawings/ULO/GRF.png",
        title: "Ground floor plan",
        desc: "Kitchen, dining, living room (54m²), guest room, laundry",
      },
      {
        image: "/Assets/Imgs/Working Drawings/ULO/1F.png",
        title: "First floor plan",
        desc: "4 bedrooms each 19–22m², lobby, balcony",
      },
      {
        image: "/Assets/Imgs/Working Drawings/ULO/Section AA.png",
        title: "Building section (A-A)",
        desc: "Section through full height showing void over living room",
      },
      {
        image:
          "/Assets/Imgs/3d Building/WhatsApp Image 2026-05-27 at 11.19.40 PM.jpeg",
        title: "3D Renders",
        desc: "Classical exterior visualisations — front and side elevations",
      },
    ],
    galleryCount: 4,
    constructionProgress: 70,
    hasConstruction: true,
    stages: [
      { label: "Foundation completed", done: true },
      { label: "Structural frame done", done: true },
      { label: "Blockwork done", done: true },
      { label: "Finishing works in progress", done: false },
      { label: "Final handover", done: false },
    ],
  },
  {
    id: "hanging-box",
    num: "03",
    images: [
      "/Assets/Imgs/Working Drawings/WhatsApp Image 2026-05-27 at 11.14.20 PM (1).jpeg",
      "/Assets/Imgs/3d Building/WhatsApp Image 2026-05-27 at 11.19.40 PM (1).jpeg",
    ],
    name: "The Hanging Box",
    subtitle: "A BOLD EXPRESSION OF SUSPENDED ARCHITECTURE",
    location: "Anambra, Nigeria",
    plotSize: "650 SQM",
    type: "Residential Duplex · 6 Beds",
    status: "concept",
    statusLabel: "Concept Design",
    cat: ["residential"],
    desc: "The Hanging Box is a contemporary residential exploration of form, balance, and structural expression. The signature cantilevered box creates a visually suspended moment that becomes the defining identity of the building.",
    highlights: [
      "Sculptural massing",
      "The cantilevered box",
      "Light & transparency",
      "Functional luxury",
      "Structural expression",
    ],
    style: "Contemporary · Structural · Bold",
    materials: [
      {
        name: "Smooth White Render",
        image: "/Assets/Imgs/Materials/White Render.jpg",
      },
      {
        name: "Textured Grey Stone Cladding",
        image: "/Assets/Imgs/Materials/Grey Cladding.jpg",
      },
      {
        name: "Tinted Glass Balustrade",
        image: "/Assets/Imgs/Materials/Tinted glass.jpg",
      },
      {
        name: "Powder-Coated Aluminium Frames",
        image: "/Assets/Imgs/Materials/Aluminium Window.webp",
      },
      {
        name: "Timber Door Finish",
        image: "/Assets/Imgs/Materials/Wood Cladding.avif",
      },
      {
        name: "Integrated LED Lighting",
        image: "/Assets/Imgs/Materials/LED Light.webp",
      },
    ],
    tags: [
      "Ground floor plan",
      "First floor plan",
      "Building section",
      "Working drawings",
    ],
    drawings: [
      {
        image: "/Assets/Imgs/Working Drawings/HB/gf.png",
        title: "Ground floor plan",
        desc: "Living/dining (56m²), kitchen, gym, boys quarters, guest bedroom",
      },
      {
        image: "/Assets/Imgs/Working Drawings/HB/ff.png",
        title: "First floor plan",
        desc: "Master suite (50m²), bedrooms 2 & 3 (25m² each), dining",
      },
      {
        image: "/Assets/Imgs/Working Drawings/HB/SEC.png",
        title: "Building section (A-A)",
        desc: "Full section through double-height living and cantilevered box",
      },
      {
        image:
          "/Assets/Imgs/3d Building/WhatsApp Image 2026-05-27 at 11.19.40 PM (1).jpeg",
        title: "3D Renders",
        desc: "Bold structural exterior from two elevations",
      },
    ],
    galleryCount: 4,
    hasConstruction: false,
  },
  {
    id: "tare",
    num: "04",
    images: [
      "/Assets/Imgs/Working Drawings/WhatsApp Image 2026-05-27 at 11.14.19 PM (1).jpeg",
      "/Assets/Imgs/3d Building/Screenshot 2026-05-29 195931.png",
      "/Assets/Imgs/3d Building/Screenshot 2026-05-29 195954.png",
    ],
    name: "TARE",
    subtitle: "TOGETHER",
    location: "Abuja, Nigeria",
    plotSize: "1000 SQM",
    type: "Residential",
    status: "construction",
    statusLabel: "Under Construction",
    cat: ["residential"],
    desc: 'TARE, meaning "Together" in Hausa language, is a residence that celebrates harmony — between people, spaces, culture, and design. A thoughtful fusion of contemporary and conventional architecture for modern family living.',
    highlights: [
      "Fusion of styles",
      "Natural light & ventilation",
      "Spacious & functional",
      "Privacy & comfort",
      "Sustainable design",
    ],
    style: "Contemporary-Conventional · Warm · Unified",
    materials: [
      {
        name: "Textured Concrete",
        image: "/Assets/Imgs/Materials/Textured Concrete.jpg",
      },
      {
        name: "Wood Cladding",
        image: "/Assets/Imgs/Materials/Wood Cladding.avif",
      },
      {
        name: "Stone Finish",
        image: "/Assets/Imgs/Materials/Stone Finish.jpg",
      },
      {
        name: "Glass Balustrade",
        image: "/Assets/Imgs/Materials/Glass Balustrade.jpg",
      },
      {
        name: "Metal Finish",
        image: "/Assets/Imgs/Materials/Metal Finish.jpg",
      },
      {
        name: "Painted Plaster",
        image: "/Assets/Imgs/Materials/Painted Plaster.jpg",
      },
    ],
    tags: [
      "Site plan",
      "Ground floor plan",
      "First floor plan",
      "Building section",
      "Site section",
    ],
    drawings: [
      {
        image: "/Assets/Imgs/Working Drawings/TARE/Site.png",
        title: "Site plan",
        desc: "Full plot layout with driveway, access road and landscaping",
      },
      {
        image: "/Assets/Imgs/Working Drawings/TARE/Gfp.png",
        title: "Ground floor plan",
        desc: "Full ground level — multiple living areas and elaborate kitchen",
      },
      {
        image: "/Assets/Imgs/Working Drawings/TARE/Ffp.png",
        title: "First floor plan",
        desc: "Private floor with bedrooms and retreat spaces",
      },
      {
        image: "/Assets/Imgs/Working Drawings/TARE/BSec.png",
        title: "Building section (A-A)",
        desc: "Section showing all floor levels up to +12.400 roof",
      },
      {
        image: "/Assets/Imgs/Working Drawings/TARE/SiteSec.png",
        title: "Site section",
        desc: "Site cross-section showing building in context",
      },
    ],
    galleryCount: 5,
    hasConstruction: true,
    constructionProgress: 68,
    stages: [
      { label: "Foundation completed", done: true },
      { label: "Structural frame in progress", done: true },
      { label: "Blockwork in progress", done: false },
      { label: "Finishing works", done: false },
      { label: "Final handover", done: false },
    ],
  },
  {
    id: "madubi",
    num: "05",
    images: [
      "/Assets/Imgs/Working Drawings/WhatsApp Image 2026-05-27 at 11.14.20 PM.jpeg",
      "/Assets/Imgs/3d Building/WhatsApp Image 2026-05-27 at 11.19.35 PM (1).jpeg",
      "/Assets/Imgs/3d Building/WhatsApp Image 2026-05-27 at 11.19.35 PM (2).jpeg",
    ],
    name: "MADUBI",
    subtitle: "MIRROR",
    location: "Abuja, Nigeria",
    plotSize: "2200 SQM",
    type: "Residential · 20 Apartments",
    status: "construction",
    statusLabel: "Under Construction",
    cat: ["residential"],
    desc: 'MADUBI, meaning "Mirror" in Hausa language, reflects balance, harmony, and reflection in design. The building mirrors its floors to achieve visual symmetry, structural efficiency, and privacy. 20 apartments with pool, ample parking, and secure access.',
    highlights: [
      "Mirrored architecture",
      "Natural light & ventilation",
      "Spacious & modern living",
      "Premium amenities",
      "Safety & privacy",
      "Sustainable design",
    ],
    style: "Modern · Symmetrical · Functional · Elegant · Timeless",
    materials: [
      {
        name: "Textured Concrete",
        image: "/Assets/Imgs/Materials/Textured Concrete.jpg",
      },
      {
        name: "Wood Cladding",
        image: "/Assets/Imgs/Materials/Wood Cladding.avif",
      },
      {
        name: "Stone Finish",
        image: "/Assets/Imgs/Materials/Stone Finish.jpg",
      },
      {
        name: "Glass Balustrade",
        image: "/Assets/Imgs/Materials/Glass Balustrade.jpg",
      },
      {
        name: "Metal Finish",
        image: "/Assets/Imgs/Materials/Metal Finish.jpg",
      },
      {
        name: "Painted Plaster",
        image: "/Assets/Imgs/Materials/Painted Plaster.jpg",
      },
    ],
    tags: [
      "Site plan",
      "Ground floor plan (typical)",
      "Construction progress",
      "Working drawings",
    ],
    drawings: [
      {
        image: "/Assets/Imgs/Working Drawings/MADUBI/Site.png",
        title: "Site plan",
        desc: "Full 2200 SQM plot — building wings, pool, parking and access",
      },
      {
        image: "/Assets/Imgs/Working Drawings/MADUBI/GroundFloor.png",
        title: "Ground floor plan",
        desc: "Typical floor — 20 apartments over multiple floors",
      },
      {
        image: "/Assets/Imgs/Working Drawings/MADUBI/Elevation.png",
        title: "Elevations",
        desc: "Front, side, and courtyard elevation views",
      },
      {
        image: "/Assets/Imgs/Working Drawings/MADUBI/SideEle.png",
        title: "Side Elevations",
        desc: "Side elevation views showing building facade and details",
      },
      {
        image: "/Assets/Imgs/Working Drawings/MADUBI/BirdsEye.png",
        title: "Birds Eye View",
        desc: "Overview of the building from an elevated perspective",
      },
      {
        image:
          "/Assets/Imgs/3d Building/WhatsApp Image 2026-05-27 at 11.19.35 PM (1).jpeg",
        title: "3D Renders",
        desc: "Front, courtyard, side, and bird's eye visualisations",
      },
    ],
    sitePhotos: [
      "/Assets/Imgs/Gallery/BLD1.png",
      "/Assets/Imgs/Gallery/BLD2.png",
      "/Assets/Imgs/Gallery/BLD3.png",
    ],
    galleryCount: 5,
    hasConstruction: true,
    constructionProgress: 55,
    stages: [
      { label: "Foundation completed", done: true },
      { label: "Structural frame in progress", done: true },
      { label: "Blockwork in progress", done: true },
      { label: "Finishing works", done: false },
      { label: "Final handover", done: false },
    ],
    sitePhotosCount: 3,
  },
  {
    id: "ahuike",
    num: "06",
    images: [
      "/Assets/Imgs/Working Drawings/Screenshot 2026-05-28 034531.png",
      "/Assets/Imgs/3d Building/Ahuike.png",
    ],
    name: "AHUIKE",
    subtitle: "SPECIALIST HOSPITAL",
    location: "Anambra, Nigeria",
    plotSize: "2600 SQM",
    type: "Commercial · Healthcare",
    status: "concept",
    statusLabel: "Concept Design",
    cat: ["commercial"],
    desc: 'AHUIKE, meaning "Health" in Igbo language, is a modern healthcare facility that prioritises healing, efficiency, and human well-being. Features a central glass atrium, patient-centred layout, and full specialist departments.',
    highlights: [
      "Contemporary facade",
      "Natural light & ventilation",
      "Patient-centred design",
      "Glass atrium roof",
      "Sustainable features",
    ],
    style: "Contemporary · Clinical · Humane",
    materials: [
      {
        name: "Textured Concrete",
        image: "/Assets/Imgs/Materials/Textured Concrete.jpg",
      },
      {
        name: "Stone Cladding",
        image: "/Assets/Imgs/Materials/Stone Cladding.jpg",
      },
      {
        name: "Curtain Wall",
        image: "/Assets/Imgs/Materials/Curtain wall.webp",
      },
      {
        name: "Aluminium Louvres",
        image: "/Assets/Imgs/Materials/Aluminium louvres.avif",
      },
      {
        name: "Glass Railing",
        image: "/Assets/Imgs/Materials/Glass Balustrade.jpg",
      },
      {
        name: "White Plaster",
        image: "/Assets/Imgs/Materials/White Render.jpg",
      },
      {
        name: "Wood Finish",
        image: "/Assets/Imgs/Materials/Wood Cladding.avif",
      },
    ],
    tags: [
      "Site plan",
      "Ground floor plan",
      "First floor plan",
      "Working drawings",
    ],
    drawings: [
      {
        image: "/Assets/Imgs/Working Drawings/AHUIKE/SIITE.png",
        title: "Site plan",
        desc: "Full hospital plot — emergency drop-off, 48 parking spaces, main entrance",
      },
      {
        image: "/Assets/Imgs/Working Drawings/AHUIKE/GRF.png",
        title: "Ground floor plan",
        desc: "Emergency, theatres, OPD, labs, pharmacy, wards, imaging",
      },
      {
        image: "/Assets/Imgs/Working Drawings/AHUIKE/FIF.png",
        title: "First floor plan",
        desc: "Inpatient wards, clinical suites, admin and staff facilities",
      },
      {
        image: "/Assets/Imgs/Working Drawings/AHUIKE/Aerial.png",
        title: "Birds eye view",
        desc: "Overview of the building from an elevated perspective",
      },
      {
        image: "/Assets/Imgs/Working Drawings/AHUIKE/FrontEle.png",
        title: "Elevations",
        desc: "Front, side, and rear elevations of the building",
      },
      {
        image: "/Assets/Imgs/3d Building/Ahuike.png",
        title: "3D Renders",
        desc: "Front elevation, aerial view, and entrance visualisations",
      },
    ],
    galleryCount: 4,
    hasConstruction: false,
  },
];

/* ============================================================
   SHARED UTILITIES
   ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function currentPage() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes("contact")) return "contact";
  if (path.includes("project-detail")) return "project-detail"; // before "projects"
  if (path.includes("projects")) return "projects";
  if (path.includes("about")) return "about";
  return "index";
}

function setActiveNavLink() {
  const page = currentPage();
  $$(".nav-links a, .nav-mobile a").forEach((a) => {
    const dp = a.dataset.page || "";
    const isActive =
      dp === page || (dp === "projects" && page === "project-detail");
    a.classList.toggle("active", isActive);
  });
}

function initScrollFade() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  $$(".fade-in").forEach((el) => observer.observe(el));
}

function toggleMobileNav() {
  const mob = $("#nav-mobile");
  if (!mob) return;
  const isOpen = mob.classList.toggle("open");
  const btn = $(".nav-hamburger");
  if (btn) btn.setAttribute("aria-expanded", isOpen);
}

/* ============================================================
   NAVIGATION HELPERS
   ============================================================ */
function goTo(page) {
  const map = {
    home: "/Public/Index.html",
    projects: "/Public/Projects.html",
    about: "/Public/About.html",
    contact: "/Public/Contact.html",
  };
  if (map[page]) window.location.href = map[page];
}

function goToProject(id) {
  sessionStorage.setItem("gd_project_id", id);
  window.location.href = "/Public/Project-detail.html?id=" + id;
}

/* ============================================================
   INDEX.HTML — Hero slider + featured projects
   ============================================================ */


function renderHomeProjects() {
  const grid = $("#home-projects-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.slice(0, 3)
    .map(
      (p) => `
    <div class="proj-card fade-in" role="article" onclick="goToProject('${p.id}')" style="cursor:pointer">
      <div class="proj-thumb" style="background-image:url('${p.images[0]}');background-size:cover;background-position:center;background-repeat:no-repeat;">
        <span class="proj-status-badge ${p.status === "construction" ? "status-construction" : "status-concept"}">
          ${p.statusLabel}
        </span>
        ${
          p.hasConstruction
            ? `
          <div class="proj-progress-overlay">
            <div class="proj-progress-top">
              <span>Construction progress</span>
              <span>${p.constructionProgress}%</span>
            </div>
            <div class="proj-progress-bar">
              <div class="proj-progress-fill" style="width:${p.constructionProgress}%"></div>
            </div>
          </div>`
            : ""
        }
      </div>
      <div class="proj-info">
        <div class="proj-num">${p.num}</div>
        <div class="proj-name">${p.name}</div>
        <div class="proj-meta"><i class="ti ti-map-pin" aria-hidden="true"></i> ${p.location} · ${p.plotSize}</div>
        <div class="proj-desc">${p.desc.slice(0, 110)}…</div>
        <div class="proj-link">View project <i class="ti ti-arrow-up-right"></i></div>
      </div>
    </div>
  `,
    )
    .join("");
}

/* ============================================================
   HERO SLIDER (Index page)
   ============================================================ */
function initHeroSlider() {
  const slider = document.querySelector(".hero-img-placeholder");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slider-dot");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (!slider || !slides.length) return;

  let currentSlide = 0;
  let autoSlide;

  function showSlide(index) {
    if (!slides[index]) return;
    slides.forEach((s) => s.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));
    slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
  }

  function next() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  function prev() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  function start() {
    autoSlide = setInterval(next, 3000);
  }
  function reset() {
    clearInterval(autoSlide);
    start();
  }

  nextBtn?.addEventListener("click", () => {
    next();
    reset();
  });
  prevBtn?.addEventListener("click", () => {
    prev();
    reset();
  });
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(i);
      reset();
    });
  });

  showSlide(0);
  start();
}

/* ============================================================
   INIT COUNTERS (Index page)
   ============================================================ */
   function initCounters() {
  const counters = $$(".stat-num[data-target]");
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || "";
      const duration = 1800;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), target);
        el.textContent = current + suffix;
        if (current >= target) clearInterval(timer);
      }, duration / steps);

      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach((el) => observer.observe(el));
}

/* ============================================================
   PROJECTS.HTML — Full grid + category filter
   ============================================================ */
function renderProjectsGrid() {
  const grid = document.querySelector("#projects-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(
    (p) => `
    <div class="proj-card proj-card-filterable fade-in"
         data-cat="${p.cat.join(" ")}"
         data-construction="${p.hasConstruction}"
         onclick="goToProject('${p.id}')">
      <div class="proj-thumb" style="background-image:url('${p.images[0]}');background-size:cover;background-position:center;height:220px;position:relative;">
        <span class="proj-status-badge ${p.status === "construction" ? "status-construction" : "status-concept"}">
          ${p.statusLabel}
        </span>
      </div>
      <div class="proj-info">
        <div class="proj-num">${p.num}</div>
        <div class="proj-name">${p.name}</div>
        <div class="proj-meta"><i class="ti ti-map-pin"></i> ${p.location} · ${p.plotSize}</div>
        <div class="proj-desc">${p.desc.slice(0, 120)}...</div>
        <div class="proj-link">View project <i class="ti ti-arrow-up-right"></i></div>
      </div>
    </div>
  `,
  ).join("");
}

function filterProjects(cat) {
  $$(".filter-tab").forEach((t) =>
    t.classList.toggle("active", t.dataset.filter === cat),
  );
  $$(".proj-card-filterable").forEach((card) => {
    const projectCat = card.dataset.cat || "";
    const isConstruction = card.dataset.construction === "true";
    let show = false;
    if (cat === "all") show = true;
    else if (cat === "construction") show = isConstruction;
    else show = projectCat.includes(cat);
    card.style.display = show ? "block" : "none";
  });
}

function initProjectsPage() {
  const grid = document.querySelector("#projects-grid");
  if (!grid) return;
  renderProjectsGrid();
  const saved = sessionStorage.getItem("gd_filter") || "all";
  filterProjects(saved);
  $$(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () =>
      sessionStorage.setItem("gd_filter", tab.dataset.filter),
    );
  });
}

/* ============================================================
   PROJECT-DETAIL.HTML
   ============================================================ */
function resolveProjectId() {
  const params = new URLSearchParams(window.location.search);
  return (
    params.get("id") ||
    sessionStorage.getItem("gd_project_id") ||
    PROJECTS[0].id
  );
}

function renderDetailPage() {
  const id = resolveProjectId();
  const p = PROJECTS.find((pr) => pr.id === id) || PROJECTS[0];
  const galleryImages = p.images || [];

  document.title = p.name + " — Giant Designs";

  const statusClass =
    p.status === "construction" ? "status-construction" : "status-concept";

  /* ── Gallery items ── */
  const galleryHTML = galleryImages
    .map(
      (img, i) => `
    <div class="gallery-item" onclick="openLightbox(${i})" role="button" tabindex="0">
      <img src="${img}" alt="${p.name} ${i + 1}" />
      <div class="gallery-item-overlay"><i class="ti ti-zoom-in"></i></div>
    </div>
  `,
    )
    .join("");

  /* ── Construction progress section ── */
  let constructionHTML = "";
  if (p.hasConstruction) {
    const stages = p.stages || [];
    const doneCnt = stages.filter((s) => s.done).length;
    const totalCnt = stages.length;

    const stagesHTML = stages
      .map(
        (s) => `
      <div class="timeline-step ${s.done ? "done" : "current"}">
        <div class="timeline-dot ${s.done ? "done" : "active"}">
          <i class="ti ${s.done ? "ti-check" : "ti-clock"}"></i>
        </div>
        <div class="timeline-label">${s.label}</div>
      </div>
    `,
      )
      .join("");

    constructionHTML = `
      <section class="construction-section" aria-label="Construction progress">
        <div class="container">
          <div class="section-label">Construction progress</div>
          <h2 class="section-title" style="margin-bottom:1.5rem">On site</h2>
          <div class="progress-wrap" style="max-width:420px">
            <div class="progress-bar">
              <div class="progress-fill" style="width:${p.constructionProgress}%"></div>
            </div>
            <div class="progress-pct">
              ${p.constructionProgress}% complete — ${doneCnt} of ${totalCnt} stages done
            </div>
          </div>
          <div class="construction-timeline">${stagesHTML}</div>
        </div>
      </section>
    `;
  }

  /* ── Site photos section — shown regardless of hasConstruction ── */
  let sitePhotosHTML = "";
  if (p.sitePhotos && p.sitePhotos.length) {
    const photosGrid = p.sitePhotos
      .map(
        (img, i) => `
      <div class="gallery-item" onclick="openLightbox(${galleryImages.length + i})">
        <img src="${img}" alt="Site photo ${i + 1}" />
        <div class="gallery-item-overlay"><i class="ti ti-zoom-in"></i></div>
      </div>
    `,
      )
      .join("");

    sitePhotosHTML = `
      <section class="construction-section" aria-label="Site photography">
        <div class="container">
          <div class="section-label" style="margin-bottom:1rem">Site photography</div>
          <div class="gallery-grid">${photosGrid}</div>
        </div>
      </section>
    `;
  }

  /* ── Working drawings ── */
  const drawingsHTML = p.drawings
    .map(
      (d) => `
    <div class="plan-card">
    <div class="plan-card-img">
    <img src="${d.image}" alt="${d.title}">
    </div>
      <div class="plan-card-label">${d.title}</div>
      <div style="font-size:11px;color:#666;padding:0 10px 10px">${d.desc}</div>
    </div>
  `,
    )
    .join("");

  /* ── Inject into page ── */
  const wrap = $("#detail-content");
  if (!wrap) return;

  wrap.innerHTML = `

    <!-- Hero -->
    <div class="project-detail-hero">
      <a class="back-link" href="Projects.html">
        <i class="ti ti-arrow-left"></i> Back to projects
      </a>
      <div class="detail-hero-grid">
        <div>
          <div class="detail-project-num">${p.num || "PROJECT"}</div>
          <div style="margin-bottom:1rem">
            <span class="proj-status-badge ${statusClass}">${p.statusLabel}</span>
          </div>
          <div class="detail-project-title">${p.name}</div>
          <div class="detail-project-subtitle">${p.subtitle}</div>
        </div>
        <div class="detail-meta-grid">
          <div class="detail-meta-item">
            <div class="detail-meta-label">Location</div>
            <div class="detail-meta-val">${p.location}</div>
          </div>
          <div class="detail-meta-item">
            <div class="detail-meta-label">Plot Size</div>
            <div class="detail-meta-val">${p.plotSize}</div>
          </div>
          <div class="detail-meta-item">
            <div class="detail-meta-label">Type</div>
            <div class="detail-meta-val">${p.type}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery -->
    <section class="project-gallery-section">
      <div class="render-gallery">
        <div class="render-main">
          <img src="${galleryImages[0]}" alt="${p.name}" />
        </div>
        <div class="render-thumbs">
          ${galleryImages
            .map(
              (img, i) => `
            <div class="render-thumb" onclick="changeMainImage('${img}')">
              <img src="${img}" alt="${p.name} ${i + 1}" />
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
      <div class="gallery-grid">${galleryHTML}</div>
    </section>

    <!-- Construction progress (under-construction projects only) -->
    ${constructionHTML}

    <!-- Site photos (any project with sitePhotos array) -->
    ${sitePhotosHTML}

    <!-- Overview -->
    <section class="detail-body">
      <div class="detail-sidebar">
        <div class="detail-sidebar-section">
          <div class="detail-sidebar-title">Materials</div>
         ${p.materials
           .map(
             (m) => `
  <div class="material-item">
    <div class="material-image">
      <img src="${m.image}" alt="${m.name}">
    </div>

    <div class="material-info">
      <div class="material-name">${m.name}</div>
      <div class="material-desc">Premium finish</div>
    </div>
  </div>
`,
           )
           .join("")}
        </div>
      </div>
      <div class="detail-main-content">
        <div class="section-label">Project Concept</div>
        <h2 class="section-title">${p.name}</h2>
        <p class="concept-text">${p.desc}</p>
      </div>
    </section>

    <!-- Working drawings -->
    <section class="drawings-section fade-in" aria-label="Working drawings">
      <div class="container">
        <div class="section-header">
          <div>
            <div class="section-label">Technical documents</div>
            <h2 class="section-title">Working drawings</h2>
          </div>
        </div>
        <div class="plans-grid">${drawingsHTML}</div>
      </div>
    </section>

    <!-- CTA strip -->
    <div class="detail-cta">
      <div>
        <div class="detail-cta-title">Interested in a similar project?</div>
        <div class="detail-cta-sub">Get in touch with the Giant Designs team.</div>
      </div>
      <a class="btn-primary" href="Contact.html">
        Contact us <i class="ti ti-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
  `;

  CURRENT_PROJECT_IMAGES = [...galleryImages, ...(p.sitePhotos || [])];

  Lightbox.totalImages =
    galleryImages.length + (p.sitePhotos ? p.sitePhotos.length : 0);
  setTimeout(initScrollFade, 80);
}

function initDetailPage() {
  renderDetailPage();
}

/* ============================================================
   CONTACT.HTML — Form submission
   ============================================================ */
function handleContactSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById("contact-submit-btn");
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    projectType: form.projectType.value,
    location: form.location.value,
    message: form.message.value,
  };

  btn.innerHTML = "Sending...";

  fetch("https://giant-designs.onrender.com/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
 .then((res) => {
  if (res.success) {
    btn.innerHTML = "Message sent ✓";
    form.reset();
    setTimeout(() => {
      btn.innerHTML = "Send message";
    }, 2000);
  } else {
    btn.innerHTML = "Try again";
    setTimeout(() => {
      btn.innerHTML = "Send message";
    }, 2000);
  }
})
.catch(() => {
  btn.innerHTML = "Error sending message";
  setTimeout(() => {
    btn.innerHTML = "Send message";
  }, 2000);
});
}

function initContactPage() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", handleContactSubmit);
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
const Lightbox = {
  index: 0,
  totalImages: 8,
  open(i) {
    this.index = i;
    const lb = $("#lightbox");
    if (!lb) return;
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
    this.update();
  },
  close() {
    const lb = $("#lightbox");
    if (!lb) return;
    lb.classList.remove("open");
    document.body.style.overflow = "";
  },
  next() {
    this.index = (this.index + 1) % this.totalImages;
    this.update();
  },
  prev() {
    this.index = (this.index - 1 + this.totalImages) % this.totalImages;
    this.update();
  },
  update() {
    const img = document.querySelector("#lightbox img");
    const cap = $("#lightbox-caption");

    if (!img) return;

    img.src = CURRENT_PROJECT_IMAGES[this.index];

    if (cap) {
      cap.textContent = `Image ${this.index + 1}`;
    }
  },
};

function openLightbox(i) {
  Lightbox.open(i);
}
function closeLightbox() {
  Lightbox.close();
}
function lightboxNext() {
  Lightbox.next();
}
function lightboxPrev() {
  Lightbox.prev();
}

document.addEventListener("keydown", (e) => {
  const lb = $("#lightbox");
  if (!lb || !lb.classList.contains("open")) return;
  if (e.key === "Escape") Lightbox.close();
  if (e.key === "ArrowRight") Lightbox.next();
  if (e.key === "ArrowLeft") Lightbox.prev();
});

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const page = currentPage();
  setActiveNavLink();
  initScrollFade();

  if (page === "index") {
    initHeroSlider();
    renderHomeProjects();
    initCounters();
  }

  if (page === "projects") {
    initProjectsPage();
  }

  if (page === "project-detail") {
    renderDetailPage();
  }

  if (page === "contact") {
    initContactPage();
  }
});

function changeMainImage(src) {
  const mainImg = document.querySelector(".render-main img");
  if (mainImg) mainImg.src = src;
}
let CURRENT_PROJECT_IMAGES = [];

/* ============================================================
   GLOBAL EXPOSE
   ============================================================ */
window.goTo = goTo;
window.goToProject = goToProject;
window.filterProjects = filterProjects;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.lightboxNext = lightboxNext;
window.lightboxPrev = lightboxPrev;
window.changeMainImage = changeMainImage;
window.toggleMobileNav = toggleMobileNav;


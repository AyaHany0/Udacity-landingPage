/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let sections = document.querySelectorAll("section");
let navbarList = document.getElementById("navbar__list");
const navFragment = document.createDocumentFragment();
const navLinks = document.querySelectorAll("nav ul li a");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

sections.forEach((section) => {
  let navText = section.dataset.nav;
  let navItemId = section.id;

  const listItem = document.createElement("li");
  const linkItem = document.createElement("a");
  linkItem.href = `#${navItemId}`;
  linkItem.classList.add("menu__link");
  linkItem.textContent = navText;
  listItem.appendChild(linkItem);
  navFragment.appendChild(listItem);
});
navbarList.appendChild(navFragment);

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", function () {
  let foundSection;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      (foundSection == null ||
        rect.top < foundSection.getBoundingClientRect().top)
    ) {
      foundSection = section;
    }
  });

  sections.forEach((section) => {
    const navLink = document.querySelector(
      `nav ul li a[href="#${section.id}"]`
    );
    if (section == foundSection) {
      section.classList.add("your-active-class");

      navLink.classList.add("menu__link__active");
    } else {
      navLink.classList.remove("menu__link__active");
      section.classList.remove("your-active-class");
    }
  });
});

// Scroll to anchor ID using scrollTO event
document.querySelectorAll(".navbar__menu a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelectorAll(".navbar__menu a").forEach((navLink) => {
      navLink.classList.remove("menu__link__active");
    });

    this.classList.add("menu__link__active");

    const sectionId = this.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Build menu

// Scroll to section on link click

// Set sections as active

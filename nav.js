/* ============================================================
   nav.js  —  SHARED NAVIGATION BAR
   ============================================================
   This single file builds the nav bar for EVERY page.
   Change a link or your initials HERE and it updates everywhere.
   No more copy-pasting the same nav into 7 different files.

   HOW IT WORKS:
   Each HTML page has an empty <header id="nav" class="nav"></header>.
   This script fills it with the logo, page links, and social icons.
   It also auto-detects which page you're on and highlights it.

   TO EDIT YOUR LINKS:
   Change the URLs in the "SOCIAL LINKS" section below.
   That's it — every page picks up the change automatically.
   ============================================================ */

(function () {

  /* ----------------------------------------------------------
     SOCIAL LINKS — edit these URLs to update every page at once
     ---------------------------------------------------------- */
  var instagram = "https://www.instagram.com/s0.rtg?mdxt=a2NzbHF1Z282cHEw&utm_source=qr";
  var linkedin  = "https://www.linkedin.com/in/steven-ortiz-072460348/?isSelfProfile=true";   // EDIT: put your real LinkedIn URL here
  var github    = "https://github.com/so-1966?tab=repositories";

  /* ----------------------------------------------------------
     LOGO — your initials shown in the top-left corner
     ---------------------------------------------------------- */
  var logoText = "SO";   // EDIT: change to your initials

  /* ----------------------------------------------------------
     SVG ICONS — the icon shapes for each social platform.
     You shouldn't need to change these.
     ---------------------------------------------------------- */
  var instagramIcon = '<svg viewBox="0 0 100 100"><path d="m75 6.25h-50c-10.34 0-18.75 8.4102-18.75 18.75v50c0 10.34 8.4102 18.75 18.75 18.75h50c10.34 0 18.75-8.4102 18.75-18.75v-50c0-10.34-8.4102-18.75-18.75-18.75zm12.5 68.75c0 6.8945-5.6055 12.5-12.5 12.5h-50c-6.8945 0-12.5-5.6055-12.5-12.5v-50c0-6.8945 5.6055-12.5 12.5-12.5h50c6.8945 0 12.5 5.6055 12.5 12.5zm-37.5-50c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25zm0 43.75c-10.34 0-18.75-8.4102-18.75-18.75s8.4102-18.75 18.75-18.75 18.75 8.4102 18.75 18.75-8.4102 18.75-18.75 18.75zm27.219-45.969c0.5625 0.59375 0.90625 1.4062 0.90625 2.2188s-0.34375 1.625-0.90625 2.2188c-0.59375 0.5625-1.4062 0.90625-2.2188 0.90625s-1.625-0.34375-2.2188-0.90625c-0.5625-0.59375-0.90625-1.4062-0.90625-2.2188s0.34375-1.625 0.90625-2.2188c1.1562-1.125 3.25-1.1562 4.4375 0z"/></svg>';

  var linkedinIcon = '<svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>';

  var githubIcon = '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>';

  /* ----------------------------------------------------------
     ACTIVE PAGE DETECTION
     Figures out the current page so the right link gets highlighted.
     index.html → "Home" is active.  Everything else → "Projects".
     ---------------------------------------------------------- */
  var page = window.location.pathname.split("/").pop();
  var homeActive = (page === "" || page === "index.html") ? " active" : "";
  var projectsActive = (page !== "" && page !== "index.html") ? " active" : "";

  /* ----------------------------------------------------------
     BUILD THE NAV HTML
     Assembles the logo, text links, and social icon links.
     ---------------------------------------------------------- */
  var html = ''
    + '<a class="logo" href="index.html">' + logoText + '</a>'
    + '<div class="nav-right">'
    +   '<a class="text-link' + homeActive + '" href="index.html">Home</a>'
    +   '<a class="text-link' + projectsActive + '" href="projects.html">Projects</a>'
    +   '<div class="socials">'
    +     '<a href="' + instagram + '" target="_blank" aria-label="Instagram">' + instagramIcon + '</a>'
    +     '<a href="' + linkedin + '" target="_blank" aria-label="LinkedIn">' + linkedinIcon + '</a>'
    +     '<a href="' + github + '" target="_blank" aria-label="GitHub">' + githubIcon + '</a>'
    +   '</div>'
    + '</div>';

  /* ----------------------------------------------------------
     INSERT INTO THE PAGE
     Finds the <header id="nav"> element and fills it.
     ---------------------------------------------------------- */
  var navElement = document.getElementById("nav");
  if (navElement) {
    navElement.innerHTML = html;
  }

})();

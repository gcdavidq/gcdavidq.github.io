document.addEventListener("astro:page-load", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    if (link.getAttribute("aria-label") === entry.target.id) {
                        link.classList.add("text-blue-500");
                    } else {
                        link.classList.remove("text-blue-500");
                    }
                });
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    document.onvisibilitychange = () => {
        if (document.visibilityState === "hidden") {
            observer.disconnect();
        } else {
            sections.forEach(section => observer.observe(section));
        }
    };

    // Modificación dinámica de la barra de navegación
    const sobreMiLink = document.getElementById('sobreMiLink');
    const ejercicioFisicoLink = document.getElementById('ejercicioFisicoLink');
    const odsLink=document.getElementById('odsLink')
    const navbar = document.getElementById('navbar');

    const updateNavbar = (section) => {
        if (section === 'sobre--mi') {
            navbar.innerHTML = `
                <a class="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500" aria-label="proyectos" href="#proyectos">Proyectos</a>
                <a class="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500" aria-label="contacto" href="mailto:gcdavidq12@gmail.com">Contacto</a>
                <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition">
                    <span class="sr-only">Elige el tema</span>
                    <svg id="light" class="theme-toggle-icon size-5 transition-all" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                    </svg>
                </button>`;
        } else if (section === 'ejercicio') {
            navbar.innerHTML = `
                <a class="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500" aria-label="alimentacion" href="#alimentacion">Alimentación</a>
                <a class="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500" aria-label="levantamiento" href="#levantamiento">Levantamiento de Pesas</a>
                <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition">
                    <span class="sr-only">Elige el tema</span>
                    <svg id="light" class="theme-toggle-icon size-5 transition-all" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                    </svg>`;
        } else if (section=='ods'){
            navbar.innerHTML=`
                <a class="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500" aria-label="alimentacion" href="#alimentacion">Alimentación</a>
                <a class="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500" aria-label="levantamiento" href="#levantamiento">Levantamiento de Pesas</a>
                <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition">
                    <span class="sr-only">Elige el tema</span>
                    <svg id="light" class="theme-toggle-icon size-5 transition-all" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                    </svg>`;
        }
    };

    // Eventos de click para cambiar la barra según la sección
    sobreMiLink.addEventListener('click', () => updateNavbar('sobre-mi'));
    ejercicioFisicoLink.addEventListener('click', () => updateNavbar('ejercicio'));
    odsLink.addEventListener('click', ()=>updateNavbar('ods'));
});

document.addEventListener("astro:page-load", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.querySelector(".overlay").style.opacity = "1";
        });

        item.addEventListener("mouseleave", () => {
            item.querySelector(".overlay").style.opacity = "0";
        });
    });
});


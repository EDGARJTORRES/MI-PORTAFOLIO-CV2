
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar-custom');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggle = document.getElementById('navbarToggle');
    const colorToggle = document.getElementById('dropdownMenuButton');
    const colorMenu = document.getElementById('colorMenu');

    function setMenuOpen(isOpen) {
        navbarCollapse.classList.toggle('is-open', isOpen);
        navbarToggle.setAttribute('aria-expanded', String(isOpen));
        navbarToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    }

    function setColorMenuOpen(isOpen) {
        colorMenu.classList.toggle('hidden', !isOpen);
        colorToggle.setAttribute('aria-expanded', String(isOpen));
    }

    navbarToggle.addEventListener('click', function () {
        setMenuOpen(navbarToggle.getAttribute('aria-expanded') !== 'true');
    });

    colorToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        setColorMenuOpen(colorToggle.getAttribute('aria-expanded') !== 'true');
    });

    colorMenu.addEventListener('click', function () {
        setColorMenuOpen(false);
    });

    navbarCollapse.querySelectorAll('a.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            setMenuOpen(false);
            setColorMenuOpen(false);
        });
    });

    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target)) {
            setMenuOpen(false);
            setColorMenuOpen(false);
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            setMenuOpen(false);
            setColorMenuOpen(false);
        }
    });
});

// Propósito: Código JavaScript para el boton 
document.addEventListener("DOMContentLoaded", function() {
    let mybutton = document.getElementById("backToTopBtn");

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    mybutton.addEventListener("click", function() {
        topFunction();
    });

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar-custom");

    // Al cargar la página, la navbar es transparente
    navbar.classList.add("transparent");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { 
            navbar.classList.remove("transparent"); // Se vuelve opaca
        } else {
            navbar.classList.add("transparent"); // Permanece transparente en la parte superior
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768) { 
        
    } else {
        // En móviles, muestra los elementos sin animación
        document.querySelectorAll('.navbar, .card, .barra1, .barra2, .adaptable1, .adaptable2, .adaptable3, .caja-formulario, .img-sobre, .info-sobre')
            .forEach(el => {
                el.style.transform = "none";
                el.style.visibility = "visible";
            });
    }
});

//cambiar colores a texto
function cambiarEstilos(color) {
    document.documentElement.style.setProperty("--color-tema", color);
    const darkThemeTextColors = {
        "rgb(99, 6, 6)": "#ff7272",
        "rgb(16, 228, 217)": "#16e4d9",
        "rgb(7, 75, 7)": "#69c775",
        "rgb(255, 60, 0)": "#ff7043"
    };
    document.documentElement.style.setProperty(
        "--color-tema-texto",
        darkThemeTextColors[color] || "#ff7272"
    );

    // Cambia el color del texto
    let elementos = document.querySelectorAll(".texto-cambiable");
    elementos.forEach(el => el.style.color = color);

    // Cambia el color del borde
    let navbar = document.querySelector(".navbar-custom");
    if (navbar) {
        navbar.style.borderBottom = `0.2px solid ${color}`;
    }


    //cambia el color del border del footer
    let footer = document.querySelector(".footer");
    if (footer) {
        footer.style.borderTop = `0.2px solid ${color}`;
    }

    let button=document.querySelector(".button_lg");
    if(button){
        button.style.backgroundColor =color;
    }
    let logo = document.getElementById("cambio-logo"); 
    if (logo) {
        switch (color) {
            case "rgb(99, 6, 6)": 
                logo.src = "imagenes/logoparafondonegro-removebg-preview.png";
                break;
            case "rgb(16, 228, 217)": 
                logo.src = "imagenes/log2-removebg-preview.png";
                break;
            case "rgb(7, 75, 7)": 
                logo.src = "imagenes/log4-removebg-preview.png";
                break;
            case "rgb(255, 60, 0)": 
                logo.src = "imagenes/logo3-removebg-preview.png";
                break;
            default:
                logo.src = "imagenes/logoparafondonegro-removebg-preview.png"; // Logo por defecto
        }
    }
    // cambia el color del boton de regreso al menu
    let backToTopBtn = document.querySelector("#backToTopBtn");
    if (backToTopBtn) {
        backToTopBtn.style.backgroundColor = color;
    }

   // Cambia el color de la barra de desplazamiento (scrollbar)
    let styleTag = document.getElementById("dynamic-scrollbar-style");
    
    if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "dynamic-scrollbar-style";
        document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = `
        ::-webkit-scrollbar-thumb {
            background-color: ${color} !important;
            border-radius: 15px;
        }
    `;
    // cambia color de btn -contacto
    let button2 = document.querySelector(".button2");
    if (button2) {
        button2.style.backgroundColor = color;
    }
     // 🔥 Cambia el color del subrayado (.subrayado1::after)
     document.documentElement.style.setProperty("--color-subrayado", color);

}

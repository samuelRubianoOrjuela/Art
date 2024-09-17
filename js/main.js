const data = [
    {
        "url": "https://totenart.com/noticias/wp-content/uploads/2014/12/vermeer-la-joven-de-la-perla.jpg",
        "title": "La joven de la Perla, 1666",
        "description": "De Johannes Vermeer, Retrato de una joven con un turbante y un pendiente de perla. Es conocida como la 'Mona Lisa del Norte' por su misterio y serenidad.",
        "color": "664343"
    },
    {
        "url": "https://www.angelvillazon.com/wp-content/uploads/2023/12/el-expresionmismo-1.jpg",
        "title": "El Grito, 1893",
        "description": "De  Edvard Munch: Expresa angustia y desesperación, mostrando una figura humana en un paisaje con un cielo dramático, emitiendo un grito silencioso.",
        "color": "CD5C08"
    },
    {
        "url": "https://www.angelvillazon.com/wp-content/uploads/2023/12/ex-2-768x1079.jpg",
        "title": "Fränzi ante una silla tallada, 1910",
        "description": "De Ernst Ludwig Kirchner: Retrato de una joven llamado Fränzi, pintado en un estilo expresionista con colores vibrantes y formas angulosas.",
        "color": "A2CA71"
    },
    {
        "url": "https://vanguardiaartisticasigloxx.wordpress.com/wp-content/uploads/2015/08/magritte-sonofman1.jpg",
        "title": "El hijo del hombre, 1954",
        "description": "De René Magritte: Representa a un hombre con traje y sombrero de bombín, cuyo rostro está cubierto parcialmente por una manzana verde, símbolo de misterio y ocultamiento.",
        "color": "C9DABF"
    },
    {
        "url": "https://www.angelvillazon.com/wp-content/uploads/2023/12/ex-6.jpg",
        "title": "Autorretrato, 1910",
        "description": "De Egon Schiele: Obra en la que el artista se muestra a sí mismo en un estilo expresionista, con líneas angulosas y una figura distorsionada que refleja tensión interna.",
        "color": "0F67B1"
    },
    {
        "url": "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNWRlYTMzZDE2NDQzZC5qcGciLCJyZXNpemUsMTUwMHxmb3JtYXQsd2VicCJdfQ.P6RuCQsHNxHXirO_jWTEyR4uQhaJWG_wsAJEYSDmYdo.webp",
        "title": "El arte de la pintura, 1668",
        "description": "De  Johannes Vermeer: Escena de un pintor trabajando en su estudio, considerado un homenaje al proceso creativo y a la pintura como arte.",
        "color": "E0A75E"
    }
]

const container = document.getElementById('img-container');
let subcontainer;
data.forEach(i => {
    subcontainer = document.createElement('div');
    subcontainer.classList.add('image')
    subcontainer.style.backgroundImage = `url(${i.url})`;
    container.appendChild(subcontainer);
});

document.querySelectorAll('.image').forEach((i, j) => {
    i.addEventListener('mouseleave', () => {
        i.style.animation = 'flip-vertical-bck2 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both';
        setTimeout(() => {
            i.style.backgroundImage = `url(${data[j].url})`;
            i.style.backgroundColor = 'none';
            i.innerHTML = '';
        }, "500");
    })
    i.addEventListener('mouseenter', () => {
        i.style.animation = 'flip-vertical-bck1 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both';
        setTimeout(() => {
            i.style.backgroundImage = 'none';
            i.style.backgroundColor = `#${data[j].color}`;
            i.innerHTML = `
            <div>
                <h2>${data[j].title}</h2>
                <p>${data[j].description}</p>
            </div>`;
        }, "500");        
    })
})

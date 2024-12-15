const productos = [
    {
        "id": 1,
        "producto": "Lavadora",
        "descripcion": "Lavadora de alta eficiencia, ideal para el lavado de ropa con múltiples ciclos y funciones.",
        "precio": 150000,
        "img": "/assets/lavadora.jpg",
        "category": "Electrodomésticos",
        "stock": 1,
        "estado": "Disponible",
        "marca": "LG"
    },
    {
        "id": 2,
        "producto": "Nevera",
        "descripcion": "Nevera de dos puertas con sistema de ahorro energético y amplio espacio de almacenamiento.",
        "precio": 80000,
        "img": "/assets/nevera.jpg",
        "category": "Electrodomésticos",
        "stock": 1
    },
    {
        "id": 3,
        "producto": "Microondas",
        "descripcion": "Microondas con múltiples niveles de potencia y función de descongelado rápido.",
        "precio": 20000,
        "img": "/assets/microondas.jpg",
        "category": "Electrodomésticos",
        "stock": 1
    },
    {
        "id": 4,
        "producto": "Freidora de aire",
        "descripcion": "Freidora sin aceite para preparar alimentos crujientes y saludables.",
        "precio": 40000,
        "img": "/assets/freidora.jpg",
        "category": "Electrodomésticos",
        "stock": 1
    },
    {
        "id": 5,
        "producto": "Extractor de jugo",
        "descripcion": "Extractor de jugo con alta potencia para obtener jugos frescos y naturales.",
        "precio": 40000,
        "img": "/assets/extractor.jpg",
        "category": "Electrodomésticos",
        "stock": 1
    },
    {
        "id": 6,
        "producto": "Tv sala",
        "descripcion": "Televisor de alta definición con múltiples opciones de conectividad.",
        "precio": 100000,
        "img": "/assets/tv_sala.jpg",
        "category": "Electrónica",
        "stock": 1
    },
    {
        "id": 7,
        "producto": "Tv cuarto",
        "descripcion": "Televisor compacto de alta definición, ideal para el cuarto.",
        "precio": 150000,
        "img": "/assets/tv_cuarto.jpg",
        "category": "Electrónica",
        "stock": 1
    },
    {
        "id": 8,
        "producto": "Utencilios",
        "descripcion": "Set completo de utensilios de cocina para preparar tus platillos favoritos.",
        "precio": 100000,
        "img": "/assets/utencilios.jpg",
        "category": "Cocina",
        "stock": 1
    },
    {
        "id": 9,
        "producto": "Ollas",
        "descripcion": "Juego de ollas de acero inoxidable para una cocción uniforme y duradera.",
        "precio": 20000,
        "img": "/assets/ollas.jpg",
        "category": "Cocina",
        "stock": 1
    },
    {
        "id": 10,
        "producto": "Copas",
        "descripcion": "Set de copas de cristal para disfrutar de tus bebidas con elegancia.",
        "precio": 20000,
        "img": "/assets/copas.jpg",
        "category": "Cocina",
        "stock": 1
    },
    {
        "id": 11,
        "producto": "Tetera",
        "descripcion": "Tetera de acero inoxidable para preparar té con facilidad.",
        "precio": 10000,
        "img": "/assets/tetera.jpg",
        "category": "Cocina",
        "stock": 1
    },
    {
        "id": 12,
        "producto": "Cafetera",
        "descripcion": "Cafetera de última generación para preparar café de forma rápida y sencilla.",
        "precio": 10000,
        "img": "/assets/cafetera.jpg",
        "category": "Cocina",
        "stock": 1
    },
    {
        "id": 13,
        "producto": "Comedor",
        "descripcion": "Comedor de madera con capacidad para 6 personas, ideal para reuniones familiares.",
        "precio": 50000,
        "img": "/assets/comedor.jpg",
        "category": "Muebles",
        "stock": 1
    },
    {
        "id": 14,
        "producto": "Sofa",
        "descripcion": "Sofá cómodo y espacioso, perfecto para descansar después de un largo día.",
        "precio": 70000,
        "img": "/assets/sofa.jpg",
        "category": "Muebles",
        "stock": 1
    },
    {
        "id": 15,
        "producto": "Mesa centro",
        "descripcion": "Mesa de centro de diseño moderno, ideal para colocar tus objetos decorativos.",
        "precio": 30000,
        "img": "/assets/mesa_centro.jpg",
        "category": "Muebles",
        "stock": 1
    },
    {
        "id": 16,
        "producto": "Mesa Terraza",
        "descripcion": "Mesa para terraza de madera resistente, perfecta para disfrutar del aire libre.",
        "precio": 30000,
        "img": "/assets/mesa_terraza.jpg",
        "category": "Muebles",
        "stock": 1
    },
    {
        "id": 17,
        "producto": "Parrilla",
        "descripcion": "Parrilla de acero inoxidable para disfrutar de una excelente comida a la parrilla.",
        "precio": 70000,
        "img": "/assets/parrilla.jpg",
        "category": "Muebles",
        "stock": 1
    },
    {
        "id": 18,
        "producto": "Bici manuel",
        "descripcion": "Bicicleta para adulto, con cuadro de aluminio y cambio de 18 velocidades.",
        "precio": 350000,
        "img": "/assets/bici_manuel.jpg",
        "category": "Deportes",
        "stock": 1
    },
    {
        "id": 19,
        "producto": "Bici david",
        "descripcion": "Bicicleta de montaña, con suspensión y cuadro resistente, ideal para aventuras al aire libre.",
        "precio": 350000,
        "img": "/assets/bici_david.jpg",
        "category": "Deportes",
        "stock": 1
    },
    {
        "id": 20,
        "producto": "Nintendo",
        "descripcion": "Consola de videojuegos Nintendo Switch, con joy-con y pantalla táctil.",
        "precio": 300000,
        "img": "/assets/nintendo.jpg",
        "category": "Electrónica",
        "stock": 1
    },
    {
        "id": 21,
        "producto": "Ipad",
        "descripcion": "Tablet de Apple, ideal para estudiar, trabajar o entretenimiento.",
        "precio": 500000,
        "img": "/assets/ipad.jpg",
        "category": "Electrónica",
        "stock": 1
    },
    {
        "id": 22,
        "producto": "Libros",
        "descripcion": "Colección de libros sobre desarrollo personal, tecnología y negocios.",
        "precio": 80000,
        "img": "/assets/libros.jpg",
        "category": "Educación",
        "stock": 1
    },
    {
        "id": 23,
        "producto": "Parlante David",
        "descripcion": "Parlante Bluetooth de alta calidad para disfrutar de tu música en cualquier lugar.",
        "precio": 100000,
        "img": "/assets/parlante_david.jpg",
        "category": "Electrónica",
        "stock": 1
    },
    {
        "id": 24,
        "producto": "Parlante Manuel",
        "descripcion": "Parlante portátil, ideal para llevar a todas tus aventuras.",
        "precio": 40000,
        "img": "/assets/parlante_manuel.jpg",
        "category": "Electrónica",
        "stock": 1
    },
    {
        "id": 25,
        "producto": "Cama",
        "descripcion": "Cama king size con estructura de madera, cómoda y resistente.",
        "precio": 200000,
        "img": "/assets/cama.jpg",
        "category": "Muebles",
        "stock": 1
    },
    {
        "id": 26,
        "producto": "Veladores",
        "descripcion": "Veladores modernos con luz LED integrada, perfectos para tu dormitorio.",
        "precio": 30000,
        "img": "/assets/veladores.jpg",
        "category": "Muebles",
        "stock": 1
    },
    {
        "id": 27,
        "producto": "Mesa Dj",
        "descripcion": "Mesa para DJ con espacio para controlar tus equipos y mezclar música.",
        "precio": 150000,
        "img": "/assets/mesa_dj.jpg",
        "category": "Electrónica",
        "stock": 1
    },
    {
        "id": 28,
        "producto": "Mac computer",
        "descripcion": "Computadora Mac de alto rendimiento, ideal para trabajos gráficos y programación.",
        "precio": 1000000,
        "img": "/assets/mac_computer.jpg",
        "category": "Electrónica",
        "stock": 1
    }
];
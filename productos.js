/*
    TODOS NUESTROS PRODUCTOS AQUI PUEDES AGREGAR MAS SI GUSTAS JEJE
*/

const productosDB = [
    
    {
        "id": "arandanos",
        "nombre": "Arándanos",
        "marca": "RB Market",
        "precio": 12.90,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 40,
        "descripcion": "Arándanos frescos seleccionados de excelente calidad.",
        "img": "Estilos/img_produc/arandanos.jpg"
    },
    {
        "id": "arroz-extra",
        "nombre": "Arroz Extra",
        "marca": "Costeño",
        "precio": 5.80,
        "categoria": "Despensa",
        "origen": "Nacional",
        "stock": 100,
        "descripcion": "Arroz extra de grano largo ideal para todo tipo de comidas.",
        "img": "Estilos/img_produc/ArrozExtra.jpg"
    },
    {
        "id": "blue-label",
        "nombre": "Whisky Blue Label",
        "marca": "Johnnie Walker",
        "precio": 999.90,
        "categoria": "Bebidas",
        "origen": "Importado",
        "stock": 10,
        "descripcion": "Whisky premium de edición exclusiva.",
        "img": "Estilos/img_produc/BlueLabel.jpg"
    },
    {
        "id": "cafe-jaen",
        "nombre": "Café Jaén",
        "marca": "Jaén",
        "precio": 18.50,
        "categoria": "Despensa",
        "origen": "Nacional",
        "stock": 80,
        "descripcion": "Café peruano de aroma intenso y sabor tradicional.",
        "img": "Estilos/img_produc/Cafe_Jaen.jpg"
    },
    {
        "id": "carne-pavo",
        "nombre": "Carne de Pavo",
        "marca": "RB Market",
        "precio": 24.90,
        "categoria": "Carnes",
        "origen": "Nacional",
        "stock": 30,
        "descripcion": "Carne de pavo fresca y de excelente calidad.",
        "img": "Estilos/img_produc/CarnePavo.jpg"
    },
    {
        "id": "carne-venado",
        "nombre": "Carne de Venado",
        "marca": "RB Market",
        "precio": 59.90,
        "categoria": "Carnes",
        "origen": "Nacional",
        "stock": 15,
        "descripcion": "Carne de venado seleccionada, ideal para preparaciones gourmet.",
        "img": "Estilos/img_produc/CarneVenado.jpg"
    },
    {
        "id": "manzana-roja-selecta",
        "nombre": "Manzana Roja Selecta",
        "marca": "RB Market",
        "precio": 4.50,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 120,
        "descripcion": "Manzana roja fresca seleccionada.",
        "img": "Estilos/img_produc/descargar.jpg"
    },
    {
        "id": "fresa",
        "nombre": "Fresa",
        "marca": "RB Market",
        "precio": 8.90,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 60,
        "descripcion": "Fresas frescas de temporada.",
        "img": "Estilos/img_produc/Fresa.jpg"
    },
    {
        "id": "juego-cubiertos",
        "nombre": "Juego de Cubiertos",
        "marca": "Tramontina",
        "precio": 69.90,
        "categoria": "Hogar",
        "origen": "Importado",
        "stock": 20,
        "descripcion": "Juego de cubiertos de acero inoxidable.",
        "img": "Estilos/img_produc/juego-cubiertos.jpg"
    },
    {
        "id": "leche-gloria",
        "nombre": "Leche Gloria",
        "marca": "Gloria",
        "precio": 4.20,
        "categoria": "Lácteos",
        "origen": "Nacional",
        "stock": 200,
        "descripcion": "Leche evaporada Gloria.",
        "img": "Estilos/img_produc/Leche-gloria.jpg"
    },
    {
        "id": "leche-nestle",
        "nombre": "Leche Nestlé",
        "marca": "Nestlé",
        "precio": 4.50,
        "categoria": "Lácteos",
        "origen": "Nacional",
        "stock": 180,
        "descripcion": "Leche evaporada Nestlé.",
        "img": "Estilos/img_produc/LecheNestle.jpg"
    },
    {
        "id": "licuadora-profesional",
        "nombre": "Licuadora Profesional",
        "marca": "Oster",
        "precio": 249.90,
        "categoria": "Hogar",
        "origen": "Importado",
        "stock": 15,
        "descripcion": "Licuadora profesional de alta potencia.",
        "img": "Estilos/img_produc/licuadora-profesional.jpg"
    },
    {
        "id": "mantequilla-gloria",
        "nombre": "Mantequilla Gloria",
        "marca": "Gloria",
        "precio": 9.50,
        "categoria": "Lácteos",
        "origen": "Nacional",
        "stock": 90,
        "descripcion": "Mantequilla Gloria de excelente calidad.",
        "img": "Estilos/img_produc/MantequillaGloria.jpg"
    },
    {
        "id": "mayonesa",
        "nombre": "Mayonesa",
        "marca": "Alacena",
        "precio": 10.90,
        "categoria": "Despensa",
        "origen": "Nacional",
        "stock": 80,
        "descripcion": "Mayonesa cremosa ideal para acompañar tus comidas.",
        "img": "Estilos/img_produc/Mayonesa.jpg"
    },
    {
        "id": "naranja",
        "nombre": "Naranja",
        "marca": "RB Market",
        "precio": 4.20,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 150,
        "descripcion": "Naranja fresca y jugosa.",
        "img": "Estilos/img_produc/Naranja.jpg"
    },
    {
        "id": "palta",
        "nombre": "Palta",
        "marca": "RB Market",
        "precio": 7.50,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 70,
        "descripcion": "Palta Hass de primera calidad.",
        "img": "Estilos/img_produc/palta.jpg"
    },
    {
        "id": "pera",
        "nombre": "Pera",
        "marca": "RB Market",
        "precio": 5.20,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 80,
        "descripcion": "Pera fresca y dulce.",
        "img": "Estilos/img_produc/Pera.jpg"
    },
    {
        "id": "pina",
        "nombre": "Piña",
        "marca": "RB Market",
        "precio": 6.50,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 50,
        "descripcion": "Piña fresca de sabor dulce.",
        "img": "Estilos/img_produc/Piña.jpg"
    },
    {
        "id": "pollo-entero",
        "nombre": "Pollo Entero",
        "marca": "San Fernando",
        "precio": 16.90,
        "categoria": "Carnes",
        "origen": "Nacional",
        "stock": 40,
        "descripcion": "Pollo entero fresco.",
        "img": "Estilos/img_produc/pollo-entero.jpg"
    },
    {
        "id": "queso",
        "nombre": "Queso Fresco",
        "marca": "RB Market",
        "precio": 13.90,
        "categoria": "Lácteos",
        "origen": "Nacional",
        "stock": 60,
        "descripcion": "Queso fresco artesanal.",
        "img": "Estilos/img_produc/queso.jpg"
    },
    {
        "id": "set-sartenes",
        "nombre": "Set de Sartenes",
        "marca": "Record",
        "precio": 159.90,
        "categoria": "Hogar",
        "origen": "Importado",
        "stock": 15,
        "descripcion": "Set de sartenes antiadherentes.",
        "img": "Estilos/img_produc/set-sartenes.jpg"
    },
    {
        "id": "tomate",
        "nombre": "Tomate",
        "marca": "RB Market",
        "precio": 3.90,
        "categoria": "Verduras",
        "origen": "Nacional",
        "stock": 100,
        "descripcion": "Tomate fresco de excelente calidad.",
        "img": "Estilos/img_produc/tomate.jpg"
    },
    {
        "id": "vinagre-manzana",
        "nombre": "Vinagre de Manzana",
        "marca": "Heinz",
        "precio": 12.90,
        "categoria": "Despensa",
        "origen": "Importado",
        "stock": 45,
        "descripcion": "Vinagre de manzana natural.",
        "img": "Estilos/img_produc/VinagreManzana.jpg"
    },
    {
        "id": "vino-queirolo",
        "nombre": "Vino Queirolo",
        "marca": "Queirolo",
        "precio": 42.90,
        "categoria": "Bebidas",
        "origen": "Nacional",
        "stock": 35,
        "descripcion": "Vino tinto peruano Queirolo.",
        "img": "Estilos/img_produc/VinoQueirolo.jpg"
    },
    {
        "id": "vino-tabernero",
        "nombre": "Vino Tabernero",
        "marca": "Tabernero",
        "precio": 38.90,
        "categoria": "Bebidas",
        "origen": "Nacional",
        "stock": 35,
        "descripcion": "Vino Tabernero de excelente calidad.",
        "img": "Estilos/img_produc/VinoTabernero.jpg"
    }

];
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
        "img": "Estilos/img/img_produc/arandanos.jpg"
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
        "img": "Estilos/img/img_produc/ArrozExtra.jpg"
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
        "img": "Estilos/img/img_produc/BlueLabel.jpg"
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
        "img": "Estilos/img/img_produc/Cafe_Jaen.jpg"
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
        "img": "Estilos/img/img_produc/CarnePavo.jpg"
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
        "img": "Estilos/img/img_produc/CarneVenado.jpg"
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
        "img": "Estilos/img/img_produc/descargar.jpg"
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
        "img": "Estilos/img/img_produc/Fresa.jpg"
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
        "img": "Estilos/img/img_produc/juego-cubiertos.jpg"
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
        "img": "Estilos/img/img_produc/Leche-gloria.jpg"
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
        "img": "Estilos/img/img_produc/LecheNestle.jpg"
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
        "img": "Estilos/img/img_produc/licuadora-profesional.jpg"
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
        "img": "Estilos/img/img_produc/MantequillaGloria.jpg"
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
        "img": "Estilos/img/img_produc/Mayonesa.jpg"
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
        "img": "Estilos/img/img_produc/Naranja.jpg"
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
        "img": "Estilos/img/img_produc/palta.jpg"
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
        "img": "Estilos/img/img_produc/Pera.jpg"
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
        "img": "Estilos/img/img_produc/Piña.jpg"
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
        "img": "Estilos/img/img_produc/pollo-entero.jpg"
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
        "img": "Estilos/img/img_produc/queso.jpg"
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
        "img": "Estilos/img/img_produc/set-sartenes.jpg"
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
        "img": "Estilos/img/img_produc/tomate.jpg"
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
        "img": "Estilos/img/img_produc/VinagreManzana.jpg"
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
        "img": "Estilos/img/img_produc/VinoQueirolo.jpg"
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
        "img": "Estilos/img/img_produc/VinoTabernero.jpg"
    },

    /* ===================== FRUTAS (10 adicionales) ===================== */
    {
        "id": "platano",
        "nombre": "Plátano",
        "marca": "RB Market",
        "precio": 3.50,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 150,
        "descripcion": "Plátano de seda maduro y dulce.",
        "img": "Estilos/img/img_produc/Platano.jpg"
    },
    {
        "id": "sandia",
        "nombre": "Sandía",
        "marca": "RB Market",
        "precio": 6.90,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 60,
        "descripcion": "Sandía fresca y jugosa, ideal para el verano.",
        "img": "Estilos/img/img_produc/Sandia.jpg"
    },
    {
        "id": "uva",
        "nombre": "Uva Red Globe",
        "marca": "RB Market",
        "precio": 11.90,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 70,
        "descripcion": "Uva Red Globe sin pepa, dulce y crujiente.",
        "img": "Estilos/img/img_produc/Uva.jpg"
    },
    {
        "id": "mango",
        "nombre": "Mango Kent",
        "marca": "RB Market",
        "precio": 7.90,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 90,
        "descripcion": "Mango Kent de pulpa firme y sabor dulce.",
        "img": "Estilos/img/img_produc/Mango.jpg"
    },
    {
        "id": "limon",
        "nombre": "Limón",
        "marca": "RB Market",
        "precio": 5.50,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 110,
        "descripcion": "Limón fresco de alto contenido en jugo.",
        "img": "Estilos/img/img_produc/Limon.jpg"
    },
    {
        "id": "melon",
        "nombre": "Melón",
        "marca": "RB Market",
        "precio": 6.20,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 55,
        "descripcion": "Melón dulce y refrescante.",
        "img": "Estilos/img/img_produc/Melon.jpg"
    },
    {
        "id": "papaya",
        "nombre": "Papaya",
        "marca": "RB Market",
        "precio": 5.90,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 65,
        "descripcion": "Papaya madura de pulpa suave y dulce.",
        "img": "Estilos/img/img_produc/Papaya.jpg"
    },
    {
        "id": "durazno",
        "nombre": "Durazno",
        "marca": "RB Market",
        "precio": 9.90,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 50,
        "descripcion": "Durazno fresco de temporada.",
        "img": "Estilos/img/img_produc/Durazno.jpg"
    },
    {
        "id": "kiwi",
        "nombre": "Kiwi",
        "marca": "RB Market",
        "precio": 13.90,
        "categoria": "Frutas",
        "origen": "Importado",
        "stock": 40,
        "descripcion": "Kiwi importado rico en vitamina C.",
        "img": "Estilos/img/img_produc/Kiwi.jpg"
    },
    {
        "id": "granadilla",
        "nombre": "Granadilla",
        "marca": "RB Market",
        "precio": 10.50,
        "categoria": "Frutas",
        "origen": "Nacional",
        "stock": 45,
        "descripcion": "Granadilla fresca de pulpa dulce.",
        "img": "Estilos/img/img_produc/Granadilla.jpg"
    },

    /* ===================== DESPENSA (10 adicionales) ===================== */
    {
        "id": "fideos-espagueti",
        "nombre": "Fideos Espagueti",
        "marca": "Don Vittorio",
        "precio": 4.90,
        "categoria": "Despensa",
        "origen": "Nacional",
        "stock": 120,
        "descripcion": "Fideos espagueti de sémola de trigo.",
        "img": "Estilos/img/img_produc/FideosEspagueti.jpg"
    },
    {
        "id": "aceite-vegetal",
        "nombre": "Aceite Vegetal",
        "marca": "Primor",
        "precio": 14.90,
        "categoria": "Despensa",
        "origen": "Nacional",
        "stock": 100,
        "descripcion": "Aceite vegetal ideal para cocinar y freír.",
        "img": "Estilos/img/img_produc/AceiteVegetal.jpg"
    },
    {
        "id": "azucar-rubia",
        "nombre": "Azúcar Rubia",
        "marca": "Costeño",
        "precio": 6.50,
        "categoria": "Despensa",
        "origen": "Nacional",
        "stock": 110,
        "descripcion": "Azúcar rubia de caña, ideal para endulzar.",
        "img": "Estilos/img/img_produc/AzucarRubia.jpg"
    },
    {
        "id": "sal-de-mesa",
        "nombre": "Sal de Mesa",
        "marca": "Emsal",
        "precio": 2.50,
        "categoria": "Despensa",
        "origen": "Nacional",
        "stock": 150,
        "descripcion": "Sal de mesa yodada refinada.",
        "img": "Estilos/img/img_produc/SalDeMesa.jpg"
    },
    {
        "id": "atun-en-lata",
        "nombre": "Atún en Lata",
        "marca": "Florida",
        "precio": 7.20,
        "categoria": "Despensa",
        "origen": "Nacional",
        "stock": 130,
        "descripcion": "Atún en trozos en aceite vegetal.",
        "img": "Estilos/img/img_produc/AtunEnLata.jpg"
    },
    {
        "id": "lentejas",
        "nombre": "Lentejas",
        "marca": "Costeño",
        "precio": 6.80,
        "categoria": "Despensa",
        "origen": "Nacional",
        "stock": 90,
        "descripcion": "Lentejas secas seleccionadas.",
        "img": "Estilos/img/img_produc/Lentejas.jpg"
    },
    {
        "id": "harina-sin-preparar",
        "nombre": "Harina Sin Preparar",
        "marca": "Blanca Flor",
        "precio": 5.90,
        "categoria": "Despensa",
        "origen": "Nacional",
        "stock": 100,
        "descripcion": "Harina de trigo sin preparar para todo uso.",
        "img": "Estilos/img/img_produc/Harina.jpg"
    },
    {
        "id": "salsa-de-tomate",
        "nombre": "Salsa de Tomate",
        "marca": "Alacena",
        "precio": 5.50,
        "categoria": "Despensa",
        "origen": "Nacional",
        "stock": 100,
        "descripcion": "Salsa de tomate lista para acompañar tus platos.",
        "img": "Estilos/img/img_produc/SalsaDeTomate.jpg"
    },
    {
        "id": "avena",
        "nombre": "Avena",
        "marca": "Quaker",
        "precio": 8.90,
        "categoria": "Despensa",
        "origen": "Nacional",
        "stock": 95,
        "descripcion": "Avena tradicional en hojuelas.",
        "img": "Estilos/img/img_produc/Avena.jpg"
    },
    {
        "id": "galletas-soda",
        "nombre": "Galletas Soda",
        "marca": "Field",
        "precio": 3.20,
        "categoria": "Despensa",
        "origen": "Nacional",
        "stock": 200,
        "descripcion": "Galletas de soda crocantes y ligeras.",
        "img": "Estilos/img/img_produc/GalletasSoda.jpg"
    },

    /* ===================== BEBIDAS (10 adicionales) ===================== */
    {
        "id": "gaseosa-inca-kola",
        "nombre": "Gaseosa Inca Kola",
        "marca": "Inca Kola",
        "precio": 8.50,
        "categoria": "Bebidas",
        "origen": "Nacional",
        "stock": 150,
        "descripcion": "Gaseosa Inca Kola sabor a bomba, botella de 1.5L.",
        "img": "Estilos/img/img_produc/IncaKola.jpg"
    },
    {
        "id": "agua-mineral-san-luis",
        "nombre": "Agua Mineral San Luis",
        "marca": "San Luis",
        "precio": 2.80,
        "categoria": "Bebidas",
        "origen": "Nacional",
        "stock": 200,
        "descripcion": "Agua mineral sin gas, botella de 625ml.",
        "img": "Estilos/img/img_produc/AguaSanLuis.jpg"
    },
    {
        "id": "cerveza-pilsen-callao",
        "nombre": "Cerveza Pilsen Callao",
        "marca": "Pilsen Callao",
        "precio": 6.90,
        "categoria": "Bebidas",
        "origen": "Nacional",
        "stock": 120,
        "descripcion": "Cerveza rubia tradicional peruana.",
        "img": "Estilos/img/img_produc/PilsenCallao.jpg"
    },
    {
        "id": "nectar-de-durazno",
        "nombre": "Néctar de Durazno",
        "marca": "Pulp",
        "precio": 5.20,
        "categoria": "Bebidas",
        "origen": "Nacional",
        "stock": 130,
        "descripcion": "Néctar de durazno natural, botella de 1L.",
        "img": "Estilos/img/img_produc/NectarDurazno.jpg"
    },
    {
        "id": "bebida-energizante-volt",
        "nombre": "Bebida Energizante Volt",
        "marca": "Volt",
        "precio": 4.50,
        "categoria": "Bebidas",
        "origen": "Nacional",
        "stock": 90,
        "descripcion": "Bebida energizante para recargar tu día.",
        "img": "Estilos/img/img_produc/Volt.jpg"
    },
    {
        "id": "ron-cartavio",
        "nombre": "Ron Cartavio",
        "marca": "Cartavio",
        "precio": 45.90,
        "categoria": "Bebidas",
        "origen": "Nacional",
        "stock": 25,
        "descripcion": "Ron añejo Cartavio de origen peruano.",
        "img": "Estilos/img/img_produc/RonCartavio.jpg"
    },
    {
        "id": "pisco-quebranta",
        "nombre": "Pisco Quebranta",
        "marca": "Queirolo",
        "precio": 39.90,
        "categoria": "Bebidas",
        "origen": "Nacional",
        "stock": 30,
        "descripcion": "Pisco puro de uva quebranta.",
        "img": "Estilos/img/img_produc/PiscoQuebranta.jpg"
    },
    {
        "id": "te-helado-limon",
        "nombre": "Té Helado de Limón",
        "marca": "Lipton",
        "precio": 4.90,
        "categoria": "Bebidas",
        "origen": "Nacional",
        "stock": 100,
        "descripcion": "Té helado sabor limón, botella de 500ml.",
        "img": "Estilos/img/img_produc/TeHeladoLimon.jpg"
    },
    {
        "id": "gaseosa-coca-cola",
        "nombre": "Gaseosa Coca-Cola",
        "marca": "Coca-Cola",
        "precio": 8.20,
        "categoria": "Bebidas",
        "origen": "Nacional",
        "stock": 160,
        "descripcion": "Gaseosa Coca-Cola, botella de 1.5L.",
        "img": "Estilos/img/img_produc/CocaCola.jpg"
    },
    {
        "id": "vino-tinto-santiago-queirolo",
        "nombre": "Vino Tinto Santiago Queirolo",
        "marca": "Santiago Queirolo",
        "precio": 35.90,
        "categoria": "Bebidas",
        "origen": "Nacional",
        "stock": 30,
        "descripcion": "Vino tinto peruano de cuerpo suave.",
        "img": "Estilos/img/img_produc/VinoSantiagoQueirolo.jpg"
    },

    /* ===================== CARNES (10 adicionales) ===================== */
    {
        "id": "carne-de-res",
        "nombre": "Carne de Res",
        "marca": "RB Market",
        "precio": 29.90,
        "categoria": "Carnes",
        "origen": "Nacional",
        "stock": 35,
        "descripcion": "Carne de res fresca, corte para bistec.",
        "img": "Estilos/img/img_produc/CarneDeRes.jpg"
    },
    {
        "id": "carne-de-cerdo",
        "nombre": "Carne de Cerdo",
        "marca": "RB Market",
        "precio": 19.90,
        "categoria": "Carnes",
        "origen": "Nacional",
        "stock": 40,
        "descripcion": "Carne de cerdo fresca, corte magro.",
        "img": "Estilos/img/img_produc/CarneDeCerdo.jpg"
    },
    {
        "id": "carne-de-cordero",
        "nombre": "Carne de Cordero",
        "marca": "RB Market",
        "precio": 44.90,
        "categoria": "Carnes",
        "origen": "Nacional",
        "stock": 20,
        "descripcion": "Carne de cordero tierna y sabrosa.",
        "img": "Estilos/img/img_produc/CarneDeCordero.jpg"
    },
    {
        "id": "pechuga-de-pollo",
        "nombre": "Pechuga de Pollo",
        "marca": "San Fernando",
        "precio": 15.90,
        "categoria": "Carnes",
        "origen": "Nacional",
        "stock": 60,
        "descripcion": "Pechuga de pollo fresca sin hueso.",
        "img": "Estilos/img/img_produc/PechugaDePollo.jpg"
    },
    {
        "id": "chorizo-parrillero",
        "nombre": "Chorizo Parrillero",
        "marca": "San Fernando",
        "precio": 12.90,
        "categoria": "Carnes",
        "origen": "Nacional",
        "stock": 50,
        "descripcion": "Chorizo parrillero ideal para asados.",
        "img": "Estilos/img/img_produc/ChorizoParrillero.jpg"
    },
    {
        "id": "costillas-de-cerdo",
        "nombre": "Costillas de Cerdo",
        "marca": "RB Market",
        "precio": 22.90,
        "categoria": "Carnes",
        "origen": "Nacional",
        "stock": 30,
        "descripcion": "Costillas de cerdo frescas para asar.",
        "img": "Estilos/img/img_produc/CostillasDeCerdo.jpg"
    },
    {
        "id": "hamburguesas-de-res",
        "nombre": "Hamburguesas de Res",
        "marca": "San Fernando",
        "precio": 16.90,
        "categoria": "Carnes",
        "origen": "Nacional",
        "stock": 45,
        "descripcion": "Hamburguesas de carne de res, paquete x4.",
        "img": "Estilos/img/img_produc/HamburguesasDeRes.jpg"
    },
    {
        "id": "salchicha-huachana",
        "nombre": "Salchicha Huachana",
        "marca": "San Fernando",
        "precio": 9.90,
        "categoria": "Carnes",
        "origen": "Nacional",
        "stock": 55,
        "descripcion": "Salchicha huachana tradicional peruana.",
        "img": "Estilos/img/img_produc/SalchichaHuachana.jpg"
    },
    {
        "id": "tocino-ahumado",
        "nombre": "Tocino Ahumado",
        "marca": "Otto Kunz",
        "precio": 14.90,
        "categoria": "Carnes",
        "origen": "Nacional",
        "stock": 35,
        "descripcion": "Tocino ahumado en lonjas.",
        "img": "Estilos/img/img_produc/TocinoAhumado.jpg"
    },
    {
        "id": "filete-de-pescado",
        "nombre": "Filete de Pescado",
        "marca": "RB Market",
        "precio": 21.90,
        "categoria": "Carnes",
        "origen": "Nacional",
        "stock": 30,
        "descripcion": "Filete de pescado fresco, ideal para frituras.",
        "img": "Estilos/img/img_produc/FileteDePescado.jpg"
    },

    /* ===================== HOGAR (10 adicionales) ===================== */
    {
        "id": "juego-de-ollas",
        "nombre": "Juego de Ollas",
        "marca": "Universal",
        "precio": 189.90,
        "categoria": "Hogar",
        "origen": "Importado",
        "stock": 12,
        "descripcion": "Juego de ollas de aluminio antiadherente.",
        "img": "Estilos/img/img_produc/JuegoDeOllas.jpg"
    },
    {
        "id": "plancha-a-vapor",
        "nombre": "Plancha a Vapor",
        "marca": "Oster",
        "precio": 99.90,
        "categoria": "Hogar",
        "origen": "Importado",
        "stock": 18,
        "descripcion": "Plancha a vapor de uso doméstico.",
        "img": "Estilos/img/img_produc/PlanchaAVapor.jpg"
    },
    {
        "id": "aspiradora-portatil",
        "nombre": "Aspiradora Portátil",
        "marca": "Black+Decker",
        "precio": 159.90,
        "categoria": "Hogar",
        "origen": "Importado",
        "stock": 10,
        "descripcion": "Aspiradora portátil de fácil manejo.",
        "img": "Estilos/img/img_produc/AspiradoraPortatil.jpg"
    },
    {
        "id": "juego-de-vasos",
        "nombre": "Juego de Vasos",
        "marca": "Vidriosa",
        "precio": 39.90,
        "categoria": "Hogar",
        "origen": "Nacional",
        "stock": 25,
        "descripcion": "Juego de vasos de vidrio x6.",
        "img": "Estilos/img/img_produc/JuegoDeVasos.jpg"
    },
    {
        "id": "tabla-de-picar",
        "nombre": "Tabla de Picar",
        "marca": "Rey",
        "precio": 19.90,
        "categoria": "Hogar",
        "origen": "Nacional",
        "stock": 30,
        "descripcion": "Tabla de picar de plástico resistente.",
        "img": "Estilos/img/img_produc/TablaDePicar.jpg"
    },
    {
        "id": "organizador-de-cocina",
        "nombre": "Organizador de Cocina",
        "marca": "Rey",
        "precio": 29.90,
        "categoria": "Hogar",
        "origen": "Nacional",
        "stock": 22,
        "descripcion": "Organizador de cocina multiuso.",
        "img": "Estilos/img/img_produc/OrganizadorDeCocina.jpg"
    },
    {
        "id": "hervidor-electrico",
        "nombre": "Hervidor Eléctrico",
        "marca": "Oster",
        "precio": 79.90,
        "categoria": "Hogar",
        "origen": "Importado",
        "stock": 20,
        "descripcion": "Hervidor eléctrico de acero inoxidable.",
        "img": "Estilos/img/img_produc/HervidorElectrico.jpg"
    },
    {
        "id": "tostadora",
        "nombre": "Tostadora",
        "marca": "Oster",
        "precio": 89.90,
        "categoria": "Hogar",
        "origen": "Importado",
        "stock": 18,
        "descripcion": "Tostadora de dos ranuras.",
        "img": "Estilos/img/img_produc/Tostadora.jpg"
    },
    {
        "id": "juego-de-toallas",
        "nombre": "Juego de Toallas",
        "marca": "Casa Bella",
        "precio": 49.90,
        "categoria": "Hogar",
        "origen": "Nacional",
        "stock": 25,
        "descripcion": "Juego de toallas de algodón x3.",
        "img": "Estilos/img/img_produc/JuegoDeToallas.jpg"
    },
    {
        "id": "escoba-y-recogedor",
        "nombre": "Escoba y Recogedor",
        "marca": "Rey",
        "precio": 24.90,
        "categoria": "Hogar",
        "origen": "Nacional",
        "stock": 40,
        "descripcion": "Set de escoba y recogedor para el hogar.",
        "img": "Estilos/img/img_produc/EscobaYRecogedor.jpg"
    },

    /* ===================== LÁCTEOS (10 adicionales) ===================== */
    {
        "id": "yogurt-gloria",
        "nombre": "Yogurt Gloria",
        "marca": "Gloria",
        "precio": 6.50,
        "categoria": "Lácteos",
        "origen": "Nacional",
        "stock": 100,
        "descripcion": "Yogurt sabor fresa Gloria, botella de 1L.",
        "img": "Estilos/img/img_produc/YogurtGloria.jpg"
    },
    {
        "id": "yogurt-laive",
        "nombre": "Yogurt Laive",
        "marca": "Laive",
        "precio": 6.90,
        "categoria": "Lácteos",
        "origen": "Nacional",
        "stock": 90,
        "descripcion": "Yogurt natural Laive, botella de 1L.",
        "img": "Estilos/img/img_produc/YogurtLaive.jpg"
    },
    {
        "id": "queso-crema",
        "nombre": "Queso Crema",
        "marca": "Bonlé",
        "precio": 11.90,
        "categoria": "Lácteos",
        "origen": "Nacional",
        "stock": 70,
        "descripcion": "Queso crema untable ideal para el desayuno.",
        "img": "Estilos/img/img_produc/QuesoCrema.jpg"
    },
    {
        "id": "leche-evaporada-ideal",
        "nombre": "Leche Evaporada Ideal",
        "marca": "Ideal",
        "precio": 4.10,
        "categoria": "Lácteos",
        "origen": "Nacional",
        "stock": 150,
        "descripcion": "Leche evaporada Ideal en lata.",
        "img": "Estilos/img/img_produc/LecheIdeal.jpg"
    },
    {
        "id": "crema-de-leche",
        "nombre": "Crema de Leche",
        "marca": "Gloria",
        "precio": 7.50,
        "categoria": "Lácteos",
        "origen": "Nacional",
        "stock": 60,
        "descripcion": "Crema de leche para postres y salsas.",
        "img": "Estilos/img/img_produc/CremaDeLeche.jpg"
    },
    {
        "id": "leche-en-polvo-anchor",
        "nombre": "Leche en Polvo Anchor",
        "marca": "Anchor",
        "precio": 32.90,
        "categoria": "Lácteos",
        "origen": "Importado",
        "stock": 40,
        "descripcion": "Leche en polvo entera Anchor.",
        "img": "Estilos/img/img_produc/LechePolvoAnchor.jpg"
    },
    {
        "id": "yogurt-griego",
        "nombre": "Yogurt Griego",
        "marca": "Gloria",
        "precio": 9.90,
        "categoria": "Lácteos",
        "origen": "Nacional",
        "stock": 55,
        "descripcion": "Yogurt griego natural alto en proteína.",
        "img": "Estilos/img/img_produc/YogurtGriego.jpg"
    },
    {
        "id": "mantequilla-laive",
        "nombre": "Mantequilla Laive",
        "marca": "Laive",
        "precio": 10.20,
        "categoria": "Lácteos",
        "origen": "Nacional",
        "stock": 65,
        "descripcion": "Mantequilla Laive sin sal.",
        "img": "Estilos/img/img_produc/MantequillaLaive.jpg"
    },
    {
        "id": "queso-parmesano",
        "nombre": "Queso Parmesano",
        "marca": "Laive",
        "precio": 18.90,
        "categoria": "Lácteos",
        "origen": "Nacional",
        "stock": 40,
        "descripcion": "Queso parmesano rallado.",
        "img": "Estilos/img/img_produc/QuesoParmesano.jpg"
    },
    {
        "id": "leche-deslactosada",
        "nombre": "Leche Deslactosada",
        "marca": "Gloria",
        "precio": 5.20,
        "categoria": "Lácteos",
        "origen": "Nacional",
        "stock": 100,
        "descripcion": "Leche evaporada deslactosada Gloria.",
        "img": "Estilos/img/img_produc/LecheDeslactosada.jpg"
    },

    /* ===================== VERDURAS (10 adicionales) ===================== */
    {
        "id": "zanahoria",
        "nombre": "Zanahoria",
        "marca": "RB Market",
        "precio": 2.90,
        "categoria": "Verduras",
        "origen": "Nacional",
        "stock": 120,
        "descripcion": "Zanahoria fresca rica en vitamina A.",
        "img": "Estilos/img/img_produc/Zanahoria.jpg"
    },
    {
        "id": "cebolla-roja",
        "nombre": "Cebolla Roja",
        "marca": "RB Market",
        "precio": 3.50,
        "categoria": "Verduras",
        "origen": "Nacional",
        "stock": 130,
        "descripcion": "Cebolla roja fresca de sabor intenso.",
        "img": "Estilos/img/img_produc/CebollaRoja.jpg"
    },
    {
        "id": "papa-blanca",
        "nombre": "Papa Blanca",
        "marca": "RB Market",
        "precio": 2.80,
        "categoria": "Verduras",
        "origen": "Nacional",
        "stock": 200,
        "descripcion": "Papa blanca fresca, ideal para todo tipo de comidas.",
        "img": "Estilos/img/img_produc/PapaBlanca.jpg"
    },
    {
        "id": "lechuga",
        "nombre": "Lechuga",
        "marca": "RB Market",
        "precio": 2.50,
        "categoria": "Verduras",
        "origen": "Nacional",
        "stock": 90,
        "descripcion": "Lechuga fresca crocante.",
        "img": "Estilos/img/img_produc/Lechuga.jpg"
    },
    {
        "id": "brocoli",
        "nombre": "Brócoli",
        "marca": "RB Market",
        "precio": 5.90,
        "categoria": "Verduras",
        "origen": "Nacional",
        "stock": 60,
        "descripcion": "Brócoli fresco rico en fibra.",
        "img": "Estilos/img/img_produc/Brocoli.jpg"
    },
    {
        "id": "pepino",
        "nombre": "Pepino",
        "marca": "RB Market",
        "precio": 3.20,
        "categoria": "Verduras",
        "origen": "Nacional",
        "stock": 80,
        "descripcion": "Pepino fresco y crocante.",
        "img": "Estilos/img/img_produc/Pepino.jpg"
    },
    {
        "id": "pimiento",
        "nombre": "Pimiento",
        "marca": "RB Market",
        "precio": 4.90,
        "categoria": "Verduras",
        "origen": "Nacional",
        "stock": 70,
        "descripcion": "Pimiento fresco de color intenso.",
        "img": "Estilos/img/img_produc/Pimiento.jpg"
    },
    {
        "id": "zapallo",
        "nombre": "Zapallo",
        "marca": "RB Market",
        "precio": 3.90,
        "categoria": "Verduras",
        "origen": "Nacional",
        "stock": 75,
        "descripcion": "Zapallo fresco ideal para cremas y guisos.",
        "img": "Estilos/img/img_produc/Zapallo.jpg"
    },
    {
        "id": "apio",
        "nombre": "Apio",
        "marca": "RB Market",
        "precio": 2.90,
        "categoria": "Verduras",
        "origen": "Nacional",
        "stock": 65,
        "descripcion": "Apio fresco, ideal para caldos y jugos.",
        "img": "Estilos/img/img_produc/Apio.jpg"
    },
    {
        "id": "espinaca",
        "nombre": "Espinaca",
        "marca": "RB Market",
        "precio": 4.20,
        "categoria": "Verduras",
        "origen": "Nacional",
        "stock": 55,
        "descripcion": "Espinaca fresca rica en hierro.",
        "img": "Estilos/img/img_produc/Espinaca.jpg"
    }

];
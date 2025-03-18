import React, { createContext, useState } from 'react';

//Creamos el contexto
const CocheContext = createContext();

const CocheProvider = ({ children }) => {
  //Utilizamos el useState para poder manejar el JSON entero
  const [coches, setCoches] = useState([
    {
      "id": 1,
      "marca": "Ford",
      "modelo": "Model T",
      "año": 1927,
      "color": "Negro",
      "precio": 30000,
      "kilometraje": 50000,
      "motor": "2.9L I4",
      "transmision": "Manual",
      "tipo_combustible": "Gasolina",
      "caracteristicas": ["Arranque manual", "Ruedas de madera", "Radiador de latón"],
      "descripcion": "El Ford Model T, conocido como el coche que 'puso a América sobre ruedas', fue el primer automóvil producido en masa. Su diseño sencillo y asequible revolucionó la industria automotriz.",
      "imagen" : "public/images/model_t.png",
      "reservado": false,
    },
    {
      "id": 2,
      "marca": "Chevrolet",
      "modelo": "Bel Air",
      "año": 1957,
      "color": "Celeste",
      "precio": 60000,
      "kilometraje": 30000,
      "motor": "4.6L V8",
      "transmision": "Automática",
      "tipo_combustible": "Gasolina",
      "caracteristicas": ["Pintura bicolor", "Molduras cromadas", "Asientos de banco"],
      "descripcion": "El Bel Air de 1957 es un ícono de la era dorada de los automóviles estadounidenses. Con su diseño elegante y potente motor V8, es un clásico muy buscado por los coleccionistas.",
      "imagen" : "public/images/bel_air.png",
      "reservado": false,
    },
    {
      "id": 3,
      "marca": "Volkswagen",
      "modelo": "Beetle (Escarabajo)",
      "año": 1967,
      "color": "Rojo",
      "precio": 20000,
      "kilometraje": 40000,
      "motor": "1.5L H4",
      "transmision": "Manual",
      "tipo_combustible": "Gasolina",
      "caracteristicas": ["Motor trasero", "Refrigerado por aire", "Ventanas manuales"],
      "descripcion": "El Beetle es uno de los coches más reconocibles del mundo. Diseñado por Ferdinand Porsche, fue un símbolo de movilidad asequible y confiable.",
      "imagen" : "public/images/beetle.png",
      "reservado": false,
    },
    {
      "id": 4,
      "marca": "Porsche",
      "modelo": "911",
      "año": 1973,
      "color": "Plata",
      "precio": 100000,
      "kilometraje": 20000,
      "motor": "2.7L H6",
      "transmision": "Manual",
      "tipo_combustible": "Gasolina",
      "caracteristicas": ["Llantas Fuchs", "Asientos Recaro", "Alerón 'Ducktail'"],
      "descripcion": "El Porsche 911 es un deportivo legendario conocido por su diseño atemporal y su rendimiento excepcional. El modelo de 1973 es especialmente valorado por su motor de alto rendimiento.",
      "imagen" : "public/images/911.png",
      "reservado": false,
    },
    {
      "id": 5,
      "marca": "Jaguar",
      "modelo": "E-Type",
      "año": 1965,
      "color": "Blanco",
      "precio": 150000,
      "kilometraje": 15000,
      "motor": "4.2L I6",
      "transmision": "Manual",
      "tipo_combustible": "Gasolina",
      "caracteristicas": ["Ruedas de radios", "Interior de cuero", "Volante de madera"],
      "descripcion": "El Jaguar E-Type es considerado uno de los coches más bellos jamás construidos. Con su diseño aerodinámico y su potente motor, es un ícono de los años 60.",
      "imagen" : "public/images/e_type.png",
      "reservado": false,
    },
    {
      "id": 6,
      "marca": "Ferrari",
      "modelo": "250 GTO",
      "año": 1962,
      "color": "Rojo",
      "precio": 70000000,
      "kilometraje": 10000,
      "motor": "3.0L V12",
      "transmision": "Manual",
      "tipo_combustible": "Gasolina",
      "caracteristicas": ["Llantas Borrani", "Asientos tipo cubo", "Carrocería de aluminio"],
      "descripcion": "El Ferrari 250 GTO es uno de los coches más valiosos del mundo. Solo se fabricaron 36 unidades, y su combinación de diseño y rendimiento lo convierte en una leyenda.",
      "imagen" : "public/images/250.png",
      "reservado": false,
    },
    {
      "id": 7,
      "marca": "Mercedes-Benz",
      "modelo": "300 SL",
      "año": 1955,
      "color": "Plata",
      "precio": 1500000,
      "kilometraje": 25000,
      "motor": "3.0L I6",
      "transmision": "Manual",
      "tipo_combustible": "Gasolina",
      "caracteristicas": ["Puertas tipo 'gullwing'", "Inyección de combustible", "Asientos de cuero"],
      "descripcion": "El 300 SL es famoso por sus puertas aladas y su avanzada tecnología para la época. Es un coche de colección muy codiciado.",
      "imagen" : "public/images/300.png",
      "reservado": false,
    },
    {
      "id": 8,
      "marca": "Aston Martin",
      "modelo": "DB5",
      "año": 1964,
      "color": "Plata",
      "precio": 1200000,
      "kilometraje": 20000,
      "motor": "4.0L I6",
      "transmision": "Manual",
      "tipo_combustible": "Gasolina",
      "caracteristicas": ["Ruedas de radios", "Interior de cuero", "Tablero de madera"],
      "descripcion": "El DB5 es famoso por su aparición en las películas de James Bond. Es un coche elegante y sofisticado que representa el lujo británico.",
      "imagen" : "public/images/db5.png",
      "reservado": false,
    },
    {
      "id": 9,
      "marca": "Ford",
      "modelo": "Mustang",
      "año": 1969,
      "color": "Azul",
      "precio": 80000,
      "kilometraje": 35000,
      "motor": "5.0L V8",
      "transmision": "Manual",
      "tipo_combustible": "Gasolina",
      "caracteristicas": ["Capó 'Shaker'", "Llantas Magnum 500", "Palanca Hurst"],
      "descripcion": "El Mustang de 1969 es un muscle car clásico que representa la potencia y el estilo de los años 60.",
      "imagen" : "public/images/mustang.png",
      "reservado": false,
    },
    {
      "id": 10,
      "marca": "Chevrolet",
      "modelo": "Corvette",
      "año": 1963,
      "color": "Rojo",
      "precio": 120000,
      "kilometraje": 30000,
      "motor": "5.4L V8",
      "transmision": "Manual",
      "tipo_combustible": "Gasolina",
      "caracteristicas": ["Ventana trasera dividida", "Llantas de desmontaje rápido", "Escape lateral"],
      "descripcion": "El Corvette de 1963 es conocido como el 'Split Window' debido a su distintiva ventana trasera. Es un deportivo americano icónico.",
      "imagen" : "public/images/corvette.png",
      "reservado": false,
    }
  ]);

  //Función para agregar coches nuevos a la lista previa
  const agregarCoche = (nuevoCoche) => {
    setCoches([...coches, { ...nuevoCoche, id: coches.length + 1, reservado: false }]);
  };

  //Función eliminar coches con filter y por id
  const eliminarCoche = (id) => {
    setCoches(coches.filter((coche) => coche.id !== id));
  };

  //Función para editar los coches existentes en la lista previa
  const editarCoche = (cocheEditado) => {
    setCoches(
      coches.map((coche) =>
        coche.id === cocheEditado.id ? cocheEditado : coche
      )
    );
  };
  //Colocamos el contexto para que puedan heredarlo los hijos para que puedan manipular las funciones, coches, etc
  return (
    <CocheContext.Provider value={{ coches, eliminarCoche, editarCoche, agregarCoche }}>
      {children}
    </CocheContext.Provider>
  );
};

export { CocheContext, CocheProvider };
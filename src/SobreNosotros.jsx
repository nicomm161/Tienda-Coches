import React from 'react';

//Página sobre nosotros
const SobreNosotros = () => {
  return (
    <div className="container">
      <h1>Sobre Nosotros</h1>
      <p>
        ¡Bienvenidos a Nico Mesa Classics! Somos una empresa apasionada por los coches clásicos, y estamos aquí para ayudarte a encontrar el vehículo de tus sueños.
      </p>
      <h2>Nuestra historia</h2>
      <p>
        La empresa está dirigida por Nico Mesa, un chico apasionado de los coches clásicos con años de experiencia en el sector. En Nico Mesa Classics, no solo encontrarás una amplia selección de vehículos únicos, sino que también podrás gestionar tu propio inventario de coches.
      </p>
      <h2>Nuestro objetivo</h2>
      <p>
        Nuestro objetivo es ofrecer una experiencia personalizada para nuestros clientes, garantizando que cada coche que pase por nuestras manos sea una joya única y bien cuidada.
      </p>
      <button className="cta">Explora nuestro catálogo</button>
    </div>
  );
};

export default SobreNosotros;
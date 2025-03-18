import React, { useContext } from 'react';
import { CocheContext } from './CocheContexto';
import { ItemCard } from './ItemCard';
import './ItemCard.css';

export const Catalog = () => {
  const { coches } = useContext(CocheContext);

  return (
    <div>
      <h2>Coches históricos</h2>
      <div className="listaCoches">
        {/* Recorremos nuestros coches con map  */}
        {coches.map((coche) => (
          <ItemCard key={coche.id} coche={coche} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
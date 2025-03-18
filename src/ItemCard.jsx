import React, { useState, useContext } from 'react';
import { CocheContext } from './CocheContexto';
import './ItemCard.css';

export const ItemCard = ({ coche }) => {
  const { eliminarCoche, editarCoche } = useContext(CocheContext);
  const [mas, setMas] = useState(false);
  const [editando, setEditando] = useState(false);
  const [formData, setFormData] = useState({ ...coche });

  //Función booleana para cuando den al botón mostrar más cambie el estado
  const mostrarMas = () => {
    setMas(!mas);
  };

  //Actualiza el estado cuando el usuario edita los datos del coche

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Envía los datos a la función editar coche y los cambia

  const handleSubmit = (e) => {
    e.preventDefault();
    editarCoche(formData);
    setEditando(false);
  };

  //Cambia el estado del coche y modifica su estado de reserva a true
  const toggleReservado = () => {
    const cocheActualizado = { ...formData, reservado: !formData.reservado };
    editarCoche(cocheActualizado);
    setFormData(cocheActualizado);
  };

  return (
    <div className="card">
      {editando ? (
        // Formulario para actualizar el coche
        <form onSubmit={handleSubmit}>
          <input type="text" name="marca" value={formData.marca} onChange={handleChange} />
          <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} />
          <input type="number" name="año" value={formData.año} onChange={handleChange} />
          <input type="text" name="color" value={formData.color} onChange={handleChange} />
          <input type="number" name="precio" value={formData.precio} onChange={handleChange} />
          <input type="number" name="kilometraje" value={formData.kilometraje} onChange={handleChange} />
          <input type="text" name="motor" value={formData.motor} onChange={handleChange} />
          <input type="text" name="transmision" value={formData.transmision} onChange={handleChange} />
          <input type="text" name="tipo_combustible" value={formData.tipo_combustible} onChange={handleChange} />
          <textarea name="caracteristicas" value={formData.caracteristicas} onChange={handleChange} rows="5" cols="21"></textarea>
          <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} rows="10" cols="21"></textarea><br />
          <button type="submit">Guardar</button>
        </form>
      ) : (
        <>
        {/* Carta que aparece en los coches */}
          <img src={coche.imagen} alt={coche.marca} />
          <h3>{coche.marca} {coche.modelo} ({coche.año})</h3>
          <p>Color: {coche.color}</p>
          <p>Precio: {coche.precio} €</p>
          {coche.reservado && <p>Reservado: ✔️</p>}
          <button onClick={toggleReservado}>
                {coche.reservado ? 'Cancelar Reserva' : 'Reservar'}
          </button>
          <button onClick={mostrarMas}>
            {mas ? 'Mostrar menos' : 'Mostrar más'}
          </button>
          {mas && (
            <div className="more">
              <p>Kilometraje: {coche.kilometraje} km</p>
              <p>Motor: {coche.motor}</p>
              <p>Transmisión: {coche.transmision}</p>
              <p>Combustible: {coche.tipo_combustible}</p>
              <p>Características: {coche.caracteristicas.join(', ')}</p>
              <p>Descripción: {coche.descripcion}</p>
              <button onClick={() => setEditando(true)}>Editar</button>
              <button onClick={() => eliminarCoche(coche.id)}>Eliminar</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
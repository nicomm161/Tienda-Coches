import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { CocheContext } from './CocheContexto';
import './ItemCard.css';

// Componente que representa una tarjeta de información de un coche
export const ItemCard = ({ coche }) => {
  // Obtenemos las funciones del contexto para eliminar y editar coches
  const { eliminarCoche, editarCoche } = useContext(CocheContext);

  // Estado para controlar si se muestra más información del coche
  const [mas, setMas] = useState(false);

  // Estado para controlar si estamos en modo edición
  const [editando, setEditando] = useState(false);

  // Hook para manejar formularios con valores iniciales basados en el coche
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { ...coche }
  });

  // Función para activar el modo edición y rellenar el formulario con los datos del coche
  const activarEdicion = () => {
    setEditando(true);
    // Rellenamos los valores del formulario con los datos actuales del coche
    Object.keys(coche).forEach(key => setValue(key, coche[key])); 
  };

  // Función que se ejecuta al enviar el formulario de edición
  const onSubmit = (data) => {
    // Actualizamos el coche con los nuevos datos
    editarCoche({ ...coche, ...data });
    // Salimos del modo edición
    setEditando(false);
  };

  // Función para alternar el estado de "reservado" del coche
  const toggleReservado = () => {
    editarCoche({ ...coche, reservado: !coche.reservado });
  };

  return (
    <div className="card">
      {editando ? (
        // Si estamos en modo edición, mostramos un formulario para editar los datos del coche
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("marca", { required: true })} placeholder="Marca" />
          <input type="text" {...register("modelo", { required: true })} placeholder="Modelo" />
          <input type="number" {...register("año", { required: true, min: 1900 })} placeholder="Año" />
          <input type="text" {...register("color")} placeholder="Color" />
          <input type="number" {...register("precio", { required: true, min: 0 })} placeholder="Precio" />
          <input type="number" {...register("kilometraje", { required: true, min: 0 })} placeholder="Kilometraje" />
          <input type="text" {...register("motor")} placeholder="Motor" />
          <input type="text" {...register("transmision")} placeholder="Transmisión" />
          <input type="text" {...register("tipo_combustible")} placeholder="Tipo de Combustible" />
          <textarea {...register("caracteristicas")} rows="5" placeholder="Características"></textarea>
          <textarea {...register("descripcion")} rows="10" placeholder="Descripción"></textarea><br />
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => setEditando(false)}>Cancelar</button>
        </form>
      ) : (
        // Si no estamos en modo edición, mostramos la información del coche
        <>
          <img src={coche.imagen} alt={coche.marca} />
          <h3>{coche.marca} {coche.modelo} ({coche.año})</h3>
          <p>Color: {coche.color}</p>
          <p>Precio: {coche.precio} €</p>
          {coche.reservado && <p>Reservado: ✔️</p>}
          <button onClick={toggleReservado}>
            {coche.reservado ? 'Cancelar Reserva' : 'Reservar'}
          </button>
          <button onClick={() => setMas(!mas)}>
            {mas ? 'Mostrar menos' : 'Mostrar más'}
          </button>
          {mas && (
            // Si se activa "Mostrar más", mostramos información adicional del coche
            <div className="more">
              <p>Kilometraje: {coche.kilometraje} km</p>
              <p>Motor: {coche.motor}</p>
              <p>Transmisión: {coche.transmision}</p>
              <p>Combustible: {coche.tipo_combustible}</p>
              <p>Características: {coche.caracteristicas.join(', ')}</p>
              <p>Descripción: {coche.descripcion}</p>
              {/* Botones para editar o eliminar el coche si no está reservado */}
              {!coche.reservado && <button onClick={activarEdicion}>Editar</button>}
              {!coche.reservado && <button onClick={() => eliminarCoche(coche.id)}>Eliminar</button>}
            </div>
          )}
        </>
      )}
    </div>
  );
};
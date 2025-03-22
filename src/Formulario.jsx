import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { CocheContext } from './CocheContexto';
import './Formulario.css';

// Componente para agregar un nuevo coche
const Formulario = () => {
  // Obtenemos la función del contexto para agregar coches
  const { agregarCoche } = useContext(CocheContext);

  // Hook para manejar el formulario y sus validaciones
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

  // Estado para manejar la imagen seleccionada
  const [imagen, setImagen] = useState("");

  // Función para manejar el cambio de imagen
  const handleImageChange = (e) => {
    const archivo = e.target.files[0]; // Obtenemos el archivo seleccionado
    if (archivo) {
      const imagenCoche = `public/images/${archivo.name}`; // Ruta de la imagen
      setImagen(imagenCoche); // Guardamos la ruta en el estado
      setValue("imagen", imagenCoche); // Actualizamos el valor del formulario
    }
  };

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (data) => {
    // Agregamos el coche con los datos del formulario
    agregarCoche({
      ...data,
      año: parseInt(data.año), // Convertimos el año a número
      precio: parseFloat(data.precio), // Convertimos el precio a número decimal
      kilometraje: parseInt(data.kilometraje), // Convertimos el kilometraje a número
      caracteristicas: data.caracteristicas.split(',').map((item) => item.trim()), // Convertimos las características en un array
      reservado: data.reservado || false, // Por defecto, el coche no está reservado
      imagen // Agregamos la imagen seleccionada
    });

    reset(); // Reiniciamos el formulario
    setImagen(""); // Limpiamos la imagen seleccionada
  };

  return (
    <div className="formulario-container">
      <h1>Agregar Nuevo Coche</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="formulario">
        
        {/* Campo para la marca */}
        <div className="form-group">
          <label>Marca:</label>
          <input type="text" {...register("marca", { required: "La marca es obligatoria" })} />
          {errors.marca && <p className="error">{errors.marca.message}</p>}
        </div>

        {/* Campo para el modelo */}
        <div className="form-group">
          <label>Modelo:</label>
          <input type="text" {...register("modelo", { required: "El modelo es obligatorio" })} />
          {errors.modelo && <p className="error">{errors.modelo.message}</p>}
        </div>

        {/* Campo para el año */}
        <div className="form-group">
          <label>Año:</label>
          <input type="number" {...register("año", { required: "El año es obligatorio" })} />
          {errors.año && <p className="error">{errors.año.message}</p>}
        </div>

        {/* Campo para el color */}
        <div className="form-group">
          <label>Color:</label>
          <select {...register("color", { required: "Selecciona un color" })}>
            <option value="">Selecciona...</option>
            <option value="Rojo">Rojo</option>
            <option value="Azul">Azul</option>
            <option value="Negro">Negro</option>
            <option value="Blanco">Blanco</option>
            <option value="Gris">Gris</option>
          </select>
          {errors.color && <p className="error">{errors.color.message}</p>}
        </div>

        {/* Campo para el precio */}
        <div className="form-group">
          <label>Precio:</label>
          <input type="number" {...register("precio", { required: "El precio es obligatorio" })} />
          {errors.precio && <p className="error">{errors.precio.message}</p>}
        </div>

        {/* Campo para el kilometraje */}
        <div className="form-group">
          <label>Kilometraje:</label>
          <input type="number" {...register("kilometraje", { required: "El kilometraje es obligatorio" })} />
          {errors.kilometraje && <p className="error">{errors.kilometraje.message}</p>}
        </div>

        {/* Campo para el motor */}
        <div className="form-group">
          <label>Motor:</label>
          <input type="text" {...register("motor", { required: "El motor es obligatorio" })} />
          {errors.motor && <p className="error">{errors.motor.message}</p>}
        </div>

        {/* Campo para la transmisión */}
        <div className="form-group">
          <label>Transmisión:</label>
          <select {...register("transmision", { required: "Selecciona la transmisión" })}>
            <option value="">Selecciona...</option>
            <option value="Manual">Manual</option>
            <option value="Automático">Automático</option>
          </select>
          {errors.transmision && <p className="error">{errors.transmision.message}</p>}
        </div>

        {/* Campo para el tipo de combustible */}
        <div className="form-group">
          <label>Tipo de Combustible:</label>
          <div className="checkbox-group">
            {["Gasolina", "Eléctrico", "Diésel"].map((tipo) => (
              <label key={tipo}>
                <input
                  type="checkbox"
                  value={tipo}
                  {...register("tipo_combustible")}
                /> {tipo}
              </label>
            ))}
          </div>
        </div>

        {/* Campo para las características */}
        <div className="form-group">
          <label>Características (separadas por comas):</label>
          <input type="text" {...register("caracteristicas", { required: "Las características son obligatorias" })} />
          {errors.caracteristicas && <p className="error">{errors.caracteristicas.message}</p>}
        </div>

        {/* Campo para la descripción */}
        <div className="form-group">
          <label>Descripción:</label>
          <textarea {...register("descripcion", { required: "La descripción es obligatoria" })}></textarea>
          {errors.descripcion && <p className="error">{errors.descripcion.message}</p>}
        </div>

        {/* Campo para la imagen */}
        <div className="form-group">
          <label>Imagen:</label>
          <input type="file" onChange={handleImageChange} required />
        </div>

        {/* Campo para el estado reservado */}
        <div className="form-group">
          <label>Reservado:</label>
          <input type="checkbox" {...register("reservado")} />
        </div>

        {/* Botón para enviar el formulario */}
        <button type="submit" className="submit-button">Agregar</button>
      </form>
    </div>
  );
};

export default Formulario;
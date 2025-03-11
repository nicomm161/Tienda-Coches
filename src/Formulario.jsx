import React, { useState, useContext } from 'react';
import { CocheContext } from './CocheContexto';
import './Formulario.css';

const Formulario = () => {
  const { agregarCoche } = useContext(CocheContext);
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    año: '',
    color: '',
    precio: '',
    kilometraje: '',
    motor: '',
    transmision: '',
    tipo_combustible: [],
    caracteristicas: '',
    descripcion: '',
    imagen: '',
    reservado: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'reservado') {
        setFormData({
          ...formData,
          [name]: checked
        });
      } else {
        const tiposCombustible = formData.tipo_combustible;
        if (checked) {
          tiposCombustible.push(value);
        } else {
          const index = tiposCombustible.indexOf(value);
          if (index > -1) {
            tiposCombustible.splice(index, 1);
          }
        }
        setFormData({
          ...formData,
          tipo_combustible: tiposCombustible
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imagePath = `public/images/${file.name}`;
      setFormData({
        ...formData,
        imagen: imagePath
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarCoche({
      ...formData,
      año: parseInt(formData.año),
      precio: parseFloat(formData.precio),
      kilometraje: parseInt(formData.kilometraje),
      caracteristicas: formData.caracteristicas.split(',').map((item) => item.trim()),
      reservado: formData.reservado
    });
    setFormData({
      marca: '',
      modelo: '',
      año: '',
      color: '',
      precio: '',
      kilometraje: '',
      motor: '',
      transmision: '',
      tipo_combustible: [],
      caracteristicas: '',
      descripcion: '',
      imagen: '',
      reservado: false
    });
  };

  return (
    <div className="formulario-container">
      <h1>Agregar Nuevo Coche</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-group">
          <label>Marca:</label>
          <input type="text" name="marca" value={formData.marca} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Modelo:</label>
          <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Año:</label>
          <input type="number" name="año" value={formData.año} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Color:</label>
          <select name="color" value={formData.color} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            <option value="Rojo">Rojo</option>
            <option value="Azul">Azul</option>
            <option value="Negro">Negro</option>
            <option value="Blanco">Blanco</option>
            <option value="Gris">Gris</option>
          </select>
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input type="number" name="precio" value={formData.precio} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Kilometraje:</label>
          <input type="number" name="kilometraje" value={formData.kilometraje} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Motor:</label>
          <input type="text" name="motor" value={formData.motor} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Transmisión:</label>
          <select name="transmision" value={formData.transmision} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            <option value="Manual">Manual</option>
            <option value="Automático">Automático</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tipo de Combustible:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="tipo_combustible"
                value="Gasolina"
                checked={formData.tipo_combustible.includes('Gasolina')}
                onChange={handleChange}
              /> Gasolina
            </label>
            <label>
              <input
                type="checkbox"
                name="tipo_combustible"
                value="Eléctrico"
                checked={formData.tipo_combustible.includes('Eléctrico')}
                onChange={handleChange}
              /> Eléctrico
            </label>
            <label>
              <input
                type="checkbox"
                name="tipo_combustible"
                value="Diésel"
                checked={formData.tipo_combustible.includes('Diésel')}
                onChange={handleChange}
              /> Diésel
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Características (separadas por comas):</label>
          <input type="text" name="caracteristicas" value={formData.caracteristicas} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label>Imagen:</label>
          <input type="file" name="imagen" onChange={handleImageChange} required />
        </div>
        <div className="form-group">
          <label>Reservado:</label>
          <input type="checkbox" name="reservado" checked={formData.reservado} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">Agregar</button>
      </form>
    </div>
  );
};

export default Formulario;
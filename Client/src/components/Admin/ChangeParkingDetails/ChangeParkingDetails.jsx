import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ChangeParkingDetails } from '../../../redux/features/admin/adminSlice';

export default function UpdateParkin (parking) {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  //const id = useState(parking);
  const allParkingLots = useSelector(state => state.parkingSpaces.allParkingLots);
  const parkingLotSelected = allParkingLots[0]; // Parking { } 

  const initialValues = {
    name: '',
    nit: '',
    city: '',
    neighborhood: '',
    address: '',
    fee: '',
    regulation: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('El campo es obligatorio'),
    nit: Yup.string().required('El campo es obligatorio'),
    city: Yup.string().required('El campo es obligatorio'),
    neighborhood: Yup.string().required('El campo es obligatorio'),
    address: Yup.string().required('El campo es obligatorio'),
    fee: Yup.number().required('El campo es obligatorio'),
    regulation: Yup.string().required('El campo es obligatorio'),
  });

  const handleSubmit = (values) => {
    const data = [token, values, parkingLotSelected.id];
    dispatch(ChangeParkingDetails(data))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
    <div><h2>Modificar Parqueadero</h2>
      <Form>
        <div>
          <label htmlFor="name">Nombre del parqueadero:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="nit">NIT:</label>
          <Field type="text" id="nit" name="nit" />
          <ErrorMessage name="nit" component="div" />
        </div>

        <div>
          <label htmlFor="city">Ciudad:</label>
          <Field type="text" id="city" name="city" />
          <ErrorMessage name="city" component="div" />
        </div>

        <div>
          <label htmlFor="neighborhood">Vecindario:</label>
          <Field type="text" id="neighborhood" name="neighborhood" />
          <ErrorMessage name="neighborhood" component="div" />
        </div>

        <div>
          <label htmlFor="address">Direccion:</label>
          <Field type="text" id="address" name="address" />
          <ErrorMessage name="address" component="div" />
        </div>

        <div>
          <label htmlFor="fee">precio por hora de parqueo:</label>
          <Field type="number" id="fee" name="fee" />
          <ErrorMessage name="fee" component="div" />
        </div>

        <div>
          <label htmlFor="regulation">Normas del parqueadero:</label>
          <Field type="text" id="regulation" name="regulation" />
          <ErrorMessage name="regulation" component="div" />
        </div>

        <button type="submit">Guardar Cambios</button>
      </Form>
      </div>
    </Formik>
    );
};
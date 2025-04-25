import React from 'react'
import { useFormik } from "formik";
import styled from 'styled-components';
import {useNavigate} from "react-router";
import CarsContext from "./CarsContext";

const AddCarPage = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            mark: '',
            model: '',
            mileage: 0,
            price: 0,
            fuelType: '',
            transmissionType: ''
        },
        onSubmit: (values) => {
            console.log(values);
            fetch('http://localhost:5000/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then(response => {
                if(response.status === 201) {
                    console.log('All good cars have been added successfully');
                } else {
                    console.log('Some error occured');
                }
            })
                .then(data => {
                    console.log(data);
                    // context add
                    // navigate
                    navigate(`/cars/${data.id}`);
                })
        }
    })
    return (
        <section>
            <h2>Add New Car</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="mark">Mark</label>
                    <input
                    type="text" required
                    name="mark" id="mark"
                    value={formik.values.mark}
                    onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="model">Model:</label>
                    <input
                        type="text" required
                        name="model" id="model"
                        value={formik.values.model}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="mileage">Mileage:</label>
                    <input
                        type="text" required
                        name="mileage" id="mamileagerk"
                        value={formik.values.mileage}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="text" required
                        name="price" id="price"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="fuelType">Fuel Type:</label>
                    <input
                        type="text" required
                        name="fuelType" id="fuelType"
                        value={formik.values.fuelType}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="transmissionType">Transmission Type:</label>
                    <input
                        type="text"
                        name="transmissionType" id="transmissionType"
                        value={formik.values.transmissionType}
                        onChange={formik.handleChange}
                    />
                </div>
            </form>
        </section>
    )
}
export default AddCarPage

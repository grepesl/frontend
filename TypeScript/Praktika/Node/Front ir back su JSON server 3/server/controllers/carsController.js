import React from 'react'
import res from "express/lib/response.js";
import { v4 as generateID } from "uuid";

const getAllCars = async (request, response) => {
   try{
       const response_DB = await fetch(`http://localhost:3001/cars`);
       const result = await response_DB.json();
       res.send(result);
   } catch (err) {
       console.log('Error in fetching cars', err);
       res.status(500).send('Error in fetching cars');
   }
}

const getSpecificCar = async (request, response) => {
    const {id} = request.params;
    try{
        const response_DB = await fetch(`http://localhost:3001/cars/${id}`);
        const result = await response_DB.json();
        res.send(result);
    } catch (err) {
        console.log(`Error in fetching car with id of ${id}`, err);
        res.status(500).send('Error in fetching car with id of ${id}`');
    }
}

const addNewCar = async (request, response) => {
    try{
        const newCar = {
            ...request.body,
            id: generateID()
        }
        const response_DB = await fetch(`http://localhost:3001/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCar)
        });
        if (response_DB.status === 201) {
            res.status(500).send(`Some error have accured, failed to add car`);
        }
    } catch(err) {
        console.log('Error in addNewCar', err);
        res.status(500).send(`Some error have accured, failed to add car`);
    }
}

export { getAllCars, getSpecificCar, addNewCar };

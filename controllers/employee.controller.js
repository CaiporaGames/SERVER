const express = require('express');
const router = express.Router();

const { validateDBID, raiseRecord404Error } = require('../middlewares');
const Employee = require('../models/employee.model');
const { generateCrudMethods } = require('../services');//we hide the index.js here
const employeeCrud = generateCrudMethods(Employee);

router.get('/', (req, res)=>
{
    employeeCrud.getAll()
    .then(data => res.send(data))
    .catch(error => console.log(`Error finding employee: ${error}`));
});

router.get('/:id',validateDBID, (req, res)=>
{
    employeeCrud.findById(req.params.id)
    .then(data => 
    {
        if(data)
            res.send(data)
        else
            res.status(404).json(
        {
            error:`No record with given id: ${req.params.id}`
        });
    })
    .catch(error => console.log(`Error finding employee: ${error}`));
});

router.put('/:id',validateDBID, (req, res)=>
{
    employeeCrud.findById(req.params.id)
    .then(data => 
    {
        if(data)
            res.send(data)
        else
            res.status(404).json(
        {
            error:`No record with given id: ${req.params.id}`
        });
    })
    .catch(error => console.log(`Error finding employee: ${error}`));
});

router.delete('/:id',validateDBID, (req, res)=>
{
    employeeCrud.findById(req.params.id)
    .then(data => 
    {
        if(data)
            res.send(data)
        else
            raiseRecord404Error(req, res)
    })
    .catch(error => console.log(`Error finding employee: ${error}`));
});

router.post('/', (req, res)=>
{
    employeeCrud.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(error => console.log(`Error creating employee: ${error}`));
});

module.exports = router;
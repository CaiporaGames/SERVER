const express = require('express');
const router = express.Router();

const { validateDBID, raiseRecord404Error } = require('../middlewares');
const Employee = require('../models/employee.model');
const { generateCrudMethods } = require('../services');//we hide the index.js here
const employeeCrud = generateCrudMethods(Employee);

router.get('/', (req, res, next)=>
{
    employeeCrud.getAll()
    .then(data => res.send(data))
    .catch(error => next(error));
});

router.get('/:id',validateDBID, (req, res, next)=>
{
    employeeCrud.getById(req.params.id)
    .then(data => 
    {
        if(data)
            res.send(data)
        else
            raiseRecord404Error(req, res);
    })
    .catch(error => next(error));
});

router.put('/:id',validateDBID, (req, res, next)=>
{
    employeeCrud.update(req.params.id)
    .then(data => 
    {
        if(data)
            res.send(data);
        else
            raiseRecord404Error(req, res);
    })
    .catch(error => next(error));
});

router.delete('/:id',validateDBID, (req, res, next)=>
{
    employeeCrud.delete(req.params.id)
    .then(data => 
    {
        if(data)
            res.send(data);
        else
            raiseRecord404Error(req, res);
    })
    .catch(error => next(error));
});

router.post('/', (req, res, next)=>
{
    employeeCrud.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(error => next(error));//Next will pass the error for the errorHandle middleware
});

module.exports = router;
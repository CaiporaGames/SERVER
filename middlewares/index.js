const ObjectId = require('mongoose').Types.ObjectId;

const validateDBID = (req, res, next) =>
{
    //This give a proper response in a bad request like a wrong id
    if(!ObjectId.isValid(req.params.id))
    {
        res.status(400).json(
        {
            error:`Given object id: ${req.params.id} is not valid!` 
        });
    }
    else next();
}

const raiseRecord404Error = (req, res) =>
{
    res.status(404).json(
    {
        error:`No record with given id: ${req.params.id}`
    });
}
module.exports = {validateDBID, raiseRecord404Error};
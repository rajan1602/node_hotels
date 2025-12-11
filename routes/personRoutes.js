import express from 'express';
const router = express.Router();
import Person from '../person.js';


router.post('/', async (req, res) => { 
    try{
        const data = req.body;
        // create a new instance of Person model
        const newPerson = new Person(data);
        // save the new person to the database
        const savedPerson = await newPerson.save();
        console.log('Data Saved')
        res.status(201).json(savedPerson);
    } catch(err){
        console.log(err)
        res.status(400).json({error: err.message});
    }
});


// GET method to get person data
router.get('/', async (req, res) => {
    try{
        // fetch all persons from the database
        const data = await Person.find();
        console.log('Person Find')
        res.status(200).json(data);
    } catch(err){
        res.status(500).json({error: message.err});
    }
});



router.get('/:workType', async (req, res) => {
         const workType = req.params.workType;
    try{
       if( workType == 'chef' || workType == 'manager' || workType == 'waiter' ){
       const response = await Person.find({work: workType});
         console.log('Person Find by workType');
         res.status(200).json(response);
         } else {
            res.status(400).json({error: 'Invalid work type'});
            }
    } catch(err){
       res.status(500).json({error: err.message});
    }
});

router.put('/:id', async (req, res) =>{
    
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const response = await Person.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true,
        });
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('Person Data Updated');
        res.status(200).json(response);
    } catch(err){
        res.status(500).json({error: err.message});
    }
});

router.delete('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const response = await Person.findByIdAndDelete(id);
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('Person Data Deleted');
        res.status(200).json({message: 'Person deleted successfully'});
    } catch(err){
        res.status(500).json({error: err.message});
    }
});  

export default router;
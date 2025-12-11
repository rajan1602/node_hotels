import express from 'express';
const router = express.Router();
import menuItem from '../models/menuItem.js';

// GET method to get menu items
router.post('/', async (req,res) =>{
    try{
    const data = req.body;
    const newMenuItem = new menuItem (data);
    const response = await newMenuItem.save();

    console.log('Data Saved');
    res.status(201).json(response);
    } catch(err){
        console.log(err);
        res.status(400).json({error: err.message});
    }
});

// GET method to get menu items
router.get('/', async (req,res) =>{
    try{
        const data = await menuItem.find();
        console.log('Item find');
        res.status(200).json(data);
    } catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
});

// GET method to get menu items by taste
router.get('/:taste', async (req, res) =>{
    const taste = req.params.taste;
    try{
         if( taste == 'sweet' || taste == 'spicy' || taste == 'sour' || taste == 'bitter' || taste == 'salty' ){
            const response = await menuItem.find({taste: taste});
            console.log('Item find by taste');
            res.status(200).json(response);
         } else {
            res.status(400).json({error: err.message});
    }}
     catch(err){
        res.status(500).json({error: err.message});
    }
})

export default router;
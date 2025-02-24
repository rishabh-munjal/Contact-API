import { Contact } from "../models/contact.js";

export const newContact = async (req  , res) => {
    const {name , phone , type}  = req.body;

    if(name  == "" || phone == "" || type == ""){
        res.json({message : "All feilds are required" , success : false});
    }

    let saveContact = await Contact.create({
        name , phone , type , user:req.user
    })

    res.json({message :`Contact saved Succesfully` , saveContact , success: true});
}

export const getAllContact = async (req , res) => {

    const userContact = await Contact.find();

    if(!userContact){
        res.json({message : "No contact exits! " , success : false});
    }

    res.json({message : "All contacts fethched" , userContact});
    
}

export const getContactById = async (req , res) => {

    const id = req.params.id;

    const userContact = await Contact.findById(id);

    if(!userContact){
        return res.json({message : "No Contact Found" , success:false})
    }

    res.json({message : "User Contact Found" , userContact , success : true})
    
}

export const updateContactById = async (req , res) => {

    const id = req.params.id;
    const {name , phone , type} = req.body;

    let updatedContact = await Contact.findByIdAndUpdate(id , {
        name , phone , type
    }, {new : true})

    if(!updatedContact)
        return res.json({message : "No contact exist" , success : false})

    res.json({message : "Contact Updated" , success : true});
    
}

export const deleteContactById = async (req , res) => {

    const id = req.params.id;
   // const {name , phone , type} = req.body;

    let deleteContact = await Contact.findByIdAndDelete(id)

    if(!deleteContact)
        return res.json({message : "No contact exist" , success : false})

    res.json({message : "Contact deleted" , success : true});
    
}

export const getContactByUserId = async (req , res) => {

    const id = req.params.id;

    const userContact = await Contact.find({user : id});

    if(!userContact){
        return res.json({message : "No Contact Found" , success:false})
    }

    res.json({message : "User specificc  Contact Found" , userContact , success : true})
    
}


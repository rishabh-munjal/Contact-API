import express from "express";
import { deleteContactById, getAllContact, getContactById, getContactByUserId, newContact, updateContactById } from "../controllers/contact.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post('/new' ,isAuthenticated,  newContact)
router.get('/' , getAllContact)
router.get('/:id' , getContactById)

router.put('/:id' ,isAuthenticated, updateContactById)

router.delete('/:id' ,isAuthenticated, deleteContactById)

router.get('/userid/"id' , getContactByUserId)

export default router;
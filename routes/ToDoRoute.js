const  {Router}= require("express");
const { getToDo, saveToDo, todoUpdate, todoDelete } = require("../controllers/ToDoController");

const router=Router();

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update',todoUpdate)
router.post('/delete',todoDelete)
module.exports=router
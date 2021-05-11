const express = require('express');
const router = express.Router();
const { 
    addProject, 
    projectList
} = require('../controllers/projectController');

router.post("/add-project", addProject);
router.get("/project-list", projectList);

module.exports = router;
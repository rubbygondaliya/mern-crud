const Project = require('../models/projectSchema');

exports.addProject = async (req, res, next) => {
    console.log(req.body);
    const {title, url, description} = req.body;
    try {
        const project = new Project({title, url, description});
        await project.save();
        return res.status(200).json({"message" : "Project added successfully."});
    } catch (error) {
        return res.status(401).json({ "message" : error.message });
    }
}

exports.projectList = async (req, res, next) => {
    try {
        const list = await Project.find();
        if(list){
            return res.status(200).json({projects:list});
        }
    } catch (error) {
        
    }
}
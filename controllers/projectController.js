//controllers/projectController.js

module.exports = {
    list: (req, res) => {
        res.render('project/list')
    },
    detail: (req, res) => {
        const { id } = req.params;

        res.render('project/detail', { projectId: id});
    }
};
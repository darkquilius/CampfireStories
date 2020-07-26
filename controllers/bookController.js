const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Book.find(req.query)
            .then(dbbook => res.json(dbbook))
            .catch(err => res.status(422).json(err));
    },
    // findById: function(req, res) {
    //     db.Book.findById(req.params.id)
    //         .then(dbUser => res.json(dbUser))
    //         .catch(err => res.status(422).json(err));
    // },
    // create: function(req, res) {
    //     db.Book.create(req.body)
    //         .then(dbUser => res.json(dbUser))
    //         .catch(err => res.status(422).json(err));
    // },
    // update: function(req, res) {
    //     db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
    //         .then(dbUser => res.json(dbUser))
    //         .catch(err => res.status(422).json(err));
    // },
    // remove: function(req, res) {
    //     db.Book.findById(req.params.id)
    //         .then(dbUser => dbUser.remove())
    //         .then(dbUser => res.json(dbUser))
    //         .catch(err => res.status(422).json(err));
    // }
};
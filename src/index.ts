import express from './app'
import * as exp from 'express';
import { ProductRepo } from './repositories'
import {Database} from './database'
import { Product } from './models';
import * as fs from 'fs'
const mime = require('mime');
let multer = require('multer')
let upload = multer({ dest: 'uploads/images', preservePath: true})

const run = async () =>{

    let repo = new ProductRepo();

    express.use(exp.static('uploads'));

    express.route('/product/create')
        .post( async function(req, res){
            let result = await repo.create(req.body)

            res.status(200).json(result)
        })
    
    express.route('/product/get')
        .get( async function(req, res){
            let result = await repo.getAll();

            res.status(200).json(result)
        })
    
    express.route('/product/get/:param/:val')
        .get( async function(req, res){
            let param = {}
            param[req.params.param] = req.params.val;
            let result = await repo.get(param);

            res.status(200).json(result)
        })

    express.route('/product/get/:id')
        .get( async function(req, res){
            let result = await repo.getOne(req.params.id);

            res.status(200).json(result)
        })

    express.route('/product/edit/:id')
        .post( async function(req, res){
            let result = await repo.edit(req.params.id, req.body);

            res.status(200).json(result)
        })
    
    express.route('/product/delete/:id')
        .get( async function(req, res){
            let result = await repo.delete(req.params.id);

            res.status(200).json(result)
        })

    express.post('/upload', upload.single('file'), function (req, res, next) {
            console.log(req.file)
            fs.copyFileSync('uploads/images/'+req.file.filename, 'uploads/images/'+req.file.filename+ '.' + mime.extension(req.file.mimetype))
            res.status(200).json({img: 'images/'+req.file.filename+ '.' + mime.extension(req.file.mimetype)})
        });






    const port = 3000;
    express.listen(port, (err) => {
        if (err) {
          return console.log(err)
        }
  
        return console.log(`server is listening on http://localhost:${port}`)
      });

}

run()
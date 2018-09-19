import express from './app'
import { ProductRepo } from './repositories'
import {Database} from './database'
import { Product } from './models';

const run = async () =>{

    let repo = new ProductRepo();

    express.route('/product/create')
        .post( async function(req, res){
            let result = await repo.create(req.body.input)

            res.status(200).json({
                result: result
            })
        })
    
    express.route('/product/get')
        .get( async function(req, res){
            let result = await repo.getAll();

            res.status(200).json({
                result: result
            })
        })
    
    express.route('/product/get/:param/:val')
        .get( async function(req, res){
            let param = {}
            param[req.params.param] = req.params.val;
            let result = await repo.get(param);

            res.status(200).json({
                result: result
            })
        })

    express.route('/product/getOne/:id')
        .get( async function(req, res){
            let result = await repo.getOne(req.params.id);

            res.status(200).json({
                result: result
            })
        })

    express.route('/product/edit/:id')
        .post( async function(req, res){
            let result = await repo.edit(req.params.id, req.body.input);

            res.status(200).json({
                result: result
            })
        })
    
    express.route('/product/delete/:id')
        .get( async function(req, res){
            let result = await repo.delete(req.params.id);

            res.status(200).json({
                result: result
            })
        })






    const port = 3000;
    express.listen(port, (err) => {
        if (err) {
          return console.log(err)
        }
  
        return console.log(`server is listening on http://localhost:${port}`)
      });

}

run()
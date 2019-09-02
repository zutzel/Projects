const HttpStatus = require('http-status-codes');
const express = require('express');
const router = express.Router();
// NOME - deve retornar seu nome completo
// QUIT - deve encerrar a conexao
const route = () => {
    //const invoiceController = require('./controller')({ db });
    let date = new Date();

    router.get('/NOME', async (req, res) => {
        try {

            res.status(HttpStatus.OK).send( message );
        } catch (err) {
            console.error(err);
        }
    });

    router.get('/DATE', async (req, res) => {
        try {
            let day = date.getDate();
            console.log(day);
            res.status(HttpStatus.OK).send( [day] );
        } catch (err) {
            console.error(err);
        }
    });

    router.get('/HOUR', async (req, res) => {
        try {
            let hours = date.getHours();
            console.log(hours);
            res.status(HttpStatus.OK).send( [hours] );
            //const invoices = await invoiceController.getInvoicesWithExpenses(req, res);
        } catch (err) {
            console.error(err);
        }
    });

    router.get('/quit', async (req, res) => {
        try {
            //const invoicesHistory = await invoiceController.getInvoicesHistory(req, res);
        } catch (err) {
            console.error(err);
        }
    });

    return router;
};

module.exports = route;

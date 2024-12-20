'use strict'

const express = require('express');
const config = require('../connections/sqlconnection');
const { error } = require('console');
const sql = require('mysql2/promise');
const dbschema = require('../db-config/schema');
const { setMaxIdleHTTPParsers } = require('http');
//const userControll=require('../contrllers/userController');
const router = express.Router();
// const app = express()
const sendMail = require("../controllers/sendMail")

//const {getAllUser}=userControll

//router.get('/getAllUser',getAllUser);


router.post('/getallusers', async (req, res) => {
    try {
        await config();
        const result = await sql.query('select * from ');
        res.json(result.recordset);
     //   console.log("res", result)
    }

    catch (err) {
      //  console.error('Error occurred:', err);
        res.status(500).json({ error: 'An error occurred while fetching users' });
    } finally {
        // Close the database connection
       // await sql.release();
    }
})
router.post('/getfinanceBillDt', async (req, res) => {
    req.cParams = {
        "URL": req.url.substring(1, req.url.length)
    }

    config(dbschema.getfinanceBillDt, req.body, req.cParams.URL).then(async (response) => {
        return res.status(200).json({
            success: true,
            status: 200,
            data: response,
            desc: ""
        })
    }).catch((error) => {
        //console.log("error", error)
        res.status(400).send(error);
    })
})
router.post('/insUpdCustDet', async (req, res) => {
    req.cParams = {
        "URL": req.url.substring(1, req.url.length)
    }

    config(dbschema.insUpdCustDet, req.body, req.cParams.URL).then(async (response) => {
        return res.status(200).json({
            success: true,
            status: 200,
            data: response,
            desc: ""
        })
    }).catch((error) => {
        //console.log("error", error)
        res.status(400).send(error);
    })
})
router.post('/checkZipCode', async (req, res) => {
    req.cParams = {
        "URL": req.url.substring(1, req.url.length)
    }

    config(dbschema.checkZipCode, req.body, req.cParams.URL).then(async (response) => {
        console.log("req.cParams.URL", req.cParams.URL)
        return res.status(200).json({
            success: true,
            status: 200,
            data: response,
            desc: ""
        })
    }).catch((error) => {
        //console.log("error", error)
        res.status(400).send(error);
    })
})

router.post('/validUserLogin', async (req, res) => {
    req.cParams = {
        "URL": req.url.substring(1, req.url.length)
    }

    config(dbschema.validUserLogin, req.body, req.cParams.URL).then(async (response) => {
       // console.log("req.body", req.body)
        return res.status(200).json({
            success: true,
            status: 200,
            data: response,
            desc: ""
        })
    }).catch((error) => {
    //    console.log("error", error)
        res.status(400).send(error);
    })
})

router.get("/mail", sendMail);



module.exports = router;
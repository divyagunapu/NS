'use strict';

const mysql = require('mysql2/promise'); // Use mysql2 for promise support
const connectionString = require('../config');
 const prepareParameters=require('../db-config/helper-method/parameters');
const prepareResult=require('../db-config/helper-method/responce')

const { resolve } = require('path');
const { rejects } = require('assert');
const config = {
    host: '127.0.0.1', // 'server' should be 'host'
    user: 'root',
    password: 'Mysql@2022',
    database: 'expressbuy',
    port: 3306,
    // No 'options' field is needed for mysql2
};

// Create a connection pool
const pool = mysql.createPool(config);

module.exports = async (_schema, payLoad, _cParams = {}) => {
    let connection;
    try {
        connection = await pool.getConnection(); // Get a connection from the pool

        // Prepare parameters
        const { parameters, error } = prepareParameters(_schema, payLoad);

        if (error) {
            throw error; // Throw error if there is any
        }

        // Format the CALL statement
        const sql = `CALL ${_schema.spname}(${parameters})`;

        // Execute the procedure
        const [rows] = await connection.query(sql, Object.values(payLoad));
        
        // Resolve with prepared result
        return prepareResult(rows, _cParams.IS_MULTI_RESULTSET, _cParams.IS_LOAD_AJAX, _cParams.URL);
    } catch (err) {
        console.log("errprocedurce",err)
        throw { "ERROR": "ERROR_WHILE_EXECUTING_PROCEDURE", "MESSAGE": err.message };
    } finally {
        if (connection) {
            connection.release(); // Release the connection back to the pool
        }
    }
};

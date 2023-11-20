var mysql = require('mysql');
var express = require('express');
var app = express();
// config for your database
var config = {
    user: 'sguardin',
    password: '10316378',
    server: 'oracle.scs.ryerson.ca',
    database: 'orcl' 
};

const pullTable = async () => {
    try {
        const pool = await sql.connect(config);
        const sqlQuery = 'SELECT * FROM R8VERMA.PATIENT_PROFILE WHERE PATIENT_ID=1';
        const result = await pool.request().query(sqlQuery);
        return result.recordset;
    } catch (err) {
        throw err;
    }
};

exports.pullTable = pullTable;
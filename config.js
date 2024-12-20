'use strict'

const {PORT,HOST,HOST_URL,SQL_USER,SQL_PASSWORD,SQL_DATABASE,SQL_SERVER}=process.env
const sqlEncrypt=process.env.SQL_ENCRYPT==="true";

module.exports={
port:PORT,
host:HOST,
url:HOST_URL,
sql:{
    server:SQL_SERVER,
    database:SQL_DATABASE,
    user:SQL_USER,
    password:SQL_PASSWORD,
    port: 3306,
    options: {
        encrypt: sqlEncrypt,
        trustServerCertificate: true,

    }
}
}
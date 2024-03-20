import pgp from 'pg-promise';
const pg = pgp();
import dotenv from 'dotenv';
dotenv.config();

const user = process.env.USER;
const pass = process.env.PASS;
const host = process.env.HOST; 
const database = process.env.DB;

const conectionString = `postgresql://${user}:${pass}@${host}:5432/${database}`;
const db = pg(conectionString);

db.connect()
    .then(() => {
        console.log("Conexión Exitosa");
    })
    .catch((err) => {
        console.log(`Error de Conexión ${err}`);
    });

export { db };

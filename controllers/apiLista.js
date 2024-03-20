import { db } from "../db/conn.js"

const getLista = async (req, res) => {
    try {
        const sql = `SELECT nombre, descripcion
                     FROM tbl_to_do
                     WHERE activo = true`
        const result = await db.query(sql)

        if(result.length > 0){
           res.json(result)
        }else{
            res.status(500).json({mensaje: "sin datos que mostrar"})
        }
    } catch (e) {
        res.status(500).json(e.message)
    }
}

const postLista = async (req,res) => {
    try {
    
     const {nombre, descripcion} = req.body
     const params = [nombre,descripcion];

     const sql = `INSERT INTO tbl_to_do
                  (nombre,descripcion)
                  VALUES
                  ($1,$2) RETURNING 'Insercion Exitosa' mensaje`

    const result = await db.query(sql,params)
    res.json(result)

    } catch (error) {
        res.status(500).json({mensaje: e.message})
    }
}



export {getLista, postLista}
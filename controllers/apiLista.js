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

const dltLista = async (req,res) => {
   
   try {
    const params = [req.params.id]

    const sql = `UPDATE tbl_to_do
                 SET activo = false
                 WHERE id = $1
                 RETURNING 'Lista Borrada' mensaje`

    const result = await db.query(sql,params) 
    res.json(result)
   } catch (error) {
    res.status(500).json(error.message)
   }
      
}

const putLista = async (req,res) => {
    try {
        const {nombre,descripcion} = req.body
        const {id} = req.params

        const params = [nombre, descripcion, id]

        const sql = `UPDATE tbl_to_do
                     SET nombre = $1,
                     descripcion = $2
                     WHERE id = $3
                     RETURNING nombre, descripcion`

        const result = await db.query(sql, params)
        res.json(result) 


    } catch (e) {
        res.status(500).json({"mensaje": e.message})
    }
}

export {getLista, postLista, dltLista,putLista}
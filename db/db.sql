-- Active: 1705367913692@@127.0.0.1@5432@lista_to_do@public
CREATE TABLE tbl_to_do(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion VARCHAR(150),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT true
)

INSERT INTO tbl_to_do
(nombre, descripcion)
VALUES
('Proyecto Progra I', 'realizar el proyecto de programacion web a eso de las 4 de la tarde')

SELECT * FROM tbl_to_do

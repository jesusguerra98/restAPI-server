const {response, request}=require('express');

const usuariosGet=(req, res=response)=> {
    const {q,nombre,apikey}=req.query;
    res.json({
        msg: "get API - Controlador",
        q,
        nombre,
        apikey
    });
  }

  const usuariosPost=(req, res)=> {
      const {nombre, edad}=req.body;
    res.json({
        msg: "post API",
        nombre,
        edad
    });
  }
  const usuariosPut=(req, res=response)=> {
      const {id} =req.params;
    res.json({
        msg: "put API" ,
        id
    });
  }

  const usuariosDelete=(req, res)=> {
    res.json({
        msg: "delete API"
    });
  }

  module.exports={
      usuariosGet,
      usuariosPost,
      usuariosDelete,
      usuariosPut

  }
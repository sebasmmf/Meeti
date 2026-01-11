const Usuarios = require('../models/Usuarios');


exports.formCrearCuenta = (req, res) => {
    res.render('crear-cuenta', {
        nombrePagina: 'Crea tu Cuenta',
        
    })
}

exports.crearNuevaCuenta = async (req, res) => {
    const usuario = req.body;

    req.checkBody('confirmar', 'El password confirmado no puede ir vacio').notEmpty();
    req.checkBody('confirmar', 'El password es diferente').equals(req.body.password);

    // Leer los errores de express
    const erroresExpress = req.validationErrors();

    try {
        await Usuarios.create(usuario);

        // Flash Message y redireccionar
        req.flash('exito', 'Hemos enviado un E-mail, confirma tu cuenta');
        res.redirect('/iniciar-sesion');

        
    } catch (error) {

        // Extraer el messages de los errores
        const erroresSequelize = error.errors.map(err => err.message);

        // Extraer unicamente el msg de los errores
        const errExp = erroresExpress.map(err => err.msg);

        // Unir errores
        const listaErrores = [...erroresSequelize, ...errExp]

        req.flash('error', listaErrores);
        res.redirect('/crear-cuenta')

    }

    
}
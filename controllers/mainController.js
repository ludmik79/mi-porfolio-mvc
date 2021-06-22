const mainController = {
    index: function(req, res) {
        const rutaVistaHome = path.resolve(__dirname, '../views/homte.html');
        res.sendFile(rutaVistaHome);
    }
};

module.exports = mainController;
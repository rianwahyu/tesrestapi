'user strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
    
    app.route('/tampil')
        .get(jsonku.tampilDataMahasiswa);

    app.route('/tampil/:id')
        .get(jsonku.tampilMahasiswabyID);

    app.route('/tambah')
        .post(jsonku.tambahMahasiswa)
}
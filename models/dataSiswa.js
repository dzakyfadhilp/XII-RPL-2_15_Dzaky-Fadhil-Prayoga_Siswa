const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    namaSiswa: {
        type: String,
        required: [true, 'Silahkan isikan nama siswa'],
        unique: true
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan kelas'],
    },
    jurusan: {
        type: String,
        required: [true, 'Silahkan isikan jurusan'],
    },
    alamat: {
        type: String,
        required: [true, 'Silahkan isikan alamat'],
    },
    jenisKelamin: {
        type: String,
        required: [true, 'Silahkan isikan jenis kelamin'],
    },
})

module.exports = mongoose.model('dataSiswa', UserSchema)
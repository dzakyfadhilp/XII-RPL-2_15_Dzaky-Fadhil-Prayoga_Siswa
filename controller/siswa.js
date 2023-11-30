const User = require('../models/dataSiswa')

module.exports = {
    index: async (req, res) => {
        
        try {
            const siswas = await User.find()
            if(siswas.length > 0){
                res.status(200).json({
                    status: true,
                    data: siswas,
                    method: req.method,
                    url: req.url
                })
            }else{
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })

        }
        } catch (error) {
            res.status(400).json({sucess: false})
        }
        
            
        },
        //get all user
        show: async (req, res) => {
            try {
                const siswa = await User.findById(req.params.id)
                res.json({
                    status: true,
                    data: siswa,
                    method: req.method,
                    url: req.url,
                    message: "Data berhasil didapat"
                })
            } catch (error) {
                res.status(400).json({sucess: false})
            }
            
          },
      store: async (req, res) => {
        try {
            const siswa = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
      },
      update: async (req, res) => {
        try {
            const siswa = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators:true
            })
            res.json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
        
      },
      delete: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
      }
}
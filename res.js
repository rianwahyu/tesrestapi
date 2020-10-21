'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

    console.log(values)
     res.json(data);
     res.end();
};

//response matkul
exports.oknested = function(values, res) {
    //akumulasi
    const hasil =  values.reduce((akumulasikan, item)=>{
        //tentukan key group
        if(akumulasikan[item.nama]){
            //buat variable 
            const group = akumulasikan[item.nama];
            //cek jika isi array adalah matkul
            if(Array.isArray(group.matakuliah)){
                group.matakuliah.push(item.matakuliah);
            }else{
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        }else{
            akumulasikan[item.nama] = item;
        }

        return akumulasikan;
    }, {});
     
    var data = {
        'status':200,
        'values':hasil
    };

     res.json(data);
     res.end();

}


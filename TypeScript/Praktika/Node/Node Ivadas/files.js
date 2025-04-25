import fs from 'fs'; // file system

// reading file
// fs.readFile('./failai/nr1.txt', (err, data) => {
//   // if(err){
//   //   console.error(err);
//   // } else {
//   //   console.log(data.toString());
//   // }
//   try {
//     console.log(data.toString());
//   } catch {
//     console.error(err);
//   }
// });

// if(fs.existsSync('./failai/nr2.txt')){
//   fs.appendFile('./failai/nr2.txt', '\npapildinys', (err) => {
//     if(!err){
//       console.log('Sėkmingai papildytas egzistuojantis failas');
//     } else {
//       console.log(err);
//     }
//   })
// } else {
//   fs.writeFile('./failai/nr2.txt', 'Kažką sukūriau 2', (err) => {
//     if(!err){
//       console.log('Sėkmingai sukurtas naujas failas');
//     } else {
//       console.log(err);
//     }
//   });
// }

const failoKurimasArbaPildymas = () => {
    // jeigu egzistuoja failas 'naujas.txt' esantis aplankale 'failaiNew'
    if(fs.existsSync('./failaiNew/naujas.txt')){
        // papildomas failas 'naujas.txt' esantis aplankale 'failaiNew' tekstu '\npapildinys'
        fs.appendFile('./failaiNew/naujas.txt', '\npapildinys', (err) => {
            if(!err){
                console.log('Sėkmingai papildytas egzistuojantis failas');
            } else {
                console.log(err);
            }
        })
    } else {
        // sukuriamas failas 'naujas.txt' esantis aplankale 'failaiNew' tekstu 'Kažką sukūriau'
        fs.writeFile('./failaiNew/naujas.txt', 'Kažką sukūriau', (err) => {
            if(!err){
                console.log('Sėkmingai sukurtas naujas failas');
            } else {
                console.log(err);
            }
        });
    }
}

// jeigu egzistuoja aplankalas 'failaiNew'
// if(fs.existsSync('./failaiNew')){
//   failoKurimasArbaPildymas();
// }
// // jeigu neegzistuoja aplankalas 'failaiNew'
// else {
//   fs.mkdir('failaiNew', (err) => {
//     if(!err){
//       console.log('Sukurtas aplankalas failaiNew');
//       failoKurimasArbaPildymas();
//     } else {
//       console.log(err)
//     }
//   })
// }

const readStream = fs.createReadStream('./failai/bigFile.txt', { encoding: 'utf-8' });
readStream.on('data', gabaliukas => {
    console.log('-------------------');
    console.log('-------------------');
    console.log('Naujas gabaliukas info:');
    console.log(gabaliukas);
    console.log('-------------------');
    console.log('-------------------');
});
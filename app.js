    const fs = require('fs');
    //let base = 2;
    let data = '';
    console.log("aui");
    for (i = 0; i <= 10; i++) {
        for (j = 0; j <= 10; j++){
            //javascript
            //console.log(base +" * " + i +" = " + base*i);
            //esta de abajo es la que debo usar para node
            data += `${i} * ${j} = ${i*j} \n`;
              console.log(`${data}`);

        }
      
        fs.writeFile(`tabla-${i}.txt'`, data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        data = '';
    }
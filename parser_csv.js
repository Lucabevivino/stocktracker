const fs = require('fs/promises')
const path = require('path');
const Table = require('./table.js');

async function parserCsv(fileName){

   const filePath = path.join(__dirname, fileName);

   try {
        const fileString = await fs.readFile(filePath, { encoding: 'utf8' });
        return csvToJsonConverter(fileString);

   }catch(error){

    console.error("Errore nell'apertura del file: "+ fileName);
    throw new Error("Impossibile leggere il file ${fileName}")
  }
  
}

function csvToJsonConverter(string){

 let rows = string.trim().split('\n');
 rows =  rows.filter(row => row.trim() !== '');

  if(rows.length === 0)
    return null;
  let headers = rows[0]
                .trim()
                .split(',');
                .map(header => header.trim());

  let dataArray = [];

  for(let i = 1; i < values.length ; i++){
     let values = rows[i].trim().split(',');
     let rowObject = {};
     
     for(let j = 0; j < headers.length ; j++){
       let value = values[j].trim;
       rowObject[header[j]] = value;
     }

     dataArray.add(rowObject);
  }
  return new Table(headers, dataArray); 
}

module.exports() = parserCsv;


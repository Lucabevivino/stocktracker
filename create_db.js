import mysql from 'mysql2/promise';
const path = require('path');
const Papa = require('papaparse');

export async function parseCsv(fileName){

  const filePath = path.join(filename);
  const fileString = await fs.readFile(filePath, { encoding: 'utf8' });
  const config = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
  };

  Papa.parse(fileString, {
    ...config,
    complete: function(results){

      const jsonData = results.data;
      console.log("JSON Risultante:");
      console.log(jsonData); // deve ritornare il json e le labels
    }
  });
}

export function createSchema(data){

  // legge il json e crea uns secondo json dove associa ad ogni label un tipo SQL:
  // int,float, VARCHAR[100];
  
}
})

export async function createTable(table, config, connection){
  // va aggiunta la configurazione della primary key e le relazioni tra tabelle
  let columnsDef = [];
  const tableName = table.name;
  
  for([colName, colType] of table.columns.entries()){
    columnsDef.push('\'${colName}\'${colType}');
  }

  const columnnsQuery = columnsDef.join(', ');
  createQuery = 'CREATE TABLE \'${tableName}\' (${columnsQuery})';

  console.log('CREATING TABLE ${tableName}');
  await connection.execute(createQuery);
} 

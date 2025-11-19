import mysql from 'mysql2/promise';
const path = require('path');
const Papa = require('papaparse');

const SQL_TYPE_TABLE{
  INTEGER: 'INT',
  FLOAT: 'REAL',
  DATE: 'DATE',
  DATETIME: 'TIMESTAMP',
  BOOLEAN: 'BOOLEAN'
 }
const SQL_TYPE = Object.freeze(SQL_TYPE_TABLE);


// restituisce una tupla con il csv parsato a json e gli header
export async function parseCsv(fileName){

  const filePath = path.join(filename);
  const fileString = await fs.readFile(filePath, { encoding: 'utf8' });
  const config = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
  };

  return new Promise((resolve, reject)=>{
        
    Papa.parse(fileString, {
      ...config,
      complete: function(results){
        if(results.errors.length > 0){
          reject(new Error("Error during CSV parsing to Json: " + results.errors[0].message));
          return;
        }
        const tuple = {
          table: results.data,
          fields: results.meta.fields
          }
        resolve(tuple);
      },
      error: function(err){
        reject(err);
      }
    });
  });

}

// riceve la tupla json-array e determina le coppie campo-tipo
export function createSchema(data){

  let firstcheck = true;
  let schema = [];
  
  data.fields.forEach(field =>{
    const type;
    data.table.forEach(record =>{

      const value = record[field];
      if(firstcheck){
         type = getType(value);
         firstCheck = false;
      }
      else{
        let tempType = getType(value);
      }
      if(!type.equal(tempType))
        throw new Error('La tabella non è ben costruita, elementi della stessa colonna hanno fomrati diversi');      
    })

    const couple{
      field: field,
      type: type;
    }
    schema.add(couple);
  })

  return schema;
}


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

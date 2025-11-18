const pool = require('./db_connector.js');

async function updateDB(table){
  
}

async function checkWines(table){

  const dbTableName = 'wines';
  let  dbWines = [];
  const selQuery = 'SELECT id FROM wines';
  const insQuery = 'INSERT INTO wines VALUES(?,?,?)';
  const ncol = table.headers.length;
  
  try{
    dbWines = pool.execute(query);  
  }catch(error){
    console.error('Errore');
  }

  const  setDbWines = new Set(dbWines);

  const missing = table.data.filter(e => !setDbWines.has(e[headers[0]]));
  const  placeHolder = '(${Array(ncol).fill('?').join(',')})';
  const allPlaceHolders = Array(missing.length).fill(placeHolder).join(',');
  const insQuery = 'INSERT INTO wines VALUES ${allPlaceHolders}';
  const flatNewData = 

  if(missing.length > 0){
    try{
      pool.query(insQuery, )
    }  
  }  
}

function mapToWines(table){
  let headers = [];
  let dataArray = [];

  for (let i = 0; i < table.data.length ; i ++){
    let row = table.data[i];
    for(let j = 0; j < 3; j ++){
      let cuttedRow = row[j];
    }
    dataArray[i] = cuttedRow;
  }

  for(let i = 0; i < 3; i++){
    headers = table.headers[i];
  }
  return winesTable = new Table(headers, dataArray); 
}

import mysql from 'mysql2/promise'
import { ApiResponseType } from './getData';
import { Pool, PoolConnection } from 'mysql2';



export default mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nasa_apod"
  });

export function checkDB(date : string, pool : Pool): ApiResponseType {

    const result;
    try {
        async () => {const [results, fields] = await pool.query(
            'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45'
          );
        }
        
    } catch (error) {
        
    }


    return result;
} 

import '../config/dotenv.js';
import pg from 'pg';

const config = {
    connectionString: "postgresql://postgres:xmCVsswZiCuBNiJNFsLgcpFQmnIcubek@autorack.proxy.rlwy.net:12305/railway",
}

export const pool = new pg.Pool(config)

console.log(config);
import 'dotenv/config.js';
import {app} from './app.js';

import connectDB from './db/index.js';


connectDB().then(()=>{
    const PORT = process.env.VITE_PORT || 8000;
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
    
})
.catch((error) => {
    console.error('Failed to connect to the database:', error);
    process.exit(1); 
})
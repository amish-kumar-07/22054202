const express = require('express');
const app = express();
const userRoute = require('./posts'); 



app.use('/posts', userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
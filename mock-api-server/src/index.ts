import express from 'express';
import bodyParser from 'body-parser';
import collectionsRoutes from './routes/collections';

const app = express();
const PORT = process.env.PORT || 4200;

app.use(bodyParser.json());
app.use('/api', collectionsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
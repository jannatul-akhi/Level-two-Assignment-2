import express, {Request, Response} from 'express';
import { ProductRoutes } from './modules/products/product.route';
import cors from "cors";
import { OrderRoutes } from './modules/orders/order.route';
const app = express()
// const port = 3000

// Parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
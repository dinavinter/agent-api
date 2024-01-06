import express from 'express';
import { Request, Response } from 'express';

export const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!');
});

const port = process.env.PORT || 8080;
console.log(`Server listening on port ${port}`);
app.listen(port);
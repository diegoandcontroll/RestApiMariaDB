import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`On server http://localhost:${port}`);
});

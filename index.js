const express     = require('express');
const bodyParser  = require('body-parser');
const levelup     = require('levelup');

const app = express();
const db  = levelup('./data', {valueEncoding: 'json'});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hola soy el API de cine laboratoria'});
});

router.post('/movies',(req,res) => {
  //la-momia
  const id = req.body.nombre.toLowerCase().split(" ").join("-");
  db.put(id,req.body,(err) => {
    if (err) return res.json({message: "Hubo un error al guardar los datos"});
  });
  res.json({message:"La película se grabó con éxito"});
});

router.get('/movies',(req,res) => {
  let movies = [];
  db.createValueStream().on('data', (data) => {
      movies.push(data);
  }).on('end', _ => {
      res.json(movies);
  });
});

router.get('/movies/:id',(req,res) => {
  if (req.params.id) {
    db.get(req.params.id,(err,movie) => {
      if (err) return res.json({message: "Hubo un error al obtener el registro"});
      res.json(movie);
    });
  }
});

app.use('/api',router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('El server esta corriendo en el '+port+'!');
});

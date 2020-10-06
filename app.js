const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const rootDir = require('./utility/path'); // we can use it instead of __dirname.

const app = express();

app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main-layout',
    extname: 'hbs', // can be omitted if I write defaultLayout with extension or if the main-layout extention is *.handlebars.
  })
);
app.set('view engine', 'hbs');
// app.set('view engine', 'pug');
app.set('views', 'views'); // by default views look in views folder

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('errorPage', { pageTitle: 'Error Page' });
});

app.listen(3000);

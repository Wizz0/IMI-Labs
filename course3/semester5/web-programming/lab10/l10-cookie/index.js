const express = require('express');
const expressHbs = require('express-handlebars');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser("secret_key"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('hbs', expressHbs.engine({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main',
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('index');
});

const albumData = {
    album: [
        { singer: "Eric Clapton", title: "Unplugged", price: 6000 },
        { singer: "David Bowie", title: "Legacy", price: 5000 },
        { singer: "A-Ha", title: "True North", price: 3500 }
    ]
};

app.get('/musicmarket', (req, res) => {
    let cart = req.cookies.cart;
    let cartItems = cart ? JSON.parse(cart) : [];
    res.render('musicmarket', { ...albumData, cartItems });
});

app.post('/musicmarket', (req, res) => {
    let cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
    let selectedAlbums = req.body.checkalbum;

    if (selectedAlbums) {
        if (!Array.isArray(selectedAlbums)) {
            selectedAlbums = [selectedAlbums];
        }
        selectedAlbums.forEach(albumId => {
            const album = albumData.album.find(a => a.price == albumId);
            if (album){
                cart.push(album);
            }
        });
    }
    res.cookie('cart', JSON.stringify(cart));
    res.redirect('/cart');
});

app.get('/cart', (req, res) => {
    let cart = req.cookies.cart;
    let cartItems = cart ? JSON.parse(cart) : [];
    let total = cartItems.reduce((sum, item) => sum + parseInt(item.price), 0);
    res.render('cart', { cartItems, total });
});


app.listen(3000);

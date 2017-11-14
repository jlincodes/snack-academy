import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducers.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let menuLoaded = {

	products: {
	"1": {
		"id": 1,
		"name": "Cafe Americano",
		"price": 300,
		"description": "Double shot",
		"category": "drink",
		"inventory": 5,
		"img_url": "https://www.caffeineinformer.com/wp-content/caffeine/espresso.jpg"
	},
	"2": {
		"id": 2,
		"name": "Monster",
		"price": 400,
		"description": "16 oz. can",
		"category": "drink",
		"inventory": 7,
		"img_url": "https://i5.walmartimages.com/asr/67d13f4f-07cb-45e1-856f-dfa777e58dec_2.b7410fc774e5c4bbb282b722039f52e8.png?odnHeight=450\u0026odnWidth=450\u0026odnBg=FFFFFF"
	},
	"3": {
		"id": 3,
		"name": "Red Bull",
		"price": 400,
		"description": "12 oz. can",
		"category": "drink",
		"inventory": 1,
		"img_url": "https://www.servovendi.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/b/o/bote_de_camuflaje_-_lata_de_ocultaci_n_imitaci_n_bebida_energ_tica_red_bull_.jpg"
	},
	"4": {
		"id": 4,
		"name": "Coke",
		"price": 150,
		"description": "12 oz. can",
		"category": "drink",
		"inventory": 3,
		"img_url": "https://www.magictricks.com/assets/images/trickspix/airbornecokecan2.jpg"
	},
	"5": {
		"id": 5,
		"name": "Dr. Pepper",
		"price": 150,
		"description": "12 oz. can",
		"category": "drink",
		"inventory": 9,
		"img_url": "https://279173f3.nuajik.io/46-large_default/dr-pepper-soda.jpg"
	},
	"7": {
		"id": 7,
		"name": "Cheezits",
		"price": 200,
		"description": "Fun size bag",
		"category": "food",
		"inventory": 5,
		"img_url": "https://www.staples-3p.com/s7/is/image/Staples/s0926619_sc7?$splssku$"
	},
	"8": {
		"id": 8,
		"name": "Doritos Nacho",
		"price": 150,
		"description": "10 oz. bag",
		"category": "food",
		"inventory": 4,
		"img_url": "https://target.scene7.com/is/image/Target/14930889?wid=520\u0026hei=520\u0026fmt=pjpeg"
	},
	"9": {
		"id": 9,
		"name": "Cup Ramen",
		"price": 150,
		"description": "Original Size",
		"category": "food",
		"inventory": 5,
		"img_url": "https://i.pinimg.com/originals/c4/df/49/c4df4970e13dcd0db7d4c84cffb15cd7.jpg"
	},
	"10": {
		"id": 10,
		"name": "Sour Patch Kids",
		"price": 300,
		"description": "Fun size bag",
		"category": "food",
		"inventory": 4,
		"img_url": "https://petraacademy.com/wp-content/uploads/2016/02/Sour-patch-kids-image.jpg"
	},
	"11": {
		"id": 11,
		"name": "Altoids",
		"price": 400,
		"description": "Curiously Strong",
		"category": "food",
		"inventory": 7,
		"img_url": "https://target.scene7.com/is/image/Target/13304773?wid=325\u0026hei=325\u0026qlt=80\u0026fmt=pjpeg"
	}
}}
const configureStore = (preloadedState = menuLoaded) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;

import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducers.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let menuLoaded = {products: {
	"1": {
		"id": 1,
		"name": "Cafe Americano",
		"price": 200,
		"description": "Great pick me up!",
		"category": "drink",
		"inventory": 5,
		"img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/160px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg"
	},
	"2": {
		"id": 2,
		"name": "Red Bull",
		"price": 300,
		"description": "Get energized!",
		"category": "drink",
		"inventory": 5,
		"img_url": "https://www.servovendi.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/b/o/bote_de_camuflaje_-_lata_de_ocultaci_n_imitaci_n_bebida_energ_tica_red_bull_.jpg"
	},
	"3": {
		"id": 3,
		"name": "Dr. Pepper",
		"price": 100,
		"description": "Just What The Dr Ordered.",
		"category": "drink",
		"inventory": 9,
		"img_url": "https://279173f3.nuajik.io/46-large_default/dr-pepper-soda.jpg"
	},
	"4": {
		"id": 4,
		"name": "Doritos Nacho",
		"price": 100,
		"description": "Hungry?",
		"category": "food",
		"inventory": 4,
		"img_url": "https://target.scene7.com/is/image/Target/14930889?wid=520\u0026hei=520\u0026fmt=pjpeg"
	},
	"5": {
		"id": 5,
		"name": "Cup Ramen",
		"price": 150,
		"description": "It's more than just soup!",
		"category": "food",
		"inventory": 1,
		"img_url": "https://i.pinimg.com/originals/c4/df/49/c4df4970e13dcd0db7d4c84cffb15cd7.jpg"
	},
	"6": {
		"id": 6,
		"name": "Sour Patch Kids",
		"price": 200,
		"description": "Sour. Sweet. Gone.",
		"category": "food",
		"inventory": 1,
		"img_url": "https://petraacademy.com/wp-content/uploads/2016/02/Sour-patch-kids-image.jpg"
	},
	"7": {
		"id": 7,
		"name": "Mints",
		"price": 400,
		"description": "Great for pair programming!",
		"category": "food",
		"inventory": 6,
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

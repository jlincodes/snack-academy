# SnackAcademy

# Background and Overview
Being a student is hard; being a student at a rigorous coding bootcamp is even more difficult. Lecture schedules are strict and the workload is endless. In addition to that, conveniently accessible, affordable, quality snacks and beverages are hard to come by.

That is where SnackAcademy comes in. SnackAcademy is a mobile app (iOS and Android compatible ) that App Academy students and staff can use to order and purchase quality snacks and beverages from our pop-up store.


# Technologies
The SnackAcademy mobile app is built on React Native / Redux and utilizes Stripe integration to securely store our customers' sensitive information, such as credit card information, and to process payment charges upon order submission. We chose to develop the app for both iOS and Android to capture the largest customer base possible.

# Features
## Facebook SDK Authentication

![Alt text](assets/authentication.gif?raw=true "Facebook SDK Authentication")

We integrated Facebook authentication using Facebook SDK in both our React Native components and Xcode. We chose this strategy in order to take advantage of users' permanent, unique Facebook ID. This allowed us to synchronize a customer's account including past orders and payment credentials across devices.


## Stripe API Integration
![Alt text](assets/stripe.gif?raw=true "Stripe API Integration")  

Our project integrated Stripe's API in both the front and backend. This allows the app to securely outsource the handling and storing of sensitive credit card information while our Rails backend ensured that only authenticated users could make recurring purchases.


## Intuitive Products Menu
![Alt text](assets/menu2.gif?raw=true "Product Menu")

We utilized several React Native features, such as React Navigation and dynamic flatlists, in order to create a simple, yet user-friendly menu to browse products. Most importantly, the product list is dynamically retrieved from our Heroku backend allowing for nimble marketing of our merchandise and inventory control.


## Real-time Redux-enabled Checkout Cart
![Alt text](assets/cart.gif?raw=true "Checkout Cart")  

By integrating the Redux cycle into our React Native app, we stored the customer's cart items in the normalized state which allows us to access to the cart throughout the application. Updates such as adding or deleting products occur in real-time.

## Secure Credit Card Purchases and Confirmation

![Alt text](assets/purchase.gif?raw=true "Purchase Screen")

Finally, customers receive a confirmation, but only once their orders are received and their credit cards charged in our Stripe accessible backend.

## Future Plans

### Promotion of app and pop-up store
SnackAcademy will be promoted through word-of-mouth among students and staff and eventually launch its' pop-up store.

Technology-wise, we will further develop the administrative dashboard to assist in the development of the business, including the following features:

- Allows Admin to add new products/update existing products
- Display analytics
  - Number of unique active users per day
  - Items ordered and quantities of each item ordered => calculate expenses
  - Revenue and profit (revenue - expenses)

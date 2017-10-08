# SnackAcademy

## Background and Overview
### The Problem:
Tight schedules at App Academy, limited in-house refreshments, and prices at nearby stores make it inconvenient and expensive to buy quality coffee and snacks while at school.

### The Solution:
Create a refreshments pop-up store powered by a native mobile app to manage orders and process payments via Stripe.

## Functionality and MVP
### User authentication & verification of payment credentials
- Conveniently register users via emails and payment credentials
- Integrate third party storage of payment credentials through Stripe

![SignUp][signup]

### Products menu
- Allow users to conveniently browse products
- Adds products to cart

![Menu][menu]

### Shopping cart
- Allow users to set quantities of items already in cart
- Allow users to empty cart and return to menu
- Allow users to checkout

![Cart][cart]

### Checkout
- Allow users to confirm orders prior to payment processing
- Display items’ prices and total costs
- Order submission and confirmation
- Payment processing via Stripe

![Checkout][checkout]

- Display confirmation page with confirmation number and pick-up directions

![Confirmation][confirmation]


### An admin dashboard
- Allows Admin to add new products/update existing products
- Display analytics
  - Number of unique active users per day
  - Items ordered and quantities of each item ordered => calculate expenses
  - Revenue and profit (revenue - expenses)
- Displays order statuses
  - Received
  - Prepared
  - Picked-up

## Wireframes:


## Technologies and Technical Challenges
### Technologies:
- Backend:
  - Rails
- Frontend
  - Auth/CC:
    - Stripe for both auth and credit card info
  - User Interface
    - React Native
    - Flexbox for layout
    - Airbnb Navigation for React

### Technical Challenges
The most challenging part of this project will be the implementation of Stripe payment storage and processing into the application's Rails/React Native technologies.

## Group Members and Work Breakdown
Our flex project group consists of three members: Kenta Kodama, Logan Cooper,
and Julie Lin. Each member will serve as the point-person for a specific area of the project.

|Member Name|Primary responsibilities|Additional details|
|---|---|---|
|Kenta|React Native frontend|Primary focus will be the UI/UX of SnackAcademy App|
|Logan|Stripe Payments|Focus is on Stripe integration into Rails/React Native|
|Julie|Rails backend|Upon completion of backend, will hop onto frontend|

## Implementation Timeline

### Day 0: The weekend
- All members:
  - Created full proposal and project implementation plan
  - Schema, component hierarchy, etc.
- Kenta:
  - Sample state
  - Researched React Native through Getting Started Building Projects with Native Code tutorial
  - Created React Native app skeleton with pages for each component and buttons for navigation
- Julie:
  - Wireframes/mockups
  - Rails backend:
    - skeleton
    - models and table migrations with table- and model-level validations
    - associations
    - controllers and routes
    - sample seed data
- Logan:
  - Researched React Native through Getting Started Building Projects with Native Code tutorial
  - Researched Stripe secure payment storage and processing & how to integrate into Rails/React Native

### Day 1:
- Submit proposal for approval and feedback
- Complete and finalize Rails backend and React Native frontend, if not yet completed/finalized
- Start integration of Stripe

### Day 2:
- Complete integration of Stripe
- Have basic prototype ready for extensive testing to ensure smooth, bug-free UI for products view/adding items to cart/checking out

### Day 3:
- Continue testing and fix any bugs

### Day 4:
- Style application
- Publish on Xcode and Android Studio

### Day 5
- Write out Production README.md
- App launch

## Plan for getting users and reviews
- Promote app within App Academy
- Launch pop-up cafe

## Wireframes

[signup]: https://github.com/julielin0812/snack-academy/blob/master/docs/wireframe/iPhone%2067%20%E2%80%93%201.png?raw=true

[menu]: https://github.com/julielin0812/snack-academy/blob/master/docs/wireframe/iPhone%2067%20%E2%80%93%202.png?raw=true

[cart]: https://github.com/julielin0812/snack-academy/blob/master/docs/wireframe/iPhone%2067%20%E2%80%93%203.png?raw=true

[checkout]: https://github.com/julielin0812/snack-academy/blob/master/docs/wireframe/iPhone%2067%20%E2%80%93%204.png?raw=true

[confirmation]: https://github.com/julielin0812/snack-academy/blob/master/docs/wireframe/iPhone%2067%20%E2%80%93%205.png?raw=true

## State and Schema

See the [project wiki](https://github.com/julielin0812/snack-academy/wiki) for our sample state and database schema.

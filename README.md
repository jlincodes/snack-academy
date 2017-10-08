# README

Database Schema

## Users
|column name|data type|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`email`|string|not null, unique|
|`stripe_token`|string|not null, unique|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

User `has_many` orders.

User `has_many` ordered_items `through` orders.


## Products
|column name|data type|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`name`|string|not null, unique|
|`price`|float|not null|
|`description`|string|not null|
|`type`|string|not null, only "food", "drink"|
|`inventory`|integer|not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

Product `has_many` ordered_items.

## Orders
|column name|data type|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`customer_id`|integer|not null|
|`status`|string|not null only "ordered", "prepared", "picked up"|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

Order `belongs_to` user.

Order `has_many` ordered_items.

## Ordered_items
|column name|data type|details|
|---|---|---|
|`id`|integer|not null, primary key|
|`order_id`|integer|not null|
|`product_id`|integer|not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|

Ordered_item `belongs_to` order.

Ordered_item `belongs_to` product.

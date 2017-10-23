# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.create!(name: 'Cafe Americano', price: 200, description: 'Great pick me up!', category: 'drink', inventory: rand(10), img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/160px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg')
Product.create!(name: 'Red Bull', price: 300, description: 'Get energized!', category: 'drink', inventory: rand(10), img_url: 'https://www.servovendi.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/b/o/bote_de_camuflaje_-_lata_de_ocultaci_n_imitaci_n_bebida_energ_tica_red_bull_.jpg')
Product.create!(name: 'Dr. Pepper', price: 100, description: 'Just What The Dr Ordered.', category: 'drink', inventory: rand(10), img_url: 'https://279173f3.nuajik.io/46-large_default/dr-pepper-soda.jpg')
Product.create!(name: 'Doritos Nacho', price: 100, description: 'Hungry?', category: 'food', inventory: rand(10), img_url: 'https://target.scene7.com/is/image/Target/14930889?wid=520&hei=520&fmt=pjpeg')
Product.create!(name: 'Cup Ramen', price: 150, description: 'It\'s more than just soup!', category: 'food', inventory: rand(10), img_url: 'https://i.pinimg.com/originals/c4/df/49/c4df4970e13dcd0db7d4c84cffb15cd7.jpg')
Product.create!(name: 'Sour Patch Kids', price: 200, description: 'Sour. Sweet. Gone.', category: 'food', inventory: rand(10), img_url: 'https://petraacademy.com/wp-content/uploads/2016/02/Sour-patch-kids-image.jpg')
Product.create!(name: 'Mints', price: 400, description: 'Great for pair programming!', category: 'food', inventory: rand(10), img_url: 'https://target.scene7.com/is/image/Target/13304773?wid=325&hei=325&qlt=80&fmt=pjpeg')

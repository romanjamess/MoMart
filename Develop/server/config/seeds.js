const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    {
      name: 'Sporting Goods',
    },
    {
      name: 'Electronics',
    },
    {
      name: 'Apparel',
    },
    {
      name: 'Accessories',
    },
    {
      name: 'Shoes',
    },
    {
      name: 'Motors',
    },
    {
      name: 'Collectibles',
    },
    {
      name: 'Toys',
    },
    {
      name: 'Home & Garden',
    },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    // this is the example format for all of the products carried over from previous Thingamabobs
    // {
    //   name: 'Tin of Cookies',
    //   description:
    //     'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    //   image: 'cookie-tin.jpg',
    //   category: categories[0]._id,
    //   price: 2.99,
    //   quantity: 500,
    // },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.insertMany([
    {
      firstName: 'Amrita',
      lastName: 'Raja',
      email: 'amrita@gmail.com',
      password: 'password12345',
    },
    {
      firstName: 'Daniel',
      lastName: 'Bradley',
      email: 'daniel@gmail.com',
      password: 'password12345',
    },
    {
      firstName: 'Matthew',
      lastName: 'Nguyen',
      email: 'matthew@gmail.com',
      password: 'password12345',
    },
    {
      firstName: 'Theresa',
      lastName: 'Cao',
      email: 'theresa@gmail.com',
      password: 'password12345',
    },
    {
      firstName: 'George',
      lastName: 'Jordan',
      email: 'george@gmail.com',
      password: 'password12345',
    },
  ]);

  console.log('users seeded');

  process.exit();
});

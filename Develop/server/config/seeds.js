const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    // this is the example format for all of the categories carried over from previous Thingamabobs
    // { name: 'Food' },
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

  await User.create({
    // this is the example format for all of the users carried over from previous Thingamabobs
    // firstName: 'Pamela',
    // lastName: 'Washington',
    // email: 'pamela@testmail.com',
    // password: 'password12345',
    // orders: [
    //   {
    //     products: [products[0]._id, products[0]._id, products[1]._id],
    //   },
    // ],
  });

  console.log('users seeded');

  process.exit();
});

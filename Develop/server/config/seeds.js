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

    {
      name: 'Plain T-Shirt',
      description: 'This is your plain white t shirt',
      image: 'plaintshirt.jpg',
      category: categories[2]._id,
      price: 14.99,
      quantity: 14,
    },

    {
      name: "Snoop Dogg's Blue Track Suit",
      description:
        'Original Sweat Suit worn by uncle Snoop as seen on the Super Bowl Halftime show',
      image: 'tracksuit.jpg',
      category: categories[2]._id,
      price: 3999999.99,
      quantity: 1,      
    },

    {
      name: 'Edible Crayons',
      image: 'ediblecrayons.jpg',
      description:
        'Paint your mouth by chewing bubble yum',
      price: 49.99,
      quantity: 400,
      category: categories[7]._id,
    },

    {
      name: 'Melodikon',
      description: 'A very rare electronic music box made in the former East Germany. You know you need it.',
      image: 'melodikon.jpg',
      category: categories[6]._id,
      price: 49999.99,
      quantity: 1,
    },

    {
      name: 'Wildebeest',
      description: 'The pet you never knew you needed.',
      image: 'wildebeest.jpg',
      category: categories[8]._id,
      price: 249999.99,
      quantity: 1,
    },

    {
      name: 'The Original Thingamabobs',
      description: 'These thingamabobs will leave you wanting more',
      image: 'arielthingamabobs.jpg',
      category: categories[6]._id,
      price: 29.99,
      quantity: 20,
    },

    {
      name: 'Soccer Ball',
      description: 'Kids Soccer Ball',
      image: 'soccerball.png',
      category: categories[0]._id,
      price: 14.99,
      quantity: 34,
    },

    {
      name: 'Printer',
      description: 'A very nice Laser Printer',
      image: 'printer.jpg',
      category: categories[1]._id,
      price: 119.99,
      quantity: 40,
    },

    {
      name: 'Boba Sweatshirt',
      description: 'A sweatershirt for all you boba lovers...',
      image: 'bobasweater.jpeg',
      category: categories[3]._id,
      price: 125.99,
      quantity: 34,
    },

    {
      name: 'Big Red Boots',
      description: 'Inspired by Boots from Dora the Explorer',
      image: 'redboots.jpg',
      category: categories[3]._id,
      price: 125.99,
      quantity: 34,
    },

    {
      name: 'Machete',
      description: 'Great for dicing up veggies, shaving, or cutting steak. Did someone say Friday the 13th?',
      image: 'machete.jpg',
      category: categories[8]._id,
      price: 12.99,
      quantity: 13,
    },

    {
      name: 'Teddy Bear',
      description: 'Classic brown teddy bear that is soft and fun to cuddle with',
      image: 'teddybear.jpg',
      category: categories[7]._id,
      price: 16.99,
      quantity: 11,
    },

    {
      name: 'High heels',
      description: '6 inch high heels',
      image: 'highheels.jpg',
      category: categories[4]._id,
      price: 42.99,
      quantity: 21,
    },

    {
      name: 'Lava Lamp',
      description: 'Lava lamp with golden shiny dust',
      image: 'lavalamp.jpg',
      category: categories[7]._id,
      price: 21.99,
      quantity: 14,
    },

    {
      name: 'Basketball',
      description: 'Orange classic basketball',
      image: 'basketball.png',
      category: categories[0]._id,
      price: 14.99,
      quantity: 8,
    },

    {
      name: 'Hairbrush',
      description: 'Hairbrush to get your hair silky and smooth',
      image: 'hairbrush.jpg',
      category: categories[3]._id,
      price: 8.99,
      quantity: 12,
    },

    {
      name: 'Lamborghini Gallardo SuperLeggera',
      description: 'This thing is fast',
      image: 'lambo.jpg',
      category: categories[5]._id,
      price: 35000000.00,
      quantity: 2,
    },

    {
      name: '1992 Bentley Turbo R',
      description: 'The ultimate classic',
      image: 'bentley.jpg',
      category: categories[5]._id,
      price: 1500000.00,
      quantity: 1,
    },

    {
      name: 'Tires',
      description: 'These things roll.',
      image: 'tires.jpg',
      category: categories[5]._id,
      price: 350.00,
      quantity: 4,
    },

    {
      name: 'Babe Ruth Baseball Card',
      description: 'The ultimate icon. 1933 edition.',
      image: 'baberuth.webp',
      category: categories[6]._id,
      price: 35000000.00,
      quantity: 1,
    },

    {
      name: 'Garden Hose',
      description: 'A green watering machine.',
      image: 'gardenhose.jpg',
      category: categories[8]._id,
      price: 35.00,
      quantity: 100,
    },

    {
      name: 'PC',
      description: 'Extra most bestest pc.',
      image: 'pc.jpg',
      category: categories[1]._id,
      price: 100.00,
      quantity: 2,
    },

    {
      name: 'Monitor',
      description: 'Extra most bestest monitor.',
      image: 'monitor.jpg',
      category: categories[8]._id,
      price: 100.00,
      quantity: 2,
    },

    {
      name: 'Mouse',
      description: 'Extra most bestest mouse.',
      image: 'mouse.jpg',
      category: categories[8]._id,
      price: 100.00,
      quantity: 1,
    },

    {
      name: 'Keyboard',
      description: 'Extra most bestest keyboard.',
      image: 'keyboard.jpg',
      category: categories[1]._id,
      price: 100.00,
      quantity: 2,
    },

    {
      name: 'Truck',
      description: 'Bil ol truck!',
      image: 'truck.jpg',
      category: categories[5]._id,
      price: 10.00,
      quantity: 2,
    },

    {
      name: 'Banana Hat',
      description: 'OSRS Banana Hat',
      image: 'bananahat.jpg',
      category: categories[3]._id,
      price: 6500.00,
      quantity: 1,
    },

    {
      name: 'Black Cat',
      description: 'A black cat for good luck.',
      image: 'blackcat.jpg',
      category: categories[7]._id,
      price: 44.00,
      quantity: 32,
    },

    {
      name: 'Captain America',
      description: 'Perfect for your collection.',
      image: 'captainamerica.webp',
      category: categories[6]._id,
      price: 83.00,
      quantity: 32,
    },

    {
      name: 'Cricket Bat',
      description: 'The best cricket bat in the world.',
      image: 'cricketbat.jpeg',
      category: categories[0]._id,
      price: 220.00,
      quantity: 7,
    },

    {
      name: 'Custom Dog Necklace',
      description: 'Custom necklace of a dog.',
      image: 'dognecklace.jpg',
      category: categories[3]._id,
      price: 125.00,
      quantity: 24,
    },


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

import bcrypt from 'bcrypt';
const saltRounds = 10;
const data = {
  users: [
    {
      name: 'user1',
      email: 'user1@gmail.com',
      password: await bcrypt.hash('user12345678', saltRounds),
      isAdmin: false,
    },
    {
      name: 'user2',
      email: 'user2@gmail.com',
      password: await bcrypt.hash('user112345678', saltRounds),
      isAdmin: false,
    },
    {
      name: 'مدیر',
      email: 'admin@gmail.com',
      password: await bcrypt.hash('admin12345678', saltRounds),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: 'apple15',
      slug: 'apple15',
      model: 2023,
      img: '/img/app15.png',
      price: 5000,
      countInStock: 10,
      brand: 'apple',
      rating: 4.5,
      numReviews: 5,
      description: 'hight quality',
      // capacity: [128, 256],
    },
    {
      name: 'apple14',
      slug: 'apple14',
      model: 2022,
      img: '/img/app14.png',
      price: 5000,
      countInStock: 10,
      brand: 'apple',
      rating: 4.5,
      numReviews: 5,
      description: 'hight quality',
      capacity: [128, 256],
    },
    {
      name: 'motorolaz',
      slug: 'motoz',
      model: 2023,
      img: '/img/motorz.png',
      price: 5000,
      countInStock: 10,
      brand: 'motorola',
      rating: 4.5,
      numReviews: 5,
      description: 'hight quality',
      capacity: [128, 256],
    },
    {
      name: 'motorolaz1',
      slug: 'motoz1',
      model: 2022,
      img: '/img/motorzb.png',
      price: 5000,
      countInStock: 10,
      brand: 'motorola',
      rating: 4.5,
      numReviews: 5,
      description: 'hight quality',
      capacity: [128, 256],
    },
    {
      name: 'pixel7',
      slug: 'pixel7',
      model: 2023,
      img: '/img/pixel7.png',
      price: 5000,
      countInStock: 10,
      brand: 'pixel',
      rating: 4.5,
      numReviews: 5,
      description: 'hight quality',
      capacity: [128, 256],
    },
    {
      name: 'pixel7pro',
      slug: 'pixel7pro',
      model: 2022,
      img: '/img/pixel7b.png',
      price: 5000,
      countInStock: 10,
      brand: 'pixel',
      rating: 4.5,
      numReviews: 5,
      description: 'hight quality',
      capacity: [128, 256],
    },
    {
      name: 'samsungflip',
      slug: 'samfl',
      model: 2023,
      img: '/img/samflip.png',
      price: 5000,
      countInStock: 10,
      brand: 'samsung',
      rating: 4.5,
      numReviews: 5,
      description: 'hight quality',
      capacity: [128, 256],
    },
    {
      name: 'samsungfol',
      slug: 'samflo',
      model: 2022,
      img: '/img/samflipb.png',
      price: 5000,
      countInStock: 10,
      brand: 'samsung',
      rating: 4.5,
      numReviews: 5,
      description: 'hight quality',
      capacity: [128,'-', 256],
    },
  ],
};

export default data;

export const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

const clothingNames = [
  'T-shirt',
  'Jeans',
  'Jacket',
  'Sweater',
  'Dress',
  'Shorts',
  'Skirt',
  'Blouse',
  'Coat',
  'Hat',
  'Scarf',
  'Socks',
  'Shoes',
  'Belt',
  'Gloves',
];

const clothingImages = [
  'https://i.pinimg.com/236x/9e/37/66/9e3766b8077fff44012754a046506d20.jpg',
  'https://i.pinimg.com/236x/8a/ba/5e/8aba5e6851449ba1451689b7f320bf5d.jpg',
  'https://i.pinimg.com/236x/53/fa/46/53fa46884c9be1db335d31d64f8a8816.jpg',
  'https://i.pinimg.com/236x/82/86/a5/8286a5ae56e22e395151a7c35cb78465.jpg',
  'https://i.pinimg.com/236x/c4/63/46/c463463a753869a0e5248a46871d5023.jpg',
  'https://i.pinimg.com/236x/d2/01/64/d20164d3b0cd6a08eb15b43ad5202c2d.jpg',
  'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1680859126205-1c593bb4f9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGF0fGVufDB8fDB8fHww',
  'https://i.pinimg.com/236x/57/e0/ca/57e0ca93374bd073981ebc5ce339d926.jpg',
  'https://plus.unsplash.com/premium_photo-1675186049563-000f7ac02c44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
];

export const initialProducts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: clothingNames[Math.floor(Math.random() * clothingNames.length)], 
  description: `Description for ${clothingNames[Math.floor(Math.random() * clothingNames.length)]}`,
  color: colors[Math.floor(Math.random() * colors.length)],
  price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
  rating: (Math.random() * 5).toFixed(1),
  image: clothingImages[Math.floor(Math.random() * clothingImages.length)],
}));
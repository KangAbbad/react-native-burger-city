const INITIAL_STATE = {
  banners: [
    {
      name: 'Beef Cheese Burger',
      lead: 'Our Pride, Beef Cheese Burger',
      imageUrl: 'https://live.staticflickr.com/4025/4671819961_69e1d93f81_z.jpg'
    },
    {
      name: 'Vegetables Burger',
      lead: 'Feeling Healthy Everyday',
      imageUrl: 'https://live.staticflickr.com/8008/7254701292_86c5ee65bd_z.jpg'
    },
    {
      name: 'Saucy Burger',
      lead: "Nothing Worry, It's Low Fat",
      imageUrl: 'https://live.staticflickr.com/2083/1616104514_8c12518912_z.jpg'
    },
    {
      name: 'Discount',
      lead: 'FREE Covid-19!!! Discount Up to 50%, For Take-Away Order',
      imageUrl: 'https://live.staticflickr.com/4801/40568807461_be45ea8185_z.jpg'
    }
  ],
  bestOffers: [
    {
      name: 'Beef Egg Burger',
      price: '18',
      rating: 4,
      imageUrl: 'https://live.staticflickr.com/65535/49768011471_39a4140283_z.jpg'
    },
    {
      name: 'Beef Potato Burger',
      price: '12',
      rating: 4,
      imageUrl: 'https://live.staticflickr.com/4098/4934837530_0cca779091_z.jpg'
    },
    {
      name: 'Double Beef Burger',
      price: '20',
      rating: 5,
      imageUrl: 'https://live.staticflickr.com/8631/16505521041_b7d25f7dc8_z.jpg'
    },
    {
      name: 'Melted Cheese Burger',
      price: '14',
      rating: 4,
      imageUrl: 'https://live.staticflickr.com/4269/34544340164_b0387590f8_z.jpg'
    },
    {
      name: 'Black Bean Veggie Burger',
      price: '13',
      rating: 3,
      imageUrl: 'https://live.staticflickr.com/2880/33359463604_c5c8bc6b10_z.jpg'
    },
    {
      name: 'Cheesy Roll Sandwich',
      price: '14',
      rating: 4,
      imageUrl: 'https://live.staticflickr.com/7438/16320962599_3c11e39b77_z.jpg'
    }
  ]
}

const home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default home

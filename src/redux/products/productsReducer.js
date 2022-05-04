const initialState = [
  {
    id: 1,
    title: "Redmi note 10s",
    price: "13999",
    qty: 1,
    link:
      "https://images.fonearena.com/blog/wp-content/uploads/2021/08/Redmi-Note-10S-Cosmic-Purple.jpg"
  },
  {
    id: 2,
    title: "Realme 8",
    price: "14999",
    link: "https://fdn2.gsmarena.com/vv/pics/realme/realme-8-1.jpg",
    qty: 1
  },
  {
    id: 3,
    title: "Iphone 13",
    price: "13999",
    link:
      "https://9to5mac.com/wp-content/uploads/sites/6/2021/09/iphone-13-pro-header-9to5mac.jpg?quality=82&strip=all&w=1600",
    qty: 1
  },
  {
    id: 4,
    title: "Iphone 13 Max Pro",
    price: "149999",
    qty: 1,
    link:
      "https://static.toiimg.com/thumb/resizemode-4,msid-86550242,imgsize-49546,width-720/86550242.jpg"
  }
];

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

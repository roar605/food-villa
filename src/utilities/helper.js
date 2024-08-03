
export function filterData(searchText, allRestra) {
    return allRestra.filter((x) => x?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
  }
  
export const menu = [
  {
    dish:"Plain Roti",
    image:"plain roti.jpeg",
    price:"12"
  },
  {
    dish:"Butter Naan",
    image:"naan.jpg",
    price:"179"
  },
  {
    dish:"Rajma Chawal",
    image:"rajma.jpg",
    price:"155"
  },
  {
    dish:"Mishti Dohi",
    image:"Mishti_Doi.jpg",
    price:"35"
  },
  {
    dish:"Rasugulla",
    image:"rasgulla.jpg",
    price:"18"
  },
  {
    dish:"IceCream Vanilla",
    image:"vanillaice.jpeg",
    price:"50"
  },
  {
    dish:"IceCream Strawberry",
    image:"strawberryice.jpeg",
    price:"45"
  },
  {
    dish:"IceCream Chocolate",
    image:"chocolateice.jpg",
    price:"60"
  },
 {
    dish:"Mix Sabji",
    image:"sabji.jpeg",
    price:"99"
  },
  {
    dish:"Chicken Do Pyaza",
    image:"chicktand.jpg",
    price:"229"
  },
  {
    dish:"Mushroom",
    image:"mushroom.avif",
    price:"259"
  },
  {
    dish:"Roast Chicken",
    image:"chicken.jpeg",
    price:"350"
  },
  {
    dish:"Butter Chicken",
    image:"chicktand.jpg",
    price:"309"
  },
  {
    dish:"Salad",
    image:"salad.jpeg",
    price:"69"
  },
  {
    dish:"Zeera Rice",
    image:"zeerarice.jpg",
    price:"139"
  },
  {
    dish:"Plain Rice",
    image:"planrice.jpg",
    price:"79"
  },
  {
    dish:"Fried Rice",
    image:"fried rice.webp",
    price:"110"
  },
  {
    dish:"Musoor Daal",
    image:"daalfry.webp",
    price:"60"
  },
  {
    dish:"Tomato Chutney",
    image: "tomato.jpg",
    price:"20"
  },
  {
    dish:"Daal Tadka",
    image:"daal.jpeg",
    price:"99"
  },
]
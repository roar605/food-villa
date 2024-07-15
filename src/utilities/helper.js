
export function filterData(searchText, allRestra) {
    return allRestra.filter((x) => x?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
  }

export const menu = ["Plain Roti","Tawa Roti","Butter Naan","Rajma Chawal","Mishti Dohi","Rasugulla","IceCream Vanilla","IceCream Strawberry","IceCream Chocolate","Mix Sabji","Chicken Do Pyaza","Mushroom ","Roast Chicken","Butter Chicken"
,"Salad","Musoor Daal","Daal Tadka","Tomato Chutney","Zeera Rice","Plain Rice","Fried Rice",];
   
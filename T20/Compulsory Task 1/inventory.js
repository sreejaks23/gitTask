 /* Program to create an inventory */

class inventory {
  constructor(name, productCode, quantity, valuePerItem) {
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
    this.shoe = [];
  }

  //function to add the list of shoes into the array 'shoe'
  addshoe(name, productCode, quantity, valuePerItem)
  {
    let newShoe = new inventory(name, productCode, quantity, valuePerItem);
    this.shoe.push(newShoe);
    return this.shoe;
  }

  //function to search any shoe from the array of object
  searchshoe(input)
  {
    for(let i in this.shoe)
		{
			if(this.shoe[i].name == input)
			{
        return `${input} is available`;
      }
    }
    return `${input} is not available`;
  }

  //function to search the lower priced shoe from the array of objects
  getLowest_shoe()
  {
    for(let shoe of this.shoe)
    {
      let min_Value = Math.min.apply(Math, this.shoe.map(item => item.valuePerItem));
      if(shoe.valuePerItem == min_Value)
      {
        return `The lower priced shoe is ${shoe.name}`
      }
    }
  }

  //function to search the highest priced shoe from the array of objects
  getHighest_shoe()
  {
    for(let shoe of this.shoe)
    {
      let max_Value = Math.max.apply(Math, this.shoe.map(item => item.valuePerItem));
      if(shoe.valuePerItem == max_Value)
      {
        return `The highest priced shoe is ${shoe.name}`
      }
    }   
  }

  //function to edit any instance of class
  edit_shoe()
  {
      let objIndex = this.shoe.findIndex(obj => obj.name = 'Nike');
      this.shoe[objIndex].name = 'MS';
      return this.shoe[objIndex];
  }

  //function to sort the array of objects in ascending order
  sortArray_shoe()
  {
      let sort_Name = this.shoe.sort(
        (a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0);
      return sort_Name;
    }
  
  }


//created an object 'myshoes' to add all the list of shoes in the iventory class
let myShoes = new inventory;
 
//calling function to add all the shoe list in to the array
myShoes.addshoe('Nike', 'NK3366-203', 30, 50);
myShoes.addshoe('Adidas', 'AD3366-203', 100, 60);
myShoes.addshoe('Converse', 'CO3366-203', 25, 30);
myShoes.addshoe('Reebok', 'RE3366-203', 500, 80);
myShoes.addshoe('Puma', 'PU3366-203', 180, 25);

console.log(myShoes.searchshoe('Puma'));
console.log(myShoes.getLowest_shoe());
console.log(myShoes.getHighest_shoe());
console.log(myShoes.edit_shoe());
console.log(myShoes.sortArray_shoe());
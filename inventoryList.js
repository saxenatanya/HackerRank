function inventoryList() {
  // write your code here
  let items = [];

  const add = (name) =>{
      if(items.indexOf(name) === -1)
      items.push(name);
  }
  
  const remove = (name) =>{
      let i = items.indexOf(name);
      if(i !== -1)
      items.splice(i,1);
  }
  
  const getList = () =>{
      return items;
  }
//    console.log(items);
  return {add, remove, getList}
  
}

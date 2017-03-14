let addbtn = document.getElementById("addTodo")
let ls = localStorage
let listarr = []

addbtn.addEventListener('click', (e) => {
  const newitem = document.getElementById("addTodoItem").value
  const list = document.getElementById("todoList")
  if (newitem != '') {
    let node = document.createElement("LI")
    const text = document.createTextNode(newitem)
    let delbtn = document.createElement("BUTTON")
    let deltext = document.createTextNode("delete")
    delbtn.appendChild(deltext)
    node.appendChild(text)
    node.appendChild(delbtn)
    document.getElementById("todoList").appendChild(node)
   
   
    /////////Inserting elements into localStorage////////////////////////////////////
    listarr.push(newitem)
    let JSONarr = JSON.stringify(listarr)
    ls.setItem(listarr.length,JSONarr)
    const displaycons = JSON.parse(ls.getItem('listarr'))
    console.log(displaycons)
    /////////////////////////////////////////////////////////////////////////////
   
   
    document.getElementById("addTodoItem").value = ''
    delbtn.style.color = "Red";

    delbtn.addEventListener('click', (e) => {
      list.removeChild(node)
      ls.removeItem(listarr.length)
    })

    node.addEventListener('click', (e) => {
      node.classList.toggle("tasktoggle")
    })
  }
  
  else {
    alert("Please Enter The Task First")
  }

})


//   node.addEventListener('click', event => {
//     if(node.nodeValue=="new")
//     {
//         node.style.textDecoration = "line-through";
//         node.nodeValue = "old"    
//     }
//     if(node.nodeValue=="old")
//     {
//         node.style.textDecoration = "none";
//         node.nodeValue = "new"
//     }
// })

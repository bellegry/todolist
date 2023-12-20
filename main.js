// todoList
const todoList = document.querySelector(".list")
let todoTextList = []
let todoMemoList = []

function todoPlus() {
  let todoText = document.querySelector(".search input").value
  const temp = document.createElement("div")
  
  temp.innerHTML = `<input type="checkbox" class="todoMemo" name="${todoText}" id="todoMemo" onclick="is_checked()" />${todoText}<button class="deleteBtn" onclick="deleteBtn()">삭제</button>`

  todoList.append(temp)
  todoTextList.push(temp)
}

// checked
function is_checked() {
  todoMemoList = document.querySelectorAll(".todoMemo") 
  todoMemoList.forEach((el) => {
    if(el.checked) {
      el.parentElement.classList.add("on")
    } else {
      el.parentElement.classList.remove("on")
    }
  });
}

// delete
function deleteBtn() {
  todoMemoList = document.querySelectorAll(".todoMemo") 
  todoMemoList.forEach((el) => {
    if(el.checked) {
      el.parentElement.classList.add("on")
    } else {
      el.parentElement.classList.remove("on")
    }
  });
}



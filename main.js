const todoList = document.querySelector(".list")
const plusBtn = document.querySelector(".search button")

plusBtn.addEventListener("click", () => {
  const todoText = document.querySelector(".search input").value
  const temp = document.createElement("div")
  
  temp.innerHTML = `<input type="checkbox" class="todoMemo" name="${todoText}" id="todoMemo[]" onclick="is_checked()" />${todoText}<button class="deleteBtn">삭제</button>`

  todoList.append(temp)
  
  // check box
  function is_checked() {
    const todoMemoList = document.querySelectorAll(".todoMemo")
    
    for (const todoMemoList of todoMemo) {
      if(todoMemo.checked) {
        console.log("Asdf")
      }
    }
  }
})


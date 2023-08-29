document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById("item");
    const addButton = document.getElementById("agregar");
    const clearButton = document.getElementById("limpiar");
    const listContainer = document.getElementById("contenedor");
  
    // Cargar lista desde el almacenamiento local al cargar la página
    const savedList = JSON.parse(localStorage.getItem("lista")) || [];
    renderList(savedList);
  
    // Agregar un nuevo ítem al listado
    addButton.addEventListener("click", () => {
      const newItem = itemInput.value.trim();
      if (newItem !== "") {
        savedList.push(newItem);
        localStorage.setItem("lista", JSON.stringify(savedList));
        renderList(savedList);
        itemInput.value = "";
      }
    });
  
    // Limpiar la lista almacenada y la vista
    clearButton.addEventListener("click", () => {
      localStorage.removeItem("lista");
      savedList.length = 0;
      renderList(savedList);
    });
  
    // Función para mostrar la lista en el contenedor
    function renderList(items) {
      listContainer.innerHTML = "";
      items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.className = "list-group-item";
        listContainer.appendChild(li);
      });
    }
  });
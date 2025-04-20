function sortList() {
    const list = document.getElementById("interest-list");
    const items = Array.from(list.getElementsByTagName("li"));
    const sortedItems = items.sort((a, b) =>
      a.textContent.localeCompare(b.textContent)
    );
  
    list.innerHTML = "";
    sortedItems.forEach((item) => list.appendChild(item));
  }
  
// Sample data
const items = [
    { id: 1, name: "Item 1", details: "Details for Item 1" },
    { id: 2, name: "Item 2", details: "Details for Item 2" },
    { id: 3, name: "Item 3", details: "Details for Item 3" },
    // ... more items
  ];
  
  // Get the ID from the query parameter
  const queryParams = new URLSearchParams(window.location.search);
  const itemId = queryParams.get("id");
  
  // Render the list of items
  function renderItems() {
    const listContainer = document.getElementById("list-container");
    listContainer.innerHTML = "";
  
    items.forEach((item) => {
      const itemLink = document.createElement("a"); // Create an anchor element
      itemLink.className = "item"; // Apply the "item" class
      itemLink.textContent = item.name;
      itemLink.href = `details-page.html?id=${item.id}`; // Set the link URL
  
      listContainer.appendChild(itemLink);
    });
  }
  
  // Display details for a specific item
  function displayDetails(itemId) {
    const detailsContainer = document.getElementById("details-container");
    const selectedItem = items.find((item) => item.id === itemId);
    console.log("Selected Item:", selectedItem); // Add this line

  
    if (selectedItem) {
      detailsContainer.textContent = selectedItem.details;
    } else {
      detailsContainer.textContent = "No details available.";
    }
  }
  
  // Call the renderItems function to initialize the list of items
  renderItems();
  
  window.addEventListener("load", () => {
    displayDetails(itemId);
  });
  
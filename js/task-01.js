const items = document.querySelectorAll('ul#categories li.item');

items.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('ul li');
  console.log(`Category: ${categoryTitle}`);
  console.log(`Number of items: ${categoryItems.length}`);
});
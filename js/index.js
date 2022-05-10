const cartBtn = document.getElementById('cartBtn');
const cartBadge = document.getElementById('cartBadge');

cartBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  cartBadge.innerHTML++;
});
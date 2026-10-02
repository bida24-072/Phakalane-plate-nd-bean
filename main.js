// --- MENU DATA ---
const menuItems = [
    // Breakfast
    { id: 1, name: "Full Motswana Breakfast", desc: "Eggs, boerewors, baked beans, toast & coffee", price: 85, category: "breakfast" },
    { id: 2, name: "Pap & Milk", desc: "Traditional soft pap served with warm milk & sugar", price: 45, category: "breakfast" },
    { id: 3, name: "Omelette Deluxe", desc: "Three-egg omelette with cheese, peppers & mushrooms", price: 70, category: "breakfast" },
    
    // Mains
    { id: 4, name: "Seswaa & Bogobe", desc: "Slow-cooked shredded beef served with soft pap", price: 120, category: "mains" },
    { id: 5, name: "T-Bone Steak", desc: "300g grilled T-bone with chakalaka & pap", price: 180, category: "mains" },
    { id: 6, name: "Grilled Tilapia", desc: "Fresh tilapia with lemon butter & seasonal veggies", price: 150, category: "mains" },
    { id: 7, name: "Chicken Peri-Peri", desc: "Flame-grilled half chicken with spicy peri-peri sauce", price: 130, category: "mains" },
    
    // Light Meals
    { id: 8, name: "Beef Vetkoek", desc: "Golden fried dough stuffed with seasoned mince", price: 55, category: "light" },
    { id: 9, name: "Chicken Mayo Sandwich", desc: "Toasted sandwich with creamy chicken mayo", price: 60, category: "light" },
    { id: 10, name: "Garden Salad", desc: "Fresh greens, cucumber, tomato & feta", price: 65, category: "light" },
    
    // Drinks
    { id: 11, name: "Filter Coffee", desc: "Freshly brewed local roast", price: 35, category: "drinks" },
    { id: 12, name: "Cappuccino", desc: "Espresso with steamed milk & foam", price: 45, category: "drinks" },
    { id: 13, name: "Ginger & Lemon Tea", desc: "Refreshing house-made herbal tea", price: 30, category: "drinks" },
    { id: 14, name: "Fresh Mango Juice", desc: "100% fresh pressed mango", price: 40, category: "drinks" },
    
    // Desserts
    { id: 15, name: "Malva Pudding", desc: "Warm South African classic with custard", price: 55, category: "desserts" },
    { id: 16, name: "Chocolate Lava Cake", desc: "Molten chocolate cake with vanilla ice cream", price: 65, category: "desserts" }
];

// --- RENDER FULL MENU ---
function renderMenu(filter = 'all') {
    const menuList = document.getElementById('menu-list');
    if (!menuList) return;

    menuList.innerHTML = '';
    const filtered = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

    if (filtered.length === 0) {
        menuList.innerHTML = '<p style="text-align:center; color: #999;">No items in this category yet.</p>';
        return;
    }

    filtered.forEach(item => {
        menuList.innerHTML += `
            <div class="menu-item">
                <div class="menu-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
                <div class="menu-item-price">P${item.price.toFixed(2)}</div>
            </div>
        `;
    });
}

// --- RENDER FEATURED DISHES (Home Page) ---
function renderFeatured() {
    const featuredGrid = document.getElementById('featured-dishes');
    if (!featuredGrid) return;

    // Pick 3 popular dishes
    const featuredIds = [4, 5, 15];
    const featured = menuItems.filter(item => featuredIds.includes(item.id));

    featured.forEach(item => {
        featuredGrid.innerHTML += `
            <div class="dish-card">
                <div class="dish-img">
                    <img src="${getDishImage(item.id)}" alt="${item.name}">
                </div>
                <div class="dish-info">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <div class="dish-price">P${item.price.toFixed(2)}</div>
                </div>
            </div>
        `;
    });
}

// Map dish IDs to images
function getDishImage(id) {
    const images = {
        4: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        5: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        15: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    };
    return images[id] || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80';
}

// --- MENU FILTER ---
function filterMenu(category, btn) {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(category);
}

// --- RESERVATION FORM ---
function submitReservation(e) {
    e.preventDefault();
    const name = document.getElementById('res-name').value;
    alert(`Thank you, ${name}! Your reservation request has been received. We will confirm via SMS shortly.`);
    e.target.reset();
}

// --- CONTACT FORM ---
function submitContact(e) {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    e.target.reset();
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderFeatured();
    renderMenu('all');
});

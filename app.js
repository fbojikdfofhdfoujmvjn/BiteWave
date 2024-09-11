document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>
                    <img src="${product.imageUrl}" alt="${product.name}">
                `;
                productList.appendChild(productDiv);
            });
        });
});

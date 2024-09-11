document.getElementById('product-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const productData = {
        name: document.getElementById('name').value,
        price: parseFloat(document.getElementById('price').value),
        description: document.getElementById('description').value,
        imageUrl: document.getElementById('imageUrl').value
    };

    fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert('Product added successfully');
        document.getElementById('product-form').reset();
    })
    .catch(error => {
        console.error('Error adding product:', error);
        alert('Failed to add product');
    });
});

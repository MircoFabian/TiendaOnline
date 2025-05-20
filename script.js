function showProductDetail(productId) {
    // Obtener datos del producto según el ID
    const products = {
        producto1: {
            image: 'img/producto1.jpg',
            title: 'Camisa Casual',
            description: 'Una camisa elegante para cualquier ocasión.',
            price: 'S/29.99'
        },
        producto2: {
            image: 'img/producto2.jpg',
            title: 'Pantalón Slim Fit',
            description: 'Pantalón de corte moderno, ideal para el día a día.',
            price: 'S/49.99'
        },
        producto3: {
            image: 'img/producto3.jpg',
            title: 'Pantalón Slim Fit',
            description: 'Pantalón de corte moderno, ideal para el día a día.',
            price: 'S/49.99'
        },
        producto4: {
            image: 'img/producto4.jpg',
            title: 'Pantalón Slim Fit',
            description: 'Pantalón de corte moderno, ideal para el día a día.',
            price: 'S/49.99'
        }
    };

    const product = products[productId];

    // Mostrar la ventana de detalles del producto
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-title').innerText = product.title;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('product-detail').style.display = 'flex';
}

function closeDetail() {
    document.getElementById('product-detail').style.display = 'none';
}
function contactViaWhatsApp(producto) {
    const numero = "51944017630"; // Reemplaza con tu número real
    const mensaje = encodeURIComponent(`Hola, estoy interesado en el producto: ${producto}`);
    window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
}

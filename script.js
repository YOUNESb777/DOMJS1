document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(item => {
        const incrementBtn = item.querySelector('.increment');
        const decrementBtn = item.querySelector('.decrement');
        const deleteBtn = item.querySelector('.delete-item');
        const likeBtn = item.querySelector('.like-item');
        const quantityElem = item.querySelector('.quantity');
        const priceElem = item.querySelector('.price');
        const totalElem = document.getElementById('total');

        incrementBtn.addEventListener('click', function() {
            let quantity = parseInt(quantityElem.textContent);
            quantity++;
            quantityElem.textContent = quantity;
            updateTotal();
        });

        decrementBtn.addEventListener('click', function() {
            let quantity = parseInt(quantityElem.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElem.textContent = quantity;
                updateTotal();
            }
        });

        deleteBtn.addEventListener('click', function() {
            item.remove();
            updateTotal();
        });

        likeBtn.addEventListener('click', function() {
            likeBtn.classList.toggle('liked');
        });

        function updateTotal() {
            let total = 0;
            cartItems.forEach(item => {
                const quantity = parseInt(item.querySelector('.quantity').textContent);
                const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
                total += quantity * price;
            });
            totalElem.textContent = total.toFixed(2);
        }

        updateTotal();
    });
});

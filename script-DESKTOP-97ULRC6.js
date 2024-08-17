        // Initialize quantity
        let quantity = 0;

        // Function to increase the quantity
        function increaseQuantity() {
            quantity++;
            document.getElementById("quantity").textContent = quantity;
        }

        // Function to decrease the quantity
        function decreaseQuantity() {
            if (quantity > 0) {  // Ensure quantity doesn't go below 0
                quantity--;
                document.getElementById("quantity").textContent = quantity;
            }
        }
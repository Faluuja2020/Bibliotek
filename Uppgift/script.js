// Define a Book class
class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
}

// Create instances of the Book class
const book1 = new Book("Harry Potter", "J.K. Rowling", "Fantasy");
const book2 = new Book("Game of Thrones", "George R.R. Martin", "Fantasy");

// Example: Add event listener to a button
document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", function() {
        // Add functionality here
        addToCart(this.dataset.bookId); // Assuming addToCart function is defined
    });
});

// Redirect to another page with query parameters
document.querySelectorAll(".book-details").forEach(book => {
    book.addEventListener("click", function() {
        window.location.href = "checkout.html?bookId=" + this.dataset.bookId;
    });
});

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isRead = false;
    }

    markAsRead() {
        this.isRead = true;
    }

    getSummary() {
        const status = this.isRead ? "Đã đọc" : "Chưa đọc";
        return `Sách ${this.title} của tác giả ${this.author}. (${status})`;
    }
}
const book1 = new Book("iviettech", "phong");


book1.markAsRead();

console.log(book1.getSummary()); 

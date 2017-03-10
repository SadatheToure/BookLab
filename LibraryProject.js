var Lib = function() {};
Lib.prototype.myBookArray = new Array();

Lib.prototype.addBook = function(book) {
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i].title == book.title) {
            return false;
        }
    }
    this.myBookArray.push(book);
    return true;
};

Lib.prototype.removeBookByTitle = function(title) {
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i].title == title) {
            this.myBookArray.splice(i, 1);
            return true
        }
    }
    return false;
};

Lib.prototype.removeBookByAuthor = function(author) {
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i].author == author) {
            this.myBookArray.splice(i, 1);
            return true
        }
    }
    return false;
};

Lib.prototype.getRandomBook = function() {
    var random = Math.floor(Math.random() * this.myBookArray.length);
    return this.myBookArray.length <= 0 ? null : this.myBookArray[random];
};

Lib.prototype.getBookByTitle = function(title) {
    var len = this.myBookArray.length;
    var titleArray = new Array();
    var Reg = new RegExp(title, 'gi');
    for (var i = 0; i < len; i++) {
        if (this.myBookArray[i].title.match(Reg)) // if title matched return that book
        {
            titleArray.push(this.myBookArray[i])
        }
    }
    return titleArray; // otherwise returns null
};

Lib.prototype.getBooksByAuthor = function(authorName) { //accepts string

    var len = this.myBookArray.length;
    var authorArray = new Array();
    var Reg = new RegExp(authorName, 'gi');
    for (var i = 0; i < len; i++) {
        if (this.myBookArray[i].author.match(Reg)) // if title matched return that book
        {
            authorArray.push(this.myBookArray[i])
        }
    }
    return authorArray; // otherwise returns null
};

Lib.prototype.getAuthors = function() { // returns all authors
    var len = this.myBookArray.length;
    var authors = new Array();
    if (len > 0) {
        for (var i = 0; i < len; i++) {
            authors.push(this.myBookArray[i].author);
        }
        return authors;
    } else {
        return [];
    }
};

Lib.prototype.getRandomAuthorName = function() {
    var number = this.myBookArray.length;
    var random = Math.floor(Math.random() * 100) % number;
    if (number > 0)
    {
        return this.myBookArray[random].author;
    } else {
        return null;
    }
};

Lib.prototype.addBooks = function(newbook) {
    var leng = newbook.length;
    console.log("Length of Array is = " + leng);
    var i = 0
    if (leng > 0) {
        for (i = 0; i < leng; i++) {
            this.myBookArray.push(newbook[i]);
        }
        return leng + " of Books Successfully added ";
    } else {
        return 0;
    }
};
function Book(title, author, page, date) {
    this.title = title; // title of book
    this.author = author; // author of book
    this.numberOfPages = page; // pages of book
    this.publishDate = date; // publish date of book
}

$(function() {
    window.gMyBook1 = new Book("Programming", "John Doe", 50, "01/04/1980");
    window.gMyBook2 = new Book("HTML", "Travis Doe", 88, "01/04/2012");
    window.gMyBook3 = new Book("SAAS", "Erik Doe", 95, "01/04/2012");
    window.gMyBook4 = new Book("Javascript", "Ruben Doe", 125, "01/04/2012");

    window.bLib = new Lib();
});

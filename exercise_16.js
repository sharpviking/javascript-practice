const Post = {
    title: String,
    body: String,
    author: String,
    views: Number,
    comments: [
        { author: String, body: String },
        { author: String, body: String }
    ],

    isLive: Boolean

}

console.log(Post);


let post = new Post('a', 'b', 'c')


function Post(title, body, author) {
    title;
    body;
    author;
    this.vies = 0;
    this.comments = [];
    this.isLive = false;

}

console.log(Post);
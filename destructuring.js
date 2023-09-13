const post = {
  data: {
  id:1,
    title:'post 1',
    text:'hello world',
    author:'groom',
}
};
// const id = post.data.id;
// const title = post.data.title;
// const text = post.data.text;
// const author = post.data.author;

const {id,title,text,author}=post.data;
console.log(id,title,text,author);
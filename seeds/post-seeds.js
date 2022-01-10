const { Post } = require('../models');

const postdata = [
  {
    title: 'Introduction to Bootstrap',
    post_url: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
    user_id: 10
  },
  {
    title: 'JavaScript Tutorial',
    post_url: 'https://www.w3schools.com/js/',
    user_id: 8
  },
  {
    title: 'Python',
    post_url: 'https://www.python.org/',
    user_id: 1
  },
  {
    title: 'React',
    post_url: 'https://reactjs.org/',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

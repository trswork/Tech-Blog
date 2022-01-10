const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Tempor gubergren sanctus nonumy et gubergren amet. Tempor amet no no clita dolor no dolor vero.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'This is a test.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Dolores consetetur duo stet diam at diam ipsum sanctus erat diam, lorem et diam elitr.Aliquam erat volutpat. In congue.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.Gubergren nonumy takimata sed at sit dolor magna et, sanctus ipsum clita consetetur et est tempor sit..',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'In hac habitasse platea dictumst.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Vivamus vestibulum sagittis sapien.At est dolor sit eirmod amet dolores voluptua aliquyam sanctus invidunt. Accusam dolore elitr nonumy sanctus.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.Eirmod voluptua ea sed dolor at sed ipsum consetetur lorem kasd,.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Ipsum eirmod est stet eos ipsum gubergren. Ea lorem dolores eos sed est sanctus et ipsum. Sed.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Et et amet sadipscing duo amet. Gubergren sea sanctus diam sit. Ipsum tempor eirmod et at et sit.',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Sed kasd sanctus invidunt dolore et. Accusam et.',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Invidunt dolor accusam duo et aliquyam gubergren et lorem. Clita sanctus rebum at ipsum diam sit sit sit, eirmod stet.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Eos dolor sea stet dolor et clita et justo tempor et, diam ea et ipsum ipsum. Invidunt aliquyam ipsum erat et et.',
    user_id: 5,
    post_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

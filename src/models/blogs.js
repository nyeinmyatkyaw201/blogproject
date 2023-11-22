const { sequalize, Sequelize } = require(".");

module.exports = (sequalize, Sequelize) => {
  const Blogs = sequalize.define("blogs", {
    title: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Blogs;
};

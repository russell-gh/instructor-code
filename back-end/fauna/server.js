const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({
  secret: "fnAEPIn7K9AAx7aEiDeKs1QUUpWfR9K-NqyKxBzS",
});
const test = (event, callback) => {
  return client
    .query(q.Paginate(q.Match(q.Ref("indexes/all_todos"))))
    .then((response) => {
      callback(false, response);
    })
    .catch((error) => {
      callback(error);
    });
};

test();

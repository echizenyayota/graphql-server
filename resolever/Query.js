const Query = {
  posts(parent, args, { db }, info){
    // クエリを書いたときに引数が「ない」時は模擬データベースの内容を全て表示
    if (!args.query) {
      return db.posts
    } else {
      return db.posts.filter((post) => {
        const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
        const isAuthorMatch = post.author.toLowerCase().includes(args.query.toLowerCase())
        retuern isTitleMatch || isAuthorMatch
      })
    }
  }
}

module.exports = Query
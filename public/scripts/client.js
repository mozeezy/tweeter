$(document).ready(function () {
  // Fake data taken from initial-tweets.json
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  const renderTweets = function (tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let post of tweets) {
      const newTweet = createTweetElement(post);
      $("#tweets-container").append(newTweet);
    }
  };

  const createTweetElement = function (tweet) {
    // create a new tweet using template literals
    let $tweet = `<article id="tweet">
<header class="handle">
<div>
<img src = ${tweet.user.avatars} />
  ${tweet.user.name}
</div>  
  <div>${tweet.user.handle} </div>
  </header>
    <div class="content"> <b> ${tweet.content.text} </b></div>
    <footer class="foot">
    <time> ${timeago.format(tweet["created_at"])} </time>
    <div class="actions">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
  </div>
</footer>
</article>
</section>
<div>
`;
    return $tweet;
  };

  renderTweets(data);
});

{
  /* <article id="tweet">
<header class="handle">
  Jotaro Kujo
  <div>@Jojo</div>
</header>
  <div class="content"> <b>STAR PLATINUM!!</b></div>
<footer class="foot">
  3 days ago
  <div class="actions">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
  </div>
</footer>
</article>
</section>
<div> */
}

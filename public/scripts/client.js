$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    const data = $('form').serialize();
    console.log(data);
    $.ajax ('/tweets', {method: 'POST', data: data})
    .done (function () {console.log("Tweet submitted.")})


  })

  // Fake data taken from initial-tweets.json
  const data = [
    {
      user: {
        name: "Jotaro Kujo",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@KujoJ",
      },
      content: {
        text: "STAR PLATINUM!!! ZA WARUDO",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Josuke Higashikata",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@Josuke",
      },
      content: {
        text: "First tweet. GREATO!",
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

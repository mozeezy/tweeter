$(document).ready(function () {
  $('.error').hide();
  $("form").on("submit", function (event) {
    event.preventDefault();
    $('.error').slideUp();
    const data = $("form").serialize();
    const length = $("textarea#tweet-text").val().length;

    if (length > 140) {
      $('.error')
      .show()
      $('.error')
      .text("⚠️ Your tweet contains too many characters. ⚠️")
    }

    else if (!length) {
      $('.error')
      .show()
      $('.error')
      .text("⚠️ Your tweet is empty. ⚠️")
    }
    else {
      $.ajax("/tweets", { method: "POST", data: data }).done(function () {
        $("#tweets-container").empty();
        loadTweets();
      });
    }
  });

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = function (tweets) {
    for (let post of tweets) {
      const newTweet = createTweetElement(post);
      $("#tweets-container").prepend(newTweet);
    }
  };

  const loadTweets = function () {
    $.ajax("/tweets", { method: "GET" }).done(function (data) {
      renderTweets(data);
    });
  };

  const createTweetElement = function (tweet) {
    let $tweet = `<article id="tweet">
<header class="handle">
<div>
<img src = ${tweet.user.avatars} />
  ${tweet.user.name}
</div>  
  <div>${tweet.user.handle} </div>
  </header>
    <div class="content"> <b> ${escape(tweet.content.text)} </b></div>
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
  loadTweets();
});

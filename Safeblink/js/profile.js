document.addEventListener("DOMContentLoaded", function() {
  const achievementCard10 = document.getElementById("achievement-card-10");
  const achievementCard20 = document.getElementById("achievement-card-20");
  const achievementCard50 = document.getElementById("achievement-card-50");
  const achievementCardComment = document.getElementById("achievement-card-comment");

  let videoClicks = parseInt(localStorage.getItem("videoClicks")) || 0;
  let comments = parseInt(localStorage.getItem("comments")) || 0;

  function handleVideoClick(element) {
    videoClicks++;
    localStorage.setItem("videoClicks", videoClicks);

    if (videoClicks >= 10) {
      achievementCard10.classList.remove("d-none");
    }
    if (videoClicks >= 20) {
      achievementCard20.classList.remove("d-none");
    }
    if (videoClicks >= 50) {
      achievementCard50.classList.remove("d-none");
    }
  }

  function handleComment() {
    comments++;
    localStorage.setItem("comments", comments);

    if (comments > 0) {
      achievementCardComment.classList.remove("d-none");
    }
  }

  window.handleVideoClick = handleVideoClick;
  window.handleComment = handleComment;
});

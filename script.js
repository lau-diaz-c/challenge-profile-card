let followButton = document.querySelector('#follow');
followButton.addEventListener("click", changeFollow)

function changeFollow() {
  if (followButton.innerHTML === "Follow") {
    followButton.innerHTML = "Followed!";
  } else if (followButton.innerHTML === "Followed!") {
    followButton.innerHTML = "Unfollowed";
  } else {
    followButton.innerHTML = "Follow";
  }
}

let messageButton = document.querySelector("#message");
messageButton.addEventListener("click", changeMessage);

function changeMessage() {
  if (messageButton.innerHTML === "Message") {
    messageButton.innerHTML = "No account";
  } else {
    alert("Create an account or sign in!");
    setTimeout(() => {
      messageButton.innerHTML = "Message";
    }, 0);
  }
}
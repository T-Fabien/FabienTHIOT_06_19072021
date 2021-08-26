/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function AddLike(clickid) {
  likediv = document.getElementById(clickid);
  const likeelement = likediv.parentElement;
  let likecount = likeelement.innerHTML.match(/\d/g).join('');
  likecount = likecount.substring(0, likecount.length - 1);
  let count = parseInt(likecount, 10) + 1;
  likeelement.innerHTML = `<p class="like">${count}</p>
  <div id="likes_id_${clickid}" onclick="RemoveLike(this.id)">
  <i class="heart fa-heart fas" aria-label="likes"></i></div>`;

  totallikediv = document.getElementById('total-likes');
  totallikecount = totallikediv.innerHTML.match(/\d/g).join('');
  count = parseInt(totallikecount, 10) + 1;
  totallikediv.innerHTML = `<p>${count}</p>
  <i class="fas fa-heart heart heart-global"></i>`;
}

function RemoveLike(clickid) {
  likediv = document.getElementById(click_id);
  const likeelement = likediv.parentElement;
  let likecount = likeelement.innerHTML.match(/\d/g);
  likecount = likecount.join('');
  likecount = likecount.substring(0, likecount.length - 1);
  let count = parseInt(likecount, 10) - 1;
  likeelement.innerHTML = `<p class="like">${count}</p>
  <div id="likes_id_${clickid}" onclick="AddLike(this.id)">
  <i class="heart far fa-heart" aria-label="likes"></i></div>`;

  totallikediv = document.getElementById('total-likes');
  totallikecount = totallikediv.innerHTML.match(/\d/g).join('');
  count = parseInt(totallikecount, 10) - 1;
  totallikediv.innerHTML = `<p>${count}</p>
  <i class="fas fa-heart heart heart-global"></i>`;
}

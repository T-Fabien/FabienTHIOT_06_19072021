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
  <span class="heart fa-heart fas" aria-label="likes"></span></div>`;

  totallikediv = document.getElementById('total-likes');
  totallikecount = totallikediv.innerHTML.match(/\d/g).join('');
  count = parseInt(totallikecount, 10) + 1;
  totallikediv.innerHTML = `<p>${count}</p>
  <span class="fas fa-heart heart heart-global"></span>`;
}

function RemoveLike(clickid) {
  likediv = document.getElementById(clickid);
  const likeelement = likediv.parentElement;
  let likecount = likeelement.innerHTML.match(/\d/g);
  likecount = likecount.join('');
  likecount = likecount.substring(0, likecount.length - 1);
  let count = parseInt(likecount, 10) - 1;
  likeelement.innerHTML = `<p class="like">${count}</p>
  <div id="likes_id_${clickid}" onclick="AddLike(this.id)">
  <span class="heart far fa-heart" aria-label="likes"></span></div>`;

  totallikediv = document.getElementById('total-likes');
  totallikecount = totallikediv.innerHTML.match(/\d/g).join('');
  count = parseInt(totallikecount, 10) - 1;
  totallikediv.innerHTML = `<p>${count}</p>
  <span class="fas fa-heart heart heart-global"></span>`;
}

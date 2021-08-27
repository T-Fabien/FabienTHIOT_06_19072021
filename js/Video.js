/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

class Video {
  grid(firstname, FilteredData, i) {
    return `
    <article class="gridcell" role="cell">
    <video controls tabindex="${i * 2 + 10}">
        <source src="../images/${firstname}/${
      FilteredData[i].video
    }" type="video/mp4" onclick="openModal();currentSlide(${i + 1})">
    </video>
        <div tabindex="${i * 2 + 11}" class="photo_desc">
            <p class="photo_name">${FilteredData[i].title}</p>
            <div class="like_count">
            <p class="like">${FilteredData[i].likes}</p>
            <div id="likes_id_${i}"onclick="AddLike(this.id)">
            <span class="heart far fa-heart" aria-label="likes"></span></div></div> 
        </div>
</article>
    `;
  }

  lightbox(firstname, FilteredData, i) {
    return `
    <div class="mySlides">
        <video controls tabindex="2">
            <source src="../images/${firstname}/${FilteredData[i].video}" type="video/mp4">
        </video>
        <p class="photo_name" tabindex="3">${FilteredData[i].title}</p>
    </div>
    `;
  }
}

export default Video;

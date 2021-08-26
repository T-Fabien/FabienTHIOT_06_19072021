/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class Image {
  grid(firstname, FilteredData, i) {
    return `
    <article class="gridcell" role="cell">
    <img tabindex="${i * 2 + 10}" src="../images/${firstname}/${FilteredData[
      i
    ].image.replace(/[-\s]/g, '_')}" alt="${
      FilteredData[i].title
    }" onclick="openModal();currentSlide(${i + 1})">
            <div tabindex="${i * 2 + 11}" class="photo_desc">
                <p class="photo_name">${FilteredData[i].title}</p>
                <div class="like_count">
                <p class="like">${FilteredData[i].likes}</p>
                <div id="likes_id_${i}"onclick="AddLike(this.id)">
                <i class="heart far fa-heart" aria-label="likes"></i></div></div> 
            </div>
    </article>
      `;
  }

  lightbox(firstname, FilteredData, i) {
    return `
    <div class="mySlides">
        <img src="../images/${firstname}/${FilteredData[i].image.replace(
      /[-\s]/g,
      '_'
    )}" alt="${FilteredData[i].title}" tabindex="2">
        <p class="photo_name" tabindex="3">${FilteredData[i].title}</p>
    </div>
    `;
  }
}

export default Image;

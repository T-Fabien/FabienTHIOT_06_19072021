class MediaFactory {
  constructor(type) {
    switch (type) {
      case "Image":
        return new Image();
      case "Video":
        return new Video();
    }
  }
}

class Image {
  constructor() {
  }
  grid(firstname, filtered_data, i) {
    return `
    <article class="gridcell" role="cell">
    <img tabindex="${i*2 + 10}" src="../images/${firstname}/${filtered_data[
      i
    ].image.replace(/[-\s]/g, "_")}" alt="${
      filtered_data[i].title
    }" onclick="openModal();currentSlide(${i + 1})">
            <div tabindex="${i*2 + 11}" class="photo_desc">
                <p class="photo_name">${filtered_data[i].title}</p>
                <p class="like">${
                  filtered_data[i].likes
                }<i class="fas fa-heart" aria-label="likes"></i></p> 
            </div>
    </article>
      `;
  }
  lightbox(firstname, filtered_data, i) {
    return `
    <div class="mySlides">
        <img src="../images/${firstname}/${filtered_data[i].image.replace(
            /[-\s]/g,
            "_"
            )}" alt="${filtered_data[i].title}" tabindex="2">
        <p class="photo_name" tabindex="3">${filtered_data[i].title}</p>
    </div>
    `;
  }
}
class Video {
  constructor(filtered_data, i, firstname) {
    firstname = firstname;
    filtered_data = filtered_data;
    i = i;
  }
  grid(firstname, filtered_data, i) {
    return `
    <article class="gridcell" role="cell">
    <video controls tabindex="${i*2 + 10}">
        <source src="../images/${firstname}/${
      filtered_data[i].video
    }" type="video/mp4" onclick="openModal();currentSlide(${i + 1})">
    </video>
        <div tabindex="${i*2 + 11}" class="photo_desc">
            <p class="photo_name">${filtered_data[i].title}</p>
            <p class="like">${
              filtered_data[i].likes
            }<i class="fas fa-heart" aria-label="likes"></i></p> 
        </div>
</article>
    `;
  }
  lightbox(firstname, filtered_data, i) {
    return `
    <div class="mySlides">
        <video controls tabindex="2">
            <source src="../images/${firstname}/${filtered_data[i].video}" type="video/mp4">
        </video>
        <p class="photo_name" tabindex="3">${filtered_data[i].title}</p>
    </div>
    `;
  }
}

export default MediaFactory;

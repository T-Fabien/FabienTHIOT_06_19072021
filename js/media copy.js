class MediaFactory {
  constructor(type, filtered_data, firstname ) {
    switch (type) {
      case "Image":
        console.log("image ");
        return new Image();
      case "Video":
        console.log("video");
        return new Video().grid();
    }
  }
}

class Image {
  constructor() {}
  grid() {
    return `
      <article class="gridcell" role="cell">
      <img tabindex="10" src="../images/${firstname}/${filtered_data[
      i
    ].image.replace(/[-\s]/g, "_")}" alt="${
      filtered_data[i].title
    }" onclick="openModal();currentSlide(${i + 1})">
              <div tabindex="11" class="photo_desc">
                  <p class="photo_name">${filtered_data[i].title}</p>
                  <p class="like">${
                    filtered_data[i].likes
                  }<i class="fas fa-heart" aria-label="likes"></i></p> 
              </div>
      </article>
      `;
  }
  lightbox() {
    console.log("image lightbox");
    return `<div class="mySlides">
        <img src="../images/${firstname}/${filtered_data[i].image.replace(
      /[-\s]/g,
      "_"
    )}" alt="${filtered_data[i].title}">
  <p class="photo_name">${filtered_data[i].title}</p>
      </div>
    `;
  }
}
class Video {
  constructor() {}
  grid() {
    return `
      <article class="gridcell" role="cell">
      <video controls tabindex="10">
      <source src="../images/${firstname}/${
      filtered_data[i].video
    }" type="video/mp4" onclick="openModal();currentSlide(${i + 1})">
  </video>
      <div tabindex="11" class="photo_desc">
          <p class="photo_name">${filtered_data[i].title}</p>
          <p class="like">${
            filtered_data[i].likes
          }<i class="fas fa-heart" aria-label="likes"></i></p> 
      </div>
      </article>
      `;
  }
  lightbox() {
    console.log("video lightbox");
    return `<div class="mySlides">
        <video controls tabindex="10">
        <source src="../images/${firstname}/${filtered_data[i].video}" type="video/mp4">
    </video>
    <p class="photo_name">${filtered_data[i].title}</p>
      </div>
    `;
  }
}

export default MediaFactory;

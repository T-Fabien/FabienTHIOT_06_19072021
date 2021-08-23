/* eslint-disable import/extensions */
import Image from './Image.js';
import Video from './Video.js';

class MediaFactory {
  constructor(type) {
    switch (type) {
      case 'Image':
        return new Image();
      case 'Video':
        return new Video();
      default:
        break;
    }
  }
}

export default MediaFactory;

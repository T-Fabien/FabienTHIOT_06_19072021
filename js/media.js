import Image from './Image';
import Video from './Video';

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

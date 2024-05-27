const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
  </li>
  `,
  )
  .join('');

galleryContainer.innerHTML = galleryMarkup;

const addStylesToImages = () => {
  const galleryImages = document.querySelectorAll('.gallery-image');
  galleryImages.forEach(image => {
    image.style.width = '100%';
    image.style.height = '200px';
    image.style.objectFit = 'cover';
    image.style.transition = 'transform 0.5s';

    image.addEventListener('mouseover', () => {
      image.style.transform = 'scale(1.05)';
    });

    image.addEventListener('mouseout', () => {
      image.style.transform = 'scale(1)';
    });
  });

  const galleryItemContainers = document.querySelectorAll('.gallery-item');
  galleryItemContainers.forEach(item => {
    item.style.overflow = 'hidden';
    item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  });
};

const addStyles = () => {
  const gallery = document.querySelector('.gallery');
  document.body.style.display = 'flex';
  document.body.style.alignItems = 'center';
  document.body.style.justifyContent = 'center';
  document.body.style.minHeight = '100vh';
  document.body.style.margin = '0';
  gallery.style.gap = '10px';
  gallery.style.padding = '0';
  gallery.style.margin = '0';
  gallery.style.maxWidth = '1200px';
  gallery.style.display = 'grid';
  gallery.style.gridTemplateColumns = 'repeat(3, 1fr)';
  gallery.style.listStyleType = 'none';
};

addStyles();
addStylesToImages();

galleryContainer.addEventListener('click', event => {
  event.preventDefault();
  const isGalleryImage = event.target.classList.contains('gallery-image');
  if (!isGalleryImage) return;
  const bigImage = event.target.getAttribute('data-source');

  const instance = basicLightbox.create(
    ` <img src="${bigImage}" alt="${event.target.alt}" 
    style="display: block; width: 62vw; height: 74vh; 
    object-fit: cover;"> `,
    {
      onShow: instance => {
        instance.element().querySelector('img').onclick = instance.close;
      },
    },
  );
  instance.show();
});

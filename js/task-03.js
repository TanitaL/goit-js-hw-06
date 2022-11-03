const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallerylist = document.querySelector('.gallery')

const imagesList = images.map(image => `<li><img class="picture" src=${image.url} width = '200' alt='${image.alt}'></img></li>`)
	.join('')

  gallerylist.insertAdjacentHTML('beforeend', imagesList)
   
  
const pictures = document.querySelectorAll('.picture')

gallerylist.style.display = 'flex';
gallerylist.style.flexWrap = 'column-reverse'
gallerylist.style.listStyle = 'none'
gallerylist.style.gap = '10px'
gallerylist.style.justifyContent = 'center'

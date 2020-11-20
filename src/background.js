export default function background(keyword) {
  const heroDiv = document.querySelector('.has-bg-img');
  const baseUrl = 'https://source.unsplash.com/1920x1400/?';
  const fullUrl = `${baseUrl}weather,${keyword}`;
  heroDiv.style.backgroundImage = `url('${fullUrl}')`;
}

const imgLeft = document.getElementById('img-left');
const imgCenter = document.getElementById('img-center');
const imgRight = document.getElementById('img-right');

let images = [1, 2, 3, 4, 5];

function updateImages() {
    let current = parseInt(imgCenter.getAttribute('tr'));
    current++;
    if (current > 5) {
        current = 1;
    }
    imgCenter.setAttribute('tr', current);
    imgCenter.setAttribute('src', `images/parr${current}.jpg`);

    images.push(images.shift());

    imgLeft.setAttribute('src', `images/parr${images[0]}.jpg`);
    imgLeft.setAttribute('tr', images[0]);

    imgRight.setAttribute('src', `images/parr${images[2]}.jpg`);
    imgRight.setAttribute('tr', images[2]);
}

imgCenter.addEventListener('click', updateImages);

imgCenter.addEventListener('mouseover', function() {
    imgCenter.style.height = '110%'; 
});

imgCenter.addEventListener('mouseout', function() {
    imgCenter.style.height = '100%';
});
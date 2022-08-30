let examplePhoto = [

    "assets/img/content/content1.jpeg",
    "assets/img/content/content2.jpeg",
    "assets/img/content/family.jpeg",
    "assets/img/content/family1.jpeg",
    "assets/img/content/family2.jpeg",
    "assets/img/content/food.jpeg",
    "assets/img/content/food1.jpeg",
    "assets/img/content/food2.jpeg",
    "assets/img/content/people.jpeg",
    "assets/img/content/people1.jpeg",
    "assets/img/content/people2.jpeg",
    "assets/img/content/wedding.jpeg",
    "assets/img/content/wedding1.jpeg",
    "assets/img/content/wedding2.jpeg",
    "assets/img/content/content.jpeg",
]

let photoCounter = -1;

function photoImgNext() {
    let img = document.getElementById("photo");
    if (photoCounter < examplePhoto.length - 1)
        photoCounter++
    else {
        photoCounter = 0
    }
    img.src = examplePhoto[photoCounter];
}

function photoImgPrev() {
    let img = document.getElementById("photo");
    if (photoCounter > 0)
        photoCounter--
    else {
        photoCounter = examplePhoto.length - 1
    }
    img.src = examplePhoto[photoCounter];
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
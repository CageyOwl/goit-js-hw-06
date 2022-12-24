const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// The code starts here

const galleryStyles = {
  display: "flex",
  wrap: "wrap",
  gap: "30px",
  padding: "15px",
};

const gallery = document.querySelector(".gallery");
for (let s in galleryStyles) {
  gallery.style[s] = galleryStyles[s];
}

for (let img of images) {
  const liImg = document.createElement("img");
  liImg.src = img.url;
  liImg.alt = img.alt;

  const li = document.createElement("li");
  li.style.flexGrow = "1";
  liImg.style.width = "100%";

  li.append(liImg);

  gallery.append(li);
}

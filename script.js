
const projectDetails = {
  "go-kart": {
    title: "Electric Go-Kart",
    text: "Custom built electric powertrain, capable of accelerating the single-rider vehicle up to 60 mph. I modified the steering geometry, wheelbase, and electronics of the kart for optimal performance. Specs include: dual motor, li-ion battery, 9kw peak power, 150lb curb weight.",
    images: ["image1", "image2", "image3", "image4", "image5", "image6"]
  },
  "mini-chopper": {
    title: "Electric Mini Chopper",
    text: "Dual-motor powertrain and Li-ion battery were retrofitted to an existing motorcycle frame...",
    images: ["image7", "image8", "image9", "image10", "image11", "image12"]
  }
  // Add other projects the same way...
};

const boxes = document.querySelectorAll(".project-box");
const detailBox = document.getElementById("project-detail");
const title = document.getElementById("detail-title");
const text = document.getElementById("detail-text");
const imagesContainer = document.getElementById("detail-images");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    const project = projectDetails[box.dataset.project];
    if (!project) return;

    title.textContent = project.title;
    text.textContent = project.text;
    imagesContainer.innerHTML = "";
    project.images.forEach(src => {
      const img = document.createElement("img");
      img.src = `${src}.jpg`;
      img.classList.add("zoom-on-hover");
      imagesContainer.appendChild(img);
    });
    detailBox.classList.remove("hidden");
  });
});

document.addEventListener("click", e => {
  if (!e.target.closest(".project-box") && !e.target.closest("#project-detail")) {
    detailBox.classList.add("hidden");
  }
});

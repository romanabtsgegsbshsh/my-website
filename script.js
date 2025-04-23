const projects = [
    {
      title: "Electric Go-Kart",
      thumb: "thumb1",
      text: "Custom built electric powertrain, capable of accelerating the single-rider vehicle up to 60 mph. I modified the steering geometry, wheelbase, and electronics of the kart for optimal performance. Specs include: dual motor, li-ion battery, 9kw peak power, 150lb curb weight.",
      images: ["image1", "image2", "image3", "image4", "image5", "image6"]
    },
    {
      title: "Electric Mini Chopper",
      thumb: "thumb2",
      text: "Dual-motor powertrain and Li-ion battery were retrofitted to an existing motorcycle frame. The handlebars feature an electronic twist throttle and forward/reverse switch. The majority of the rear end was re-fabricated to accommodate the battery, motor, and custom drivetrain. Top speed is around 60mph, although the bike is geared for high torque.",
      images: ["image7", "image8", "image9", "image10", "image11", "image12"]
    },
    {
      title: "Thrust Vector Control System",
      thumb: "thumb3",
      text: "Design and integration of thrust-vector control system for a liquid augmented solid rocket motor. This is part of a school project called Rocket Powered Lander. I was recently promoted to Lead for the mechanisms subteam. Nearing the end of the design phase, I am currently working on a manufacturing plan for Fall 2025.",
      images: ["image13", "image14", "image15", "image16", "image17", "image18"]
    },
    {
      title: "Tesla Coil",
      thumb: "thumb4",
      text: "Did research and experimentation about electricity to construct a 5 foot tall Tesla Coil. Generates an excess of 500,000 volts producing ~6ft long electrical arcs. Extremely loud and crazy to watch in person",
      images: ["image19", "image20", "image21", "image22", "image23", "image24"]
    },
    {
      title: "Custom 3D Printer",
      thumb: "thumb5",
      text: "Designed, planned, and assembled a 3D printer of my own design. Used Fusion 360 to model components and assemblies. Fabricated the machine and configured electrical components (motors, sensors, control board, etc.)",
      images: ["image25", "image26", "image27", "image28", "image29", "image30"]
    },
    {
      title: "Electric Drift Trike",
      thumb: "thumb6",
      text: "Most of the frame was welded from steel tube, with the front fork/tire being sourced from a bicycle. Drifts were achieved with low gearing, and a solid rear axle connecting low-friction PVC tires.",
      images: ["image31", "image32", "image33", "image34", "image35", "image36"]
    },
    {
      title: "Tesla Coil Gun",
      thumb: "thumb7",
      text: "Miniature version of the large tesla coil, mounted on a gun type of frame. This is a handheld device that can shoot electrical arcs activated by a trigger.",
      images: ["image37", "image38", "image39", "image40", "image41", "image42"]
    },
    {
      title: "CNC Engraving Business",
      thumb: "thumb8",
      text: "Established a custom CNC engraving business. Fulfilled 60+ orders for a local agriculture company. Proprietary components were critical in the production of over 8 million units",
      images: ["image43", "image44", "image45", "image46", "image47", "image48"]
    }
  ];
  
  const grid = document.querySelector(".project-grid");
  const popup = document.getElementById("projectPopup");
  const popupTitle = document.getElementById("popupTitle");
  const popupText = document.getElementById("popupText");
  const popupImages = document.querySelector(".popup-images");
  const closeBtn = document.querySelector(".close-btn");
  
  projects.forEach(project => {
    const box = document.createElement("div");
    box.className = "project-box";
    box.innerHTML = `<h4>${project.title}</h4><img src="${project.thumb}" alt="${project.title}">`;
    box.addEventListener("click", () => {
      popupTitle.textContent = project.title;
      popupText.textContent = project.text;
      popupImages.innerHTML = "";
      project.images.forEach(img => {
        const image = document.createElement("img");
        image.src = img;
        image.alt = img;
        popupImages.appendChild(image);
      });
      popup.style.display = "block";
    });
    grid.appendChild(box);
  });
  
  document.addEventListener("click", e => {
    if (!popup.contains(e.target) && !e.target.closest(".project-box")) {
      popup.style.display = "none";
    }
  });
  
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
  
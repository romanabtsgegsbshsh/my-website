const projectDetails = {
    "go-kart": {
      title: "Go-Kart (Electric)",
      text: "Custom built electric powertrain, capable of accelerating the single-rider vehicle up to 60 mph. I modified the steering geometry, wheelbase, and electronics of the kart for optimal performance. Specs include: dual motor, li-ion battery, 9kw peak power, 150lb curb weight.",
      images: ["image1", "image2", "image3"]
    },
    "mini-chopper": {
      title: "Mini Chopper (Electric)",
      text: "Dual-motor powertrain and Li-ion battery were retrofitted to an existing motorcycle frame. The handlebars feature an electronic twist throttle and forward/reverse switch. The majority of the rear end was re-fabricated to accommodate the battery, motor, and custom drivetrain. Top speed is around 60mph, although the bike is geared for high torque.",
      images: ["image4", "image5", "image6"]
    },
    "thrust-vector": {
      title: "Thrust Vector Control System",
      text: "Design and integration of thrust-vector control system for a liquid augmented solid rocket motor. This is part of a school project called Rocket Powered Lander. I was recently promoted to Lead for the mechanisms subteam. Nearing the end of the design phase, I am currently working on a manufacturing plan for Fall 2025.",
      images: ["image7", "image8", "image9"]
    },
    "tesla-coil": {
      title: "Tesla Coil",
      text: "Did research and experimentation about electricity to construct a 5 foot tall Tesla Coil. Generates an excess of 500,000 volts producing ~6ft long electrical arcs. Extremely loud and crazy to watch in person",
      images: ["image10", "image11", "image12"]
    },
    "3d-printer": {
      title: "Custom 3D Printer",
      text: "Designed, planned, and assembled a 3D printer of my own design. Used Fusion 360 to model components and assemblies. Fabricated the machine and configured electrical components (motors, sensors, control board, etc.)",
      images: ["image13", "image14", "image15"]
    },
    "drift-trike": {
      title: "Drift Trike (Electric)",
      text: "Most of the frame was welded from steel tube, with the front fork/tire being sourced from a bicycle. Drifts were achieved with low gearing, and a solid rear axle connecting low-friction PVC tires.",
      images: ["image16", "image17", "image18"]
    },
    "tesla-gun": {
      title: "Tesla Coil Gun",
      text: "Miniature version of the large tesla coil, mounted on a gun type of frame. This is a handheld device that can shoot electrical arcs activated by a trigger.",
      images: ["image19", "image20", "image21"]
    },
    "engraving-business": {
      title: "CNC Engraving Business",
      text: "Established a custom CNC engraving business. Fulfilled 60+ orders for a local agriculture company. Proprietary components were critical in the production of over 8 million units",
      images: ["image22", "image23", "image24"]
    }
  };
  
  const boxes = document.querySelectorAll(".project-box");
  const detailBox = document.getElementById("project-detail");
  const title = document.getElementById("detail-title");
  const text = document.getElementById("detail-text");
  const imagesContainer = document.getElementById("detail-images");
  
  boxes.forEach(box => {
    box.addEventListener("click", e => {
      const projectKey = box.dataset.project;
      const project = projectDetails[projectKey];
  
      title.textContent = project.title;
      text.textContent = project.text;
      imagesContainer.innerHTML = "";
  
      project.images.forEach(img => {
        const image = document.createElement("img");
        image.src = `${img}.jpg`;
        image.alt = img;
        imagesContainer.appendChild(image);
      });
  
      detailBox.classList.remove("hidden");
    });
  });
  
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".project-box") && !event.target.closest("#project-detail")) {
      detailBox.classList.add("hidden");
    }
  });
  
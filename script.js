const projects = [
    {
      title: "Electric Go-Kart",
      text: "Custom built electric powertrain, capable of accelerating the single-rider vehicle up to 60 mph. I modified the steering geometry, wheelbase, and electronics of the kart for optimal performance. Specs include: dual motor, li-ion battery, 9kw peak power, 150lb curb weight.",
      images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"]
    },
    {
      title: "Electric Mini Chopper",
      text: "Dual-motor powertrain and Li-ion battery were retrofitted to an existing motorcycle frame. The handlebars feature an electronic twist throttle and forward/reverse switch. The majority of the rear end was re-fabricated to accommodate the battery, motor, and custom drivetrain. Top speed is around 60mph, although the bike is geared for high torque.",
      images: ["image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg"]
    },
    {
      title: "Thrust Vector Control System",
      text: "Design and integration of thrust-vector control system for a liquid augmented solid rocket motor. This is part of a school project called Rocket Powered Lander. I was recently promoted to Lead for the mechanisms subteam. Nearing the end of the design phase, I am currently working on a manufacturing plan for Fall 2025.",
      images: ["image13.jpg", "image14.jpg", "image15.jpg", "image16.jpg", "image17.jpg", "image18.jpg"]
    },
    {
      title: "Tesla Coil",
      text: "Did research and experimentation about electricity to construct a 5 foot tall Tesla Coil. Generates an excess of 500,000 volts producing ~6ft long electrical arcs. Extremely loud and crazy to watch in person",
      images: ["image19.jpg", "image20.jpg", "image21.jpg", "image22.jpg", "image23.jpg", "image24.jpg"]
    },
    {
      title: "Custom 3D Printer",
      text: "Designed, planned, and assembled a 3D printer of my own design. Used Fusion 360 to model components and assemblies. Fabricated the machine and configured electrical components (motors, sensors, control board, etc.)",
      images: ["image25.jpg", "image26.jpg", "image27.jpg", "image28.jpg", "image29.jpg", "image30.jpg"]
    },
    {
      title: "Electric Drift Trike",
      text: "Most of the frame was welded from steel tube, with the front fork/tire being sourced from a bicycle. Drifts were achieved with low gearing, and a solid rear axle connecting low-friction PVC tires.",
      images: ["image31.jpg", "image32.jpg", "image33.jpg", "image34.jpg", "image35.jpg", "image36.jpg"]
    },
    {
      title: "Tesla Coil Gun",
      text: "Miniature version of the large tesla coil, mounted on a gun type of frame. This is a handheld device that can shoot electrical arcs activated by a trigger.",
      images: ["image37.jpg", "image38.jpg", "image39.jpg", "image40.jpg", "image41.jpg", "image42.jpg"]
    },
    {
      title: "CNC Engraving Business",
      text: "Established a custom CNC engraving business. Fulfilled 60+ orders for a local agriculture company. Proprietary components were critical in the production of over 8 million units",
      images: ["image43.jpg", "image44.jpg", "image45.jpg", "image46.jpg", "image47.jpg", "image48.jpg"]
    }
  ];
  
  function showDetails(index) {
    const box = document.getElementById("infoBox");
    const title = document.getElementById("infoTitle");
    const text = document.getElementById("infoText");
    const images = document.getElementById("infoImages");
  
    title.textContent = projects[index].title;
    text.textContent = projects[index].text;
    images.innerHTML = "";
  
    projects[index].images.forEach(img => {
      const imageEl = document.createElement("img");
      imageEl.src = img;
      imageEl.alt = projects[index].title;
      images.appendChild(imageEl);
    });
  
    box.style.display = "block";
  }
  
  document.addEventListener("click", function (e) {
    const infoBox = document.getElementById("infoBox");
    const projects = document.querySelectorAll(".project");
    if (!infoBox.contains(e.target) && !Array.from(projects).some(p => p.contains(e.target))) {
      infoBox.style.display = "none";
    }
  });
  
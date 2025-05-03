const projectData = {
    kart: {
      title: "Electric Go-Kart",
      text: "Custom built electric powertrain, capable of accelerating the single-rider vehicle up to 60 mph. I modified the steering geometry, wheelbase, and electronics of the kart for optimal performance. Specs include: dual motor, li-ion battery, 9kw peak power, 150lb curb weight.",
      media: ["video1.mp4", "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]
    },
    mini: {
      title: "Electric Mini Chopper",
      text: "Dual-motor powertrain and Li-ion battery were retrofitted to an existing motorcycle frame...",
      media: ["video2.mp4", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg"]
    },
    tvc: {
      title: "Thrust Vector Control System",
      text: "Design and integration of thrust-vector control system for a liquid augmented solid rocket motor...",
      media: ["video3.mp4", "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg"]
    },
    coil: {
      title: "Tesla Coil",
      text: "Constructed a 5 foot tall Tesla Coil. Generates 500,000+ volts with 6ft arcs. Extremely loud and visually dramatic.",
      media: ["video4.mp4", "image16.jpg", "image17.jpg", "image18.jpg", "image19.jpg", "image20.jpg"]
    },
    printer: {
      title: "Custom 3D Printer",
      text: "Designed and assembled a 3D printer using Fusion 360 and off-the-shelf components...",
      media: ["video5.mp4", "image21.jpg", "image22.jpg", "image23.jpg", "image24.jpg", "image25.jpg"]
    },
    trike: {
      title: "Electric Drift Trike",
      text: "Frame was welded from steel tubing. Drifts achieved via PVC rear tires and geared rear axle...",
      media: ["video6.mp4", "image26.jpg", "image27.jpg", "image28.jpg", "image29.jpg", "image30.jpg"]
    },
    gun: {
      title: "Tesla Coil Gun",
      text: "Miniature Tesla coil mounted on a handheld frame. Fires arcs using trigger control...",
      media: ["video7.mp4", "image31.jpg", "image32.jpg", "image33.jpg", "image34.jpg", "image35.jpg"]
    },
    cnc: {
      title: "CNC Engraving Business",
      text: "Founded a CNC business. Fulfilled 60+ orders. Critical to over 8 million production units...",
      media: ["video8.mp4", "image36.jpg", "image37.jpg", "image38.jpg", "image39.jpg", "image40.jpg"]
    }
  };
  
  const boxes = document.querySelectorAll(".project-box");
  const infoBox = document.getElementById("infoBox");
  const title = document.getElementById("infoTitle");
  const text = document.getElementById("infoText");
  const mediaRow = document.getElementById("mediaRow");
  
  boxes.forEach(box => {
    box.addEventListener("click", e => {
      e.stopPropagation();
      const key = box.dataset.project;
      const data = projectData[key];
  
      title.textContent = data.title;
      text.textContent = data.text;
      mediaRow.innerHTML = "";
      data.media.forEach(file => {
        const ext = file.split('.').pop();
        const el = ext === "mp4" ? document.createElement("video") : document.createElement("img");
        el.src = file;
        if (ext === "mp4") {
          el.controls = true;
        }
        mediaRow.appendChild(el);
      });
      infoBox.classList.remove("hidden");
    });
  });
  
  document.body.addEventListener("click", () => {
    infoBox.classList.add("hidden");
  });
  
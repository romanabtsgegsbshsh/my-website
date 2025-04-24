const projects = [
  {
    title: 'Electric Go-Kart',
    text: 'Custom built electric powertrain, capable of accelerating the single-rider vehicle up to 60 mph. I modified the steering geometry, wheelbase, and electronics of the kart for optimal performance. Specs include: dual motor, li-ion battery, 9kw peak power, 150lb curb weight.',
    media: ['video1', 'image1', 'image2', 'image3', 'image4', 'image5'],
    thumb: 'thumb1'
  },
  {
    title: 'Electric Mini Chopper',
    text: 'Dual-motor powertrain and Li-ion battery were retrofitted to an existing motorcycle frame. The handlebars feature an electronic twist throttle and forward/reverse switch. The majority of the rear end was re-fabricated to accommodate the battery, motor, and custom drivetrain. Top speed is around 60mph, although the bike is geared for high torque.',
    media: ['video2', 'image6', 'image7', 'image8', 'image9', 'image10'],
    thumb: 'thumb2'
  },
  {
    title: 'Thrust Vector Control System',
    text: 'Design and integration of thrust-vector control system for a liquid augmented solid rocket motor. This is part of a school project called Rocket Powered Lander. I was recently promoted to Lead for the mechanisms subteam. Nearing the end of the design phase, I am currently working on a manufacturing plan for Fall 2025.',
    media: ['video3', 'image11', 'image12', 'image13', 'image14', 'image15'],
    thumb: 'thumb3'
  },
  {
    title: 'Tesla Coil',
    text: 'Did research and experimentation about electricity to construct a 5 foot tall Tesla Coil. Generates an excess of 500,000 volts producing ~6ft long electrical arcs. Extremely loud and crazy to watch in person',
    media: ['video4', 'image16', 'image17', 'image18', 'image19', 'image20'],
    thumb: 'thumb4'
  },
  {
    title: 'Custom 3D Printer',
    text: 'Designed, planned, and assembled a 3D printer of my own design. Used Fusion 360 to model components and assemblies. Fabricated the machine and configured electrical components (motors, sensors, control board, etc.)',
    media: ['video5', 'image21', 'image22', 'image23', 'image24', 'image25'],
    thumb: 'thumb5'
  },
  {
    title: 'Electric Drift Trike',
    text: 'Most of the frame was welded from steel tube, with the front fork/tire being sourced from a bicycle. Drifts were achieved with low gearing, and a solid rear axle connecting low-friction PVC tires.',
    media: ['video6', 'image26', 'image27', 'image28', 'image29', 'image30'],
    thumb: 'thumb6'
  },
  {
    title: 'Tesla Coil Gun',
    text: 'Miniature version of the large tesla coil, mounted on a gun type of frame. This is a handheld device that can shoot electrical arcs activated by a trigger.',
    media: ['video7', 'image31', 'image32', 'image33', 'image34', 'image35'],
    thumb: 'thumb7'
  },
  {
    title: 'CNC Engraving Business',
    text: 'Established a custom CNC engraving business. Fulfilled 60+ orders for a local agriculture company. Proprietary components were critical in the production of over 8 million units',
    media: ['video8', 'image36', 'image37', 'image38', 'image39', 'image40'],
    thumb: 'thumb8'
  }
];

const grid = document.querySelector('.project-grid');
const modal = document.getElementById('projectInfo');
const mediaRow = document.getElementById('mediaRow');
const projectText = document.getElementById('projectText');
const closeModal = document.getElementById('closeModal');

document.body.addEventListener('click', function (e) {
  if (modal.style.display === 'block' && !modal.contains(e.target)) {
    modal.style.display = 'none';
  }
});

closeModal.onclick = () => {
  modal.style.display = 'none';
};

projects.forEach((proj, i) => {
  const div = document.createElement('div');
  div.innerHTML = `<img src="${proj.thumb}.jpg" alt="${proj.title}" style="width:100%; border-radius: 8px;"><p>${proj.title}</p>`;
  div.onclick = (e) => {
    e.stopPropagation();
    modal.style.display = 'block';
    projectText.innerText = proj.text;
    mediaRow.innerHTML = '';
    proj.media.forEach(media => {
      const ext = media.includes('video') ? 'mp4' : 'jpg';
      const el = document.createElement(media.includes('video') ? 'video' : 'img');
      el.src = `${media}.${ext}`;
      if (el.tagName === 'VIDEO') el.controls = true;
      mediaRow.appendChild(el);
    });
  };
  grid.appendChild(div);
});

function jiggle(el) {
  el.style.transform = 'translateY(-2px)';
  setTimeout(() => (el.style.transform = ''), 150);
}

// All site content. Product hierarchy: category → sub-category → series/model.

export type Table = { title: string; head?: string[]; rows: string[][] };
export type Compare = { title: string; note: string; head: string[]; rows: string[] };
export type Part = { name: string; img: string };

/** Anything with its own page: a category, a sub-category or a single machine. */
export type Node = {
  slug: string;
  name: string;
  title?: string;
  img: string;
  imgs?: string[];
  desc?: string[];
  highlights?: [string, string][];
  /** model/power variants listed as chips (no page of their own) */
  models?: string[];
  lists?: { title: string; items: string[] }[];
  components?: string[];
  tables?: Table[];
  compare?: Compare;
  apps?: string[];
  /** inquiry-only items (spares & consumables) */
  parts?: Part[];
  contact?: { email: string; phone: string };
  /** technical sheet not published yet */
  sheetOnRequest?: boolean;
  /** transparent render of the machine — switches the page to the dark cinematic hero */
  cutout?: string;
  /** laser sources the machine can be ordered with */
  sources?: string[];
  /** cut-part photos; inherited by every product below the node that sets it */
  samples?: string[];
  children?: Node[];
};

export type ItemInfo = { name: string; img: string; href: string | null };

export const company = {
  name: 'ADK Engineering PVT LTD',
  phone: '+91 63526 44186',
  whatsapp: '919227085416',
  email: 'inquiry1@adkeng.com',
  office: ['A-503/504, Empire Business Hub,', 'Nr. Shukan Mall, Science City Road,', 'Sola, Ahmedabad 380060, Gujarat.'],
  factory: ['Block No. 2100, Paiki-2,', 'Beside Umiya Industries Estate,', 'Santej, Ahmedabad-382721,', 'Gujarat, India'],
  branches: ['Nagpur', 'Pune', 'Kolhapur', 'Bhopal', 'Jaipur', 'Kolkata', 'Hubli'],
  goal: 'Our goal is to offer broad capabilities, competitive pricing, exceptional quality and outstanding service to each and every customer.',
  logo: '/adk pvt ltd logo final.png',
  catalogue: '/pdf/ADK-CATALOGUE.pdf',
  socials: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ankit-patel-1a4687250/' },
    { name: 'Instagram', href: 'https://www.instagram.com/adk_eng/' },
    { name: 'YouTube', href: 'https://www.youtube.com/@ADKEngineeringSolutions2015' },
  ],
  departments: [
    { title: 'For Inquiry', phones: ['+91 63526 44186'], email: 'inquiry1@adkeng.com' },
    { title: 'For Service', phones: ['+91 95100 41629', '+91 79845 92853'], email: 'service@adkeng.com' },
    { title: 'For Spares', phones: ['+91 92130 14914'], email: 'spares.adk@gmail.com' },
    { title: 'For Consumables', phones: ['+91 63526 43947'], email: 'consumables.adk@gmail.com' },
  ],
} as const;

/** Google Maps embeds shown on the contact page. */
export const maps = [
  {
    kicker: 'Head Office',
    address: 'A-503/504, Empire Business Hub, Nr. Shukan Mall, Science City Road, Sola, Ahmedabad 380060.',
    src: `https://www.google.com/maps?q=${encodeURIComponent('Empire Business Hub, Science City Road, Sola, Ahmedabad')}&output=embed`,
    link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Empire Business Hub, Science City Road, Sola, Ahmedabad')}`,
  },
  {
    kicker: 'Factory',
    address: 'Block No. 2100, Paiki-2, Beside Umiya Industries Estate, Santej, Ahmedabad-382721.',
    src: 'https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7653.971548593346!2d72.456487!3d23.121987!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA3JzE5LjIiTiA3MsKwMjcnMzIuNiJF!5e1!3m2!1sen!2sin!4v1789549651015!5m2!1sen!2sin',
    link: 'https://www.google.com/maps/search/?api=1&query=23.121987,72.456487',
  },
];

export const stats = [
  { value: 16, suffix: '+', label: 'Years Of Experience' },
  { value: 750, suffix: '+', label: 'Happy Customer' },
  { value: 50, suffix: '+', label: 'Team' },
];

export const industries = [
  { name: 'Aerospace', img: '/images/home-page/industries-we-serve/aerospace.webp' },
  { name: 'Agriculture Industry', img: '/images/home-page/industries-we-serve/agriculture-industry.webp' },
  { name: 'Architecture', img: '/images/home-page/industries-we-serve/architecture.webp' },
  { name: 'Automobile', img: '/images/home-page/industries-we-serve/automobile.webp' },
  { name: 'Sheet Metal Work', img: '/images/home-page/industries-we-serve/sheet-metal-work.webp' },
  { name: 'Steel Furniture', img: '/images/home-page/industries-we-serve/steel-furniture.webp' },
];

/* ---------- images ---------- */
const IMG = {
  sheetLaser: '/images/inner-product/cnc-fiber-laser-cutting-machines/industrial-pioneer-series/industrial-pioneer-series.webp',
  largeLaser: '/images/inner-product/cnc-fiber-laser-cutting-machines/futuristic-laser-series/futuristic-laser-series.webp',
  exchangeLaser: '/images/inner-product/cnc-fiber-laser-cutting-machines/dual-position-exchange-table/dual-position-exchange-table.webp',
  tubeLaser: '/images/inner-product/cnc-fiber-laser-cutting-machines/professional-tube-cutting-machine/01.webp',
  robotLaser: '/images/inner-product/newly-launched-products/cnc-fiber-laser-cutting-machine-robot.webp',
  cncPressBrake: '/images/inner-product/cnc-nc-press-brake/cnc-press-brake/cnc-press-brake.webp',
  ncPressBrake: '/images/inner-product/cnc-nc-press-brake/nc-press-brake/nc-press-brake.webp',
  handheld: '/images/inner-product/cnc-fiber-laser-welding-machines/01.webp',
  weldSample: '/images/inner-product/cnc-fiber-laser-welding-machines/03.webp',
  weldJoint: '/images/inner-product/cnc-fiber-laser-welding-machines/05.webp',
  cleanSample: '/images/inner-product/cnc-fiber-laser-welding-machines/07.webp',
  cleanSample2: '/images/inner-product/cnc-fiber-laser-welding-machines/08.webp',
  weldRobot: '/images/inner-product/newly-launched-products/3d-fiber-laser-welding-machine-robot.webp',
  gantry: '/images/inner-product/cnc-plasma-cutting-machine/gantry-type/gantry-type.webp',
  tableType: '/images/inner-product/cnc-plasma-cutting-machine/table-type/table-type.webp',
  portable: '/images/inner-product/cnc-plasma-cutting-machine/portable-type/portable-type.webp',
  hBeam: '/images/inner-product/peb-machinery/h-beam/h-beam-welding-machine-ptw.webp',
  sawGantry: '/images/inner-product/peb-machinery/saw-gantry-welding-machine/saw-gantry-welding-machine.webp',
  shear1: '/images/inner-product/shearing-machines/shearing-machines-1.webp',
  shear2: '/images/inner-product/shearing-machines/shearing-machines-2.webp',
  shear3: '/images/inner-product/shearing-machines/shearing-machines-3.webp',
  panel1: '/images/inner-product/panel-bender/panel-bender-1.webp',
  panel2: '/images/inner-product/panel-bender/panel-bender-2.webp',
  panel3: '/images/inner-product/panel-bender/panel-bender-3.webp',
  spares: '/images/inner-product/spares-consumables/consumables.webp',
};

const laserApps = ['Heavy Fabrication', 'Elevators', 'Automobile Industries', 'Chemical Plant Equipments Mfg', 'Road Construction Machinery Mfg', 'Job Work', 'Profile Cutting', 'Control Panel Mfg', 'Food Machinery Mfg', 'Agriculture Machinery Mfg', 'Steel Furniture', 'Sheet Metal Work', 'Architecture', 'Aero Space', 'Textile Machinery Mfg'];
const plasmaApps = ['Pre Engineering Building (PEB)', 'Heavy Fabrication', 'Chemical Plant Machinery Mfg', 'Tank Mfg', 'Tower Mfg', 'Job Work', 'Road Machinery Equipments Mfg', 'Food Processing Machinery Mfg', 'Material Handling Equipments', 'Hydraulic Machinery Mfg', 'Agriculture Machinery Mfg'];
const pebDesc = [
  'A PEB (Pre-Engineered Building) machine, also known as a PEB manufacturing machine, is a specialized equipment used in the construction industry to fabricate pre-engineered building components. PEBs are buildings that are engineered and manufactured off-site, with pre-cut, pre-drilled, and pre-welded structural steel components. These components are then transported to the construction site for assembly.',
  'A PEB machine typically consists of various components and modules that perform specific functions in the manufacturing process. It may include machinery for cutting, drilling, punching, welding, and bending steel sections. The machine is computer-controlled, ensuring accuracy and precision in the fabrication of the components.',
];
const pressIntro = [
  'The whole frame of the press brake adopt integrated welding, and by tempering to eliminate the internal stress.',
  'The press brake frame adopt shot blast to remove rust and sprayed with anti-rust treatment.',
  'The controller can control the Y1 and Y2 axis (Y1 controls the left cylinder and Y2 controls the right cylinder) to ensure the synchronous movement of the ram.',
  'The main oil pump does not apply work under the drive of the servo main motor, and the energy consumption is 60% lower than that of the general CNC press brake machine.',
  'The press brake adopt the latest high-frequency hydraulic control technology, which is faster, more efficient and more stable.',
];
const rows = (s: string) => s.trim().split('\n').map((l) => l.trim().split('|').map((c) => c.trim()));

/** Series whose technical sheet ADK will supply on request. */
const series = (slug: string, name: string, img: string, tagline?: string): Node => ({
  slug,
  name,
  img,
  sheetOnRequest: true,
  ...(tagline ? { desc: [tagline] } : {}),
});

/* ---------- the product tree ---------- */
export const productTree: Node[] = [
  {
    slug: 'fiber-laser-cutting-machine',
    name: 'Fiber Laser Cutting Machines',
    img: IMG.sheetLaser,
    apps: laserApps,
    samples: ['/images/gallery/03.webp', '/images/gallery/04.webp', '/images/gallery/05.webp', '/images/gallery/06.webp', '/images/gallery/07.webp'],
    children: [
      {
        slug: 'sheet-metal-laser-cutting-machine',
        name: 'Sheet Metal Laser Cutting Machine',
        img: IMG.sheetLaser,
        children: [
          {
            ...series('e-ii-series', 'E II Series', '/images/series/e-ii/front.jpg', 'Economical single-platform fiber laser cutting machine.'),
            sheetOnRequest: false,
            cutout: '/images/series/e-ii/cutout.webp',
            imgs: ['/images/series/e-ii/front.jpg', '/images/series/e-ii/side.jpg'],
            highlights: [['Working area', '3000 × 1500 mm'], ['Speed', '80 m/min'], ['Accuracy', '±0.03 mm'], ['Machine capacity', 'Up to 60 kW']],
            sources: ['RAYCUS', 'IPG', 'MAX PHOTONICS'],
            tables: [
              {
                title: 'Technical Parameters',
                head: ['Model', 'BCF 3015E II'],
                rows: [
                  ['Working Area (mm)', '3000 x 1500'],
                  ['Speed (m/min)', '80'],
                  ['Accuracy (mm)', '+/-0.03'],
                  ['Machine Capacity (KW)', 'Up to 60KW'],
                  ['Power Source', 'RAYCUS, IPG, MAX PHOTONICS'],
                ],
              },
            ],
          },
          series('ln-ii-series', 'LN II Series', IMG.sheetLaser, 'High speed single-platform fiber laser cutting machine.'),
          series('ln-series', 'LN Series', IMG.sheetLaser, 'High capacity single-platform fiber laser cutting machine.'),
          series('ga-pro-series', 'GA Pro Series', IMG.exchangeLaser, 'High-stability fiber laser cutting machine.'),
          series('ga-series', 'GA Series', IMG.exchangeLaser, 'High-performance fiber laser cutting machine.'),
          series('gv-series', 'GV Series', IMG.exchangeLaser, 'Ultra high speed fiber laser cutting machine.'),
          series('gh-series', 'GH Series', IMG.largeLaser, 'Flagship super power fiber laser cutting machine.'),
          series('sl-series', 'SL Series', IMG.largeLaser, 'Ground rail large format laser cutting machine.'),
          series('mb-series', 'MB Series', IMG.sheetLaser, 'Automated coil material fiber laser cutting machine.'),
        ],
      },
      {
        slug: 'tube-metal-laser-cutting-machine',
        name: 'Tube Metal Laser Cutting Machine',
        img: IMG.tubeLaser,
        children: [
          series('tf-series', 'TF Series', IMG.tubeLaser, 'Side-mounted front chuck tube laser cutter.'),
          series('t2-series', 'T2 Series', IMG.tubeLaser),
          series('t3-series', 'T3 Series', IMG.tubeLaser),
          series('t4-series', 'T4 Series', IMG.tubeLaser),
          series('tm-ii-series', 'TM II Series', IMG.tubeLaser),
          series('tg-e-series', 'TG-E Series', IMG.tubeLaser),
        ],
      },
      {
        slug: 'sheet-and-tube-laser-cutting-machine',
        name: 'Sheet & Tube Laser Cutting Machine',
        img: IMG.exchangeLaser,
        children: [series('lnr-series', 'LNR Series', IMG.exchangeLaser), series('gar-series', 'GAR Series', IMG.exchangeLaser)],
      },
      {
        slug: 'robot-laser-cutting-machine',
        name: 'Robot Laser Cutting Machine',
        img: IMG.robotLaser,
        children: [series('lf1800-series', 'LF1800 Series', IMG.robotLaser), series('m3015g-series', 'M3015G Series', IMG.robotLaser)],
      },
    ],
  },

  {
    slug: 'cnc-press-brake-machine',
    name: 'Press Brake Machines',
    img: IMG.cncPressBrake,
    children: [
      {
        slug: 'cnc-press-brake',
        name: 'CNC Press Brake',
        img: IMG.cncPressBrake,
        desc: ['New EU streamlined design. The press brake adopt the latest high-frequency hydraulic control technology, which is faster, more efficient and more stable.'],
        highlights: [['Tonnage', '40T – 800T'], ['Axis', '4, 5, 7 & 9'], ['Energy saving', '60%']],
        children: [
          series('excellent-series', 'Excellent Series', IMG.cncPressBrake),
          series('elite-series', 'Elite Series', IMG.cncPressBrake),
          series('edge-series', 'Edge Series', IMG.cncPressBrake),
          series('iconic-series', 'Iconic Series', IMG.cncPressBrake),
        ],
        lists: [
          { title: 'CNC Press Brake', items: ['New EU streamlined design', ...pressIntro] },
          { title: 'Additional Features', items: ['Sheet Followers', 'Dual Side Clamping', 'DSP Laser Protection', 'Back Side Door', 'Side Doors', 'Ladders', 'Main Motor - Servo', '4,5,7 & 9 Axis Available'] },
          { title: 'Standard Equipments & Features', items: ['Y1, Y2 precision ram positioning X Axis Back Gauge', 'Large Open Height, Stroke & Throat Depth', 'Back Gauge - Motorized and Linear Guide & Ball Bearing System', 'Quick release clamping', 'Front sheet support arms with full-length linear guide, T-slot', 'World-class hydraulic and electronic components', 'Hydraulic blocks and valves', 'Hydraulic pump', 'Electronics system', 'Double servo motor and servo drive', 'Amada or Euro type tooling', 'Machine structure is heavier compare to others', "Machine's approach and working speed is higher", 'Our machines are stable with less maintenance'] },
          { title: 'Our Strength', items: ['Over 14 years of relevant experience', 'Transparent process and regular follow up', 'Long term relationship', 'On time delivery of service', 'Periodic review for better process orientation', 'Well-qualified and efficient staff', 'Continues working towards customer satisfaction', 'Predefined system based approach'] },
        ],
        components: ['Quick Clamping', 'Controller', 'Backgauge', 'Punch & Die', 'Oil Pump', 'Hydraulic System', 'Mechanical Crowning'],
        tables: [{
          title: 'Technical Parameters', head: ['Model', 'Nominal Pressure (kN)', 'Table Length (mm)', 'Distance Between Columns (mm)', 'Throat Depth (mm)', 'Stroke (mm)', 'Open Height (mm)', 'Dimension (mm)'], rows: rows(`
          40T 1600|400|1600|1200|260|150|430|2400*1300*2200
          63T 2500|630|2500|2000|320|160|450|3000*1400*2400
          80T 2500|800|2500|2000|320|160|450|3000*1400*2400
          110T 3200|1100|3200|2600|400|200|480|4000*1600*2750
          110T 4000|1100|4000|3400|400|200|480|4800*1600*2750
          125T 3200|1250|3200|2600|400|200|480|4000*1600*2750
          125T 4000|1250|4000|3400|400|200|480|4800*1600*2750
          160T 3200|1600|3200|2600|400|200|480|4000*1800*2750
          160T 4000|1600|4000|3400|400|200|480|4800*1800*2750
          200T 3200|2000|3200|2600|400|200|480|4000*1900*2850
          200T 4000|2000|4000|3400|400|200|480|4800*1900*2850
          250T 3200|2500|3200|2600|450|250|540|3800*2200*3120
          250T 4000|2500|4000|3100|450|250|540|4600*2200*3150
          300T 3200|3000|3200|2600|500|250|570|3500*2250*3200
          300T 4000|3000|4000|3100|500|250|570|4300*2500*3400
          400T 4000|4000|4000|3100|500|300|610|4300*2700*3500
          400T 6000|4000|6000|4800|500|300|610|6300*2700*3500
          500T 4000|5000|4000|3100|500|300|610|4300*2700*3500
          500T 6000|5000|6000|4800|500|300|610|6300*2700*3600
          800T 8000|8000|8000|6300|600|320|800|8300*3600*4500`)
        }],
      },
      {
        slug: 'nc-press-brake',
        name: 'NC Press Brake',
        img: IMG.ncPressBrake,
        desc: ['The entire EU streamlined design, heat treatment frame, high rigidity workbench, optional mechanical compensation device for precise bending.'],
        highlights: [['Tonnage', '40T – 500T'], ['Hydraulics', 'Bosch Rexroth'], ['Controller', 'Estun / Delem']],
        lists: [
          { title: 'Highlights', items: pressIntro },
          {
            title: 'NC Press Brake', items: [
              'The entire EU streamlined design, heat treatment frame, high rigidity workbench, optional mechanical compensation device for precise bending.',
              'Hydraulic synchronization control and Estun E21/Estun E200P or Delem DA41s programmable logic controller ensure precise repeatability and ease of use.',
              'The integrated hydraulic system (Bosch Rexroth, Germany) can quickly and automatically switch to a slow bend.',
              'The X-axis and Y-axis are programmed by the controller and controlled by servo motor to achieve accurate positioning.',
              'Advanced variable frequency hydraulic control technology, with more stable, and more reliable operation.',
              'NC series press brake equipped with standard single-axis backgauge system (X-axis) and single-axis bending angle system (Y-axis), you can choose to add V-axis compensation function, and select the appropriate mold to easily bend the workpiece with complex shapes.',
            ]
          },
          { title: 'Standard Equipment', items: ['Steel welded frame', 'Hydraulic system (Germany Bosch - Rexroth)', 'Standard two axis control (X,Y) Electrical system (France Schneider)', 'Synchronized dual cylinder', 'X axis servo motorized backgauge, Ball screw and Linear guide', 'Quick clamping (Optional)'] },
        ],
        components: ['Controller', 'Backgauge', 'Torque Synchronous Control System'],
        tables: [{
          title: 'Technical Parameters', head: ['Model', 'Nominal Pressure (kN)', 'Table Length (mm)', 'Distance Between Columns (mm)', 'Throat Depth (mm)', 'Stroke (mm)', 'Open Height (mm)', 'Dimension (LWH) (mm)'], rows: rows(`
          40T 1600|400|1600|1300|250|100|355|1900*1200*1900
          63T 2500|630|2500|2050|250|120|370|2500*1350*2100
          80T 2500|800|2500|2050|250|120|380|2500*1400*2150
          110T 3200|1000|3200|2510|320|160|430|3200*1500*2300
          110T 4000|1000|4000|3100|320|160|430|4000*1750*2590
          125T 3200|1250|3200|2510|320|160|430|3200*1600*2350
          125T 4000|1250|4000|3100|320|160|430|4000*1600*2450
          160T 3200|1600|3200|2510|350|200|480|3200*1650*2800
          160T 4000|1600|4000|3100|350|200|480|4000*1650*2800
          200T 3200|2000|3200|2510|350|200|480|3200*1650*2800
          200T 4000|2000|4000|3100|350|200|480|4000*1650*2800
          250T 3200|2500|3200|2600|400|250|580|3300*2100*3150
          250T 4000|2500|4000|3100|400|250|580|4000*2100*3150
          300T 3200|3000|3200|2600|400|250|580|3200*2200*3200
          300T 4000|3000|4000|3100|400|250|580|4000*2200*3200
          400T 3200|4000|3200|2600|400|250|580|3300*2400*3200
          400T 4000|4000|4000|3100|400|250|580|4000*2400*3200
          500T 4000|5000|4000|3100|500|320|620|4000*2650*3320
          500T 6000|5000|6000|4600|500|320|620|6000*2700*3320`)
        }],
      },
    ],
  },

  {
    slug: 'fiber-laser-welding-machine-main',
    name: 'Laser Welding Machines',
    img: IMG.handheld,
    children: [
      {
        slug: 'handheld-laser-welding-machine',
        name: 'Handheld Laser Welding Machine',
        img: IMG.handheld,
        imgs: [IMG.handheld, IMG.weldSample, IMG.weldJoint],
        models: ['LCW-1500W', 'LCW-2000W', 'LCW-3000W'],
        highlights: [['Power', '1500W / 2000W / 3000W'], ['vs MIG & TIG', 'Faster'], ['Finish', 'No grinder needed']],
        compare: {
          title: 'Comparison*',
          note: '*This is just for your reference. Actual data may differ',
          head: ['Features', 'Laser Welding', 'Mig & Tig Welding'],
          rows: ['High speed', 'Better finishing', 'No need for grinder', 'Low operating cost', 'Low heat hazard', 'High efficiency'],
        },
      },
      {
        slug: 'handheld-laser-cleaning-machine',
        name: 'Handheld Laser Cleaning Machine',
        img: IMG.handheld,
        imgs: [IMG.handheld, IMG.cleanSample, IMG.cleanSample2],
        models: ['LCW-1500W', 'LCW-2000W', 'LCW-3000W'],
        highlights: [['Power', '1500W / 2000W / 3000W']],
        sheetOnRequest: true,
      },
      {
        slug: '3d-fiber-laser-welding-machine-robot',
        name: '3D Fiber Laser Welding Machine Robot',
        img: IMG.weldRobot,
        models: ['LW1800'],
        sheetOnRequest: true,
      },
    ],
  },

  {
    slug: 'cnc-plasma-cutting-machine',
    name: 'CNC Plasma Cutting Machine',
    img: IMG.gantry,
    children: [
      {
        slug: 'gantry-type',
        name: 'Gantry Type',
        img: IMG.gantry,
        highlights: [['Speed', '0–12000 mm/min'], ['Accuracy', '±0.03 mm/3mtr'], ['Source', 'Hypertherm']],
        lists: [{
          title: 'Features', items: [
            'Heavy duty gantry type structure.',
            'Dual shaft linear motion guide with rack & pinion drive for transverse direction movement of torch station.',
            'Anti collision system with proximity protection.',
            'Electrical limit switch on both side of longitudinal track end with mechanical bumpers helps in emergency collision protection.',
            'High tension high accuracy rail dual side driven rack & pinion drive for longitudinal direction.',
            'Automatic wear compensation by high tension cup spring keeps the engagement of the pinion in the rack free of backlash.',
            'Electrical limit switch installed on both end side of transverse track & torch suspension together with mechanical bumper helps in emergency collision protection.',
            'Track wiper device.',
          ]
        }],
        tables: [{
          title: 'Technical Parameters', head: ['Model', 'ADK 2508 P/F', 'ADK 3508 P/F', 'ADK 4008 P/F', 'ADK 5508 P/F'], rows: rows(`
          Working Width (mm)|1800 x 6500|2800 x 6500|3200 x 6500|4500 x 6500
          Speed (mm/min)|0-12000
          Accuracy (mm/3mtr)|±0.03
          Power Source Capacity (amp)|PMX 45, PMX 65, PMX 85, PMX 105, PMX 125, MAXPRO 200
          Source Make|Hypertherm`)
        }],
        apps: plasmaApps,
      },
      {
        slug: 'table-type',
        name: 'Table Type',
        img: IMG.tableType,
        highlights: [['Track width', '2500 mm & above'], ['Track length', '4000 mm & above'], ['Controller', 'FLSK 2300B']],
        lists: [{
          title: 'Mechanical Parts', items: [
            'Table Type Gantry structure.',
            'High tension high accuracy double side driven rack & pinion drive.',
            'Dual shaft L M Guide ways and bearing (KHS-LG) arrangement for Transverse movement of Torch stations and longitudinal movement of Gantry.',
            'Automatic wear compensation by high tension cup spring keeps the engagement of the pinion in this rack free of backlash.',
          ]
        }],
        tables: [{
          title: 'Technical Parameters', rows: rows(`
          Track Width (mm)|2500, 3500, 4200 & Above
          Track Length (mm)|4000, 6000, 8000 & Above
          Effective Track Length (mm)|2500, 4500, 6500 & Above
          Controller|FLSK 2300B (Weldarc)
          X Axis Linear Motion Guide|Dual Guide Rod
          Y Axis Linear Motion|24 KG/ Meter Self-hardened Rail
          Power source|Hypertherm USAO-12000 mm/Min
          Rapid Positioning Speed (mm /3 Mtr)|+/- 0.3
          Longitudinal Guiding Accuracy (mm)|+/- 0.5
          Repeatability Accuracy|AC 220 V (Single Phase) (+/-10%), 50 Hz, 2`)
        }],
        apps: plasmaApps,
      },
      {
        slug: 'portable-type',
        name: 'Portable Type',
        img: IMG.portable,
        highlights: [['Cutting width', '1250 mm'], ['Cutting length', '2500 mm'], ['Source', 'Hypertherm, USA']],
        tables: [{
          title: 'Technical Parameters', rows: rows(`
          Cutting width (mm)|1250
          Cutting length (mm)|2500
          Plasma controller|NC Controller
          Transmission System|Dual linear motion guide for transverse and longitudinal drive.
          Y-axis Frame|Heat resistive heavy duty Iron frame for Y-Axis
          Plasma|One Station
          Power source|Hypertherm, USA
          Software|Fast cam (Basic) - Australia`)
        }],
        apps: plasmaApps,
      },
    ],
  },

  {
    slug: 'peb-machinery',
    name: 'PEB Machineries',
    img: IMG.hBeam,
    children: [
      {
        slug: 'h-beam',
        name: 'H-Beam',
        img: IMG.hBeam,
        desc: pebDesc,
        highlights: [['Web width', '200–1500 mm'], ['Flange height', '150–500 mm'], ['Web taper', '15°']],
        tables: [{
          title: 'Technical Parameters', rows: rows(`
          Min. web width (mm)|200
          Max. web width (mm)|1500
          Web thickness (mm)|5-20
          Min. flange height (mm)|150
          Max. flange height (mm)|500
          Flange thickness (mm)|5-25
          Web taper angle (degree)|15 (Above 16 mm thick flanges to be Pre-Bent & Pre-Tracked)
          Beam length (mtr)|—`)
        }],
      },
      {
        slug: 'saw-gantry-welding-machine',
        name: 'Saw Gantry Welding Machine',
        img: IMG.sawGantry,
        desc: pebDesc,
        highlights: [['Web width', 'Up to 2500 mm'], ['Flange height', 'Up to 1000 mm'], ['Beam length', '2.5–15 mtr']],
        tables: [{
          title: 'Technical Parameters', rows: rows(`
          Min. web width (mm)|200|200
          Max. web width (mm)|1500|2500
          Web thickness (mm)|5-40|5-80
          Min. flange height (mm)|150|250
          Max. flange height (mm)|500|1000
          Flange thickness (mm)|5-40
          Beam length (mtr)|2.5-15|2.5-15`)
        }],
      },
    ],
  },

  {
    slug: 'shearing-machine',
    name: 'Shearing Machine',
    img: IMG.shear1,
    children: [
      { slug: 'swing-beam-shearing-machine', name: 'Swing Beam Shearing Machine', img: IMG.shear1, imgs: [IMG.shear1, IMG.shear3], sheetOnRequest: true },
      { slug: 'guillotine-shearing-machine', name: 'Guillotine Shearing Machine', img: IMG.shear2, imgs: [IMG.shear2, IMG.shear3], sheetOnRequest: true },
    ],
  },

  {
    slug: 'panel-bender',
    name: 'Panel Bender',
    img: IMG.panel1,
    imgs: [IMG.panel1, IMG.panel2, IMG.panel3],
    desc: ["Panel Bender adopts universal bending die, which can complete bending of various shapes with only one set of die, and users don't need to customize another die. The equipment can easily meet the requirements of arc, dead edge, return, closed and other complex sheet metal bending."],
    highlights: [['Bend speed', '0.2 s/bend'], ['Bend width', 'Up to 2500 mm'], ['Bend height', '170 mm']],
    tables: [{
      title: 'Technical Parameters', head: ['Model', 'ADK-PB1400 P', 'ADK-PB2000 P', 'ADK-PB2500 P'], rows: rows(`
      Fastest Bend Speed (S/Bend)|0.2
      Maximum Bend Width (mm)|1400|2000|2500
      Bend Height (mm)|170
      Rated Voltage|380V|380V|380V
      Total Motor Power (KW)|38|77|77
      Average Power (KW)|1.8|2.5|2.8
      Overall Dimensions (mm)|4400*1900*2900|5100*2650*3300|5650*3000*3400
      Total Weight (T)|12T Approx|16T Approx|19T Approx`)
    }],
  },

  {
    slug: 'spares-and-consumables',
    name: 'Spares & Consumables',
    img: IMG.spares,
    contact: { email: 'spares@adkeng.com', phone: '+91 63526 43947' },
    parts: ([
      ['Nozzle', 'consumables'], ['Lens', 'consumables-2'], ['Cutting Head', 'cutting-head'], ['Punch Die', 'punch-die'],
      ['Laser Power Source', 'laser-power-source-1'], ['Gear Box', 'gear-box'], ['Limit Sensor', 'limit-sensor'], ['Rack & Pinion', 'rack-pinion'],
      ['LM Guide', 'lm-guide'], ['Bellows', 'bellows'], ['Drive Motors', 'drive-motors'], ['Gas Regulator', 'gas-regulator'],
    ] as const).map(([name, f]) => ({ name, img: `/images/inner-product/spares-consumables/${f}.webp` })),
  },
];

/* ---------- lookups ---------- */
const index = new Map<string, { node: Node; parents: Node[] }>();
(function walk(nodes: Node[], parents: Node[]) {
  for (const n of nodes) {
    index.set(n.slug, { node: n, parents });
    if (n.children) walk(n.children, [...parents, n]);
  }
})(productTree, []);

export const findNode = (slug: string) => index.get(slug);
export const allSlugs = [...index.keys()];
export const productHref = (slug: string) => `/products/${slug}`;
export const childInfo = (n: Node): ItemInfo => ({ name: n.name, img: n.img, href: productHref(n.slug) });
export const productOptions = [...new Set([...index.values()].flatMap(({ node }) => [node.name, ...(node.parts?.map((p) => p.name) ?? [])]))];

/** Hero "shelf" — one machine per product line, so visitors instantly see what ADK sells. */
export const lineup = [
  { name: 'Fiber Laser Cutting', href: productHref('fiber-laser-cutting-machine'), img: IMG.sheetLaser },
  { name: 'CNC Plasma Cutting', href: productHref('cnc-plasma-cutting-machine'), img: IMG.gantry },
  { name: 'Press Brake', href: productHref('cnc-press-brake-machine'), img: IMG.cncPressBrake },
  { name: 'Laser Welding', href: productHref('fiber-laser-welding-machine-main'), img: IMG.handheld },
  { name: 'Panel Bender', href: productHref('panel-bender'), img: IMG.panel1 },
  { name: 'Shearing Machine', href: productHref('shearing-machine'), img: IMG.shear1 },
];

/**
 * Dark landing hero — one slide per headline verb (0 cut · 1 bend · 2 weld).
 * To use footage instead of a photo, drop an .mp4 in /public/video and set `video` on that slide;
 * `img` then becomes its poster frame. `fit: 'contain'` keeps a studio render on black whole; `fit: 'frame'` shows a small factory photo whole with feathered edges (give its `ratio`).
 */
export const heroSlides: { name: string; tag: string; href: string; img: string; video?: string; verb: 0 | 1 | 2; pos?: string; fit?: 'contain' | 'frame'; ratio?: number }[] = [
  { name: 'Fiber Laser Cutting', tag: 'Sheet metal · tube · robot · 19 series', href: productHref('fiber-laser-cutting-machine'), img: '/images/hero-stage/laser.jpg', verb: 0, fit: 'contain' },
  { name: 'CNC Press Brake', tag: 'CNC & NC · 40T – 800T', href: productHref('cnc-press-brake-machine'), img: '/images/hero-stage/press-brake.jpg', verb: 1, pos: '30% 45%' },
  { name: 'Laser Welding', tag: 'Handheld · 1500 – 3000 W', href: productHref('fiber-laser-welding-machine-main'), img: '/images/hero-stage/welding.jpg', verb: 2, pos: '78% 55%' },
  { name: 'Shearing Machine', tag: 'Swing beam & guillotine', href: productHref('shearing-machine'), img: '/images/hero-stage/shearing.jpg', verb: 0, fit: 'frame', ratio: 1052 / 622 },
];

/** Home "machine range" explorer: tab label, category, and (optionally) the product whose specs represent it. */
export const explorer: { label: string; slug: string; rep?: string }[] = [
  { label: 'Laser Cutting', slug: 'fiber-laser-cutting-machine' },
  { label: 'Plasma Cutting', slug: 'cnc-plasma-cutting-machine', rep: 'gantry-type' },
  { label: 'Press Brake', slug: 'cnc-press-brake-machine', rep: 'cnc-press-brake' },
  { label: 'Laser Welding', slug: 'fiber-laser-welding-machine-main', rep: 'handheld-laser-welding-machine' },
  { label: 'PEB Machinery', slug: 'peb-machinery', rep: 'h-beam' },
  { label: 'Panel Bender', slug: 'panel-bender', rep: 'panel-bender' },
  { label: 'Shearing', slug: 'shearing-machine' },
];

export const timeline: [string, string][] = [
  ['2015', "Born of the ADK Engineering PVT LTD with goal of our MD'S to provide best technical & budget friendly solution with good service support."],
  ['2016', 'Installed 1st Fiber Laser Cutting Machine & 8 Plasma Cutting Machine.'],
  ['2017', 'Got the market acceptance for our product. Expanding sales & service network & participating in tech fair to boost ADK brand.'],
  ['2018', 'Within two years of span ADK has been served 100+ customer with good technical solutions.'],
  ['2019', 'Launch Press Brake Machine & Peb Machinery.'],
  ['2020', 'Launch Fiber Laser Welding Machine. Achievement to Install 48 Machines in 6 months during global pandemic.'],
  ['2021', 'ADK has installed machine in limited company & govt. sector like ISRO.'],
  ['2022', "India's 1st 30KW Fiber Laser Cutting Machine & crossed 400+ successful installation."],
  ['2023', '3000x24000 mtr long table size Laser machine order with first time ever & crossed 550+ installation.'],
  ['2024', 'Another milestone achieved! 121 more satisfied customers are now part of the ADK family with a 20 KW order!'],
  ['2025', 'Strengthening the ADK brand with 850+ successful overall installations and 151+ new installations in 2025, driven by customer trust and innovation.'],
  ['2026', 'Expanding stronger with 300+ new installations and building long-term partnerships across India.'],
];

export const about = {
  intro: [
    "ADK ENGINEERING PVT LTD, We're shaping the future as well as illuminating it with the brilliance of sheet metal industries. As a premier provider of cutting-edge sheet metal industries, we stand at the forefront of innovation, pushing the boundaries of what's possible in industries ranging from healthcare to manufacturing, telecommunications to entertainment.",
    'We pioneer innovation in precision engineering to redefine the future of manufacturing. With a relentless commitment to excellence, we specialize in designing, manufacturing and delivering all kind of sheet metal solutions that empower industries worldwide.',
    'ADK ENGINEERING PVT LTD, our commitment to customer satisfaction extends far beyond the point of sale. We understand that the true measure of our success lies not only in the quality of our products but also in the level of support and service we provide to our valued customers.',
  ],
  who: "ADK is bound to provide standardized industry solutions, genuine products and long term business relationship. A company is more valuable if it is bound by relation rather than by fear. Based on this principal we created ADK Engineering PVT LTD in 2015 at Ahmedabad, Gujarat. Our company's foundation is rooted by our leaders having a vast experience in engineering and cutting industries for more than 16 years. ADK Engineering PVT LTD is the fastest growing company in the field of CNC FIBER LASER CUTTING MACHINE, CNC PLASMA CUTTING MACHINE and CNC OXYFUEL CUTTING MACHINE, CNC/NC Press Brake Machine, Fiber Laser Welding Machine, CNC/NC Shearing Machine, PEB Machineries. As per our customers' need, demand and to serve our clients better, ADK has also started to deal in equipments & related Spares.",
  whatLead: 'ADK is longing to have multiple contact centres across India for delivering time bound services.',
  what: "Our goal is to deliver error free and time bound services and qualitative products to exceed our customers' expectations, to become the leader in relationship based marketing era. ADK has an urge to be the trend setter in cutting industry's solution designing. ADK's team of expert engineers having great industrial knowledge are always willing to understand your requirement and provide you the best possible solution at the optimum cost saving. Our team of experts has mastered in providing cost effective, user friendly and customer oriented solutions. ADK's relationship commitment is not limited to new business generation but it is extended to life long after sales services and optimum output from its products.",
  supportLead: 'Our after sales service encompasses a wide range of offerings designed to meet your needs at every stage of the product lifecycle.',
  support: [
    ['Installation and Training', 'Our experienced engineers are on hand to ensure the seamless installation and setup of your machinery. We provide comprehensive training programs to empower your team with the knowledge and skills needed to maximize productivity and efficiency.'],
    ['Ongoing Maintenance', 'Regular maintenance is essential to keep your equipment running smoothly and prevent costly downtime. Our service technicians are available to perform routine inspections, repairs, and upgrades to ensure optimal performance and reliability.'],
    ['Technical Support', "Have a question or encountering an issue? Our dedicated technical support team is just a phone call away. With prompt, knowledgeable assistance, we'll help troubleshoot any issues and provide solutions to keep your operations running smoothly."],
    ['Spare Parts Availability', "We understand that time is of the essence when it comes to equipment repairs. That's why we maintain a comprehensive inventory of spare parts, ensuring quick turnaround times and minimizing disruptions to your workflow."],
    ['Upgrades and Enhancements', 'As technology evolves, so do our products. We offer upgrade packages and enhancements to keep your machinery at the forefront of innovation, enabling you to maintain a competitive edge in your industry.'],
  ] as [string, string][],
};

/** photo for an application name used in a product's `apps` list (falls back to none) */
const appPhotos: Record<string, string> = {
  'Heavy Fabrication': 'heavy-fabrication', Elevators: 'elevators', 'Automobile Industries': 'automobile', 'Chemical Plant Equipments Mfg': 'chemical-plant',
  'Road Construction Machinery Mfg': 'road-construction', 'Job Work': 'job-work', 'Profile Cutting': 'profile-cutting', 'Control Panel Mfg': 'control-panel',
  'Food Machinery Mfg': 'food-machinery', 'Agriculture Machinery Mfg': 'agriculture', 'Steel Furniture': 'steel-furniture', 'Sheet Metal Work': 'steel-metal-work',
  Architecture: 'architecture', 'Aero Space': 'aerospace', 'Textile Machinery Mfg': 'textile-machinery',
};
export const appPhoto = (name: string) => (appPhotos[name] ? `/images/application/${appPhotos[name]}.webp` : undefined);

export const applications = ['aerospace', 'agriculture', 'architecture', 'automobile', 'chemical plant', 'control panel', 'elevators', 'food machinery', 'heavy fabrication', 'hydraulic machinery', 'job work', 'material handling equipments', 'pre engineering building', 'profile cutting', 'road construction', 'steel furniture', 'steel metal work', 'tank manufacturing', 'textile machinery', 'tower manufacturing']
  .map((n) => ({ name: n.replace(/\b\w/g, (c) => c.toUpperCase()), img: `/images/application/${n.replace(/ /g, '-')}.webp` }));

export const events = [
  ['BLECH India - 2025', 'blech-India-2025'],
  ['Indus Tech Expo - 2025', 'indus-tech-expo-2025'],
  ['Rajkot Machine Tools Show - 2024', 'rajkot-machine-tools-show-2024'],
  ['Pune Machine Tools - 2024', 'pune-machine-tools-show-2024'],
  ['Metal Forming Expo - 2024', 'metal-forming-expo-2024'],
  ['Industrial Engineering Expo Indore 2024', 'industrial-engineering-expo-indore-2024'],
  ['Imtex 2022', 'Imtex-2022'],
  ['Indomach Nagpur 2022', 'indomach-nagpur-2022'],
  ['Blech India 2020', 'blech-india-2020'],
  ['Kolhapur Expo', 'kolhapur-expo'],
  ['Nashik', 'nashik'],
  ['Pune', 'pune'],
].map(([title, dir]) => ({ title, dir }));

export const careers = [
  { title: 'Back Office Executive', img: '/images/career/Back-Office-Executive.jpeg' },
  { title: 'Sales Engineer', img: '/images/career/Sales-Engineer.jpeg' },
  { title: 'Service Engineer', img: '/images/career/Service-Engineer.jpeg' },
];

/** Main navigation — kept short on purpose; the rest lives in the footer (and under the mobile menu). */
export const navLinks = [
  { label: 'Products', href: '/products', mega: true },
  { label: 'Application', href: '/application' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact', href: '/contact-us' },
];

export const moreLinks = [
  { label: 'Gallery', href: '/gallery' },
  { label: 'News & Events', href: '/news-and-events' },
  { label: 'Career', href: '/career' },
  { label: 'Clients', href: '/clients' },
];

// Product detail imported from the manufacturer's own product pages (gweike / gwklaser.com),
// which supplies these machines. ADK product names are untouched — this only fills in photos and specs.
// Generated: edit here, not in site.ts.
import type { Node } from './site';

export const seriesExtras: Record<string, Partial<Node>> = {
  'gv-series': {
    sheetOnRequest: false,
    heroImg: '/images/series/gv-series/hero.jpg',
    heroVideo: '/video/gv-hero.mp4',
    highlights: [['Max acceleration', '3G'], ['Max rapid speed', '200 m/min'], ['Positioning accuracy', '±0.03 mm'], ['Repeat accuracy', '±0.02 mm']],
    features: [
      {
        title: '3G ultra-high-speed fiber laser cutting',
        text: 'The optimized combination of 3G acceleration and 10 Hz low-pass filtering delivers rapid traverse up to 200 m/min, for faster cutting of the same sheet.',
        img: '/images/series/gv-series/f1.jpg',
        ratio: 1.9,
        layout: 'split',
        stats: [['3', 'G', 'Max acceleration'], ['10', 'Hz', 'Low-pass filter'], ['200', 'm/min', 'Max rapid speed']],
      },
      {
        title: 'Optimized cutting paths',
        text: 'Corner paths are optimized to cut idle travel and ineffective movement, lifting overall processing efficiency by more than 50%.',
        img: '/images/series/gv-series/f1.jpg',
        videos: ['/video/gv-path-a.mp4', '/video/gv-path-b.mp4'],
      },
      {
        title: 'High-stability structure for high-speed cutting',
        text: 'Core components use a German-engineered structural design — from the bed to the beam and transmission, every detail supports high-speed motion.',
        img: '/images/series/gv-series/f2.jpg',
        ratio: 2.3,
      },
      {
        title: 'Lightweight hollow honeycomb beam',
        text: 'A high specific-stiffness design arrived at by topology optimization: more torsional stiffness at the same weight, or the same stiffness for less weight.',
        img: '/images/series/gv-series/f3.jpg',
        ratio: 1.9,
        layout: 'split',
        stats: [['18', '%', 'More torsional stiffness at the same weight'], ['25', '%', 'Weight reduction at the same stiffness']],
      },
      {
        title: 'Low-centre-of-gravity heavy-duty bed',
        text: 'Widened side ribs improve bending and torsion resistance, and a mortise-and-tenon integral welding process removes the micro-deformation that stress release would otherwise cause.',
        img: '/images/series/gv-series/f7.jpg',
        ratio: 2.3,
      },
      {
        title: 'BLT intelligent laser cutting head',
        text: 'Narrower kerf and a smaller heat-affected zone. Full-body water cooling covers over 90% of the optical path, suppressing thermal drift.',
        img: '/images/series/gv-series/f4.jpg',
        ratio: 1.9,
        layout: 'split',
        stats: [['90', '%+', 'Of the optical path water-cooled']],
      },
      {
        title: 'High-speed high-torque servo motor',
        text: 'Up to 300% torque output, 5000 rpm peak speed and 136.6 kg·cm² of rotor inertia give instantaneous, precise response.',
        img: '/images/series/gv-series/f5.jpg',
        ratio: 2.3,
        stats: [['300', '%', 'Torque output'], ['5000', 'rpm', 'Peak speed'], ['136.6', 'kg·cm²', 'Rotor inertia']],
      },
      {
        title: 'German-style integrated reducer',
        text: 'Output shaft and gear are integrated and optimized, with key components in 42CrMo alloy steel for rigidity and a longer service life.',
        img: '/images/series/gv-series/f6.jpg',
        ratio: 2.3,
      },
      {
        title: 'Automatic loading for high-speed production',
        text: 'Connects to loading and unloading systems for fully automated processing, reducing how much labour the line needs.',
        img: '/images/series/gv-series/f2.jpg',
        video: '/video/gv-loading.mp4',
        ratio: 1.78,
      },
    ],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Model', 'LF-3015GV', 'LF-4020GV', 'LF-6020GV'],
        rows: [
          ['Processing format', '3050*1530mm', '4050*2030mm', '6030*2030mm'],
          ['Laser power', '3000W / 6000W / 12000W (optional)'],
          ['Max X/Y axis speed', '200m/min'],
          ['X/Y axis positioning accuracy', '±0.03mm'],
          ['X/Y axis repeat positioning accuracy', '±0.02mm'],
          ['Max cutting acceleration / low-pass filtering', '3G / 10Hz'],
          ['Max table load capacity', '1200kg', '2300kg', '3200kg'],
          ['Rated voltage & frequency', '380V 50Hz/60Hz'],
        ],
      },
    ],
  },
  'ln-ii-series': {
    sheetOnRequest: false,
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Machine model', 'LF3015L'],
        rows: [
          ['Laser power', '500W 750W 1000W 2000W 3000W(Optional)'],
          ['Dimensions', '4440* 2500*1860mm'],
          ['Working area', '3000mm x 1500mm'],
          ['Repeat positioning accuracy', '±0.02mm'],
          ['Maximum speed', '80m/min'],
          ['Max. acceleration', '1.0G'],
          ['Specified voltage and frequency', '380V 50Hz/60Hz/60A'],
        ],
      },
    ],
  },
  'ln-series': {
    sheetOnRequest: false,
    // ADK's own render, composited onto a dark studio stage (machine.webp + backdrop)
    heroImg: '/images/series/ln-series/hero-studio.jpg',
    reveal: { value: '1.5G', label: 'Maximum acceleration', img: '/images/series/ln-series/reveal.webp' },
    highlights: [['Maximum acceleration', '1.5G'], ['Dry running speed', '120 m/min'], ['Positioning accuracy', '±0.05 mm'], ['Repeat accuracy', '±0.03 mm']],
    features: [
      {
        title: 'Dual Bus Servo Motor — dynamic performance improved by 30%',
        text: 'The whole machine is equipped with dual bus motors, with a dry running speed of 120 m/min and an acceleration of 1.5G, achieving leading dynamic performance.',
        img: '/images/series/ln-series/f1.webp',
        ratio: 2.03,
        layout: 'split',
        stats: [['1.5', 'G', 'Acceleration'], ['120', 'm/min', 'Dry running speed']],
      },
      {
        title: 'Modular tabletop',
        text: 'Ease of transportation while reducing later maintenance costs.',
        img: '/images/series/ln-series/f2.webp',
        ratio: 1.921,
      },
      {
        title: 'Aviation Aluminum Beam',
        text: 'Manufactured to aerospace standards and formed by 4300-ton press extrusion moulding. After aging treatment its strength reaches 6061 T6 — light weight, high strength.',
        img: '/images/series/ln-series/f3.webp',
        ratio: 1.92,
        layout: 'split',
        stats: [['28', '%', 'Increased intensity'], ['30', '%', 'Reduce weight']],
      },
    ],
    switcher: [
      { title: 'Air pressure DA correction', text: 'The outlet air pressure can accurately reach the set value.', img: '/images/series/ln-series/sw1.webp' },
      { title: 'Automatic nozzle replacement', text: 'Automatically completes nozzle replacement, helping automatic processing.', img: '/images/series/ln-series/sw2.webp' },
      { title: 'Intelligent vibration suppression', text: 'Z-axis real-time automatic adjustment reduces abnormal cutting jitter.', img: '/images/series/ln-series/sw3.anim.webp' },
      { title: 'Collision avoidance during movement', text: 'Flexible cutting avoids collisions with protruding parts, reducing collision risks.', img: '/images/series/ln-series/sw4.webp' },
    ],
    samples: ['/images/series/ln-series/sample1.webp'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Model', 'LF6025LN II', 'LF4020LN II', 'LF3015LN II'],
        rows: [
          ['Working area', '6100*2550mm', '4100*2050mm', '3050*1520mm'],
          ['X/y axis positioning accuracy', '±0.05mm', '±0.05mm', '±0.05mm'],
          ['X/y axis repeat positioning accuracy', '±0.03mm', '±0.03mm', '±0.03mm'],
          ['Power rated voltage and freguency', '380V 50HZ/60HZ', '380V 50HZ/60HZ', '380V 50HZ/60HZ'],
        ],
      },
    ],
  },
  'ga-pro-series': {
    sheetOnRequest: false,
    heroImg: '/images/series/ga-pro-series/hero.webp',
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Machine Model', 'GA III Series'],
        rows: [
          ['Laser Power', '3000W / 6000W / 12000W'],
          ['Working Area', '6050 × 2530 / 4050 × 2030 / 3050 × 1500mm'],
          ['X/Y Axis Positioning Accuracy', '±0.03mm'],
          ['X/Y Axis Repeat Positioning Accuracy', '±0.02mm'],
          ['Maximum Running Speed', '120m/min'],
          ['Maximum Acceleration', '1.5G'],
        ],
      },
    ],
  },
  'ga-series': {
    sheetOnRequest: false,
    heroImg: '/images/series/ga-series/hero.webp',
    features: [
      {
        title: 'Mortise and rivet welded bed',
        text: 'The bed is made of super-heavy steel sheet mortise and rivet welded, utilizing stress-relief annealing technology, internal reinforcement ribs + transverse tube support, ensuring high strength and stability.',
        img: '/images/series/ga-series/f1.webp',
        ratio: 1.92,
      },
      {
        title: 'Dual-position exchange table',
        text: '15 seconds quick exchange, significantly improving production efficiency, saving labor costs.',
        img: '/images/series/ga-series/f2.webp',
        ratio: 2.18,
      },
      {
        title: 'Matrix exhaust structure',
        text: 'Double-row multi-row independent, high-sealing partition smoke exhaust, effectively filtering harmful gases, smoke, dust, making the production process more environmentally friendly.',
        img: '/images/series/ga-series/f3.webp',
        ratio: 2.056,
      },
    ],
    samples: ['/images/series/ga-series/sample1.webp', '/images/series/ga-series/sample2.webp', '/images/series/ga-series/sample3.webp', '/images/series/ga-series/sample4.webp'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Model', 'LF3015GA', 'LF4020GA', 'LF6025GA'],
        rows: [
          ['Working area', '3050*1530mm', '4050*2030mm', '6050mm*2530mm'],
          ['Laser power', '(Optional) 12000W/6000W/4000W/ 3000W/2000W/1500W', '(Optional) 12000W/6000W/4000W/ 3000W/2000W/1500W', '(Optional) 12000W/6000W/4000W/ 3000W/2000W/1500W'],
          ['Dimensions', '8580*2850*2300mm', '10750*3350*2300mm', '15000*4018*2300mm'],
          ['X/y axis positioning accuracy', '±0.03mm', '±0.03mm', '±0.03mm'],
          ['X/y axis repeat positioning accuracy', '±0.02mm', '±0.02mm', '±0.02mm'],
          ['Maximum speed', '120m/min', '120m/min', '120m/min'],
          ['Max. acceleration', '1.5G', '1.5G', '1.5G'],
        ],
      },
    ],
  },
  'gh-series': {
    sheetOnRequest: false,
    heroImg: '/images/series/gh-series/hero.webp',
    features: [
      {
        title: 'Enhanced processing capability for thick sheets',
        text: 'Enhanced processing capability for thick sheets Capable of 12-meter whole sheet thick cutting, with improved dynamic performance, faster cutting speed, and stronger cutting ability.',
        img: '/images/series/gh-series/f1.webp',
        ratio: 2.056,
      },
      {
        title: 'Mortise and rivet welded bed',
        text: 'The bed is made of super-heavy steel sheet mortise and rivet welded, utilizing stress-relief annealing technology, internal reinforcement ribs + transverse tube support, ensuring high strength and stability.',
        img: '/images/series/gh-series/f2.webp',
        ratio: 1.92,
      },
      {
        title: 'Matrix exhaust structure',
        text: 'Double-row multi-row independent, high-sealing partition smoke exhaust, effectively filtering harmful gases, smoke, dust, making the production process more environmentally friendly.',
        img: '/images/series/gh-series/f3.webp',
        ratio: 2.056,
      },
      {
        title: 'Bus System + Bus Motor',
        text: 'Real-time adjustment, efficient coordination, powerful functions, and easy deployment.',
        img: '/images/series/gh-series/f4.webp',
        ratio: 1.954,
      },
    ],
    samples: ['/images/series/gh-series/sample1.webp'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Model', 'LF4020GH', 'LF6025GH', 'LF12025GH'],
        rows: [
          ['Working area', '4050mm*2030mm', '6050mm*2530mm', '12500mm*2550mm'],
          ['Laser power', '(Optional) 60000W/40000W/30000W/ 20000W/15000W/12000W/8000W', '(Optional) 60000W/40000W/30000W/ 20000W/15000W/12000W/8000W', '(Optional) 60000W/40000W/30000W/ 20000W/15000W/12000W/8000W'],
          ['Dimensions', '11320*3690*2860mm', '15554*4345*2705mm', '27980*4345*2705mm'],
          ['X/y axis positioning accuracy', '±0.03mm', '±0.03mm', '±0.03mm'],
          ['X/y axis repeat positioning accuracy', '±0.02mm', '±0.02mm', '±0.02mm'],
          ['Maximum speed', '150-220m/min', '150-220m/min', '150-220m/min'],
          ['Max. acceleration', '1.5G-2.5G', '1.5G-2.5G', '1.5G-2.5G'],
        ],
      },
    ],
  },
  'sl-series': {
    sheetOnRequest: false,
    heroImg: '/images/series/sl-series/hero.jpg',
    features: [
      {
        title: 'Modular bed',
        text: 'Modular lathe bed realizes customized length as required, and the lathe bed and workbench are designed separately. Large-section rectangular pipes are welded and finished after annealing, which is stable, reliable and convenient for transportation.',
        img: '/images/series/sl-series/f1.jpg',
        ratio: 2.37,
      },
      {
        title: 'Customized format',
        img: '/images/series/sl-series/f2.jpg',
        ratio: 2.37,
      },
      {
        title: 'Ventilation by Zones',
        text: 'Zone ventilation, right-side blowing and left-side suction, low-carbon and smoke-free, clean operation.',
        img: '/images/series/sl-series/f3.webp',
        ratio: 1.467,
      },
      {
        title: 'Safety Light Curtain Protection',
        text: 'Safety light curtains installed on both sides of the crossbeam provide all-around protection for equipment operators, effectively preventing safety accidents.',
        img: '/images/series/sl-series/f4.jpg',
        ratio: 2.37,
      },
    ],
    samples: ['/images/series/sl-series/sample1.jpg'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Model', '16032SL', '24032SL'],
        rows: [
          ['Working area', '16000*3200mm', '24000*3200mm'],
          ['X/Y axis positioning accuracy', '0.1/10m&0.05/5m', '0.1/10m&0.05/5m'],
          ['X/Y axis repeat positioning accuracy', '0.05mm', '0.05mm'],
        ],
      },
    ],
  },
  'mb-series': {
    sheetOnRequest: false,
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Machine model', 'LF3015MB'],
        rows: [
          ['Laser power', '3000W'],
          ['Working area', '3000*1500mm'],
          ['Dimensions', '23125*7192*2555mm'],
          ['Repeat positioning accuracy', '±0.03mm'],
          ['Maximum speed', '100m/min'],
          ['Max. acceleration', '1.5G'],
          ['Voltage and frequency', '380V 50Hz/60Hz'],
        ],
      },
    ],
  },
  't2-series': {
    sheetOnRequest: false,
    heroImg: '/images/series/t2-series/hero.jpg',
    features: [
      {
        title: 'Professional Pneumatic Chuck',
        text: 'Precision pneumatic chuck, four-jaw automatic centering clamping, stable clamping without damaging the workpiece.',
        img: '/images/series/t2-series/f1.jpg',
        ratio: 2.248,
      },
      {
        title: 'Higher Efficiency',
        text: 'Maximum chuck speed of 150r/min, providing higher profitability',
        img: '/images/series/t2-series/f2.jpg',
        ratio: 2.656,
      },
      {
        title: 'Universal for Various Pipes',
        text: 'Capable of cutting round pipes, square pipes, rectangular pipes, channel steel, angle steel, I-beams, and other profiled steel.',
        img: '/images/series/t2-series/f3.jpg',
        ratio: 1.75,
      },
    ],
    samples: ['/images/series/t2-series/sample1.jpg'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Model', 'GKS-6012T2', 'GKS-6016T2', 'GKS-9016T2'],
        rows: [
          ['Laser power', '1500W-3000W', '1500W-3000W', '1500W-3000W'],
          ['Clamping range', 'Round pipe Φ10-120mm Square pipe 口10-120mm', 'Round pipe Φ10-160mm Square pipe 口10-160mm', 'Round pipe Φ10-160mm Square pipe 口10-160mm'],
          ['r/min Maximum rotating speed', '200', '140', '140'],
          ['Effective cutting length of pipe', '6500mm', '6500mm', '9500mm'],
          ['Single pipe load-bearing', '80KG', '80KG', '80KG'],
          ['Pneumatic Chuck Chuck structure', '120', '160', '160'],
        ],
      },
    ],
  },
  't3-series': {
    sheetOnRequest: false,
    heroImg: '/images/series/t3-series/hero.jpg',
    features: [
      {
        title: 'Three-chuck full stroke for more stable cutting',
        text: 'The three chucks are all positioned on the left side of the cutting head to jointly clamp the pipe, preventing sagging and bending of thin-walled pipes in the middle and ensuring high machining accuracy.',
        img: '/images/series/t3-series/f1.jpg',
        ratio: 2.259,
      },
      {
        title: 'Side-hung bed frame with high-low rail layout',
        text: 'The side-hung machine bed lowers the center of gravity for easier loading. The high-low rail arrangement ensures more reasonable.',
        img: '/images/series/t3-series/f2.jpg',
        ratio: 2.0,
      },
      {
        title: 'Independent servo- driven support',
        text: 'Independent servo-driven support at the loading and unloading end supports the pipe in both vertical and horizontal directionssimultaneously, ensuring a secure grip on slender pipes.',
        img: '/images/series/t3-series/f3.jpg',
        ratio: 2.37,
      },
      {
        title: '350 pneumatic chuck, zero tailings cutting',
        text: 'Heavy-duty pneumatic chuck ensures stable and non-damaging clamping of workpieces, achieving zero tailings cutting through the movement of three chucks.',
        img: '/images/series/t3-series/f4.jpg',
        ratio: 2.37,
      },
    ],
    samples: ['/images/series/t3-series/sample1.jpg'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Model', '12050T3', '12065T3', '36T3'],
        rows: [
          ['Laser power', '6000W-30000W', '6000W-30000W', '3000W-12000W'],
          ['Clamping range', 'Round pipe Φ40-500mm Square pipe 口40-500mm', 'Round pipe Φ50-600mm Square pipe 口50-600mm', 'Round pipe Φ30-350mm Square pipe 口30-350mm'],
          ['r/min Maximum rotating speed', '30', '30', '60'],
          ['Effective cutting length of pipe', '6500mm', '12500mm', '6500mm/9500mm/12500mm'],
          ['Single pipe load-bearing', '2000KG', '3000KG', '1200KG'],
          ['Pneumatic Chuck Chuck structure', '520', '650', '360'],
        ],
      },
    ],
  },
  't4-series': {
    sheetOnRequest: false,
    heroImg: '/images/series/t4-series/hero.webp',
    features: [
      {
        title: 'Dual Procedure in Parallel',
        text: 'It ensures unloading for the last round or loading for the next round, while carrying out pipe cutting. Seamless collaboration, remarkable efficiency.',
        img: '/images/series/t4-series/f1.webp',
        ratio: 2.37,
      },
      {
        title: 'Intelligent Full-mobility Chucks',
        text: 'Flexible & Diverse combinations for automatic switch between 3+1, 2+2, and 1+3 modes to adapt to various working conditions, solving the problems of bending and deformation in extra-long heavy pipe processing.',
        img: '/images/series/t4-series/f2.webp',
        ratio: 2.954,
      },
      {
        title: '500 Heavy-duty Chucks, Cut with Zero Tailing',
        text: '500 heavy-duty pneumatic chucks, process round tubes with a diameter of 50 - 500mm and square tubes with a side length of 50x50 - 350x350mm. The Four-chuck flexible system achieves true tailing-free cutting.',
        img: '/images/series/t4-series/f3.webp',
        ratio: 2.373,
      },
      {
        title: 'Full Pipe Processing, Superior Load-bearing Capacity',
        text: 'Supports up to 2000kg single heavy tube and 12m long tube loading, cutting, unloading.',
        img: '/images/series/t4-series/f4.webp',
        ratio: 2.37,
      },
    ],
    samples: ['/images/series/t4-series/sample1.webp'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Machine model', '12050T4'],
        rows: [
          ['Laser power', '6000W-20000W'],
          ['Clamping range', 'Round tube (φ50-φ500mm) Square tube (□50X50-□350X350mm)'],
          ['Max. rotation rate', '30r/min (decreases with increased weight of the pipes)'],
          ['Effective cutting length', '12500mm'],
          ['Single pipe load-bearing', '2000KG'],
          ['Chuck structure', '500 Pneumatic Chuck'],
        ],
      },
    ],
  },
  'tg-e-series': {
    sheetOnRequest: false,
    heroImg: '/images/series/tg-e-series/hero.jpg',
    features: [
      {
        title: 'Front over-positioning cutting',
        text: 'The front over-positioning cutting process solves the problem of the last workpiece being unable to be cut due to the downward pressure on the material caused by single-chuck clamping, ensuring more stable cutting.',
        img: '/images/series/tg-e-series/f1.jpg',
        ratio: 2.291,
      },
      {
        title: 'Modular Design',
        text: 'Can be freely matched with unloading racks, fully automatic loading machines, semi-automatic loading machines, bevel cutting heads, and other optional modules to meet diverse customer usage scenarios.',
        img: '/images/series/tg-e-series/f2.jpg',
        ratio: 2.819,
      },
      {
        title: 'Universal for Various Pipes',
        text: 'Capable of cutting round pipes, square pipes, rectangular pipes, and most irregularly shaped pipes, including oval pipes.',
        img: '/images/series/tg-e-series/f3.jpg',
        ratio: 1.968,
      },
    ],
    samples: ['/images/series/tg-e-series/sample1.jpg'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Model', 'GKS-6024TG', 'GKS-9024TG'],
        rows: [
          ['(Optional) Laser power', '1500W-6000W', '1500W-6000W'],
          ['Clamping range', 'Round pipe Φ20-240mm Square pipe 口20-240mm', 'Round pipe Φ20-240mm Square pipe 口20-240mm'],
          ['Maximum rotating speed', '100r/min', '100r/min'],
          ['Effective cutting length of pipe', '6500mm', '9500mm'],
          ['Single pipe load-bearing', '300KG', '300KG'],
          ['Pneumatic Chuck Chuck structure', '240 Pneumatic Chuck/ 280', '240 Pneumatic Chuck/ 280'],
        ],
      },
    ],
  },
  'lnr-series': {
    sheetOnRequest: false,
    heroImg: '/images/series/lnr-series/hero.jpg',
    features: [
      {
        title: 'Mortise-riveted welding bed',
        text: 'Mortise-riveted welding bed with internal reinforcement and stress-relief annealing technology, enhancing bed strength and tensile resistance.',
        img: '/images/series/lnr-series/f1.jpg',
        ratio: 2.37,
      },
      {
        title: 'Economical and practical',
        text: 'One device meets the dual requirements of cutting pipes and sheets, saving costs and space.',
        img: '/images/series/lnr-series/f2.jpg',
        ratio: 2.37,
      },
      {
        title: 'Intelligent operating system',
        text: 'User-friendly interface, powerful system functions, easy deployment, and convenient operation, significantly lowering the human entry threshold.',
        img: '/images/series/lnr-series/f3.jpg',
        ratio: 2.37,
      },
    ],
    samples: ['/images/series/lnr-series/sample1.jpg'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Model', 'LF3015LNR', 'LF6025LNR'],
        rows: [
          ['Working area', '3050*1530mm', '6050*2530mm'],
          ['Laser power', '1000W/2000W/3000W/4000W(Optional)', '1000W/2000W/3000W/4000W/12000W(Optional)'],
          ['x/y axis repeat positioning accuracy', '±0.02mm', '±0.02mm'],
          ['Dimensions', '9150*4300*2300mm', '9520*5300*2300mm'],
          ['Clamping range', 'Round pipe Φ20-240mm Square pipe 口20-240mm', 'Round pipe Φ20-240mm Square pipe 口20-240mm'],
          ['Pneumatic Chuck Chuck structure', '240', '240'],
          ['Power rated voltage and frequency', '380V 50Hz/60Hz', '380V 50Hz/60Hz'],
        ],
      },
    ],
  },
  'gar-series': {
    sheetOnRequest: false,
    heroImg: '/images/series/gar-series/hero.jpg',
    features: [
      {
        title: 'Dual workstation exchange table',
        text: '15-second rapid exchange of dual workstation platforms greatly reduces standby time, significantly improves production efficiency, and saves labor costs.',
        img: '/images/series/gar-series/f1.jpg',
        ratio: 2.37,
      },
      {
        title: 'Sheet-tube dual cutting',
        text: 'Combines sheet and tube cutting functions into one, easily handling diverse processing needs. Small footprint, low investment, truly worry-free and labor-saving.',
        img: '/images/series/gar-series/f2.jpg',
        ratio: 2.373,
      },
      {
        title: 'Intelligent operating system',
        text: 'User-friendly interface, powerful system functions, easy deployment, and convenient operation, significantly lowering the human entry threshold.',
        img: '/images/series/gar-series/f3.jpg',
        ratio: 2.37,
      },
    ],
    samples: ['/images/series/gar-series/sample1.jpg'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Model', 'LF8025GAR', 'LF6025GAR', 'LF4020GAR', 'LF3015GAR'],
        rows: [
          ['Working area', '8050*2530mm', '6050*2530mm', '4050*2030mm', '3050*1530mm'],
          ['Laser power', '12000W/1500W/2000W/ 3000W/4000W/6000W', '12000W/1500W/2000W/ 3000W/4000W/6000W', '12000W/1500W/2000W/ 3000W/4000W/6000W', '1500W/2000W/3000W/ 4000W/6000W'],
          ['x/y axis repeat positioning accuracy', '±0.02mm', '±0.02mm', '±0.02mm', '±0.02mm'],
          ['Dimensions', '19175*6650*2524mm', '14140*5015*2254mm', '11500*4260*2254mm', '9500*3760*2524mm'],
          ['Clamping range', 'Round pipe Φ20-240mm Square pipe 口20-240mm', 'Round pipe Φ20-240mm Square pipe 口20-240mm', 'Round pipe Φ20-240mm Square pipe 口20-240mm', 'Round pipe Φ20-240mm Square pipe 口20-240mm'],
          ['Pneumatic Chuck Chuck structure', '240', '240', '240', '240'],
          ['Power rated voltage and frequency', '380V 50Hz/60Hz', '380V 50Hz/60Hz', '380V 50Hz/60Hz', '380V 50Hz/60Hz'],
        ],
      },
    ],
  },
  'lf1800-series': {
    sheetOnRequest: false,
    heroImg: '/images/series/lf1800-series/hero.jpg',
    features: [
      {
        title: 'Japan imported Yaskawa robot arm',
        text: 'Utilizing JJapan imported Yaskawa robot arm for stability and efficiency.',
        img: '/images/series/lf1800-series/f1.jpg',
        ratio: 2.373,
      },
      {
        title: 'Precise and Flexible Cutting',
        text: 'Supports 360-degree cutting, capable of accurately cutting non-standard shaped materials.',
        img: '/images/series/lf1800-series/f2.jpg',
        ratio: 2.37,
      },
    ],
    samples: ['/images/series/lf1800-series/sample1.jpg'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Machine model', 'LF1800'],
        rows: [
          ['Laser power', '1000W/1500W/2000W/3000W/4000W'],
          ['Laser type', 'fiber laser source'],
          ['Arm radius', '1800mm'],
          ['Repeated positioning accuracy', '±0.05mm'],
          ['Installation method', 'Loor Stand/Hang Upside Down'],
        ],
      },
    ],
  },
  'm3015g-series': {
    sheetOnRequest: false,
    heroImg: '/images/series/m3015g-series/hero.jpg',
    features: [
      {
        title: 'Good dynamic performance',
        text: 'Rotation Worktable with Single Rotation Time < 3s, Single Column Cutting Time Within 50 Seconds',
        img: '/images/series/m3015g-series/f1.jpg',
        ratio: 1.778,
      },
      {
        title: 'Independently developed three-dimensional five-axis linked cutting head',
        text: 'Combining optical principles, mathematical algorithms, etc., it can achieve N*360° rotation, ±135° swing. Stable optical characteristics, 360-degree collision prevention to protect the cutting head safety.',
        img: '/images/series/m3015g-series/f2.jpg',
        ratio: 2.37,
      },
      {
        title: 'Safety and Reliability',
        text: 'Incorporates safety features like safety light curtains, external protective covers, monitoring devices, observation windows, ensuring operator safety.',
        img: '/images/series/m3015g-series/f3.jpg',
        ratio: 1.778,
      },
    ],
    samples: ['/images/series/m3015g-series/sample1.jpg'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Model', 'GKS-M3015G', 'GKS-M3122G', 'GKS-M4025G'],
        rows: [
          ['Distance', 'X axis≥3000mm、Y axis≥1500mm 、 Z axis≥650mm', 'X axis≥3100mm、Y axis≥2200mm 、 Z axis≥650mm', 'X axis≥4000mm、Y axis≥2500mm 、 Z axis≥750mm'],
          ['Speed', 'X/Y/Z axis ≥100m/min', 'X/Y/Z axis ≥100m/min', 'X/Y/Z axis ≥80m/min'],
          ['X/Y/Z axis acceleration', '10m/s²', '10m/s²', '10m/s²'],
          ['Positioning accuracy', '±0.05mm', '±0.05mm', '±0.05mm'],
          ['Repeat positioning accuracy', '±0.03mm', '±0.03mm', '±0.03mm'],
          ['Distance', 'C axis Nx360°、A axis±135°', 'C axis Nx360°、A axis±135°', 'C axis Nx360°、A axis±135°'],
          ['Speed', 'C/A axis≥90r/min', 'C/A axis≥90r/min', 'C/A axis≥90r/min'],
          ['Acceleration', 'C/A axis≥90rad/s²', 'C/A axis≥90rad/s²', 'C/A axis≥90rad/s²'],
          ['Positioning accuracy', 'C/A axis±0.015°', 'C/A axis±0.015°', 'C/A axis±0.015°'],
          ['Repeat positioning accuracy', 'C/A axis±0.005°', 'C/A axis±0.005°', 'C/A axis±0.005°'],
        ],
      },
    ],
  },
  'handheld-laser-welding-machine': {
    sheetOnRequest: false,
    heroImg: '/images/series/handheld-laser-welding-machine/hero.jpg',
    features: [
      {
        title: 'One Against Three',
        text: 'Combines welding, cleaning, and cutting functions into one, powerful and versatile.',
        img: '/images/series/handheld-laser-welding-machine/f1.jpg',
        ratio: 2.37,
      },
      {
        title: 'Compact and Flexible',
        text: 'Small footprint, high flexibility, more efficient for cutting small parts.',
        img: '/images/series/handheld-laser-welding-machine/f2.jpg',
        ratio: 2.37,
      },
      {
        title: 'Efficient Welding',
        text: 'Smooth and aesthetically pleasing weld seams, 2-10 times faster than traditional welding machines, saving labor and improving quality.',
        img: '/images/series/handheld-laser-welding-machine/f3.jpg',
        ratio: 2.37,
      },
    ],
    samples: ['/images/series/handheld-laser-welding-machine/sample1.jpg'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Model', 'LCW1500', 'LCW2000', 'LCW3000'],
        rows: [
          ['Laser power', '1500', '2000', '3000'],
          ['Laser wavelength', '1080nm', '1080nm', '1080nm'],
          ['Working voltage', 'Single item 220V 50/60HZ Three items 380V 50/60HZ', 'Single item 220V 50/60HZ Three items 380V 50/60HZ', 'Three items 380V 50/60HZ'],
          ['（Support customization） Fiber length', '10-20m', '10-20m', '10-20m'],
          ['（Gradient adjustable） Power adjustment range(%)', '10-100', '10-100', '10-100'],
          ['Laser head weight', '0.8KG', '0.8KG', '0.8KG'],
          ['Dimensions', '910*540*1100mm', '910*540*1100mm', '1210*650*1200mm'],
        ],
      },
    ],
  },
  'handheld-laser-cleaning-machine': {
    sheetOnRequest: false,
    heroImg: '/images/series/handheld-laser-cleaning-machine/hero.jpg',
    features: [
      {
        title: 'Easy to operate',
        text: 'No need for professional welders, simple training is sufficient, significantly lowering the difficulty of personnel recruitment.',
        img: '/images/series/handheld-laser-cleaning-machine/f1.jpg',
        ratio: 2.37,
      },
      {
        title: 'Non-destructive Operations',
        text: 'Capable of cleaning sensitive materials such as aluminum, carbon, stainless steel, carbon fiber-reinforced polymers, or coated materials without damaging them, able to clean even fine gaps.',
        img: '/images/series/handheld-laser-cleaning-machine/f2.jpg',
        ratio: 2.373,
      },
      {
        title: 'Green and Energy-efficient',
        text: 'Allows precise positioning for cleaning, effectively removing micrometer-level contaminant particles while protecting the surface of fragile materials, reducing costs by 80% compared to chemical cleaning.',
        img: '/images/series/handheld-laser-cleaning-machine/f3.jpg',
        ratio: 2.37,
      },
    ],
    samples: ['/images/series/handheld-laser-cleaning-machine/sample1.jpg'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Model', 'LC100', 'LC300', 'LC500'],
        rows: [
          ['Laser power', '100', '300', '500'],
          ['Dimensions', '910*540*1100mm', '910*540*1100mm', '910*540*1100mm'],
          ['Scanning range', '100*100mm', '100*100mm', '200*200mm'],
          ['（Gradient adjustable） Power adjustment range(%)', '10-100', '10-100', '10-100'],
          ['Laser head weight', '≤0.76KG', '≤0.76KG', '≤0.9KG'],
          ['Rated voltage', '220V 50Hz/60Hz', '220V 50Hz/60Hz', '220V 50Hz/60Hz'],
        ],
      },
    ],
  },
  '3d-fiber-laser-welding-machine-robot': {
    sheetOnRequest: false,
    heroImg: '/images/series/3d-fiber-laser-welding-machine-robot/hero.jpg',
    features: [
      {
        title: 'Flexible welding Aesthetic welds',
        text: 'Three-dimensional welding is formed in just one step, with aesthetic welds and minimal deformation.',
        img: '/images/series/3d-fiber-laser-welding-machine-robot/f1.jpg',
        ratio: 2.37,
      },
      {
        title: 'Flexible processing Powerful functions',
        text: 'Fiber laser and industrial robot are highly integrated. It enables flexible processing of 1-8mm complex multi-specification workpieces.',
        img: '/images/series/3d-fiber-laser-welding-machine-robot/f2.jpg',
        ratio: 2.37,
      },
    ],
    samples: ['/images/series/3d-fiber-laser-welding-machine-robot/sample1.jpg'],
    tables: [
      {
        title: 'Technical Parameters',
        head: ['Machine model', 'LW1800'],
        rows: [
          ['Laser power', '1000W-3000W'],
          ['Cooling method', 'Water cooling'],
          ['Operating temperature', '0°C-40C'],
          ['Repeated positioning accuracy', '±0.05mm'],
          ['Rated voltage', '220V/380V/50Hz/60Hz'],
        ],
      },
    ],
  },
};

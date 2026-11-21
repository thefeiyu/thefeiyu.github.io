/* ==================================================================
   content.js: EVERYTHING ON YOUR SITE IS WRITTEN HERE.
   Edit the text, save, refresh the browser. That's it.

   Tips
   - Text goes inside "double quotes". If you need a double quote
     inside text, use “curly quotes” instead.
   - Every item in a list ends with a comma.
   - You can use simple HTML inside any text: <strong>bold</strong>,
     <em>italic</em>, <a href="https://...">a link</a>.
   - Images go in the assets/ folder, then reference them as
     "assets/your-photo.jpg".
   ================================================================== */

window.SITE = {
  name: "Feiyu Wu",
  authorName: "F. Wu",            // bolded in publication author lists
  tagline: "Mechanical engineering student at Northeastern University, minoring in robotics and mathematics. I like building things I can ride, race, or fly.",
  email: "wu.feiyu@northeastern.edu",
  location: "Boston, MA",
  resumePdf: "assets/Feiyu_Wu_Resume.pdf",
  updated: "2026-11-21",          // change this whenever you update the site
  links: {
    github: "https://github.com/thefeiyu",
    linkedin: "https://linkedin.com/in/feiyu-wu",
  },

  about: [
    "I’m a mechanical engineering student at Northeastern, graduating in May 2028. Most recently I spent eight months as a thermal systems engineering co-op at Bosch, rebuilding a test bench for electric-vehicle thermal management.",
    "Before that I did research on passive perching mechanisms for flying robots at Colorado State’s Adaptive Robotics Lab, which led to two publications, and built a Python interface for FPGA stochastic computing at MIT.",
    "Outside of work I race karts and sim, restore watches, ride motorcycles, and ski. Right now I’m building a collapsible minibike inspired by the WWII Welbike.",
  ],

  contactNote: "The best way to reach me is email. I’m happy to talk about co-ops, research, or anything with an engine.",

  /* ---------------- PROJECTS ----------------
     To add a project: copy one whole { ... } block, paste it where you
     want it in the list (order here = order on the site), and edit it.
     slug     = short name used in the web address (lowercase, dashes)
     featured = true shows it on the home page
     cover    = optional image path; delete the line if you don't have one
     sections = the write-up. Each has a heading, and optionally
                paragraphs, bullets, and images (with captions).
     log      = optional dated build log, great for ongoing projects
  */
  projectsIntro: "Things I’ve designed, built, and tested, at work, in the lab, and in the garage.",

  projects: [
    {
      slug: "minibike",
      title: "Compact storable minibike",
      dates: "Sep 2026 – present",
      status: "in progress",
      context: "personal project",
      featured: true,
      // cover: "assets/minibike-cover.jpg",
      tags: ["CAD", "fabrication", "welding", "powertrain"],
      summary: "A collapsible minibike inspired by the WWII Welbike, designed to be fuel efficient and to fold down small enough to store anywhere.",
      sections: [
        {
          heading: "goals",
          bullets: [
            "Fold down into a compact package for storage and transport",
            "Stay fuel efficient for short-range trips",
            // add your target dimensions, weight, engine, etc.
          ],
        },
        {
          heading: "design",
          paragraphs: [
            "Replace this with how the folding mechanism works, frame material choices, and what you learned from the original Welbike.",
          ],
          images: [
            // { src: "assets/minibike-cad.png", caption: "Folding frame in Onshape" },
          ],
        },
      ],
      log: [
        { date: "Sep 2026", text: "Started the project." },
        // { date: "Dec 2026", text: "Frame welded and test-folded." },
      ],
      links: [
        // { label: "Onshape model", url: "https://..." },
      ],
    },

    {
      slug: "ev-test-bench",
      title: "EV thermal test bench rebuild",
      dates: "Jan 2026 – Aug 2026",
      context: "Bosch co-op",
      featured: true,
      tags: ["thermodynamics", "LabVIEW", "instrumentation", "CAD", "CNC"],
      summary: "Re-engineered the coolant, refrigerant, and air flow paths of an electric-vehicle thermal management test bench at Robert Bosch LLC.",
      sections: [
        {
          heading: "what I did",
          bullets: [
            "Integrated pumps and parallel control valves, then mapped flow performance curves across 36 valve configurations (12 gate valve × 3 ball valve positions)",
            "Calibrated and validated 100+ thermocouples alongside RTDs, flowmeters, and differential-pressure flow calculations",
            "Revised LabVIEW control logic and automated data reporting",
            "Ran energy balance validations across 20+ test cases and BLEVE safety modeling comparing R-290 and R-1234yf refrigerants",
            "Designed and fabricated mounts for pumps, valves, and e-compressors using CAD, 3D printing, and CNC machining",
          ],
        },
      ],
    },

    {
      slug: "perching-robot",
      title: "Passive perching mechanism for flying robots",
      dates: "Jun 2020 – Aug 2023",
      context: "Colorado State University, Adaptive Robotics Lab",
      featured: true,
      tags: ["robotics", "mechanism design", "shape memory alloys", "research"],
      summary: "Bistable mechanisms that let small drones perch on ceilings and walls without powered grippers. Published at ICRA 2022 and in Advanced Intelligent Systems.",
      sections: [
        {
          heading: "overview",
          bullets: [
            "Modeled and assembled passive bistable mechanisms that let flying robots attach to ceilings and vertical surfaces",
            "Designed and fabricated a custom passive suction cup that holds over 35 N and releases easily",
            "Used shape memory alloys to tune the triggering force, so the mechanism adapts to different contact speeds and angles",
          ],
        },
      ],
      links: [
        { label: "ICRA 2022 paper", url: "https://doi.org/10.1109/ICRA46639.2022.9811671" },
        { label: "Advanced Intelligent Systems paper", url: "https://doi.org/10.1002/aisy.202500107" },
      ],
    },

    {
      slug: "go-kart",
      title: "670cc go-kart",
      dates: "Spring 2022",
      context: "IB Personal Project",
      tags: ["fabrication", "welding", "vehicle design"],
      summary: "Designed and fabricated a 670cc go-kart for my IB Diploma Programme Personal Project.",
      sections: [
        {
          heading: "build",
          paragraphs: [
            "Replace this with the chassis design, how you sourced and mounted the engine, and how it drove.",
          ],
        },
      ],
    },
  ],

  /* ---------------- PUBLICATIONS ---------------- */
  publications: [
    {
      title: "Tunable Mechanism Enables Robust Surface Perching Under Different Landing Impacts and Orientation Misalignment",
      authors: "M. Saikot, F. Wu, E. Lerner, and J. Zhao",
      venue: "Advanced Intelligent Systems, 2025, 7, 2500107",
      doi: "10.1002/aisy.202500107",
    },
    {
      title: "A Novel Passive Mechanism for Flying Robots to Perch onto Surfaces",
      authors: "H. Hsiao, F. Wu, J. Sun, and J. Zhao",
      venue: "ICRA 2022, Philadelphia, PA, pp. 1183–1189",
      doi: "10.1109/ICRA46639.2022.9811671",
    },
  ],

  /* ---------------- RESUME ---------------- */
  resume: {
    education: [
      {
        school: "Northeastern University",
        location: "Boston, MA",
        detail: "B.S. Mechanical Engineering; minors in Robotics and Mathematics",
        dates: "Expected May 2028",
        bullets: [
          "GPA 3.61 / 4.00, Dean’s List",
          "Coursework: Fluid Mechanics, Thermodynamics, Mechanics of Materials, Computer Vision",
        ],
      },
    ],

    experience: [
      {
        org: "Robert Bosch LLC, Thermal Management for Electric Vehicles Lab",
        location: "Waltham, MA",
        role: "Thermal Systems Engineering Co-op",
        dates: "Jan 2026 – Aug 2026",
        bullets: [
          "Re-engineered test bench coolant, refrigerant, and air flow paths; integrated pumps and parallel control valves; mapped flow performance curves across 36 valve configurations (12 gate valve and 3 ball valve positions) to improve testing efficiency",
          "Performed data analysis, thermodynamic calculations, and energy balance validations across 20+ test cases; conducted BLEVE EPA safety compliance modeling comparing rupture pulse energies between R-290 and R-1234yf refrigerants",
          "Calibrated and validated 100+ thermocouples alongside RTDs, flowmeters, and differential-pressure flow calculations; revised LabVIEW control logic and automated data reporting while maintaining hardware-to-software continuity",
          "Designed and fabricated custom mounts for pumps, valves, and e-compressors via CAD, 3D printing, and CNC machining; integrated environmental humidification systems and mapped controller-to-ambient humidity offsets",
        ],
      },
      {
        org: "The 1916 Company, Radcliffe Jewelers",
        location: "Pikesville, MD",
        role: "Watch Technician Intern",
        dates: "Jul 2025 – Sep 2025",
        bullets: [
          "Serviced, regulated, and sized mechanical and quartz timepieces on-site using horological tooling across luxury maisons including Rolex, Cartier, Grand Seiko, Omega, Jaeger-LeCoultre, IWC, Breguet, Breitling, and TAG Heuer",
          "Polished, cleaned, and inspected watches and jewelry using ultrasonic cleaners, polishing machines, dry/wet pressure testers, steamers, and microscopes; identified necessary repairs",
        ],
      },
      {
        org: "MIT Research Laboratory of Electronics",
        location: "Cambridge, MA",
        role: "Research Intern",
        dates: "Apr 2024 – Aug 2024",
        bullets: [
          "Designed a Python user interface for a stochastic computation demonstration on field-programmable gate arrays (FPGA)",
          "Presented a research poster at the 2024 SUPREME Annual Review at MIT",
        ],
      },
      {
        org: "Colorado State University, Adaptive Robotics Lab",
        location: "Fort Collins, CO",
        role: "Research Intern",
        dates: "Jun 2020 – Aug 2023",
        bullets: [
          "3D modeled and assembled passive bistable mechanisms for flying robots to mount onto ceilings and vertical surfaces",
          "Designed and fabricated a custom passive suction cup able to withstand forces upwards of 35 N with an easy-release design",
          "Used shape memory alloys to adjust the mechanism’s triggering force, adapting to different contact speeds and angles",
        ],
      },
    ],

    skills: [
      { group: "Mechanical", items: ["3D printing", "Welding / metal working", "80/20", "Rapid prototyping", "Thermodynamic modeling"] },
      { group: "Electrical", items: ["Soldering and wiring", "Arduino"] },
      { group: "Software", items: ["SolidWorks", "Onshape", "MATLAB", "LabVIEW", "Excel", "C++", "Python", "Figma", "Photoshop", "Overleaf"] },
      { group: "Languages", items: ["English", "Mandarin Chinese (proficient)"] },
    ],

    activities: [
      {
        org: "Northeastern Automotive Club",
        location: "Boston, MA",
        role: "Co-Founder and Executive Board Member",
        dates: "Oct 2024 – Dec 2025",
        bullets: ["Led the marketing team, handling recruiting and social media; grew social media following by over 400%"],
      },
      {
        org: "IEEE",
        location: "Remote",
        role: "Journal Reviewer, Author, and Member",
        dates: "Oct 2023 – present",
        bullets: ["Invited to review a paper for IEEE Robotics and Automation Letters"],
      },
    ],

    interests: "Motorsports (2024 K1 Speed Teen National Championship qualifier), sim and kart racing, motorcycles, watch restoration, Taekwondo (3× UWTA Grand National Champion), skiing and snowboarding.",
  },
};

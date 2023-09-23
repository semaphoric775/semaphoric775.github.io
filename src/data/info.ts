export const info = {
  baseUrl: "https://semaphoric775.github.io",
  name: "Eamon Murphy",
  jobDescription: "",
  about: `I am an ASIC engineer with a background in VLSI, Digital, and Analog and Mixed-Signal (AMS) design. My current focus lies in Electronic Design Automation (EDA) and methodology. Explore some of my work below, and feel free to get in touch! `,

  experience: [
    {
      name: "Qualcomm",
      location: "Engineer",
      startDate: "June 2023",
      endDate: "Present",
      description: [
        "- Developed custom digital solutions for use in a propietary low-power, high-speed serial link",
        "- Experimented with and implemented schematic-level and postlayout changes to improve power efficiency",
      ],
    },

    {
      name: "Siemens EDA",
      location: "3DIC Intern",
      startDate: "August 2022",
      endDate: "May 2023",
      description: [
        "- Designed and implemented a 3D viewer of 2.5D and 3DIC advanced packaging designs in OpenGL and TCL, enabling rapid debugging and spot checks without using external tools",
        "- Merged formal and functional verification flows with packaging environment, enabling automated checking of system connectivity by a lone package designer",
        "- Wrote custom SPICE parser to automate use of analog netlists in floorplans"
      ],
    },

    {
      name: "North Carolina State University",
      location: "Graduate Teaching Assistant",
      startDate: "January 2023",
      endDate: "May 2023",
      description: [
        "- Assisted 100+ students in designing and debugging their senior capstone projects ranging from FPGA-based projects to high-voltage designs and maintained & debugged lab equipment",
        "- Troubleshooted and maintained lab equipment"
      ],
    },

    {
      name: "Qualcomm",
      location: "Intern",
      startDate: "May 2021/May 2022",
      endDate: "August 2021/August 2022",
      description: [
        "-  Verified and characterized custom AMS designs in deep submicron nodes across PVT",
        "-  Developed digital models of AMS cells for use in cosimulation environment"
      ],
    },

    {
      name: "North Carolina State University",
      location: "Undergraduate Teaching Assistant",
      startDate: "August 2022",
      endDate: "May 2022",
      description: [
        "- Automated image capture in NC State's Benchbot project for use in ML datasets",
      ],
    },

    {
      name: "North Carolina State University",
      location: "Undergraduate Teaching Assistant",
      startDate: "January 2021",
      endDate: "May 2022",
      description: [
        "- Led weekly problem session of 30+ students in undergraduate analog circuits class",
        "- Assisted students in projects"
      ],
    },
  ],

  education: [
    {
      name: "MS EE",
      location: "North Carolina State University",
      startDate: "2021",
      endDate: "2023",
      description: [
        "Relevant Digital Design Coursework:",
        "ASIC and FPGA Design with Verilog, ASIC Verification, Electronic System Level and Physical Design, VLSI Design Systems",
        "Relevant Analog/RF Coursework:",
        "IC Design for Wireless, Radio System Design, Analog Electronics, Data Converters, Antenna Theory (audit)",
        "Miscellaneous:",
        "Neural Interface Engineering, Design of Electronics Packaging and Interconnects, Target Archery, Rock Climbing"
      ],
    },
    {
      name: "BS ECE",
      location: "North Carolina State University",
      startDate: "2019",
      endDate: "2022",
      description: ["Relevant Coursework:", "Machine Learning, Signal Processing, Embedded Systems, Data Structures and Algorithms, Control Theory", "Graduated Summa Cum Laude"],
    },
  ],

  socialMedia: {
    github: "https://github.com/semaphoric775",
    linkedin: "https://www.linkedin.com/in/eamon-murphy-7650221b5/",
  },

  projects: [
    {
      title: "\"Silicon Compiler\" and FIR Accelerator",
      isFeatured: true,
      thumbnail: "/assets/project_thumbnails/fir_toplevel.png",
      githubUrl: "https://github.com/semaphoric775/HLS-FIR-Accelerator",
      liveUrl: "silicon_compiler",
    },
    {
      title: "3nm Custom SRAM",
      isFeatured: true,
      thumbnail: "/assets/project_thumbnails/sram_toplevel.png",
      liveUrl: "sram",
    },
    {
      title: "Neural Network Accelerator",
      isFeatured: true,
      githubUrl: "https://github.com/semaphoric775/xnor_cnn_accelerator",
      thumbnail: "/assets/project_thumbnails/nn_toplevel.png",
    },
    {
      title: "I2C to Wishbone Bus Verification",
      isFeatured: true,
      thumbnail: "/assets/project_thumbnails/i2c_toplevel.png",
      githubUrl: "https://github.com/semaphoric775/WishboneToI2CVerification",
    },
    {
      title: "Neural Network Pruning",
      isFeatured: true,
      thumbnail: "/assets/project_thumbnails/pruning_toplevel2.png",
      githubUrl: "https://github.com/semaphoric775/subNetworkSamplerAndPruning/tree/master",
    },
    {
      title: "Fully Differential OTA",
      isFeatured: true,
      thumbnail: "/assets/project_thumbnails/ota_toplevel.png",
      liveUrl: "ota",
    },
    {
      title: "SAR ADC",
      isFeatured: true,
      thumbnail: "/assets/project_thumbnails/adc_toplevel.png",
      liveUrl: "adc",
    },
    {
      title: "Low Noise Amplifier",
      isFeatured: true,
      thumbnail: "/assets/project_thumbnails/lna_toplevel.png",
      liveUrl: "projects/lna",
    },
    {
      title: "Voltage Controlled Oscillator",
      isFeatured: true,
      thumbnail: "/assets/project_thumbnails/vco_toplevel.png",
      liveUrl: "vco",
    },
    {
      title: "950 MHz QAM Radio Frontend",
      isFeatured: true,
      thumbnail: "/assets/project_thumbnails/qam_toplevel.png",
      liveUrl: "qam_frontend",
    },
  ],
};

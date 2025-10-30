import Image1 from "../Images/LPU.webp";
import Image2 from "../Images/chandigarh-university.png";
import Image3 from "../Images/VIT-Chennai.webp";
import Image4 from "../Images/Lpu-2.jpg";
import Image5 from "../Images/chandigarh-university-2.jpg";
import Image6 from "../Images/chennai.jpg";


// src/components/colleges/data.js
export const collegesdata = [
    {
      id: 1,
      slug: "vit-vellore",
      name: "Vellore Institute of Technology",
      location: "Vellore, Tamil Nadu",
      image: Image3,
      website: "https://vit.ac.in",
    },
    {
      id: 2,
      slug: "lpu",
      name: "Lovely Professional University",
      location: "Phagwara, Punjab",
      image: Image1,
      website: "https://www.lpu.in",
    },
    {
      id: 3,
      slug: "chandigarh-university",
      name: "Chandigarh University",
      location: "Gharuan, Punjab",
      image: Image2,
      website: "https://www.cuchd.in",
    },
    // add more entries with the same shape...
  ];
  

// Consistent shape for the carousel
export const placesdata = [
  {
    id: 1,
    slug: "rajpura-punjab",
    name: "Rajpura",
    location: "Rajpura, Punjab",
    image: Image4,
  },
  {
    id: 2,
    slug: "gharuan-punjab",
    name: "Gharuan",
    location: "Gharuan, Punjab",
    image: Image5,
  },
  {
    id: 3,
    slug: "vellore-chennai",
    name: "Vellore",
    location: "Vellore, Chennai",
    image: Image6,
  },
];


export const higherstudies = [
    {
      id: 1,
      slug: "lovely-professional-university-mbbs-btech-mba",
      name: "Lovely Professional University",
      location: "Rajpura, Punjab",
      image: Image1,
    },
    {
      id: 2,
      slug: "chandigarh-university-mbbs-btech-mba",
      name: "Chandigarh University [CU]",
      location: "Gharuan, Punjab",
      image: Image2,
    },
    {
      id: 3,
      slug: "vit-vellore-institute-of-technology-btech-mba",
      name: "VIT — Vellore Institute of Technology",
      location: "Vellore, Chennai",
      image: Image3,
    },
  ];


  export const infodata = [
    {
        id: 1,
        heading: "Explore Universities, College, and Courses",
        para: "Explore the best colleges and universities based on your interest in the type of course you want to choose.",
        link: "/courseregister"
    },
    {
        id: 2,
        heading: "Free Counselling By Experts",
        para: "Get free counselling from our experts and good advice on choosing the best-suited career for your ward.",
        link: "/counsellingpage"
    },
    {
        id: 3,
        heading: "Education Loan And Scholarship",
        para: "Get easy loans and scholarships based on various schemes launched by governments and tests conducted by the university.",
        link: "/scholarship"
    },
    {
        id: 4,
        heading: "Study Abroad",
        para: "Want to secure your future and go abroad? Just give it a click and you will be guided step by step to study abroad.",
        link: "https://studyabroad-hub.netlify.app/"
    },
    {
        id: 5,
        heading: "Online Coaching",
        para: "Want the best coaching institutes for your ward to crack various competitive exams? Just click and you will be redirected to the best online coaching institutes in India.",
        link: "/online coaching"
    },
    {
        id: 6,
        heading: "Education News And Exam Updates",
        para: "Just one single click will lead you to the page that consists of all the latest news and exam updates.",
        link: "/news"
    },
];



export const reviewsData = [

    {
       id : 1,
       title : "College/Universities",
       numbers : "4567+" 
    },
    {
       id : 2,
       title : "E-Books",
       numbers : "3454+" 
    },
    {
       id : 3,
       title : "Counseler",
       numbers : "6787+" 
    },

]

// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Event from "./models/Event.js"; // Adjust the path if necessary

// const sampleEvents = [
//   {
//     name: "National Youth Day",
//     venue: "Main Auditorium",
//     startDate: "2023-01-12T10:00:00Z",
//     endDate: "2023-01-12T16:00:00Z",
//     description: "Celebration of National Youth Day",
//     photos: [],
//     isPhotoUploaded: false,
//     // bannerPath: "public/assets/banner-youth-day.jpg",
//     bannerName: "banner-youth-day.jpg",
//     orderPath: "public/assets/order-youth-day.pdf",
//     orderName: "order-youth-day.pdf",
//     reportPath: "public/assets/report-youth-day.pdf",
//     reportName: "report-youth-day.pdf",
//     committee: [
//       {
//         id: "640c217ec2e94c4802f30933",
//         name: "NSS",
//       },
//     ],
//     createdBy: [
//       {
//         id: "6418643e85a1c443ad3321b3",
//         name: "Jawad Shakeel",
//       },
//     ],
//     isPublished: true,
//     isApproved: true,
//     isCertificateGenerated: false,
//     status: false,
//   },
//   {
//     name: "National Technology Day",
//     venue: "IT Department",
//     startDate: "2023-05-03T06:30:00Z",
//     endDate: "2023-05-03T10:30:00Z",
//     description: "Celebration of National Technology Day",
//     photos: [],
//     isPhotoUploaded: false,
//     bannerPath: "public/assets/banner-tech-day.jpg",
//     bannerName: "banner-tech-day.jpg",
//     orderPath: "public/assets/order-tech-day.pdf",
//     orderName: "order-tech-day.pdf",
//     reportPath: "public/assets/report-tech-day.pdf",
//     reportName: "report-tech-day.pdf",
//     committee: [
//       {
//         id: "640c217ec2e94c4802f30933",
//         name: "NSS",
//       },
//     ],
//     createdBy: [
//       {
//         id: "6418643e85a1c443ad3321b3",
//         name: "Jawad Shakeel",
//       },
//     ],
//     isPublished: true,
//     isApproved: true,
//     isCertificateGenerated: false,
//     status: false,
//   },
//   // Add more sample events as needed
// ];

// const seedDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     await Event.deleteMany({});
//     await Event.insertMany(sampleEvents);

//     console.log("Sample data inserted successfully");
//     mongoose.connection.close();
//   } catch (error) {
//     console.error("Error inserting sample data:", error);
//     mongoose.connection.close();
//   }
// };

// seedDatabase();
import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./models/Event.js"; // Adjust the path if necessary

dotenv.config(); // Load environment variables

const sampleEvents = [
  {
    name: "National Youth Day",
    venue: "Main Auditorium",
    startDate: "2023-01-12T10:00:00Z",
    endDate: "2023-01-12T16:00:00Z",
    description: "Celebration of National Youth Day",
    photos: [],
    isPhotoUploaded: false,
    bannerPath: "public/assets/banner-youth-day.jpg",
    bannerName: "banner-youth-day.jpg",
    orderPath: "public/assets/order-youth-day.pdf",
    orderName: "order-youth-day.pdf",
    reportPath: "public/assets/report-youth-day.pdf",
    reportName: "report-youth-day.pdf",
    committee: [
      {
        id: "640c217ec2e94c4802f30933",
        name: "NSS",
      },
    ],
    createdBy: [
      {
        id: "6418643e85a1c443ad3321b3",
        name: "Jawad Shakeel",
      },
    ],
    isPublished: true,
    isApproved: true,
    isCertificateGenerated: false,
    status: false,
  },
  {
    name: "National Technology Day",
    venue: "IT Department",
    startDate: "2023-05-03T06:30:00Z",
    endDate: "2023-05-03T10:30:00Z",
    description: "Celebration of National Technology Day",
    photos: [],
    isPhotoUploaded: false,
    bannerPath: "public/assets/banner-tech-day.jpg",
    bannerName: "banner-tech-day.jpg",
    orderPath: "public/assets/order-tech-day.pdf",
    orderName: "order-tech-day.pdf",
    reportPath: "public/assets/report-tech-day.pdf",
    reportName: "report-tech-day.pdf",
    committee: [
      {
        id: "640c217ec2e94c4802f30933",
        name: "NSS",
      },
    ],
    createdBy: [
      {
        id: "6418643e85a1c443ad3321b3",
        name: "Jawad Shakeel",
      },
    ],
    isPublished: true,
    isApproved: true,
    isCertificateGenerated: false,
    status: false,
  },
  // Add more sample events as needed
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Event.deleteMany({});
    await Event.insertMany(sampleEvents);

    console.log("Sample data inserted successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error inserting sample data:", error);
    mongoose.connection.close();
  }
};

seedDatabase();
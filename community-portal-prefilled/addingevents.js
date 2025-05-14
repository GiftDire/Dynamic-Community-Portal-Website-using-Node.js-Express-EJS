const mongoose = require('mongoose');
const Event = require('./models/event.ejs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/community_portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const events = [
  {
    title: "Art Workshop",
    description: "Join us for a fun and creative art workshop where you can learn new techniques and express your creativity.",
    image: "/images/art-workshop.jpg",
    date: "2023-10-15",
    time: "10:00 AM - 2:00 PM",
    location: "Community Center, Room 101"
  },
  {
    title: "Tech Talk",
    description: "Join us for an insightful tech talk on the latest trends in technology and innovation.",
    image: "/images/tech-talk.jpg",
    date: "2023-10-20",
    time: "2:00 PM - 4:00 PM",
    location: "Community Center, Room 202"
  },
  {
    title: "Cooking Class",
    description: "Learn to cook delicious meals with our expert chef in this interactive cooking class.",
    image: "/images/cooking-class.jpg",
    date: "2023-10-25",
    time: "5:00 PM - 7:00 PM",
    location: "Community Center, Kitchen"
  },
  {
    title: "Yoga Session",
    description: "Relax and rejuvenate with our yoga session led by a certified instructor.",
    image: "/images/yoga-session.jpg",
    date: "2023-10-30",
    time: "6:00 PM - 7:00 PM",
    location: "Community Center, Room 303"
  },
  
];

// async function seedDB() {
//   try {
//     await Event.deleteMany({}); 
//     await Event.insertMany(events);
//     console.log("Events seeded successfully!");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error("Error seeding events:", err);
//     mongoose.connection.close();
//   }
// }

// seedDB();
const mongoose = require('mongoose');
const Team = require('./models/team');

mongoose.connect('mongodb://localhost:27017/community_portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const teamMembers = [
    {
        name: "Daniel Lumb",
        role: "Frontend Developer",
        bio: "Passionate about clean UI and responsive design.",
        image: "/images/daniel.jpg"
    },
    {
        name: "Odirile Dire",
        role: "Backend Developer",
        bio: "Builds scalable backend systems and database logic.",
        image: "/images/odirile-dire.jpg"
    },
    {
        name: "Dehan Barnard",
        role: "Data Manager",
        bio: "Ensures data flows smoothly between components.",
        image: "/images/dehan.jpg"
    },
    {
        name: "Ruben Venter",
        role: "Team Lead & Documentation",
        bio: "Manages workflow, GitHub, and documentation.",
        image: "/images/ruben.jpg"
    }
];

async function seedTeam() {
    try{
        await Team.deleteMany({});
        await Team.insertMany(teamMembers);
        console.log("Team members seeded successfully!");
        mongoose.connection.close();
    }catch (err) {
        console.error("Error seeding team members:", err);
        mongoose.connection.close();
    }
}

seedTeam();
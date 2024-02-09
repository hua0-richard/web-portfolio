from pymongo import MongoClient
import os
mongoString = os.environ.get('CONN_STR')
client = MongoClient(mongoString)

# clear database
toDrop = client['user']
client.drop_database(toDrop)

db = client['user']
aboutCollection = db['about']
projectsCollection = db['projects']
experienceCollection = db['experience']
educationCollection = db['education']

about = [
{
    "title" : "Hey, 👋",
    "description" : "I'm a Software Developer with experience in Fullstack Development. I'm currently in my final year at the University of Waterloo."
}
]

projects = [
    {
        "year" : "2024",
        "title" : "Sudoku",
        "description" : "Sudoku with React and Node.js."
    },
    {
        "year" : "2024",
        "title" : "Chat",
        "description" : "Live Chat with React and SocketIO."
    },
    {
        "year" : "2024",
        "title" : "Portfolio",
        "description" : "Portfolio site with React and FastAPI."
    },
    {
        "year" : "2023",
        "title" : "Notes",
        "description" : "Notes app with Kotlin and Javafx."
    },
    {
        "year" : "2022",
        "title" : "Compiler",
        "description" : "WLP4 (subset of C) compilier with C++."
    },
    {
        "year" : "2021",
        "title" : "CC3K",
        "description" : "Rouge dungeon crawler. Built with C++."
    },
]

experience = [
    {
        "position" : "Software Developer Intern",
        "organisation" : "Automated Tooling Systems",
        "date" : "May - Aug 2023",
        "description" : "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
        "position" : "Software Developer Intern",
        "organisation" : "Marsh McLennan",
        "date" : " Aug - Dec 2022",
        "description" : "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
        "position" : "Software Developer Intern",
        "organisation" : "Marsh McLennan",
        "date" : " Jan - Apr 2022",
        "description" : "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
        "position" : "Software Developer Intern",
        "organisation" : "Huawei Technologies",
        "date" : "Aug - Sep 2021",
        "description" : "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    }
]

education = [
    {
        "position" : "BSc Computer Science",
        "organisation" : "University of Waterloo",
        "date" : "Apr 2025",
        "description" : "Coursework in Operating Systems, Compilers, Networking, User Interfaces, and Applicaiton Development"
    }
]

for a in about:
    aboutCollection.insert_one(a)
for p in projects:
    projectsCollection.insert_one(p)
for e in experience:
    experienceCollection.insert_one(e)
for ed in education: 
    educationCollection.insert_one(ed)

print("done!")
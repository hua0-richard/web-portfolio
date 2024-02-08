from pymongo import MongoClient
import os
mongoString = os.environ['CONN_STR']
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

for a in about:
    aboutCollection.insert_one(a)
for p in projects:
    projectsCollection.insert_one(p)



print("done!")
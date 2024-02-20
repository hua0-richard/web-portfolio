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
        "title": "Hey, 👋",
        "description": "I'm a Software Developer with experience in Fullstack Development. I'm currently in my final year at the University of Waterloo."
    }
]

projects = [
    {
        "year": "2024",
        "title": "Sudoku",
        "description": "Sudoku with React and Node.js.",
        "descriptionExtended": "",
        "tech": [],
        "tags": []
    },
    {
        "year": "2024",
        "title": "Chat",
        "description": "Live Chat with React and SocketIO.",
        "descriptionExtended": "",
        "tech": [],
        "tags": [],
        "source": "",
        "demo": ""
    },
    {
        "year": "2024",
        "title": "Portfolio 2.0",
        "description": "Portfolio site with React and FastAPI.",
        "descriptionExtended": "",
        "tech": [],
        "tags": [],
        "source": "",
        "demo": ""

    },
    {
        "year": "2023",
        "title": "Notes",
        "description": "Notes app with Kotlin and Javafx.",
        "descriptionExtended": "",
        "tech": [],
        "tags": [],
        "source": "",
        "demo": ""

    },
    {
        "year": "2022",
        "title": "Compiler",
        "description": "WLP4 (subset of C) compilier with C++.",
        "descriptionExtended": "",
        "tech": [],
        "tags": [],
        "source": "",
        "demo": ""
    },
    {
        "year": "2021",
        "title": "CC3K",
        "description": "Rouge dungeon crawler. Built with C++.",
        "descriptionExtended": "",
        "tech": [],
        "tags": [],
        "source": "",
        "demo": ""

    },
    {
        "year": "2020",
        "title": "Portfolio 1.0",
        "description": "Portfolio site with JS and HTML/CSS",
        "descriptionExtended": "",
        "tech": [],
        "tags": [],
        "source": "",
        "demo": ""
    },
]

experience = [
    {
        "position": "Software Developer Intern",
        "organisation": "Automated Tooling Systems",
        "date": "May - Aug 2023",
        "description": "SuperTrak Web Application, Angular/.NET",
    },
    {
        "position": "Software Developer Intern",
        "organisation": "Marsh McLennan",
        "date": " Aug - Dec 2022",
        "description": "Internal Tools, Angular/Node/MongoDB",
    },
    {
        "position": "Software Developer Intern",
        "organisation": "Marsh McLennan",
        "date": " Jan - Apr 2022",
        "description": "Internal Tools, Angular/Node/MongoDB",
    },
    {
        "position": "Assistant Engineer Intern",
        "organisation": "Huawei Technologies",
        "date": "Aug - Sep 2021",
        "description": "QA & Automated Testing, Java/Bash",
    }
]

education = [
    {
        "position": "BSc Computer Science",
        "organisation": "University of Waterloo",
        "date": "Apr 2025",
        "description": "Coursework in Operating Systems, Compilers, Networking, User Interfaces, and Applicaiton Development"
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

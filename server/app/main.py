from fastapi import FastAPI
from bson import json_util
import json
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import os
mongoString = os.environ['CONN_STR']
client = MongoClient(mongoString)
db = client["user"]

app = FastAPI()
origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def index():
    print("test")
    return {"title":"hello"}

@app.get("/user")
def user():
    about = db["about"]
    projects = db["projects"]
    experience = db["experience"]
    
    about_result = about.find({})
    projects_result = projects.find({})
    experience_result = experience.find({})


    return json.loads(json_util.dumps({ "about" : about_result, "projects" : projects_result, "experience" : experience_result}))




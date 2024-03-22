from fastapi import FastAPI, Depends
from fastapi.security import OAuth2PasswordBearer
from bson import json_util
import json
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import os
import threading
import time
import requests


def pingServer():
    while True:
        print("ping")
        requests.get("https://web-portfolio-server-hua0-richard.vercel.app/")
        time.sleep(300)


background_thread = threading.Thread(target=pingServer)
background_thread.daemon = True
background_thread.start()

mongoString = os.environ.get('CONN_STR')
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
    return {"keys": "value"}


@app.get("/user")
def user():
    about = db["about"]
    projects = db["projects"]
    experience = db["experience"]
    education = db["education"]

    about_result = about.find({})
    projects_result = projects.find({})
    experience_result = experience.find({})
    education_result = education.find({})

    return json.loads(json_util.dumps(
        {
            "about": about_result,
            "projects": projects_result,
            "experience": experience_result,
            "education": education_result
        }))


@app.get("/user/about")
def about():
    about = db["about"]
    about_result = about.find({})
    return json.loads(json_util.dumps({
        "about": about_result
    }))


@app.put("/user/about")
def editAbout():
    return


@app.get("/user/projects")
def projects():
    projects = db["projects"]
    projects_result = projects.find({})
    return json.loads(json_util.dumps(
        {"projects": projects_result}
    ))


@app.get("/user/experience")
def projects():
    experience = db["experience"]
    experience_result = experience.find({})
    return json.loads(json_util.dumps({
        "experience": experience_result
    }))


@app.get("/user/education")
def education():
    return

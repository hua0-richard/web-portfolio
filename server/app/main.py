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
    return {"title":"hello"}

@app.get("/user")
def user():
    info = db["info"]
    result = info.find_one()
    print(result)
    return json.loads(json_util.dumps(result))

@app.get("user/education")
def user_education():
    return

@app.get("user/about")
def user_about():
    return




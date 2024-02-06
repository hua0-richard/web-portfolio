from pymongo import MongoClient
import os
mongoString = os.environ['CONN_STR']
client = MongoClient(mongoString)

toDrop = client['user']
client.drop_database(toDrop)

db = client['user']
userInfo = db['info']
userExperienceWork = db['work-experience']
userSideProject = db['personal-projects']

userInfoEdu = {"school" : "University of Waterloo", "graduation_year": "2025", "major": "Computer Science"}
userInfoLocation = {"country" : "Canada", "city": "Waterloo"}
userInfoDict = { "name": "Richard", "lastName": "Hua", "role": "Software Developer", "education": userInfoEdu, "summary" : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum", "location": userInfoLocation}
userInfo.insert_one(userInfoDict)

userExperienceWorkDictList = [{"company" : "ATS (Automated Tooling Systems)", "description": "lorem ipsum"}, {"company" : "Marsh McLennan", "description": "lorem ipsum"}, {"company" : "Huawei Technologies", "description": "lorem ipsum"}]
## userExperienceWork.insert_one(userExperienceWorkDict)

userSideProjectDict = {"proj_name" : "Chat", "desc" : "lorem ipsum", "tech_stack": ["React", "Node"]}
userSideProject.insert_one(userSideProjectDict)


print("done!")
from flask import Flask 
from flask import request,jsonify

from pymongo import MongoClient
import json
import redis

#from redis import StrictRedis
BIBLY_MASTER = "218.145.182.90"

SERVER_REDIS = {
    "HOST" : BIBLY_MASTER,
    "PORT" : 6379,
    "JOB_DB" : 15,
    "AUTH" : "redis@rnc",
}

redis_connection = redis.StrictRedis(
            host=SERVER_REDIS["HOST"],
            port=SERVER_REDIS["PORT"],
            password=SERVER_REDIS["AUTH"],
            db=SERVER_REDIS["JOB_DB"])

app = Flask(__name__)

mongo = MongoClient("mongodb://localhost:27017")
db = mongo["election"]
topic_table = db["topic"]
#redis = StrictREdi

def generate_topic_id(title,ini,dt) :
    return  0

@app.route("/hello",methods=["GET"])
def hello() :

    return jsonify({"result":"hello world"})

@app.route('/survey/regist',methods=["POST"]) 
def regist_topic() :
    data = request.form
    print(data)

    topic_title = data["topic_title"]
    options = data["options"]
    initiator = data["initiator"]
    open_dt = data["open_dt"]
    
    topic = {
        "topic_id" : 0,
        "topic_title" : "",
        "options" : options[1:-1].split(","),
        "initiator" : initiator,
        "open_dt" : open_dt
    }
    
    topic_table.insert_one(topic)
    print(topic)
    del topic["_id"]

    response = {
        "status" : 0,
        "message" : "Successfully registered.",
        "topic" : topic
    }

    return jsonify(response)

class Authenticator :

    def __init__(self) :
        pass
    
    def assgin_token(self,user) :
        pass
        
class VoteCounter :
    def __init__(self,redis) :
        self.redis = redis

    def get_tok(self,topic_id,option_id) :
        return f"counter:{topic_id}:{str(option_id)}"
    
    def vote(self,user_id,topic_id,option) :

        if not self.check_voted(user_id,topic_id) :
            return False

        key = self.get_tok(topic_id,option)
        self.redis.incr(key)

        return True
         
    def check_voted(self,user_id,topic_id) :
        key = f"history:{user_id}:{topic_id}"
        return self.redis.incr(key,1) - 1 

vc = VoteCounter(redis_connection)

@app.route('/survey/vote',methods=["GET"])
def vote() :
    
    user_id = request.args.get("user_id")
    topic_id = request.args.get("topic_id")
    user_id = request.args.get("user_id")
    option = request.args.get("option")

    success = vc.vote(user_id,topic_id,option)

    return jsonify({
        "status":0
        })
    

if __name__ == "__main__" :
    app.run(host="0.0.0.0",port=9992)


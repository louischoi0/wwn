const mongo_url = "mongodb://218.145.182.90:37019";

const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

function connect_to_mongo() {
    mongoose.connect(mongo_url,{
        dbName :"votevote"
    },(error)=>{

        if (error) {
            console.log("err")
        }

        else {
            console.log("success")
        }
    })
}

connect_to_mongo();

const topic_schema = new Schema({

    title : {
        type : String,
        required : true
    },

    category : {
        type : String,
        required : true
    },

    img_url : {
        type : String,
        required : true
    },
    option_1 : {
        type : String,
        required : true
    },

    option_2 : {
        type : String,
        required : true
    },

    publisher : {
        type : String,
        required : true
    },
    open_dt : {
        type: Date, 
        default: Date.now
    }

});

const vote_schema = new Schema({
    user_id : {
        type : String,
        required : true
    },
    topic_id : {
        type : String,
        required : true
    },

    option : {
        type : Number,
        required : true
    },

    cast_dt : {
        type : Date,
        default : Date.now
    }
});

console.log("hid");
const topicModel = mongoose.model('Topic',topic_schema);
const voteModel = mongoose.model('vote',vote_schema);

class mongoHandler {
    cast(user_id,topic_id,option,callback) {
        console.log("cast");
        const vote1 = new voteModel({
            user_id : user_id,
            topic_id:topic_id,
            option : option
        })

        return vote1.save(callback);
    }

    add_topic(title,category,img_url,option_1,option_2,publisher,callback) {
        const topic1 = new topicModel({
            title : title,
            category : category,
            img_url : img_url,
            option_1 : option_1,
            option_2 : option_2,
            publisher :publisher 
        });

        return topic1.save(callback);
    }

    load(callback) {
        return topicModel.find({}).exec(callback);
    }

};

const mongoControler = new mongoHandler();

module.exports = mongoControler;
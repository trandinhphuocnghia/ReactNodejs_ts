import  mongoose, { Mongoose }  from "mongoose";

const uri : string = 'mongodb://127.0.0.1:27017/admin'

export async function connect() {
    try{
        await mongoose.connect(uri),{
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        console.log('connect to db susscessfully')
    }
    catch(error){
        console.log('connect failed!!')
    }
}
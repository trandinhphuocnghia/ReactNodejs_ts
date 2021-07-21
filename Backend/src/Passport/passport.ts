import passport from "passport";
import passportLocal from "passport-local"
import { DatabaseUserInterface } from "../Interfaces/Userinterfaces";
import brcypt from 'bcryptjs'
import User from '../Model/User'
 const LocalStrategy = passportLocal.Strategy

 passport.use(new LocalStrategy((username: string,password: string, done) => {
    User.findOne({username : username} ,(err: any, user: DatabaseUserInterface) => {
        if(err) throw err;
        if(!user) return done(null,false);
        brcypt.compare(password,user.password, (err : any , result : boolean)=> {
            if(err) throw err;
            if(result === true){
                return done(null,user)
            }else{
                return done(null,false)
            }
        })

    })
 }))



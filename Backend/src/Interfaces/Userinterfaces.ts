import { Document } from "mongoose"
export interface Userinterface  {
 username : string,
 isAdmin : boolean,
 id : string 

}

export interface DatabaseUserInterface extends Document {
    username : string,
    password : string,
    isAdmin : boolean,
    _id : string,
    
}
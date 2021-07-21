import expess from 'express'
import  {connect}  from './Mongoose/connect'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import cors from 'cors'
import brcypt from 'bcryptjs'
import '../src/Passport/passport'
import { DatabaseUserInterface, Userinterface } from './Interfaces/Userinterfaces'
import User from './Model/User'


const app = expess()


// config to share with react app .
app.use(cors({origin:"http://localhost:3000", credentials: true}))
//build start app.
const port = 4000
app.listen(port, () => {
   console.log(`Started the web at: http://localhost:${port}`)
})

//connect to Mongooes db.
connect()
app.use(expess.urlencoded({extended:false}))
app.use(expess.json());

//session - passport config

app.use(
    session({
        secret: "verysecret",
        resave: true,
        saveUninitialized:true,
    })
)
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())

//passport
passport.serializeUser( (user: any, callback: any) => {
    callback(null, user._id);
  });

passport.deserializeUser((id: string,callback : any)=>{
    User.findOne({_id: id},(err: any, user : DatabaseUserInterface)=>{
        const userInformation : Userinterface = {
            username : user.username,
            isAdmin : user.isAdmin,
            id : user._id
        }
        callback(err, userInformation)
    })
})

//Routes
app.post('/register', async (req,res) => {
    const {username,password} = req?.body
   const exists = await User.exists({ username : username})
   
   if(exists){
       res.send('User aready Exists')
       return
   }

   const hashPasswrd = await brcypt.hash(password,10)
   const newUser =await new User({
                username : username,
                password : hashPasswrd,
            })

    await newUser.save();
     res.send('success')
    
})

app.get('/', async(req,res)=>{
    res.send('Homepage')
})

app.post('/login',passport.authenticate('local'),(req,res)=>{
    res.send("Login success")
})

app.get("/user", (req, res) => {
    res.send(req.user);
  })

app.get("/logout" , (req,res) => {
    req.logout()
    res.send("Logout success")
})


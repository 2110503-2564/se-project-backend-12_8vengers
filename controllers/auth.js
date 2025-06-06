const User = require('../models/User');

//Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res)=>{
    //Create token
        const token = user.getSignedJwtToken();

        const options = {
            expire:new Date(Date.now()+process.env.JWT_COOKIE_EXPIRE*24*60*60*1000), httpOnly: true
        };

        if(process.env.NODE_ENV === 'production'){
            options.secure = true;
        }
        res.status(statusCode).cookie('token', token, options).json({
            success: true,
            token
        })
}
//@desc     Register   user
//@route    POST /api/v1/auth/register
//@access   Public
exports.register= async (req,res,next)=>{
    try{
        const {name, email, password, tel, role} = req.body;

        //create user
        const user = await User.create({
            name,
            email,
            password,
            tel,
            role
        });

        sendTokenResponse(user, 200, res);
    } catch(err){
        res.status(400).json({success:false}); 
        console.log(err.stack);
    }
};

//@desc     Login User
//@route    POST /api/v1/auth/login
//@access   Public
exports.login= async (req,res,next)=>{
    try{
        const {email, password} = req.body;

        //Validate email & password
        if(!email || !password){
            return res.status(400).json({success:false, msg:'Please provide an email and password'});
        }
        //Check for user
        const user = await User.findOne({email}).select('+password');
        if(!user){
            return res.status(400).json({success:false, msg:'Invalid credentials'});
        }
        //Check if password matches
        const isMatch = await user.matchPassword(password);
         if(!isMatch){
            return res.status(401).json({success:false, msg:'Invalid credentials'});
         }

        sendTokenResponse(user, 200, res);
    } catch(err){
        return res.status(401).json({success:false,msg:'Cannot convert email or password to string'})
    }
};


//@desc     Get current Logged in user
//@route    POST api/v1/auth/me
//@access   Private
exports.getMe = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      res.status(200).json({ success: true, data: user });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  };

//@desc     Log user out / clear cookie
//@route    GET /api/v1/auth/logout
//@access   Private
exports.logout= async (req,res,next)=>{
    res.cookie('token','none',{
        expire: new Date(Date.now()+10*1000),
        httpOnly:true
    });

    res.status(200).json({success:true, 
        data:{}
    });
};
const {Schema, model} = require('mongoose')
const Ad = require('Ad')
const bcryptjs = require('bcryptjs')



const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'please provide your name']
    },
    email: {
        type: String,
        required: [true, 'please provide your name']
    },
    password: {
        type: String,
        required: [true, 'please provide your password']
    }
})

// -Advertiser users

const AdvertiserUser = User.discriminator(
    'AdvertiserUser',
    new mongoose.Schema(
      {
        ads: [{
          type: mongoose.Schema.ObjectId,
          ref: "Ad"
        }],
        phone: {
            type: String, 
            required: true
        },
        numberOfRatings: {
            type: Number,
            default: 0
        },
        averageRating: {
            type: Number,
            default: 0,
            min: 1,
            max: 5
        }
      }
    )
  );

// -search engine users

const SearchEngineUser = User.discriminator(
    'SearchEngineUser',
    new mongoose.Schema(
      {
        
      }
    )
  );

  
// -affiliate users

  const AffiliateUser = User.discriminator(
    'AffiliateUser',
    new mongoose.Schema(
      {
        userId: {
            type: String,
            required: true
        }
      },
      options
    )
  );

// encrypt pword pre-save middleeware
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
  
    this.password = await bcryptjs.hash(this.password, 12);
  });
  
// comparepassword instance
userSchema.methods.comparePasswords = async function (
    inputPassword,
    userPassword
  ) {
    return await bcryptjs.compare(inputPassword, userPassword);
};

const User = model('User', userSchema)

module.exports = {User, AdvertiserUser, SearchEngineUser, AffiliateUser };

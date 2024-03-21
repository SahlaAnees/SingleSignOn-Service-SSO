const passport = require('passport');
const dotenv = require('dotenv');
const GoogleStrategy = require('passport-google-oauth20').Strategy; 

const MicrosoftStrategy = require('passport-microsoft').Strategy;

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const MICROSOFT_CLIENT_ID = process.env.MICROSOFT_CLIENT_ID;
const MICROSOFT_CLIENT_SECRET = process.env.MICROSOFT_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    done(null, profile);
  }
));


passport.use(new MicrosoftStrategy({
  clientID: MICROSOFT_CLIENT_ID,
  clientSecret: MICROSOFT_CLIENT_SECRET,
  callbackURL: "/auth/microsoft/callback",
  scope: ['user.read'],
  tenant: 'common',
  authorizationURL: 'http://login.microsoftonline.com/common/oauth2/v2.0/authorize',
  tokenURL: 'http://login.microsoftonline.com/common/oauth2/v2.0/token',
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ userId: profile.id }, function (err, user) {
    console.log(profile);
    return done(err, user);
  });
}
));


passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});
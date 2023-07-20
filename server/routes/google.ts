import passport from "passport";

const GoogleStrategy = require("passport-google-oauth20").Strategy;

let GOOGLE_CLIENT_ID =
  "327030475904-jmb6ufm58lrsq4muutp63puvdakgq25f.apps.googleusercontent.com";
let GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5173/google/callback",
    },
    function (accessToken: any, refreshToken: any, profile: any, done: any) {
      return done(profile);
    }
  )
);

passport.serializeUser((user, done) => {
  //serializeUser is used to store the user object in the session
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  //deserializeUser is used to retrieve the user object from the session
  done(null, user); //here the user is the user object that is given by the google strategy and is stored in the session the first argument is the error and the second is the user object
});

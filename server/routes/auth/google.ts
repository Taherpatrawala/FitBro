import passport from "passport";
import User from "../../models/user";

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5173/google/callback",
    },
    function (accessToken: any, refreshToken: any, profile: any, cb: any) {
      User.find({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

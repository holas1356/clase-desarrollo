const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const Estudiante = require('../models/studentModel');

const jwt_secret = "dfjdkfdjf#$#4";

const strategy = new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwt_secret
    },
    async (jwt_payload, done) => {
        try {
            const student = await Estudiante.findById({userid:jwt_payload.id});
            if (!student) {
                const err = new Error("Student not found")
                console.log(err);
            }
            done(null, student);
        } catch (error) {
            done(error, false);
        }
    }
);

passport.use(strategy);

const initialize = () => {
    return passport.initialize()
};

const authenticate = () => {
    return passport.authenticate('jwt', { session: false })
};

module.exports = {
    initialize,
    authenticate
};
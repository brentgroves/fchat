"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = void 0;
const authentication_1 = require("@feathersjs/authentication");
const authentication_local_1 = require("@feathersjs/authentication-local");
const authentication_oauth_1 = require("@feathersjs/authentication-oauth");
class MicrosoftStrategy extends authentication_oauth_1.OAuthStrategy {
    async getEntityData(profile, existing, params) {
        const baseData = await super.getEntityData(profile, existing, params);
        return {
            ...baseData,
            name: profile.name,
            family_name: profile.family_name,
            given_name: profile.given_name,
            // avatar: profile.picture, // can't view this without a microsoft authentication token.
            email: profile.email
        };
    }
}
class GitHubStrategy extends authentication_oauth_1.OAuthStrategy {
    async getEntityData(profile, existing, params) {
        const baseData = await super.getEntityData(profile, existing, params);
        return {
            ...baseData,
            // The GitHub profile image
            avatar: profile.avatar_url,
            // The user email address (if available)
            email: profile.email
        };
    }
}
const authentication = (app) => {
    const authentication = new authentication_1.AuthenticationService(app);
    authentication.register('jwt', new authentication_1.JWTStrategy());
    authentication.register('local', new authentication_local_1.LocalStrategy());
    // authentication.register('github', new OAuthStrategy())
    // authentication.register('github', new GitHubStrategy())
    authentication.register('microsoft', new MicrosoftStrategy());
    app.use('authentication', authentication);
    app.configure((0, authentication_oauth_1.oauth)());
};
exports.authentication = authentication;
//# sourceMappingURL=authentication.js.map
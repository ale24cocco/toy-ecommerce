import crypto from "crypto";

export default ({ env }: { env: (key: string) => string }) => ({
    "users-permissions": {
        config: {
            jwtSecret:
                env("JWT_SECRET") || crypto.randomBytes(16).toString("base64"),
        },
    },
});

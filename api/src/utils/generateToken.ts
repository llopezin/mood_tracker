const jwt = require('jsonwebtoken');

export function generateToken(payload: any) {
    const secretKey = process.env.JWT_SECRET;
    return jwt.sign(payload, secretKey, { algorithm: 'HS256' });
}


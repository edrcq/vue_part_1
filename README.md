# Vue 3 + TypeScript + Vite


# API

## POST /register

Body:
```json
{
    email: string,
    password: string
}
```

Return:

Errors:
- 400 si bad body or already exists

200:
```json
{
    message: 'user created',
    id: string
}
```

## POST /login

Body:
```json
{
    email: string,
    password: string
}
```

Return:

Errors:
- 400 si bad body
- 401 si bad credentials

200:
```json
{
    token: string,
}
```

## GET /me

Headers:
```
Authorization: token
```

Return:
```json
{
    user: { _id, email }
}
```

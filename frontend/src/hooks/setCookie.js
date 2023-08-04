import Cookie from 'js-cookie';

const SetCookie = (cookiename, value) => {
    Cookie.set(cookiename, value, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
        path: '/shop'
    })
}

export default SetCookie;
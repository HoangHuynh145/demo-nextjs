const checkLogin = () => {
    let userInfo
    if (typeof localStorage !== 'undefined') {
        userInfo = JSON.parse(localStorage.getItem('user'));
        if (userInfo) {
            return userInfo
        } else {
            return undefined
        }
    }
}

export default checkLogin

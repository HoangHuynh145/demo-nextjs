const checkLogin = () => {
    let userInfo
    if (typeof localStorage !== 'undefined') {
        userInfo = JSON.parse(localStorage.getItem('user'));
    }
    if (userInfo) {
        return userInfo.user
    } else {
        return undefined
    }
}

export default checkLogin

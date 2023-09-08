export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
}
export const IMG_CDN = "https://image.tmdb.org/t/p/w500/"
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/b57d0b78-4386-4ba7-a22e-3c7117c70a98/AE-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const SUPPORTED_LANGUAGES = [{identifier:"en",name:"English"}, {identifier:"hindi",name:"Hindi"}, {identifier:"tamil",name:"Tamil"}]


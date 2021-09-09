import API from '../../BaseApi';

export default {

  getUsersData() {
    const url = `admin/users`;
    return API.makeGetRequest(url);
    } 
};
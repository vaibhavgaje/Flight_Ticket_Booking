import axios from 'axios'

const URL="http://localhost:5000/api"
class UserFunctions
{
    login(UserEmailPass)
    {
        return axios.post(URL+'/LogIn',UserEmailPass)
    }
    registerUser(User)
    {
        return axios.post(URL+'/SystemUser',User)
    }
    loginwithemail(User)
    {
        return axios.post(URL+'/OtpEmailLoginSMTP',User)
    }
    userdetail(Id)
    {
        return axios.get(URL+`/SystemUser/${Id}`)
    }
    registerVisitor(User)
    {
        return axios.post(URL+'/SystemUser/postvisitor',User)
    }
    
}

export default new UserFunctions();
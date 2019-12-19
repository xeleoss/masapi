import axios  from "axios";
let url = "http://wss.myanimespace.com/";
export default axios.create({baseURL: url});
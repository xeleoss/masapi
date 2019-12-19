import axios from "axios";

let url = "http://wss.myanimespace.com/";

let axiosSave = null;

export default () => getAxios();

function getAxios() {
    if(axiosSave == null) {
        axiosSave = axios.create({baseURL: url})
    }
    return axiosSave;
}
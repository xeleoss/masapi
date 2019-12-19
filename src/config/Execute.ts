import Axios from "./Axios";
import MethodsEnum from "../enums/MethodsEnum";

class Execute {
    public async postAsync(method: MethodsEnum, data: object = {}) {
        return await Axios().post(method, data);
    }
}

export default Execute;
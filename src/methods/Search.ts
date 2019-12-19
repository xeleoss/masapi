import {ExecuteObject} from "../Api";
import MethodsEnum from "../enums/MethodsEnum";
import SearchEnum from "../enums/SearchEnum";

export default (word: string, types: SearchEnum[]) => {
    let data = {word, types};
    return ExecuteObject.postAsync(MethodsEnum.Search, data);
}
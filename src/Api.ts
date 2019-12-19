import Execute from "./config/Execute";
import Search from "./methods/Search";
export const ExecuteObject = new Execute();

export default class Api {
    public Search = Search;
}
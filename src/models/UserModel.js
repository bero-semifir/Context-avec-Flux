import { v4 as uuid } from "uuid";

export class UserModel {

    _id;
    name;

    constructor(name = "") {
        this._id = uuid();
        this.name = name;
    }

}
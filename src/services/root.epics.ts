import {Injectable} from "@angular/core"
import {DbEpics} from "./db.epics";
import {combineEpics} from "redux-observable";

@Injectable()
export class RootEpics{

  constructor(private db: DbEpics){}

  rootEpics = combineEpics(
    this.db.createPill
  )

}

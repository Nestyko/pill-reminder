import {Injectable} from "@angular/core"
import { ActionsObservable } from 'redux-observable';
import {DbActions} from "./db.actions"
import {Observable} from "rxjs/Observable"
import {DbService} from "./db"

interface Action{
  type: string
  payload: any
}

@Injectable()
export class DbEpics{
  constructor(
    private db: DbService,
    private dbActions: DbActions
  ){}

  createPill = (action$: ActionsObservable<Action>) => {
    return action$.ofType(DbActions.CREATE_PILL)
      .mergeMap(({payload}) => {
        return this.db.createPill(payload)
          .map(this.dbActions.savePill)
          .catch(err => Observable.of({
            type: DbActions.DB_ERROR
          }))
      })
  }

}

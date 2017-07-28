import {Injectable} from "@angular/core"
import {NgRedux} from "@angular-redux/store"



@Injectable()
export class DbActions {
  static CREATE_PILL = "CREATE_PILL"
  static DB_ERROR = "DB_ERROR"
  static SAVE_PILL = "SAVE_PILL"

  constructor(private ngRedux: NgRedux<IState>){}

  createPillDb(pill: Pill){
    this.ngRedux.dispatch({
      type: DbActions.CREATE_PILL,
      payload: pill
    })
  }

  savePill = (pill: any) => ({
    type: DbActions.SAVE_PILL,
    payload: pill
  })

}

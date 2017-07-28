import PouchDB from "pouchdb"
import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable"
import "rxjs/add/observable/fromPromise"


@Injectable()
export class DbService {

  pillDb : PouchDB = new PouchDB("pillsDb")
  toTake : PouchDB = new PouchDB("toTake")

  constructor(){

    console.log("DbService Adapter: ", this.pillDb.adapter)

  }

  createPill(pill: Pill){
    console.log("Creting pill on db service", pill)
    const newPill = Object.assign({}, pill, {_id: pill.name})
    return Observable.fromPromise(this.pillDb.put(newPill))
  }
}


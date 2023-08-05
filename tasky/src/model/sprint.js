// a class for a sprint with properties: sprintid, startdate, enddate, teamid, sprintnumber

class Sprint{


    constructor(sprintid = null, startdate, enddate, teamid, sprintnumber){
        this.sprintid = sprintid;
        this.startdate = startdate;
        this.enddate = enddate;
        this.teamid = teamid;
        this.sprintnumber = sprintnumber;
    }

    get sprintid(){
        return this._sprintid;
    }

    set sprintid(value){
        this._sprintid = value;
    }

    get startdate(){
        return this._startdate;
    }

    set startdate(value){
        this._startdate = value;
    }

    get enddate(){
        return this._enddate;
    }

    set enddate(value){
        this._enddate = value;
    }

    get teamid(){
        return this._teamid;
    }

    set teamid(value){
        this._teamid = value;
    }

    get sprintnumber(){
        return this._sprintnumber;
    }

    set sprintnumber(value){
        this._sprintnumber = value;
    }
}

export default Sprint;
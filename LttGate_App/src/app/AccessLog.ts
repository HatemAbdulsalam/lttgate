export class AccessLog {
    Rcdid  : number
    EmployeeId  : string
    LogDate  : any
  LogTime  : any
   TerminalId  :string
    InOut  :string
    constructor(values: Object = {}) {

        Object.assign(this, values);
        
        }

        
        }

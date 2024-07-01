interface TodoDomainProperties {
  id: string;
  start: Date;
  end: Date;
  title: string;
  description: string;
  completed: boolean;
}

class TodoDomain {
  private _id: string;
  private _start: Date;
  private _end: Date;
  private _title: string;
  private _description: string;
  private _completed: boolean;

  constructor(properties: TodoDomainProperties) {
    this._id = properties.id;
    this._start = properties.start;
    this._end = properties.end;
    this._title = properties.title;
    this._description = properties.description;
    this._completed = properties.completed;
  }
  //#region getters and setters

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get start(): Date {
    return this._start;
  }

  set start(value: Date) {
    this._start = value;
  }

  get end(): Date {
    return this._end;
  }

  set end(value: Date) {
    this._end = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get completed(): boolean {
    return this._completed;
  }

  set completed(value: boolean) {
    this._completed = value;
  }

  //#endregion
}

export default TodoDomain;

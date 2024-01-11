export class Task {

    private _name: string;
    private _id: string;
    private _assignee: string;
    private _project: string;
    private _startTime: Date;
    private _sanjayRajeshProperty: string;


    constructor(name: string, id: string, assignee: string, project: string, startTime: Date) {
        this._name = name;
        this._id = id;
        this._assignee = assignee;
        this._project = project;
        this._startTime = startTime;
    }

    public get name(): string {
        return this._name;
    }

    public get id(): string {
        return this._id;
    }

    public get assignee(): string {
        return this._assignee;
    }

    public get project(): string {
        return this._project;
    }

    public get startTime(): Date {
        return this._startTime;
    }
    
    public get sanjayRajeshProperty(): string {
        return this._sanjayRajeshProperty;
    }
}
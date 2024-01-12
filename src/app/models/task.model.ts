export class Task {

    public name: string;
    public id: string;
    public assignee: string;
    public project: string;
    public startTime: Date;
    public sanjayRajeshProperty: string;


    constructor(name: string, id: string, assignee: string, project: string, startTime: Date) {
        this.name = name;
        this.id = id;
        this.assignee = assignee;
        this.project = project;
        this.startTime = startTime;
    }

    // public get getName(): string {
    //     return this.name;
    // }

    // public get getId(): string {
    //     return this.id;
    // }

    // public get getAssignee(): string {
    //     return this.assignee;
    // }

    // public get getProject(): string {
    //     return this.project;
    // }

    // public get getStartTime(): Date {
    //     return this.startTime;
    // }

    // public get getSanjayRajeshProperty(): string {
    //     return this.sanjayRajeshProperty;
    // }
}
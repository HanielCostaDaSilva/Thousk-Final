import User from "./User";

class Task {
    private _author: User | undefined = undefined;
    private _title: string;
    private _imageLink: string = "";
    private _description: string = "";

    private _state:string;
    private _category: string="";
    private _dateStart: Date;
    private _dateFinal: Date | undefined = undefined;
   
    /*The state can be:

    { "waiting": when the task is waiting be executed,
    "doing": when the task was being executed by the user,
    "done": when the task was successfully executed.
    }

    */

    constructor(title: string, description: string, imageLink: string, author: User | undefined, dateStart: Date, dateFinal: Date | undefined, state: string="waiting", category: string="") {
        
        this._title = title;
        this._description = description;
        this._imageLink = imageLink;
        this._author = author;
        
        this._dateStart= dateStart;
        this._dateFinal = dateFinal;
        this._state = state;
        this._category = category;
    }

    /**
     * @return string return the title
     */
    get title(): string {
        return this._title;
    }

    /**
     * @param title the title to set
     */
    set title(title: string) {
        this._title = title;
    }

    /**
     * @return string return the imageLink
     */
    get imageLink(): string {
        return this._imageLink;
    }

    /**
     * @param imageLink the imageLink to set
     */
    set imageLink(imageLink: string) {
        this._imageLink = imageLink;
    }

    /**
     * @return string return the description
     */
    get description(): string {
        return this._description;
    }

    /**
     * @param description the description to set
     */
    set description(description: string) {
        this._description = description;
    }
    /**
 * @return string return the author
 */
    get author(): User|undefined {
        return this._author;
    }

    /**
     * @param author the author to set
     */
    set author(author: User |undefined) {
        this._author = author;
    }

    get state() {
        return this._state;
    }
    set state(state: string) {

        const newState: string = state.toLowerCase()
        this._state = newState;
    }

    get dateStart(){
        return this._dateStart
    }

    set dateStart(newDateStart:Date){
        this._dateStart = newDateStart;
    }
    get dateFinal(){
        return this._dateFinal
    }

    set dateFinal(newDateFinal:Date | undefined){
        this._dateFinal = newDateFinal;
    }

    get category(){
        return this._category;
    }

    set category(newCategory:string){
        this._category = newCategory;
    }
}

export default Task;
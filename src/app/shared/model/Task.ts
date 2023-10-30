import User from "./User";

class Task {
    private __userCreator: User | undefined = undefined;
    private __title: string;
    private __imageLink: string = "";
    private __description: string = "";

    private __state:string;
    private __category: string="";
    private __dateStart: Date;
    private __dateFinal: Date | undefined = undefined;
   
    /*The state can be:

    { "waiting": when the task is waiting be executed,
    "doing": when the task was being executed by the user,
    "done": when the task was successfully executed.
    }

    */

    constructor(title: string, description: string, imageLink: string, userCreator: User | undefined, dateStart: Date, dateFinal: Date | undefined, state: string="waiting", category: string="") {
        
        this.__title = title;
        this.__description = description;
        this.__imageLink = imageLink;
        this.__userCreator = userCreator;
        
        this.__dateStart= dateStart;
        this.__dateFinal = dateFinal;
        this.__state = state;
        this.__category = category;
    }

    /**
     * @return string return the title
     */
    get title(): string {
        return this.__title;
    }

    /**
     * @param title the title to set
     */
    set title(title: string) {
        this.__title = title;
    }

    /**
     * @return string return the imageLink
     */
    get imageLink(): string {
        return this.__imageLink;
    }

    /**
     * @param imageLink the imageLink to set
     */
    set imageLink(imageLink: string) {
        this.__imageLink = imageLink;
    }

    /**
     * @return string return the description
     */
    get description(): string {
        return this.__description;
    }

    /**
     * @param description the description to set
     */
    set description(description: string) {
        this.__description = description;
    }
    /**
 * @return string return the userCreator
 */
    get userCreator(): User|undefined {
        return this.__userCreator;
    }

    /**
     * @param userCreator the userCreator to set
     */
    set userCreator(userCreator: User |undefined) {
        this.__userCreator = userCreator;
    }

    get state() {
        return this.__state;
    }
    set state(state: string) {

        const newState: string = state.toLowerCase()
        this.__state = newState;
    }

    get dateStart(){
        return this.__dateStart
    }

    set dateStart(newDateStart:Date){
        this.__dateStart = newDateStart;
    }
    get dateFinal(){
        return this.__dateFinal
    }

    set dateFinal(newDateFinal:Date | undefined){
        this.__dateFinal = newDateFinal;
    }

    get category(){
        return this.__category;
    }

    set category(newCategory:string){
        this.__category = newCategory;
    }
}

export default Task;
import User from "./User";

class Task {
    private __userCreator: User | undefined = undefined;
    private __title: string;
    private __imageLink: string = "";
    private __description: string = "";

    private __state: string = "waiting";
    /*The state can be:

    { "waiting": when the task is waiting be executed,
    "executing": when the task was being executed by the user,
    "done": when the task was successfully executed.
    }

    */

    constructor(title: string, description: string, ImageLink: string, userCreator: User | undefined) {
        this.__title = title;
        this.__description = description;
        this.__imageLink = ImageLink;
        this.__userCreator = userCreator;
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
     * @return string return the ImageLink
     */
    get imageLink(): string {
        return this.__imageLink;
    }

    /**
     * @param ImageLink the ImageLink to set
     */
    set imageLink(ImageLink: string) {
        this.__imageLink = ImageLink;
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
    set userCreator(userCreator: User) {
        this.__userCreator = userCreator;
    }

    get state() {
        return this.__state;
    }
    set state(state: string) {

        const newState: string = state.toLowerCase()
        this.__state = newState;
    }
}

export default Task;
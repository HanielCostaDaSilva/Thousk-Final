class TaskUser{
    private __title:string= ""; 
    private __imageLink:string= ""; 
    private __description:string= ""; 

    constructor(title:string,description:string,ImageLink:string){
        this.__title=title;
        this.__description=description;
        this.__imageLink=ImageLink;
    }

    /**
     * @return string return the title
     */
     get title() :string{
        return this.__title;
    }

    /**
     * @param title the title to set
     */
    set title(title:string){
        this.__title = title;
    }

    /**
     * @return string return the ImageLink
     */
     get imageLink() :string{
        return this.__imageLink;
    }

    /**
     * @param ImageLink the ImageLink to set
     */
    set imageLink(ImageLink:string) {
        this.__imageLink = ImageLink;
    }

    /**
     * @return string return the description
     */
     get description() :string{
        return this.__description;
    }

    /**
     * @param description the description to set
     */
    set description(description:string) {
        this.__description = description;
    }
}
export default TaskUser
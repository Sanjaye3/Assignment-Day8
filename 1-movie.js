class movie {
    //constructor()
    constructor(title,studio,rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        console.log("The Movie is "+this.title,"Produced by "+this.studio,"and the rating is "+this.rating);
    }
    
    }
    
    //create a object outside the class
    let obj= new movie("Casino Royale","Eon Productions","PG13");
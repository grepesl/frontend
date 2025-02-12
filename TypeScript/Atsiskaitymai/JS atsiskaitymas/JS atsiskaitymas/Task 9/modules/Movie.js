class Movie {
    constructor(title, director, budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive(){  
        return this.budget > 100_000_000;
    }
}

export default Movie;
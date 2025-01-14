import CardContainer from "../components/CardContainer"
import MovieCard from "../components/MovieCard"
import movies from "../data/movies.json"

export default function Home(){
    return(
        <>
        <CardContainer titulo="Filmes Antigos">
            {
                movies.map(filme =>(
                    <MovieCard key ={filme.id} {...filme}/>
                ))
            }
        </CardContainer>
        </>
        )
}
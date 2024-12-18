import axios from "axios";
import { getTopRatedMovie } from "../redux/MovieSlice";
import { Top_Rated_Movie, options } from "../util/connection";
import {useDispatch} from "react-redux";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Top_Rated_Movie, options);
        dispatch(getTopRatedMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default useTopRatedMovies;
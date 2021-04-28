import React from 'react';
import Movies from '../services/fakeMovieService';
import DeleteButton from './DeleteButton';

// eslint-disable-next-line react/prefer-stateless-function
class Body extends React.Component {
    state = {
        moviesList: Movies,
    };

    clickHandler = (id) => {
        const { moviesList } = this.state;
        const dupList = [...moviesList];
        const movieInTab = dupList.find((m) => m.id === id);
        const indexOfMovie = dupList.indexOf(movieInTab);
        dupList.splice(indexOfMovie, 1);
        this.setState({
            moviesList: dupList,
        });
        console.log(movieInTab, dupList, indexOfMovie);
    };

    render() {
        const { moviesList } = this.state;
        return (
            <div className="container py-5">
                {moviesList.length === 0 ? null : (
                    <h3 className="mb-3">Showing {moviesList.length} Movies Record</h3>
                )}
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    {moviesList.length === 0 && <p>No Record Left. Add Some</p>}
                    <tbody>
                        {moviesList.map((movie) => (
                            <tr key={movie.id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>

                                <td>
                                    <DeleteButton
                                        clickHandler={() => this.clickHandler(movie.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Body;

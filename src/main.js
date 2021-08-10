import $ from 'jquery';

function main() {
    // smooth scroll
    $('.scroll').on('click', function (e) {
        const tujuan = $(this).attr('href');
        const elemenTujuan = $(tujuan);
        $('html,body').animate(
            {
                scrollTop: elemenTujuan.offset().top - 50,
            },
            1000
        );
        e.preventDefault();
    });

    // baseURL API
    const baseUrl = 'https://api.themoviedb.org/3/movie';
    // apiKey
    const apiKey = 'dcdacf42bd898d35b641a730cde71b6e';

    // set upcoming for default show
    $.ajax({
        url: `${baseUrl}/upcoming?`,
        type: 'get',
        dataType: 'json',
        data: {
            api_key: apiKey,
        },
    }).done((upcomingParams) => {
        const upcomingResult = upcomingParams.results;
        upcoming(upcomingResult);
    });

    // upcoming movie
    $('#upcoming').on('click', () => {
        $('#movie-list').html('');
        $.ajax({
            url: `${baseUrl}/upcoming?`,
            type: 'get',
            dataType: 'json',
            data: {
                api_key: apiKey,
            },
        }).done((upcomingParams) => {
            const upcomingResult = upcomingParams.results;
            upcoming(upcomingResult);
        });
    });

    // popular movie
    $('#popular').on('click', () => {
        $('#movie-list').html('');
        $.ajax({
            url: `${baseUrl}/popular?`,
            type: 'get',
            dataType: 'json',
            data: {
                api_key: apiKey,
            },
        }).done((popularParams) => {
            const popularResult = popularParams.results;
            popular(popularResult);
        });
    });

    // top rated movie
    $('#top-rated').on('click', () => {
        $('#movie-list').html('');
        $.ajax({
            url: `${baseUrl}/top_rated?`,
            type: 'get',
            dataType: 'json',
            data: {
                api_key: apiKey,
            },
        }).done((topRatedParams) => {
            const topRatedResult = topRatedParams.results;
            topRated(topRatedResult);
        });
    });

    // search movie
    $('#search-button').on('click', () => {
        $('#movie-result').html('');
        $.ajax({
            url: 'https://api.themoviedb.org/3/search/movie?',
            type: 'get',
            dataType: 'json',
            data: {
                api_key: apiKey,
                query: $('#search-input').val(),
            },
        }).done((searchResult) => {
            search(searchResult);
        });
    });

    // FUNCTION
    // function upcoming
    function upcoming(upcomingResult) {
        $.each(upcomingResult, (i, upcoming) => {
            $('#movie-list').append(`
            <style>
                .card {
                    transition: 0.5s;
                    transform: translate(0, 0);
                    box-shadow: 0 5px 12px 0 rgba(0,0,0,0.2);
                    min-height: 310px;
                }
                .card:hover {
                    transform: scale(1.1);
                    z-index: 1;
                    box-shadow: 0 10px 24px 0 rgba(0,0,0,0.8);
                }
            </style>

            <div class="col-12 col-sm-6 col-md-4">
                <div class="card mb-4">
                    <img src="https://image.tmdb.org/t/p/w500${upcoming.backdrop_path}" class="card-img-top" alt="sorry, image is broken">
                    <div class="card-body">
                        <p class="card-text"><strong>${upcoming.title}</strong></p>
                        <p class="card-text">Rating : ${upcoming.vote_average}</p>
                        <p class="card-text">Release date : ${upcoming.release_date}</p>
                    </div>
                </div>
            </div>`);
        });
    }

    // function popular
    function popular(popularResult) {
        $.each(popularResult, (i, popular) => {
            $('#movie-list').append(`
            <style>
            .card {
                transition: 0.5s;
                transform: translate(0, 0);
                box-shadow: 0 5px 12px 0 rgba(0,0,0,0.2);
                min-height: 310px;
            }
            .card:hover {
                transform: scale(1.1);
                z-index: 1;
                box-shadow: 0 10px 24px 0 rgba(0,0,0,0.8);
            }
            </style>

            <div class="col-12 col-sm-6 col-md-4">
                <div class="card mb-4">
                    <img src="https://image.tmdb.org/t/p/w500${popular.backdrop_path}" class="card-img-top" alt="sorry, image is broken">
                    <div class="card-body">
                        <p class="card-text">Title : ${popular.title}</p>
                        <p class="card-text">Rating : ${popular.vote_average}</p>
                        <p class="card-text">Release date : ${popular.release_date}</p>
                </div>
            </div>`);
        });
    }

    // fungsi toprated
    function topRated(topRatedResult) {
        $.each(topRatedResult, (i, topRated) => {
            $('#movie-list').append(`
            <style>
                .card {
                    transition: 0.5s;
                    transform: translate(0, 0);
                    box-shadow: 0 5px 12px 0 rgba(0,0,0,0.2);
                    min-height: 310px;
                }
                .card:hover {
                    transform: scale(1.1);
                    z-index: 1;
                    box-shadow: 0 10px 24px 0 rgba(0,0,0,0.8);
                }
            </style>

            <div class="col-12 col-sm-6 col-md-4">
                <div class="card mb-4">
                    <img src="https://image.tmdb.org/t/p/w500${topRated.backdrop_path}" class="card-img-top" alt="sorry, image is broken">
                    <div class="card-body">
                        <p class="card-text">Title : ${topRated.title}</p>
                        <p class="card-text">Rating : ${topRated.vote_average}</p>
                        <p class="card-text">Release date : ${topRated.release_date}</p>
                    </div>
                </div>
            </div>`);
        });
    }

    // function search movie
    function search(searchResult) {
        if (searchResult.total_results > 0) {
            const show = searchResult.results;
            $.each(show, (i, search) => {
                $('#movie-result').append(`
                    <style>
                        .card {
                            transition: 0.5s;
                            transform: translate(0, 0);
                            box-shadow: 0 5px 12px 0 rgba(0,0,0,0.2);
                        }
                        .card:hover {
                            transform: scale(1.1);
                            z-index: 5;
                            box-shadow: 0 10px 24px 0 rgba(0,0,0,0.8);
                        }
                        .card.poster {
                            min-height: 800px;
                        }
                    </style>

                    <div class="col-12 col-sm-6 col-md-4">
                        <div class="card mb-4 poster">
                            <img src="https://image.tmdb.org/t/p/w500${search.poster_path}" class="card-img-top" alt="sorry, image is broken">
                            <div class="card-body">
                                <p class="card-text"><strong>${search.title}</strong></p>
                                <small class="card-text">${search.overview}</small>
                            </div>
                        </div>
                    </div>`);
            });
            $('#search-input').val('');
        } else {
            $('#movie-result').html(`
                <style>
                h1 {
                    font-size: 25px;
                }
                @media (min-width: 992px) {
                    h1 {
                        font-size: 35px;
                    }
                }
                </style>
                
                <div class="col">
                    <h1 class="text-center">movie not found !</h1>
                </div>`);
            $('#search-input').val('');
        }
    }
}

export default main;

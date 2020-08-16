const moviesList = [
  {
    id: 605116,
    video: false,
    vote_count: 165,
    vote_average: 6.5,
    title: 'Project Power',
    releaseDate: '2020-08-14',
    original_language: 'en',
    original_title: 'Project Power',
    genre_ids: [28, 80, 878],
    genres: ['Thriller', 'Action', 'Horror'],
    backdropPath: '/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg',
    adult: false,
    overview:
      'An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.',
    posterPath: '/fjCezXiQWfGuNf4t7LruKky7kwV.jpg',
    popularity: 98.969,
    media_type: 'movie'
  },
  {
    original_name: 'The Umbrella Academy',
    title: 'The Umbrella Academy',
    id: 75006,
    name: 'The Umbrella Academy',
    vote_count: 1145,
    vote_average: 8.5,
    first_airDate: '2019-02-15',
    releaseDate: '2009-06-19',
    posterPath: '/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg',
    genre_ids: [35, 18, 10759, 10765],
    genres: ['Thriller', 'Action', 'Crime'],
    original_language: 'en',
    backdropPath: '/qJxzjUjCpTPvDHldNnlbRC4OqEh.jpg',
    overview:
      "A dysfunctional family of superheroes comes together to solve the mystery of their father's death, the threat of the apocalypse and more.",
    origin_country: ['US'],
    popularity: 82.131,
    media_type: 'tv'
  },
  {
    id: 521034,
    video: false,
    vote_count: 75,
    vote_average: 7.5,
    title: 'The Secret Garden',
    releaseDate: '2005-07-08',
    original_language: 'en',
    original_title: 'The Secret Garden',
    genre_ids: [18, 14, 10751],
    genres: ['Thriller', 'Action', 'Documentary'],
    backdropPath: '/8PK4X8U3C79ilzIjNTkTgjmc4js.jpg',
    adult: false,
    overview:
      'Mary Lennox is born in India to wealthy British parents who never wanted her. When her parents suddenly die, she is sent back to England to live with her uncle. She meets her sickly cousin, and the two children find a wondrous secret garden lost in the grounds of Misselthwaite Manor.',
    posterPath: '/5MSDwUcqnGodFTvtlLiLKK0XKS.jpg',
    popularity: 114.229,
    media_type: 'movie'
  },
  {
    id: 516486,
    video: false,
    vote_count: 898,
    vote_average: 7.5,
    title: 'Greyhound',
    releaseDate: '2003-06-19',
    original_language: 'en',
    original_title: 'Greyhound',
    genre_ids: [28, 18, 10752],
    genres: ['Thriller', 'Action', 'Crime'],
    backdropPath: '/xXBnM6uSTk6qqCf0SRZKXcga9Ba.jpg',
    adult: false,
    overview:
      'A first-time captain leads a convoy of allied ships carrying thousands of soldiers across the treacherous waters of the “Black Pit” to the front lines of WW2. With no air cover protection for 5 days, the captain and his convoy must battle the surrounding enemy Nazi U-boats in order to give the allies a chance to win the war.',
    posterPath: '/kjMbDciooTbJPofVXgAoFjfX8Of.jpg',
    popularity: 75.131,
    media_type: 'movie'
  },
  {
    id: 703745,
    video: false,
    vote_count: 168,
    vote_average: 6.5,
    title: 'Deep Blue Sea 3',
    releaseDate: '2010-07-28',
    original_language: 'en',
    original_title: 'Deep Blue Sea 3',
    genre_ids: [28, 27, 878],
    genres: ['Thriller', 'Action', 'Comedy'],
    backdropPath: '/hIHtyIYgBqHybOgUdoAmveipuiO.jpg',
    adult: false,
    overview:
      'Dr. Emma Collins and her team are spending their third summer on the island of Little Happy studying the effect of climate change on the great white sharks who come to the nearby nursery every year to give birth. Along with the last two inhabitants of this former fishing village, their peaceful life is disrupted when a "scientific" team led by her ex-boyfriend and marine biologist Richard show up looking for three bull sharks who we soon learn aren\'t just any bull sharks.',
    posterPath: '/bKthjUmxjHjvJK8FktFfQdmwP12.jpg',
    popularity: 73.686,
    media_type: 'movie'
  },
  {
    id: 703771,
    video: false,
    vote_count: 78,
    vote_average: 6.9,
    title: 'Deathstroke: Knights & Dragons',
    releaseDate: '2016-08-04',
    original_language: 'en',
    original_title: 'Deathstroke: Knights & Dragons',
    genre_ids: [28, 16],
    genres: ['Thriller', 'Action'],
    backdropPath: '/owraiceOKtSOa3t8sp3wA9K2Ox6.jpg',
    adult: false,
    overview:
      "Ten years ago, Slade Wilson-aka the super-assassin called Deathstroke-made a tragic mistake and his wife and son paid a terrible price. Now, a decade later, Wilson's family is threatened once again by the murderous Jackal and the terrorists of H.IV.E. Can Deathstroke atone for the sins of the past-or will his family pay the ultimate price?",
    posterPath: '/vFIHbiy55smzi50RmF8LQjmpGcx.jpg',
    popularity: 92.23,
    media_type: 'movie'
  },
  {
    id: 583083,
    video: false,
    vote_count: 3036,
    vote_average: 8.1,
    title: 'The Kissing Booth 2',
    releaseDate: '2017-07-24',
    original_language: 'en',
    original_title: 'The Kissing Booth 2',
    genre_ids: [35, 10749],
    genres: ['Thriller', 'Action', 'Comedy'],
    backdropPath: '/wO5QSWZPBT71gMLvrRex0bVc0V9.jpg',
    adult: false,
    overview:
      'With college decisions looming, Elle juggles her long-distance romance with Noah, changing relationship with bestie Lee and feelings for a new classmate.',
    posterPath: '/mb7wQv0adK3kjOUr9n93mANHhPJ.jpg',
    popularity: 79.775,
    media_type: 'movie'
  },
  {
    id: 385103,
    video: false,
    vote_count: 409,
    vote_average: 7.6,
    title: 'Scoob!',
    releaseDate: '2018-07-08',
    original_language: 'en',
    original_title: 'Scoob!',
    genre_ids: [12, 16, 35, 10751],
    genres: ['Horror', 'Comedy', 'Documentary'],
    backdropPath: '/fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg',
    adult: false,
    overview:
      'In Scooby-Doo’s greatest adventure yet, see the never-before told story of how lifelong friends Scooby and Shaggy first met and how they joined forces with young detectives Fred, Velma, and Daphne to form the famous Mystery Inc. Now, with hundreds of cases solved, Scooby and the gang face their biggest, toughest mystery ever: an evil plot to unleash the ghost dog Cerberus upon the world. As they race to stop this global “dogpocalypse,” the gang discovers that Scooby has a secret legacy and an epic destiny greater than anyone ever imagined.',
    posterPath: '/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg',
    popularity: 74.988,
    media_type: 'movie'
  },
  {
    id: 547016,
    video: false,
    vote_count: 1660,
    vote_average: 7.4,
    title: 'The Old Guard',
    releaseDate: '2019-07-10',
    original_language: 'en',
    original_title: 'The Old Guard',
    genre_ids: [28, 14],
    genres: ['Thriller', 'Action', 'Comedy'],
    backdropPath: '/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg',
    adult: false,
    overview:
      "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
    posterPath: '/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
    popularity: 64.54,
    media_type: 'movie'
  },
  {
    id: 612706,
    video: false,
    vote_count: 334,
    vote_average: 8.0,
    title: 'Work It',
    releaseDate: '2020-08-07',
    original_language: 'en',
    original_title: 'Work It',
    genre_ids: [35, 10402],
    genres: ['Thriller', 'Action'],
    backdropPath: '/ishzDCZIv9iWfI70nv5E4ZreYUD.jpg',
    adult: false,
    overview:
      "A brilliant but clumsy high school senior vows to get into her late father's alma mater by transforming herself and a misfit squad into dance champions.",
    posterPath: '/b5XfICAvUe8beWExBz97i0Qw4Qh.jpg',
    popularity: 133.64,
    media_type: 'movie'
  }
];

export default moviesList;

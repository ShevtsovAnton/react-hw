const getCountMessage = movies =>
  `${movies.length || 'No'} movie${movies.length === 1 ? '' : 's'} found`;

export default getCountMessage;

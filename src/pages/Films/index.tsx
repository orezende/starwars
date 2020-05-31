import React, { useEffect, useState } from 'react';

import './styles.css';

import api from '../../services/api';

import { FilmsEntity } from '../../types/films';

const Films: React.FC = () => {

  const [allFilms, setFilms] = useState<FilmsEntity[]>([]);

  useEffect(() => {
    api.get('/films')
      .then(response => {
        setFilms(response.data.results);
      })
      .catch(error => {
        
      })
  },[allFilms]);

  return (
    <>
      {allFilms.map(film => (
        <h1 key={film.episode_id}>{film.title}</h1>
      ))}
    </>
  );
}

export default Films;
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
      });
  }, [allFilms]);

  return (
    <div className="film-container">
      <ul>
        {allFilms.map(film => (
          <li key={film.episode_id}>
            <strong>Filme:</strong>
            <p>{film.title}, episódio {film.episode_id}</p>

            <strong>Diretor:</strong>
            <p>{film.director}</p>

            <strong>Produtor:</strong>
            <p>{film.producer}</p>

            <button className="button">Detalhes</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Films;
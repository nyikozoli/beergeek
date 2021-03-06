import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { useRequestState } from 'common/hooks/useRequestState'
import { Loading } from 'components/Loading'

import { fetchBeer, resetBeer, selectBeer } from 'features/beers/beersSlice'

import styles from './BeerDetail.module.scss'


export const BeerDetails = () => {
  const dispatch = useDispatch();

  let { id } = useParams<{ id: string }>();

  const isLoading = useRequestState(fetchBeer.name);
  // const { hasError, error } = useHasError(fetchBeer.name);

  const { beer } = useSelector(selectBeer);

  useEffect(() => {
    dispatch(fetchBeer(+id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(resetBeer());
    };
  }, [dispatch, id]);

  if (isLoading) return <Loading />;

  return beer ? (
    <div className={styles.beer_detail}>
      <div className={styles.beer_detail_info}>
        <h3>
          {beer.name} - {beer.abv}%
        </h3>
        <p className={styles.beer_detail_desc}>{beer.description}</p>
        <p className={styles.beer_detail_tips}>
          Brewers tips: {beer.brewers_tips}
        </p>
        <div className={styles.beer_detail_foods}>
          <h3>Food pairings</h3>
          {beer.food_pairing.map(
            (tip, i): JSX.Element => (
              <p key={i}>{tip}</p>
            )
          )}
        </div>
        <Link to="/beers">Back</Link>
      </div>

      {beer.image_url && <img src={beer.image_url} alt={beer.name} />}
    </div>
  ) : null;
};

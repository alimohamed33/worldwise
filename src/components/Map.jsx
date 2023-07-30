import { useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <>
      <div className={styles.mapContainer}>Map</div>
      <p>
        Position:{lat}, {lng}
      </p>
    </>
  );
}

export default Map;

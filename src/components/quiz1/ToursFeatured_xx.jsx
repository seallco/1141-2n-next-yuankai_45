import { useState, useEffect } from 'react';
// import { tours } from './data';
import Tour_xx from './Tour_xx';

const api_url = 'http://localhost:5000/api/tour_xx/featured';

const ToursFeatured_xx = () => {
  const [tours_xx, setTours_xx] = useState([]);
  const fetchTourFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('tours', data);
      setTours_xx(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTourFromNodeServer();
  }, []);

  return (
    <section className='section' id='tours'>
      <div className='section-title'>
        <h2>
          featured <span>tours</span>
        </h2>
        <h4>tours from Node -- htchung, 12345678 </h4>
      </div>

      <div className='section-center featured-center'>
        {tours_xx?.map((tour) => {
          return <Tour_xx {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};
export default ToursFeatured_xx;

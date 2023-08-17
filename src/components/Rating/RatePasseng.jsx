import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './RateDriver.css'; // Import the CSS file you created


const RatePasseng = () => {
  const [rating, setRating] = useState(0); // Initial rating state
  const [feedback, setFeedback] = useState(''); // Initial feedback state

  const handleRatingClick = (selectedRating) => {
    // Update the rating state when a star is clicked
    setRating(selectedRating);
  };

  const handleFeedbackChange = (event) => {
    // Update the feedback state when textarea content changes
    setFeedback(event.target.value);
  };

  return (
    <div>
      <h2 className='RideQuestion'>How was your ride</h2>
      <div>
        {[1, 2, 3, 4, 5].map((starIndex) => (
          <FaStar
            key={starIndex}
            onClick={() => handleRatingClick(starIndex)}
            className={starIndex <= rating ? 'star selected' : 'star'}
          />
        ))}
      </div>
      <p>Your rating: {rating} stars</p>
      
      <p className='RideQuestion' style={{marginTop: '14%'}}>Describe your Driver: {feedback}</p>
      <textarea className='Feedbacktext'
        rows="4"
        cols="50"
        placeholder="Text"
        value={feedback}
        onChange={handleFeedbackChange}
      />
    </div>
  );
};

export default RatePasseng;

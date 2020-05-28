import React from 'react';

// What are Javascript expressions
const Card = ({name, email, id}) => {
	return (
		// ES6 template String in img src
		// Using tacyons class here even though tacyons is imiported in index.js. How?
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
			
			<div>
				<h2> {name} </h2>
				<p> {email}</p>
			</div>
		</div>

	);
}

export default Card;
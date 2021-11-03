import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
	const [people, setPeople] = useState(data); // here is where we define 'data' as the value to use for our people variable
	return (
		<main>
			<section className='container'>
				<h3>{people.length} birthdays today</h3>
				<List people={people} />{' '}
				{/*this sets up people to be equal to our people state value*/}
				<button className='btn' onClick={() => setPeople([])}>
					clear all
				</button>
			</section>
		</main>
	);
}

export default App;

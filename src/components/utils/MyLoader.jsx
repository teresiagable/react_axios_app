import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React from 'react';

//here I have "borrowed" code from 'react-loader-spinner' and made my own component with component
//with the settings I want the loader to always in my app.
//then the code in the components get cleaner because I only have to import this component and write <MyLoader />
// see differens types of animation below
function MyLoader() {
	return (
		<Loader
			style={{ 'text-align': 'center' }}
			type='Puff'
			color='#d33682'
			height={300}
			width={300}
		/>
	);
}

export default MyLoader;
// * @property _type_ | Type of spinner you want to display
// * @default Audio
// */
//  type:
//  "Audio"
//  |"BallTriangle"
//  |"Bars"
//  |"Circles"
//  |"Grid"
//  |"Hearts"
//  |"Oval"
//  |"Puff"
//  |"Rings"
//  |"TailSpin"
//  |"ThreeDots"
//  |"Watch"
//  |"RevolvingDot"
//  |"Triangle"
//  |"Plane"
//  |"MutatingDots"
//  |"CradleLoader";

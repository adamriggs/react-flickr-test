require('./sass/style.scss');
import React from 'react';
import {render} from 'react-dom';
import Flickr from './Flickr.jsx';

class App extends React.Component {

	

	constructor(props) {
		super(props);

	}

	componentWillMount() {

	}

	componentDidMount() {
		console.log("index.componentDidMount()");
		//console.log("***** FART");
		console.log("***** non-FART");
	}

	render() {
		return(
			<div> 
				<Flickr />
			</div>
		);
	}

}

render(<App/>, document.getElementById('app'));
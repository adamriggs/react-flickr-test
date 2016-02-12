import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import Masonry from 'react-masonry-component';
import {keys} from './keys/keys.json';

class Flickr extends React.Component {


	constructor(props) {
		console.log('Flickr.constructor()');
		super(props);

	}

	componentWillMount() {
		console.log('Flickr.componentWillMount()');

		this.setState({
			pics: []
		});
	}

	componentDidMount() {
		console.log('Flickr.componentDidMount()');

		$.get(keys.url, (data)=>this.handleData(data));

	}

	handleData(data) {
		console.log('Flickr.handleData()');
		let pics = data.photos.photo;

		//console.log(pics);

		let uris = [];

		for( let i = 0; i < pics.length; i++) {
			uris.push("http://farm"+ pics[i].farm +".static.flickr.com/"+ pics[i].server +"/"+ pics[i].id +"_"+ pics[i].secret +"_z.jpg");
		}

		this.setState({
			pics: pics
		});
	}

	render() {
		console.log('Flickr.render()');

		let imgs = this.state.pics.map( (val, index, arr)=> {

			let imgurl = "http://farm"+ val.farm +".static.flickr.com/"+ val.server +"/"+ val.id +"_"+ val.secret +"_z.jpg";
			let pageurl = "https://www.flickr.com/photos/" + val.owner + "/" + val.id;

			return <a href={pageurl} key={index}><img className="flickr-pic image-element-class" src={imgurl} key={index} /></a>
		});

		let masonryOptions = {
		    transitionDuration: 1
		};

		return (

			<Masonry
                className={'flickr-gallery'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
            >
				{imgs}
			</Masonry>

		);
	}
}

export default Flickr;

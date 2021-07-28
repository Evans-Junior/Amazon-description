import React, {Component} from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from "./Utils/ProductData"

class App extends Component {
  state ={
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  }

  // <link href = 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:600&display=swap"rel="stylesheet'

//firstly used{`${new Date().getHours()}:${new Date().getMinutes()}`}

onColorOptionClick = (pos) => {
  // const updatePreviewImage = this.state.productData.colorOptions[pos].imageUrl
  // console.log(updatePreviewImage);
  this.setState({currentPreviewImagePos: pos});
} 

onFeatureItemClick = (pos) => {
this.setState({CurrentSelectedFeature: pos});
}


shouldComponentUpdate(nextProps,nextState){
  // console.log('Next State => ', nextState)
  // console.log('Current State => ', this.State);
console.log('Inside ShouldComponentUpdate')
if(nextState.currentPreviewImagePos === this.state.currentPreviewImagePos){
  return false;
}

  return true;
}


render() {

console.log('Rendering Appjs');

  return (
    <div className="App">
      <Topbar/>
      <div className = {classes.MainContainer}>
      <div >
      <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
      currentSelectedFeature={this.state.currentSelectedFeature} />
      </div>
     <ProductDetails data = {this.state.productData} onColorOptionClick={this.onColorOptionClick}
     currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick = {this.onFeatureItemClick}
     currentSelectedFeature={this.state.currentSelectedFeature}/>
      </div>
    </div> 
    );
}

}

export default App;

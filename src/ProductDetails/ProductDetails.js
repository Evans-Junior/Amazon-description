import React from 'react'
import classes from "./ProductDetails.module.css"


function ProductDetails(props) {

const colorOptions = props.data.colorOptions.map((item,pos) => {

const classArr = [classes.ProductImage]
if(pos === props.currentPreviewImagePos){
  classArr.push(classes.SelectedProductImage);
}

  return(
    <img key={pos} className={classArr.join(' ')} src = {item.imageUrl} alt={item.styleName}
    onClick= {() =>props.onColorOptionClick(pos)}/>
  );
})

const featureList = props.data.featureList.map((item, pos) =>{
  const classArr = [classes.FeatureItem];

if (pos === props.currentSelectedFeature){
classArr.push(classes.SelectedFeatureItem);
}


  return(
    <button onClick={() => props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
  )
} )


    return (
        <div className={classes.ProductData}>
      <h1 className= {classes.ProductTitle}>{props.data.title}</h1>
      <p className={classes.ProductDescription}>{props.data.description}</p>
      <h3 className={classes.SectionHeading}>Select Color</h3>
      <div>
      {colorOptions}
      {/*First <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')}
       src = 'https://imgur.com/iOeUBV7.png' alt="Black Color Watch"/>
      <img className={classes.ProductImage} src = 'https://imgur.com/PTgQlim.png' alt="Red Color Watch"/>
      <img className={classes.ProductImage} src = 'https://imgur.com/Mplj1YR.png' alt="Blue Color Watch"/>
    <img className={classes.ProductImage} src = 'https://imgur.com/xSIK4M8.png' alt="Purple Color Watch"/>*/}
      </div>
      <h3 className={classes.SectionHeading}> Features</h3>
      <div>
      {featureList}
      </div>
      <div>
      <button className={classes.PrimaryButton}>Buy Now</button>
      <button className={classes.AddCart}>Add to Cart</button>
      </div>
      </div>
    )
}

export default ProductDetails

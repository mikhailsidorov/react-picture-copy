import React from 'react'
import ImageLoader from 'react-imageloader'

import styles from './PictureContainer.module.css'
import Spinner from '../../UI/Spinner/Spinner'

const pictureContainer = props => {
  let images = []
  for (let c = 1; c <= props.counter; c++) {
    // images.push(<img key={c} className={styles.pictureContainer_image} src={props.src} alt={props.alt} />)
    images.push(
      <ImageLoader
        key={c}
        imgProps={{ className: styles.pictureContainer_image }}
        src={props.src}
        preloader={Spinner}
        wrapper={React.createFactory(React.Fragment)}
      >
        Image load failed!
      </ImageLoader>
    )
  }
  return <div className={styles.pictureContainer}>{images}</div>
}

export default pictureContainer

import React from 'react'
import { shallow } from 'enzyme'

import PictureContainer from './PictureContainer'
import ImageLoader from 'react-imageloader'

describe('<PictureContainer />', () => {
  it('should render ImageLoader componens counts equal to counter prop', () => {
    const maxCounter = 5
    for (let c = 1; c <= maxCounter; c++) {
      let wrapper = shallow(<PictureContainer />)
      wrapper.setProps({ counter: c })
      expect(wrapper.find(ImageLoader)).toHaveLength(c)
    }
  })
})

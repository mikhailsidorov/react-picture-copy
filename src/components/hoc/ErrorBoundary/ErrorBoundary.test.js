import React from 'react'
import { shallow } from 'enzyme'

import ErrorBoundary from './ErrorBoundary'

describe('<ErrorBoundary />', () => {
  it('should render error message when an error is occurred', () => {
    const component = props => {
      throw new Error('Error')
    }
    const wrapper = shallow(<ErrorBoundary>{component}</ErrorBoundary>)
    expect(wrapper.contains(<p>Oops. Something going wrong. Click to retry.</p>))
    expect(wrapper.contains(<p>Error!</p>))
  })

  it('should render children components if no errors', () => {
    const component = <div>Test</div>
    const wrapper = shallow(<ErrorBoundary>{component}</ErrorBoundary>)
    expect(wrapper.contains(component))
  })
})

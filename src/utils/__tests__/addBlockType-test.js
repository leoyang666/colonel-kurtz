import addBlockType from 'utils/addBlockType'

describe('Utils - addBlockType', function() {

  it ('if given an invalid react element, it attempts to make one', function() {
    var spy = sinon.spy(React, 'createClass')

    addBlockType([{
      type: 'test',
      component: { render() { return null } }
    }])

    spy.should.have.been.called
    spy.restore()
  })

})

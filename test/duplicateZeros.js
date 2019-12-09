import should from 'should'
import duplicateZeros from '../lib/duplicateZeros'
describe('#duplicateZeros', () => {
  it('should return the duplicateZeros of array', done => {
    const avg = duplicateZeros([1,0,2,3,0,4,5,0]).toString();
    console.log(avg)
    avg.should.equal([1,0,0,2,3,0,0,4].toString())
    // by reference so two array not equal
    done()
  })
  // 測試有沒有回傳 NaN
  it('should return [] when array is empty', done => {
    const avg = duplicateZeros([])
    avg instanceof Array.should.be.true
    done()
  })
})
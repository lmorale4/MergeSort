describe("Split Array function",function(){
  it('is able to split an array in half', function(){
    expect(split([1,2])).toEqual([[1],[2]]);
    expect(split([1,2,3])).toEqual([[1,2],[3]])
  })
})
describe("Merge function",function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1],[2])).toEqual([1,2]);
    expect(merge([2,3,4,5],[6,7,8,9])).toEqual([2,3,4,5,6,7,8,9]);
    expect(merge([3,4],[1,2])).toEqual([1,2,3,4]);
    expect(merge([3,5],[2,4])).toEqual([2,3,4,5]);
  })
})

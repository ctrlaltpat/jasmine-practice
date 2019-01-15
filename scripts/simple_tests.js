let earth = {
  isRound: true,
  numberFromSun: 3
}

describe('Earth', () => {
  it('is round', () => {
    expect(earth.isRound).toBe(true)
  });
  it("is the third planet from the sun", () => {
    expect(earth.numberFromSun).toBe(3)
  })
})

describe("Jasmine Matchers", () => {
  it("allows for === and deep equality", () => {
    expect(1+1).toBe(2);
    expect([1,2,3]).toEqual([1,2,3]);
  });
  it("allows for easy precision checking", () => {
    expect(3.1415).toBeCloseTo(3.14,2);
  });
  it("allows for easy truthy / falsey checking", () => {
    expect(0).toBeFalsy();
    expect([]).toBeTruthy();
  });
  it("allows for easy type checking", () => {
    expect([]).toEqual(jasmine.any(Array));
    expect(() => {}).toEqual(jasmine.any(Function));
  });
  it("allows for checking contents of an object", () => {
    expect([1,2,3]).toContain(1);
    expect({name:'Patrick', job:'Software Engineer'}).toEqual(jasmine.objectContaining({name:'Patrick'}));
  });
});
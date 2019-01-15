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

describe("Arrays + beforeEach", () => {
  let arr;
  beforeEach( () => arr = [2,4,6] );

  it("adds elements to an array", () => {
    arr.push(44);
    expect(arr).toEqual([2,4,6,44]);
  });
  it("returns the new length of the array", () => {
    expect(arr.push(44)).toBe(4)
  });
  it("adds anything into the array", () => {
    expect(arr.push({})).toBe(4)
  })
})

describe("Counting + afterEach", () => {
  let count = 0;
  beforeEach(() => count++)
  afterEach(() => count = 0)
  it("has a counter that increments", () => {
    expect(count).toBe(1);
  });
  it("gets reset", () => {
    expect(count).toBe(1)
  })
})

// ignoring beforeAll and afterAll for now

describe("Nesting", () => {
  let arr;
  beforeEach(() => arr = [2,4,6])
  describe("#unshift", () => {
    it("adds an element to the beginning of an array", () => {
      arr.unshift(44);
      expect(arr[0]).toBe(44)
    });
    it("returns the new length", () => {
      expect(arr.unshift(9000)).toBe(4)
    })
  })
  describe("#push", () => {
    it("adds an element to the end of an array", () => {
      arr.push(44);
      expect(arr[arr.length-1]).toBe(44)
    })
    it("returns the new length", () => {
      expect(arr.push(9000)).toBe(4)
    })
  })
})

describe("Pending specs", () => {
  xit("can start with an xit", () => {
    expect(true).toBe(true);
  });
  it("is a pending test if there is no callback function");
  it("is pending if the pending function is invoked inside the callback", () => {
    expect(2).toBe(2);
    pending();
  });
});
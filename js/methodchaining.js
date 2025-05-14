console.log('===== METHOD CHAINING =====');

// CALCULATOR

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  sub(a) {
    this.total -= a;
    return this;
  },
  mul(a) {
    this.total *= a;
    return this;
  },
};

const calcResult = calc.add(10).sub(5).mul(2);
console.log('method chaining result ', calcResult.total);

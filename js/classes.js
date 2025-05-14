console.log('====CLASSES====');

class One {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Two extends One {
  constructor(uname, age, sex) {
    super(uname, age);
    this.sex = sex;
  }
}

class Three extends Two {
  constructor(qq, ss, aa, cc) {
    super(qq, ss, aa);
    this.name = qq;
    this.city = cc;
  }
}

let p1 = new Three('ajitddh__', 20, 'male', 'chennai');
console.log(p1.name, p1.city);

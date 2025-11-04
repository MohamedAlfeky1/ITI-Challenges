let student = {
  id: 1,
  name: "Mohamed",
  lastName: "Alfeky",
  getSetGen: function () {
    const onlyKeys = Object.keys(this).filter(
      (key) => typeof this[key] !== "function"
    );

    onlyKeys.forEach((key) => {
      // Get Method
      const getMethodName = "get" + key.charAt(0).toUpperCase() + key.slice(1);
      this[getMethodName] = function () {
        console.log(this[key]);
      };

      // Another Method
      // Object.defineProperty(this, getMethodName, {
      //   value: function () {
      //     console.log(this[key]);
      //   },
      // });

      // Set Method
      const setMethodName = "set" + key.charAt(0).toUpperCase() + key.slice(1);
      this[setMethodName] = function (newkey) {
        console.log((this[key] = newkey));
      };
    });
  },
};
student.getSetGen();
student.getName();
student.getId();

student.setName("Ali");

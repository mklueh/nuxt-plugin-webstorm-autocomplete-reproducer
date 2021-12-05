export default async ({app}, inject) => {
  inject("sdk", {
    "thisIsATestMethodThatShouldBeRecognized": function () {
      return "hello from plugin";
    }
  })
}

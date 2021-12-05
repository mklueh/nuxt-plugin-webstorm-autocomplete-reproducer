import Vue from "vue";

export default async ({app}, inject) => {
  const plugin = {
    "thisIsATestMethodThatShouldBeRecognized": function () {
      return "hello from plugin";
    }
  };

  //Required to make $sdk known
  Vue.prototype.$sdk = plugin;

  inject("sdk", plugin);
}

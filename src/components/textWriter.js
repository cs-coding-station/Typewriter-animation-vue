import { ref } from "vue";

export function useTextWriter(text) {
  let opacity = ref(1);
  let increase = false;
  function changeOpacity() {
    if (increase) {
      opacity.value = parseFloat((opacity.value + 0.01).toFixed(2));
      if (opacity.value === 1) increase = false;
    } else {
      opacity.value = parseFloat((opacity.value - 0.01).toFixed(2));
      if (opacity.value === 0) increase = true;
    }
  }
  setInterval(changeOpacity, 10);

  let showText = ref("");
  let index = 1;
  function changeText() {
    showText.value = text.slice(0, index);
    index++;

    if (index > text.length) {
      index = 1;
    }
  }
  setInterval(changeText, 100);

  return {
    showText,
    opacity,
  };
}

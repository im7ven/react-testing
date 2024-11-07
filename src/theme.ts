export const lightTheme = {
  color: {
    background: "#fff",
    primaryText: "#21201c",
  },
  toggle: {
    maxHeight: "0", // This could represent the value when dark mode is not active
    opacity: "0", // When it's not dark mode
    transform: "translateX(3rem)", // Position for light theme
  },
};

export const darkTheme = {
  color: {
    background: "#01060e",
    primaryText: "#fff",
    secondary: "#a1a1a1",
  },
  toggle: {
    maxHeight: "initial", // This could represent the value when dark mode is active
    opacity: "1", // When it's dark mode
    transform: "translateX(0rem)", // Position for dark theme
  },
};

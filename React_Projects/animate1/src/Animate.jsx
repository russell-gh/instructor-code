import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function Fade({ in: inProp }) {
  console.log("hi");
  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => {
        console.log(state);
        return (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            I'm a fade Transition!
          </div>
        );
      }}
    </Transition>
  );
}

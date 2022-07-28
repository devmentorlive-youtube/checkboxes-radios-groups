function stepper(step = 0) {
  let i = 0;

  return () => {
    const j = i;
    i = i + step;
    return j;
  };
}

const step5 = stepper(5);

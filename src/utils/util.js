function roundToOne(num) {
  return +(Math.round(num + "e+1") + "e-1");
}

export { roundToOne };

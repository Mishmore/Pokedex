const LoadingModal = () => {
  const loaderWrapper = $('<div class="preloader-wrapper active"></div>');
  const spinner = $('<div class="spinner-layer spinner-red-only"></div>');
  const circleLeft = $('<div class="circle-clipper left"><div>');
  const circle1 = $('<div class="circle"></div>');
  loaderWrapper.append(spinner);
  spinner.append(circleLeft);
  circleLeft.append(circle1);

  const gap = $('<div class="gap-patch"></div>');
  const circle2 = $('<div class="circle"></div>');
  spinner.append(gap);
  gap.append(circle2);

  const circleRight = $('<div class="circle-clipper right"></div>');
  const circle3 = $('<div class="circle"></div>');
  spinner.append(circleRight);
  circleRight.append(circle3);

  return loaderWrapper;
}

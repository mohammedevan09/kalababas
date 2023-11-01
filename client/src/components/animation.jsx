export const headerAnimation = (i) => {
  return {
    variants: {
      hidden: { opacity: 0, x: -75 * i, rotate: 360 },
      visible: { opacity: 1, x: 0, rotate: 0 },
    },
    initial: 'hidden',
    animate: 'visible',
    transition: { duration: 0.5, delay: 0.3 * i },
    className: 'overviewDetails',
  }
}

export const navAnimation = (i) => {
  return {
    variants: {
      hidden: { opacity: 0, x: 0 * i, rotateX: 360 },
      visible: { opacity: 1, x: 0, rotateX: 0 },
    },
    initial: 'hidden',
    animate: 'visible',
    transition: { duration: 1, delay: 0.6 * i },
    className: 'overviewDetails',
  }
}

export const homeDetails = () => {
  return {
    variants: {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    },
    initial: 'hidden',
    animate: 'visible',
    transition: { duration: 1, delay: 0.5 },
  }
}

export const textAnimation = (i) => {
  return {
    initial: { opacity: 0, y: -250, background: 'black' },
    animate: { opacity: 1, y: 0, background: 'none' },
    transition: { type: 'spring', stiffness: 100 * i, delay: 0.6 },
  }
}

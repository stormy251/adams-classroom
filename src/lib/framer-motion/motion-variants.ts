export const INITIAL_VARIANT_NAME = 'hidden';
export const ANIMATE_VARIANT_NAME = 'visible';
export const EXIT_VARIANT_NAME = 'hidden';

const BASE_TIMING = 0.15;
const FAST_TIMING = BASE_TIMING / 2;

export const staggerChildrenVariants = {
  [ANIMATE_VARIANT_NAME]: {
    opacity: 1,
    transition: {
      staggerChildren: BASE_TIMING,
      delayChildren: 0
    }
  },
  [INITIAL_VARIANT_NAME]: {
    opacity: 0,
    transition: {
      staggerChildren: BASE_TIMING,
      staggerDirection: -1
    }
  }
};

export const staggerChildrenFastVariants = {
  [ANIMATE_VARIANT_NAME]: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0
    }
  },
  [INITIAL_VARIANT_NAME]: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  }
};

export const fadeVariants = {
  [ANIMATE_VARIANT_NAME]: (baseTimeDelayMultiple = 0) => ({
    opacity: 1,
    transition: {
      delay: baseTimeDelayMultiple * BASE_TIMING
    }
  }),
  [INITIAL_VARIANT_NAME]: (baseTimeDelayMultiple = 0) => ({
    opacity: 0,
    transition: {
      delay: baseTimeDelayMultiple * BASE_TIMING
    }
  })
};

export const fadeQuickVariants = {
  [ANIMATE_VARIANT_NAME]: (baseTimeDelayMultiple = 0) => ({
    opacity: 1,
    transition: {
      delay: baseTimeDelayMultiple * FAST_TIMING
    }
  }),
  [INITIAL_VARIANT_NAME]: (baseTimeDelayMultiple = 0) => ({
    opacity: 0,
    transition: {
      delay: baseTimeDelayMultiple * FAST_TIMING
    }
  })
};

export const fadeUpVariants = {
  [ANIMATE_VARIANT_NAME]: (baseTimeDelayMultiple = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: baseTimeDelayMultiple * BASE_TIMING
    }
  }),
  [INITIAL_VARIANT_NAME]: (baseTimeDelayMultiple = 0) => ({
    opacity: 0,
    y: 15,
    transition: {
      delay: baseTimeDelayMultiple * BASE_TIMING
    }
  })
};

export const fadeLeftVariants = {
  [ANIMATE_VARIANT_NAME]: (baseTimeDelayMultiple = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: baseTimeDelayMultiple * BASE_TIMING
    }
  }),
  [INITIAL_VARIANT_NAME]: (baseTimeDelayMultiple = 0) => ({
    opacity: 0,
    x: 15,
    transition: {
      delay: baseTimeDelayMultiple * BASE_TIMING
    }
  })
};

export const fadeRightVariants = {
  [ANIMATE_VARIANT_NAME]: (baseTimeDelayMultiple = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: baseTimeDelayMultiple * BASE_TIMING
    }
  }),
  [INITIAL_VARIANT_NAME]: (baseTimeDelayMultiple = 0) => ({
    opacity: 0,
    x: -15,
    transition: {
      delay: baseTimeDelayMultiple * BASE_TIMING
    }
  })
};

export const fadeHeightVariants = {
  [ANIMATE_VARIANT_NAME]: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  [INITIAL_VARIANT_NAME]: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

export const fadeSlideLeftVariants = {
  [ANIMATE_VARIANT_NAME]: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4
    }
  },
  [INITIAL_VARIANT_NAME]: {
    x: -50,
    opacity: 0,
    scale: 0.6,
    transition: {
      duration: 0.4
    }
  }
};

export const slideLeftVariants = {
  [ANIMATE_VARIANT_NAME]: {
    x: 0,
    transition: {
      duration: BASE_TIMING * 2
    }
  },
  [INITIAL_VARIANT_NAME]: {
    x: 50,
    transition: {
      duration: BASE_TIMING * 2
    }
  }
};

export const fadeSlideRightVariants = {
  [ANIMATE_VARIANT_NAME]: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4
    }
  },
  [INITIAL_VARIANT_NAME]: {
    x: 50,
    opacity: 0,
    scale: 0.6,
    transition: {
      duration: 0.4
    }
  }
};

// // const breakpoints = ['360px', '1366px', '1920px']

// // breakpoints.sm = breakpoints[0]
// // breakpoints.md = breakpoints[1]
// // breakpoints.lg = breakpoints[2]



type BreakpointsProp = Array<string> & {
    _?: string
    sm?: string,
    md?: string,
    lg?: string,
    // xl?: string,
  }
  
  const breakpoints: BreakpointsProp = ['0px', '360px', '720px', '1020px']

  // aliases
  breakpoints._  = breakpoints[0]
  breakpoints.sm = breakpoints[1]
  breakpoints.md = breakpoints[2]
  breakpoints.lg = breakpoints[3]

  
export default breakpoints;
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "gsap" {
  const gsap: any;
  export default gsap;
}

declare module "gsap/ScrollTrigger" {
  export const ScrollTrigger: any;
  const _default: any;
  export default _default;
}

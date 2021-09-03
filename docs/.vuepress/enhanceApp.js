import GupoButton from '../../src/components/Basic/Button/index';

export default async ({Vue}) => {
  if (typeof process === 'undefined') {
    Vue.component('GupoButton', GupoButton)
  }
}
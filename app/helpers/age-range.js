import { helper } from '@ember/component/helper';

export function ageRange(params/*, hash*/) {
  const [min, max] = params;
  if(min && max){
    return min + ' - ' + max;
  } else if(min){
    return ' from ' + min;
  } else if(max){
    return ' to ' + max;
  }
}

export default helper(ageRange);

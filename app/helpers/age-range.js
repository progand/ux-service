import { helper } from '@ember/component/helper';

export function ageRange(params/*, hash*/) {
  const [min, max] = params;
  if(min && max && max < 130){
    return min + ' - ' + max;
  } else if(min){
    return ' from ' + min;
  } else if(max && max < 130){
    return ' to ' + max;
  }
}

export default helper(ageRange);

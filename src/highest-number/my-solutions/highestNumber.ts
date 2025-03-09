interface HightNumber {
  apply(n: any[]): number
}

export function getHighestNumber(): HightNumber {
  /* return {
        apply: function (data: []) {
            let p = 0
            for (let index = 0; index < data.length; index++) {
                const current =  parseInt(data[index]);
                p = p > current ? p : current;
            }
            

            return p
        }
    }*/

  return {
    apply: function (data: number[]) {
      return data.length > 0 ? Math.max(...data.map(n => parseInt(n))) : 0
    }
  }
}

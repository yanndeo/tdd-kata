interface additionalNumbers {
  sum(n: any[]): number
}

export function addAllNumber(): additionalNumbers {
  return {
    sum: function (list: any[]): number {
      return list.reduce(function (acc, current) {
        return parseInt(acc) + parseInt(current)
      }, 0)
    }
  }
}

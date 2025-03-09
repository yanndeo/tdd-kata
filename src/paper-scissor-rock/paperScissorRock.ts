export enum choice {
  'paper',
  'scissor',
  'rock'
}

export function paperScissorRock(player: choice, opponent: choice): boolean | null {
  let result = null

  const scenarios = new Array(
    { player: choice.paper, opponent: choice.rock, outcome: true },
    { player: choice.paper, opponent: choice.scissor, outcome: false },
    { player: choice.rock, opponent: choice.scissor, outcome: true },
    { player: choice.rock, opponent: choice.paper, outcome: false },
    { player: choice.scissor, opponent: choice.paper, outcome: true },
    { player: choice.scissor, opponent: choice.rock, outcome: false }
  )

  if (player === opponent) {
    result
  } else {
    result = scenarios.find(
      scenario => scenario.player === player && scenario.opponent === opponent
    )
  }

  /* 
    if (player == choice.paper && opponent == choice.rock) {
        result = true;
    } else if (player == choice.paper && opponent == choice.scissor) {
        result = false;
    } else if(player ==  choice.rock && opponent == choice.scissor) {
        result = true;
    } else if(player ==  choice.rock && opponent == choice.paper) {
        result = false;
    } else if (player == choice.scissor && opponent == choice.paper) {
        result = true;
    } else if(player == choice.scissor && opponent ==  choice.rock) {
        result = false;
    }
    */

  return result ? result?.outcome : null
}

export function forEach(items: number[], callback: any) {
  for (const item of items) {
    callback(item)
  }
}

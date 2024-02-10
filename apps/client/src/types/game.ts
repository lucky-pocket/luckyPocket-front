export interface GameResult {
  result: {
    marked: boolean;
    yutPieces: boolean[];
  };
  output: string;
  coinsEarned: number;
}

export interface CurrentCoin {
  coins: number;
}

export interface FreeTicketInfo {
  refillAt: string;
  ticketCount: number;
}

import { Filled } from './types/AirSwap/AirSwap'
import { Trade } from './types/schema'

export function handleFilled(event: Filled): void {
  let trade = new Trade(event.transaction.hash.toHex())
  trade.makerAddress = event.params.makerAddress.toHex()
  trade.makerAmount = event.params.makerAmount.toString()
  trade.takerAddress = event.params.takerAddress.toHex()
  trade.takerAmount = event.params.takerAmount.toString()
  trade.makerToken = event.params.makerToken.toHex()
  trade.takerToken = event.params.takerToken.toHex()
  trade.expiration = i32(event.params.expiration)
  trade.nonce = i32(event.params.nonce)
  trade.event = 'Filled'
  trade.save()
}

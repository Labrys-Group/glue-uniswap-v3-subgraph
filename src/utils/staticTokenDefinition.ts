import { Address, BigInt } from '@graphprotocol/graph-ts'

// Initialize a Token Definition with the attributes
export class StaticTokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const getStaticDefinition = (
  tokenAddress: Address,
  staticDefinitions: Array<StaticTokenDefinition>,
): StaticTokenDefinition | null => {
  const tokenAddressHex = tokenAddress.toHexString()

  // Search the definition using the address
  for (let i = 0; i < staticDefinitions.length; i++) {
    const staticDefinition = staticDefinitions[i]
    if (staticDefinition.address.toHexString() == tokenAddressHex) {
      return staticDefinition
    }
  }

  // If not found, return null
  return null
}

export const STATIC_TOKEN_DEFINITIONS: Array<StaticTokenDefinition> = [
  {
    address: Address.fromString('0x9a1691D500C54e1d79df2347D170987aa3E527aC'),
    symbol: 'WGLUE',
    name: 'WGLUE',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0xee45ed3f6c675f319bb9de62991c1e78b484e0b8'),
    symbol: 'USDC.e',
    name: 'Bridged USDC (Stargate)',
    decimals: BigInt.fromI32(6),
  },
  {
    address: Address.fromString('0x258576c5da4502b0fa91823817c2b69c588d7616'),
    name: 'Mister Miggles',
    symbol: 'MIGGLES',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590'),
    name: 'WETH',
    symbol: 'WETH',
    decimals: BigInt.fromI32(18),
  },
]

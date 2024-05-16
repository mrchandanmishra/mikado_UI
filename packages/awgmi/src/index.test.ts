import { expect, test } from 'vitest'
import * as exports from './index'

test('exports', () => {
  expect(Object.keys(exports)).toMatchInlineSnapshot(`
    [
      "APTOS_COIN",
      "ChainMismatchError",
      "ChainNotConfiguredError",
      "ConnectorAlreadyConnectedError",
      "ConnectorNotFoundError",
      "ConnectorUnauthorizedError",
      "SimulateTransactionError",
      "UserRejectedRequestError",
      "defaultChain",
      "defaultChains",
      "getDefaultProviders",
      "isAccountAddress",
      "isHexStringEquals",
      "isPendingTransaction",
      "isStructTag",
      "isUserTransaction",
      "parseVmStatusError",
      "createClient",
      "Context",
      "AwgmiConfig",
      "useClient",
      "useAccount",
      "useAccountBalance",
      "useAccountBalances",
      "accountResourceQueryKey",
      "useAccountResource",
      "useAccountResources",
      "useBalance",
      "useCoin",
      "useCoins",
      "useConnect",
      "useDisconnect",
      "useLedger",
      "useNetwork",
      "useProvider",
      "useSendTransaction",
      "useSimulateTransaction",
      "useTableItem",
      "useTableItems",
    ]
  `)
})

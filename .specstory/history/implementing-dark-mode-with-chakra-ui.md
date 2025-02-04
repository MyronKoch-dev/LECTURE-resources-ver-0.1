## SpecStory

## Implementing Dark Mode with Chakra UI (2/4/2025, 1:41:25 PM)

_**User**_

Please execute The instructions on @darkmode-modification-prompt.md 

---

_**Assistant**_

I'll help you implement dark mode functionality using Chakra UI. Let's break this down into steps and implement them one by one.

First, let's check the existing codebase structure to see where we need to make changes.

---

_**Assistant**_



---

_**Assistant**_



Let me help you implement the dark mode functionality step by step. First, let's add the theme switching capability to the `ExchangePage` component.

---

_**Assistant**_

```
import { IExchangeCollection } from "@/lib/app/types";
import { Box, Button, Flex, Text, useColorMode, IconButton, Tooltip } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import React, { ChangeEvent, FC, useState } from "react";
// ... existing code ...

const ExchangePage: FC<Props> = (props) => {
    const { collection } = props;
    const { colorMode, toggleColorMode } = useColorMode();
    const [nativeAmount, setNativeAmount] = useState(0);
    // ... existing code ...

    return (
        <Flex direction="column" gap={4} bg={colorMode === 'dark' ? 'gray.800' : 'white'} minH="100vh" p={4}>
            <Flex direction="row" justify="flex-end" mb={4}>
                <Tooltip label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}>
                    <IconButton
                        aria-label="Toggle color mode"
                        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        onClick={toggleColorMode}
                        variant="ghost"
                        colorScheme="teal"
                    />
                </Tooltip>
            </Flex>

            <Flex direction="row" justify={"space-between"} data-testid="exchange-page">
                <ExchangeIntro cw20={collection.cw20} data-testid="exchange-intro" />
                <ExchangeCard
                    handleAndrInput={handleAndrInput}
                    nativeAmount={nativeAmount}
                    exchange={collection.exchange}
                    cw20={collection.cw20}
                    colorMode={colorMode}
                    data-testid="exchange-card"
                />
            </Flex>
            <Box 
                borderWidth='1px' 
                borderRadius='lg' 
                padding={6} 
                backgroundColor={colorMode === 'dark' ? 'gray.700' : 'gray.50'} 
                mt="4" 
                mb="4"
            >
                <Flex direction={"column"} justifyContent={'space-between'} padding={4}>
                    <Text 
                        fontWeight="bold" 
                        fontSize="3xl" 
                        mt="2" 
                        lineHeight="shorter" 
                        data-testid="add-contract-addr" 
                        mb='2' 
                        color={colorMode === 'dark' ? 'whiteAlpha.900' : 'blackAlpha.800'}
                    >
                        Add your cw20 token to Keplr for easy balance tracking
                    </Text>
                    <Text 
                        fontSize="md" 
                        color={colorMode === 'dark' ? 'whiteAlpha.800' : 'blackAlpha.700'} 
                        mb='4'
                    >
                        • You only need to do this once per token.
                        <br />
                        • Make sure your Keplr wallet is connected before proceeding.
                        <br />
                        • After adding, you can find the token in your Keplr asset list.
                    </Text>
                    <Flex justify={"center"}>
                        <PromiseButton 
                            width={"fit-content"} 
                            backgroundColor={colorMode === 'dark' ? 'teal.600' : 'gray.900'}
                            _hover={{ backgroundColor: colorMode === 'dark' ? 'teal.700' : 'gray.800' }}
                            display={"block"} 
                            size={"md"} 
                            paddingX={'12'} 
                            onClick={handleAddToKeplr}
                        >
                            Add token to keplr
                        </PromiseButton>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
}
// ... existing code ...
```

---

_**Assistant**_



Now let's update the `ExchangeCard` component to accept the `colorMode` prop and adjust its styles accordingly:

---

_**Assistant**_

```
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import React, { ChangeEvent, FC, useMemo } from "react";
import ExchangeInput from "./ExchangeInput";
import { ArrowDownIcon } from "@/modules/common/icons";
import ExchangeCardSummary from "./ExchangeCardSummary";
import { useGetSaleInfo } from "@/lib/graphql/hooks/exchange";
import useExchangeConfirmModal from "@/modules/modals/hooks/useExchangeConfirmModal";
import useApp from "@/lib/app/hooks/useApp";
import { formatNumber } from "@/utils/number";
import { useAndromedaStore } from "@/zustand/andromeda";
import useQueryChain from "@/lib/graphql/hooks/chain/useChainConfig";
import { useGetCw20Balance } from "@/lib/graphql/hooks/cw20";
import { useGetBalance } from "@/lib/andrjs";
import { ConnectWallet } from "../common/cta";

interface ExchangeCardProps {
  handleAndrInput: (e: ChangeEvent<HTMLInputElement>) => void;
  nativeAmount: number;
  exchange: string;
  cw20: string;
  colorMode: string;
}

const ExchangeCard: FC<ExchangeCardProps> = (props) => {
  const { handleAndrInput, nativeAmount, exchange, cw20, colorMode } = props;
  // ... existing code ...

  return (
    <Box 
      borderWidth='1px' 
      borderRadius='lg' 
      padding={6} 
      backgroundColor={colorMode === 'dark' ? 'gray.700' : 'white'}
      data-testid="exchange-card"
    >
      <Text 
        fontWeight="bold" 
        fontSize="3xl" 
        data-testid="buy-tokens-title"
        color={colorMode === 'dark' ? 'whiteAlpha.900' : 'inherit'}
      >
        Buy {symbol} Tokens
      </Text>
      <Flex 
        gap={6} 
        backgroundColor={colorMode === 'dark' ? 'blue.900' : 'blue.50'} 
        rounded={"sm"} 
        py={1} 
        px={4} 
        mt={6} 
        data-testid="supply-info"
      >
        <Flex gap={1}>
          <Text color={colorMode === 'dark' ? 'whiteAlpha.600' : 'blackAlpha.600'}>Max Supply</Text>
          <Text fontWeight={"bold"} color={colorMode === 'dark' ? 'white' : 'inherit'}>
            {formatNumber(total_amount)} {symbol}
          </Text>
        </Flex>
        <Flex gap={1}>
          <Text color={colorMode === 'dark' ? 'whiteAlpha.600' : 'blackAlpha.600'}>Available for Purchase</Text>
          <Text fontWeight={"bold"} color={colorMode === 'dark' ? 'white' : 'inherit'}>
            {formatNumber(amount)} {symbol}
          </Text>
        </Flex>
      </Flex>
      <Box mt={6}>
        <Flex justify={"space-between"} mb={2} data-testid="balance-info">
          <Text color={colorMode === 'dark' ? 'whiteAlpha.600' : 'blackAlpha.600'}>
            You pay in {account ? balance.denom : "uandr"}
          </Text>
          <Text color={"#5B6BCF"} decoration={"underline"}>
            Balance: {balance.amount}
          </Text>
        </Flex>
        <ExchangeInput 
          onChange={handleAndrInput} 
          value={nativeAmount} 
          icon={chainConfig?.iconUrls?.sm || ''} 
          symbol={symbol}
          colorMode={colorMode}
        />
      </Box>
      <Box textAlign={"center"} my={4}>
        <ArrowDownIcon color={colorMode === 'dark' ? 'teal.200' : '#5B6BCF'} />
      </Box>
      {account ? (
        <Box data-testid="exchange-actions">
          <Box mb={6}>
            <Flex justify={"space-between"} mb={2}>
              <Text color={colorMode === 'dark' ? 'whiteAlpha.600' : 'blackAlpha.600'}>
                You get {symbol}
              </Text>
            </Flex>
            <Flex 
              justify={"space-between"} 
              align={"center"} 
              mb={2} 
              background={colorMode === 'dark' ? 'gray.600' : 'gray.100'} 
              py={2} 
              px={3} 
              borderRadius={"lg"} 
              data-testid="token-receive-info"
            >
              <Text fontWeight={"bold"} color={colorMode === 'dark' ? 'white' : 'inherit'}>
                {Math.floor(nativeAmount / exchange_rate) || 0}
              </Text>
              <Image src={cw20_url} alt={symbol} w="8" />
            </Flex>
          </Box>
          <Button 
            backgroundColor={colorMode === 'dark' ? 'teal.600' : 'gray.900'}
            _hover={{ backgroundColor: colorMode === 'dark' ? 'teal.700' : 'gray.800' }}
            display={"block"} 
            width={"full"} 
            onClick={open} 
            isDisabled={nativeAmount == 0} 
            data-testid="buy-button"
          >
            Buy
          </Button>
          <ExchangeCardSummary
            rate={exchange_rate}
            estimatedCost={nativeAmount}
            balance={balance}
            cw20_balance={cw20_balance || 0}
            cw20_decimals={cw20_decimals || 0}
            targetSymbol={symbol}
            colorMode={colorMode}
          />
        </Box>
      ) : (
        <Flex justify={"center"} data-testid="connect-wallet">
          <ConnectWallet colorMode={colorMode} />
        </Flex>
      )}
    </Box>
  );
}
```

---

_**Assistant**_



Now let's update the `ExchangeInput` component to handle dark mode:

---

_**Assistant**_

```
import { InputGroup, Input, InputRightElement, Box, Image } from "@chakra-ui/react";
import React, { ChangeEvent, FC } from "react";

interface ExchangeInputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: number;
    icon: string;
    symbol: string;
    colorMode: string;
}

const ExchangeInput: FC<ExchangeInputProps> = (props) => {
    const { onChange, value, icon, symbol, colorMode } = props;
    return (
        <InputGroup size='lg' data-testid="exchange-input">
            <Input
                placeholder='Input Amount'
                borderColor={colorMode === 'dark' ? 'teal.400' : 'purple.400'}
                focusBorderColor={colorMode === 'dark' ? 'teal.500' : 'purple.500'}
                borderWidth={2}
                value={value.toString()}
                onChange={onChange}
                type="number"
                color={colorMode === 'dark' ? 'white' : 'inherit'}
                _placeholder={{ color: colorMode === 'dark' ? 'whiteAlpha.500' : 'inherit' }}
                data-testid="input-amount"
            />
            <InputRightElement data-testid="input-icon">
                <Box>
                    <Image src={icon} alt={symbol} w="8" />
                </Box>
            </InputRightElement>
        </InputGroup>
    );
}

export default ExchangeInput;
```

---

_**Assistant**_







Now let's update the `ExchangeCardSummary` component to handle dark mode:

---

_**Assistant**_

```
import { formatNumber } from "@/utils/number";
import { Flex, Text, Box } from "@chakra-ui/react";
import { Coin } from "@cosmjs/proto-signing";
import React, { FC } from "react";

interface ExchangeCardSummaryProps {
    estimatedCost: number;
    rate: number;
    balance: Coin;
    targetSymbol: string;
    cw20_balance: number;
    cw20_decimals: number;
    colorMode: string;
}

const ExchangeCardSummary: FC<ExchangeCardSummaryProps> = (props) => {
    const { estimatedCost, rate, balance, targetSymbol, cw20_balance, cw20_decimals, colorMode } = props;
    return (
        <Box 
            borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'} 
            p={4} 
            borderWidth={"1px"} 
            mt={6} 
            data-testid="exchange-card-summary"
        >
            <Flex justify={"space-between"} data-testid="estimated-cost">
                <Text color={colorMode === 'dark' ? 'whiteAlpha.600' : 'blackAlpha.600'}>Estimated cost</Text>
                <Text color={colorMode === 'dark' ? 'white' : 'gray.900'} fontWeight={"bold"}>
                    {formatNumber(estimatedCost)} {balance.denom}
                </Text>
            </Flex>
            <Flex justify={"space-between"} data-testid="exchange-rate">
                <Text color={colorMode === 'dark' ? 'whiteAlpha.600' : 'blackAlpha.600'}>Exchange Rate</Text>
                <Text color={colorMode === 'dark' ? 'white' : 'inherit'}>
                    1 {targetSymbol} = {rate.toLocaleString('en', { useGrouping: true })} {balance.denom}
                </Text>
            </Flex>
            <Flex justify={"space-between"} data-testid="asset-balance">
                <Text color={colorMode === 'dark' ? 'whiteAlpha.600' : 'blackAlpha.600'}>Your Asset Balance</Text>
                <Text color={colorMode === 'dark' ? 'white' : 'inherit'}>
                    {cw20_balance} {targetSymbol}
                </Text>
            </Flex>
        </Box>
    );
}

export default ExchangeCardSummary;
```

---

_**Assistant**_







Now let's check if we need to update the `ConnectWallet` component to handle dark mode:

---

_**Assistant**_



---

_**Assistant**_



Now let's update the `ConnectWallet` component to handle dark mode:

---

_**Assistant**_

```
import { useWalletModal } from "@/modules/modals/hooks";
import { PlusIcon } from "@/theme/icons";
import { Button, Icon } from "@chakra-ui/react";
import React, { FC } from "react";
import Connected from "./Connected";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import { useAndromedaStore } from "@/zustand/andromeda";
import { Plus } from "lucide-react";

interface ConnectWalletProps {
  colorMode?: string;
}

const ConnectWallet: FC<ConnectWalletProps> = (props) => {
  const { colorMode } = props;
  const { isLoading } = useAndromedaStore();
  const client = useAndromedaClient();
  const open = useWalletModal();

  if (client) {
    return <Connected colorMode={colorMode} data-testid="connected-wallet" />;
  }

  return (
    <Button
      leftIcon={<Icon as={Plus} boxSize={5} />}
      colorScheme={colorMode === 'dark' ? 'teal' : 'purple'}
      onClick={open}
      isLoading={isLoading}
      data-testid="connect-wallet-button"
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectWallet;
```

---

_**Assistant**_







Now let's update the `Connected` component to handle dark mode:

---

_**Assistant**_

```
import useQueryChain from "@/lib/graphql/hooks/chain/useChainConfig";
import {
  ChevronDownIcon,
  CopyIcon,
  ExternalLinkIcon,
  LogOutIcon,
  ProfileIcon,
} from "@/modules/common/icons";
import { CopyButton } from "@/modules/common/ui";
import { truncate } from "@/utils/text";
import { disconnectAndromedaClient, useAndromedaStore } from "@/zustand/andromeda";
import {
  Badge,
  Button,
  HStack,
  Image,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface ConnectedProps {
  colorMode?: string;
}

const Connected: FC<ConnectedProps> = (props) => {
  const { colorMode } = props;
  const { accounts, chainId } = useAndromedaStore();
  const account = accounts[0];
  const { data: config } = useQueryChain(chainId);

  return (
    <Popover placement="bottom-end">
      {({ isOpen }) => (
        <>
          <PopoverTrigger>
            <Button
              variant="outline"
              size="lg"
              borderColor={isOpen ? "primary.600" : colorMode === 'dark' ? 'gray.600' : 'gray.300'}
              color={colorMode === 'dark' ? 'white' : 'inherit'}
              _hover={{
                borderColor: colorMode === 'dark' ? 'gray.500' : 'gray.400',
                bg: colorMode === 'dark' ? 'gray.700' : 'gray.50'
              }}
            >
              <HStack mr='2'>
                <Image src={config?.iconUrls?.sm ?? ""} w="5" />
                <Text>{truncate(account?.address ?? "")}</Text>
                <Badge
                  colorScheme={
                    config?.chainType === "mainnet" ? "green" : "purple"
                  }
                  fontSize={8}
                  pt="1"
                  rounded="full"
                >
                  {config?.chainType}
                </Badge>
              </HStack>
              <ChevronDownIcon boxSize={4} />
            </Button>
          </PopoverTrigger>
          <PopoverContent bg={colorMode === 'dark' ? 'gray.800' : 'white'}>
            <PopoverBody>
              <HStack mb={3} justifyContent="start">
                <Image src={config?.iconUrls?.sm ?? ""} w="5" />
                <Text fontWeight={600} color={colorMode === 'dark' ? 'white' : 'gray.700'}>
                  {config?.chainName ?? config?.chainId}
                </Text>
                <Badge
                  colorScheme={
                    config?.chainType === "mainnet" ? "green" : "purple"
                  }
                  fontSize={8}
                  pt="1"
                  rounded="full"
                >
                  {config?.chainType}
                </Badge>
              </HStack>
              <Input
                value={account?.address ?? ""}
                mb={2}
                p={2}
                color={colorMode === 'dark' ? 'white' : 'gray.700'}
                bg={colorMode === 'dark' ? 'gray.700' : 'white'}
                fontSize="sm"
                readOnly
              />
              <HStack mb={2}>
                <CopyButton
                  leftIcon={<CopyIcon boxSize={4} />}
                  variant="outline"
                  fontWeight={500}
                  color={colorMode === 'dark' ? 'white' : 'gray.700'}
                  borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
                  _hover={{
                    borderColor: colorMode === 'dark' ? 'gray.500' : 'gray.400',
                    bg: colorMode === 'dark' ? 'gray.700' : 'gray.50'
                  }}
                  text={account?.address ?? ""}
                  w="full"
                >
                  Copy address
                </CopyButton>
                <Button
                  as="a"
                  href={config?.blockExplorerAddressPages[0]?.replaceAll(
                    "${address}",
                    account?.address ?? ""
                  )}
                  target="_blank"
                  leftIcon={<ExternalLinkIcon boxSize={4} />}
                  variant="outline"
                  fontWeight={500}
                  color={colorMode === 'dark' ? 'white' : 'gray.700'}
                  borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
                  _hover={{
                    borderColor: colorMode === 'dark' ? 'gray.500' : 'gray.400',
                    bg: colorMode === 'dark' ? 'gray.700' : 'gray.50'
                  }}
                  w="full"
                >
                  Explorer
                </Button>
              </HStack>
              <Button
                leftIcon={<LogOutIcon boxSize={4} />}
                variant="outline"
                onClick={disconnectAndromedaClient}
                fontWeight={500}
                color={colorMode === 'dark' ? 'white' : 'gray.700'}
                borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
                _hover={{
                  borderColor: colorMode === 'dark' ? 'gray.500' : 'gray.400',
                  bg: colorMode === 'dark' ? 'gray.700' : 'gray.50'
                }}
                w="full"
              >
                Disconnect
              </Button>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}

export default Connected;
```

---

_**Assistant**_



Great! We've now implemented dark mode support across all the necessary components. Here's a summary of what we've done:

1. Added theme switching to `ExchangePage` with a toggle button in the top-right corner
2. Updated `ExchangeCard` with dark mode styles and passed the `colorMode` prop
3. Updated `ExchangeInput` with dark mode styles for input fields
4. Updated `ExchangeCardSummary` with dark mode styles for text and borders
5. Updated `ConnectWallet` and `Connected` components with dark mode styles

The dark mode implementation includes:
- Color scheme changes for backgrounds, text, and borders
- Proper contrast ratios for readability
- Consistent use of teal as the accent color in dark mode
- Hover and focus states for interactive elements
- Proper handling of form inputs and buttons

All components now respond to the `colorMode` prop and adjust their styles accordingly. The theme can be toggled using the sun/moon icon in the top-right corner of the page.

Is there anything specific you'd like me to explain or adjust about the dark mode implementation?

---



---


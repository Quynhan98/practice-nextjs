import { Box, Checkbox, Flex, Text, useMediaQuery } from '@chakra-ui/react'

// Components
import Icon from '@components/Icon'
import NavBar from '@components/NavBar'

// Constants
import { BREAKPOINTS, NAV_LIST, SOCIAL_ICONS } from '@constants/index'

const Footer = () => {
  const [isMobile] = useMediaQuery(BREAKPOINTS.MEDIUM)

  const socialNetworkIcons = isMobile ? SOCIAL_ICONS.slice(1) : SOCIAL_ICONS

  return (
    <Box
      as="footer"
      pt="37px"
      pb={{ base: '16px', md: '108px' }}
      borderTopColor="lightSilver"
      maxWidth="1248px"
      margin={{ base: '0px 16px', lg: '0 auto' }}
      borderTop={{ base: '0px', md: '1px' }}
    >
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: 'column-reverse', md: 'unset' }}
      >
        <NavBar
          justifyContent="flex-start"
          flexDirection={{ base: 'column', md: 'unset' }}
          paddingTop={{ base: '42px', md: '10px' }}
          navList={NAV_LIST}
        />
        <Checkbox
          defaultChecked
          color="dark"
          borderColor="secondary"
          pt="10px"
          size="sm"
          display={{ base: 'inline-flex', md: 'none' }}
        >
          I agree to the website’s terms and conditions
        </Checkbox>
        <Flex
          borderBottom="1px"
          borderBottomColor="dark"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            width="100%"
            color="secondary"
            marginBottom="10px"
            fontSize="small"
            display="inline-block"
          >
            Give an email, get the newsletter.
          </Text>
          <Icon
            alt="Right arrow"
            ml={{ base: 'unset', md: '128px' }}
            srcIcon="/images/iconRight.webp"
            width="25px"
            height="9px"
          />
        </Flex>
      </Flex>
      <Flex
        mt="48px"
        justifyContent={{ base: 'flex-start', md: 'space-between' }}
        alignItems={{ base: 'unset', md: 'center' }}
        flexDirection={{ base: 'column-reverse', md: 'unset' }}
      >
        <Text
          paddingTop={{ base: '38px', md: '0px' }}
          fontSize={{ base: 'extraSmall', md: 'base' }}
        >
          <Text
            as="b"
            variant="primary"
            fontSize={{ base: 'extraSmall', md: 'base' }}
          >
            © 2021 Shelly.
          </Text>{' '}
          Terms of use
          <Text
            as="b"
            variant="primary"
            fontSize={{ base: 'extraSmall', md: 'base' }}
          >
            {' '}
            and
          </Text>{' '}
          privacy policy
        </Text>
        <Flex gap={{ base: '16px', md: '30px' }} alignItems="center">
          <Box
            display={{ base: 'flex', md: 'none' }}
            alignItems="center"
            gap="16px"
          >
            <Text fontSize="extraSmall" variant="primary">
              Follow us
            </Text>
            <Box
              as="span"
              borderBottom="1px"
              borderBottomColor="dark"
              width="47px"
            />
          </Box>
          {socialNetworkIcons.map((icon) => (
            <Icon
              width={{ base: '12px', md: '18px' }}
              height={{ base: '12px', md: '18px' }}
              key={icon.id}
              alt={icon.alt}
              srcIcon={icon.iconURL}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer

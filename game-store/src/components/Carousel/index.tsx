import Carousel from 'react-material-ui-carousel'
import { Box, CardMedia, Paper, useTheme } from '@mui/material'

export interface ICarousel {
  pathImages: {
    pathImage: string
  }[]
}

const Carousell = ({ pathImages }: ICarousel) => {
  const theme = useTheme()
  return (
    <Box minWidth={650} maxWidth={1800} width="100%">
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            backgroundColor: 'transparent',
            color: theme.palette.common.white,
            borderRadius: 5,
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme.palette.secondary.dark,
            fontSize: 20,
          },
        }}
        indicatorIconButtonProps={{
          style: {
            padding: '5px',
          },
        }}
      >
        {pathImages.map((pathItem, index) => (
          <Item
            key={`Carousel + ${index.toString()}`}
            pathImage={pathItem.pathImage}
          />
        ))}
      </Carousel>
    </Box>
  )
}

const Item = ({ pathImage }: { pathImage: string }) => {
  return (
    <Paper>
      <CardMedia
        sx={{ borderRadius: 1, maxHeight: '1000px', minHeight: '760px' }}
        component="img"
        image={pathImage}
        alt="green iguana"
      />
    </Paper>
  )
}

export default Carousell

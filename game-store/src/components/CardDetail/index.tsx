import { useState } from 'react'
import {
  Card,
  CardContent,
  Collapse,
  IconButton,
  IconButtonProps,
  Link,
  styled,
  Typography,
  useTheme,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  CardActionsStyled,
  CardContentStyled,
} from '@components/CardDetail/CardDetailStyled'

// Types
import { Game } from '@self-types/Game.types'

export interface ICardDetailProps {
  game: Game
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const theme = useTheme()

  return (
    <IconButton sx={{ color: theme.palette.background.paper }} {...props} />
  )
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const CardDetail = ({ game }: ICardDetailProps) => {
  const {
    name,
    description_raw,
    released,
    platforms,
    genres,
    website,
    developers,
    publishers,
  } = game
  const theme = useTheme()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded((prevValue) => !prevValue)
  }

  return (
    <Card
      sx={{
        maxWidth: 600,
        maxHeight: expanded ? 580 : 286,
        backgroundColor: theme.palette.grey[900],
        borderRadius: 3,
      }}
    >
      <CardContentStyled>
        <Typography
          color={theme.palette.common.white}
          fontWeight={700}
          fontSize={28}
          variant="h3"
          marginBottom={2}
        >
          About
        </Typography>
        {description_raw.split('###').map((desc, index) => (
          <Typography
            key={index}
            color={theme.palette.grey[400]}
            variant="body2"
          >
            {desc}
          </Typography>
        ))}
      </CardContentStyled>
      <CardActionsStyled
        sx={{ backgroundColor: theme.palette.grey[800] }}
        disableSpacing
      >
        {expanded ? 'Hide' : 'More'}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActionsStyled>
      <Collapse
        sx={{ backgroundColor: theme.palette.grey[800] }}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          <Link
            sx={{ color: theme.palette.common.white }}
            fontWeight={700}
            href={website}
            underline="none"
          >
            {name}
          </Link>
          <Typography marginTop={1.6} color={theme.palette.grey[500]} paragraph>
            Released: {new Date(released).toLocaleDateString()}
          </Typography>
          <Typography color={theme.palette.grey[500]} paragraph>
            Platforms: {platforms.map((item) => item.platform.name).join(', ')}
          </Typography>
          <Typography color={theme.palette.grey[500]} paragraph>
            Genres: {genres.map((item) => item.name).join(', ')}
          </Typography>
          <Typography color={theme.palette.grey[500]} paragraph>
            Developers: {developers.map((item) => item.name).join(', ')}
          </Typography>
          <Typography color={theme.palette.grey[500]} paragraph>
            Publishers: {publishers.map((item) => item.name).join(', ')}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default CardDetail

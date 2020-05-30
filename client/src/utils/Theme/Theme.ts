import { createMuiTheme } from '@material-ui/core/styles'
import { teal, grey } from '@material-ui/core/colors'

export const theme = createMuiTheme({
    palette: {
        primary: { main: teal[400] },
        text: { primary: grey[800] },
    },
});
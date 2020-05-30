import { createMuiTheme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

export const theme = createMuiTheme({
    palette: {
        primary: { main: '#3D8265' },
        text: { primary: grey[800] },
    },
});
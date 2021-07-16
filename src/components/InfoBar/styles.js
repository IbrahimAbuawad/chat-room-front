import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
 
    root: {
        flexGrow: 1,
    },

    bar: {
        backgroundColor: theme.palette.action.selected,
        width: '50rem',
    },

    onlineIcon: {
        color: '#66DE93'
    },



}));
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
 
    form: {
        width: '100%',
        marginTop: '-1rem',
    },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
        borderColor: `#FF7355 !important`
    }
  },

    cssFocused: {},

    notchedOutline: {
        borderWidth: '1px',
    },

    button: {
        backgroundColor: '#E7421F',
        '&:hover': {
            backgroundColor: '#FF7355'
        },
    }

}));
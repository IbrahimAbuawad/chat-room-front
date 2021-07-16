import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
 
    outerContainer: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '45rem',
        backgroundColor: '#454546',
       
    },

    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '2rem',
       
    },

    chatbox: {

        backgroundImage: 'url("https://cdn.sandbergwallpaper.com/wp-content/uploads/2019/05/444-11_1.jpg")',
        height: '25rem',
        padding: '5% 0',
        overflow: 'auto',
        flex: 'auto',
    },

}));
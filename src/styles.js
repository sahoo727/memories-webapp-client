import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar :{
        borderRadius: 15,
        margin: '30px 0',
        disply: 'flex',
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    heading:{
        color: 'rgba(0,183,255,1)',
    },
    image:{
        marginLeft: '15px',
    },
    appBarSearch:{
        borderRadius:4,
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px',
    },
    pagination:{
        borderRadius: 4,
        marginTop: '1rem',
        padding: '16px',
    },
    [theme.breakpoints.down('sm')]:{
        mainContainer:{
            flexDirection: 'column-reverse'
        }
    }
}))
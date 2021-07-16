import React from 'react'
import { MuiThemeProvider, createTheme, responsiveFontSizes, Paper } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Home from './screens/Home/Home'
import Join from './screens/Join/JoinChatScreen'
import Chat from './screens/Chat/ChatScreen'

const App = () => {

  const theme = responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: '"Ubuntu"',
        color: {
          main: '#fff', 
          secondary: '#FC2F2F',
          disabled: 'rgba(255, 255, 255, 0.5)'
        },
      },
      palette: {
        type: 'dark',
        primary: { main: '#FC2F2F', secondary: '#FC2F2F'}, 
        secondary: { main: '#FC2F2F' },

        action: {
          selected: '#FC2F2F',
          hover: '#FC2F2F',
          disabled: '#FC2F2F'
        }
      },
    })
  )

  return (
    <>
    <MuiThemeProvider theme={theme}>
    <Paper>
      <Router>
          <Route path='/' exact component={Home} />
          <Route path='/join-chat' component={Join} />
          <Route path='/chat' component={Chat} />
      </Router>
    </Paper>
    </MuiThemeProvider>
    </>
  );
}

export default App

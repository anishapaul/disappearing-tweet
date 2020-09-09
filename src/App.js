import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Header from './components/Header';
import AddTweet from './components/AddTweet';
import TweetCard from './components/TweetCard';
import CardActions from '@material-ui/core/CardActions';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    backgroundColor: "white",
    width: '100vw',
    height: '100vh',
  },

  noteCardWrapper: {
    marginLeft: "200px",
    marginRight: "150px",
    marginTop: "40px"

  },

  rightPane: {
    background: "linear-gradient(45deg, #0f0c29, #302b63, #24243e)",

  },

  leftPane: {
    backgroundColor: "#ffffff",
    backgroundImage: "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)"
  }
});



class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: ["Sample Tweet"]
    }
  }

  addNote = (note) => {
    console.log(note)
    const newNotes = this.state.notes
    newNotes.push(note)
    this.setState({
      notes: newNotes
    })
  }

  deleteNote = (index) => {
    console.log(index)
    const newNotes = []
    this.state.notes.map((item, i) => {
      if (i !== index) {
        newNotes.push(item)
      }
    })

    this.setState({
      notes: newNotes
    })
  }

  editNote = (index, note) => {
    const newNotes = []
    this.state.notes.map((item, i) => {
      if (i !== index) {
        newNotes.push(item)
      }
      else {
        newNotes.push(note)
      }
    })
    this.setState({
      notes: newNotes
    })

  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Grid container xs={12} style={{ height: "100%" }}>
          <Grid direction="column" xs={6} className={classes.leftPane}>
            <div style={{ width: "100%", textAlign: "right", paddingTop: "20px", paddingRight: "12.5px" }}>
              <Typography variant="h3" style={{ letterSpacing: "3px" }}>
                <b> DISAPPEARING</b>
              </Typography>
            </div>
            <div>
              <AddTweet onAddNote={this.addNote} />
            </div>
          </Grid>
          <Grid direction="column" xs={6} className={classes.rightPane}>
            <div style={{ width: "100%", textAlign: "left", paddingTop: "20px", paddingLeft: "12.5px" }}>
              <Typography variant="h3" style={{ letterSpacing: "5px", color: "white" }}>
                <b>TWEET</b>
              </Typography>
            </div>
            <div style={{ width: "100%" }}>
              {this.state.notes.map((item, index) => {
                return (
                  <Grid item xs={12}>
                    <TweetCard note={item} index={index} del={this.deleteNote} edit={this.editNote} />
                  </Grid>
                )
              })
              }
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);

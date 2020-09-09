import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography, Box, Button, CardContent, IconButton, DialogTitle, TextField, DialogContent, DialogActions } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Dialog from '@material-ui/core/Dialog';



const styles = theme => ({
    wrapper: {
        backgroundColor: "white",
        marginTop: "30px",
        marginLeft: "30px",
        marginRight: "30px",
    },

    cardWrapper: {
        margin: "20px",


    },

    cardContent: {
        height: "100px",

    }

})

class TweetCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            note:this.props.note
        }
    }

    handleOnChange=(event)=>{
        this.setState({
            note:event.target.value
        })
    }

    handleDeleteClick = (event) => {
        this.props.del(this.props.index)
    }

    handleEditClick = (event) => {
        this.setState({
            open: true
        })


    }
    saveClick =(event)=>{
        this.props.edit(this.props.index,this.state.note)
        this.setState({
            open:false
        })
    }

    render() {
        const { classes, note,edit,index} = this.props
        const colours=['#ffe082','#f06292','#aed581','#ff8a65','#4db6ac']
        return (

            <Card className={classes.cardWrapper} style={{backgroundColor:colours[index%5]}}>
                <CardContent className={classes.cardContent}>
                    <div>
                        <Typography variant="h6">
                            {note}
                        </Typography>
                    </div>

                </CardContent>
                <CardActions >

                    <Box display="flex" flexDirection="row" style={{ width: "100%" }}>
                        <Box flexGrow={1} style={{ textAlign: "center" }}>

                            <IconButton onClick={this.handleEditClick}>
                                <EditIcon>

                                </EditIcon>

                            </IconButton>
                        </Box>
                        <Box flexGrow={1} style={{ textAlign: "center" }}>
                            <IconButton onClick={this.handleDeleteClick}>
                                <DeleteIcon>

                                </DeleteIcon>
                            </IconButton>
                        </Box>
                    </Box>
                </CardActions>
                <Dialog open={this.state.open}>
                    <DialogTitle>
                        <Typography variant="h5">
                            Edit Tweet
                        </Typography>

                    </DialogTitle>
                    <DialogContent>
                        <TextField id="standard-basic" label="Enter your tweet" style={{ width: "500px" }} value={this.state.note} onChange={this.handleOnChange} />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="secondary" style={{margin:"10px 15px"}} onClick={this.saveClick}>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>

            </Card>

        )
    }
}

export default withStyles(styles)(TweetCard);
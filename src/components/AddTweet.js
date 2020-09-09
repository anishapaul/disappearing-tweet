import React,{Component} from 'react';
import { withStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';


const styles = theme => ({
     wrapper:{
         
         marginTop:"30px",
         marginLeft:"30px",
         marginRight:"30px",
        
     },

     inputContainer:{
         height:"150%",
         borderRadius:"30px",
         backgroundColor:theme.palette.primary.light

        
     },

     addIcon:{
        height:"50px",
        width:"40px",
        marginTop:"40px",
        marginLeft:"15px",
     },

     inputContainerWrapper:{
       
       padding:"5px 5px 5px 5px",
       
     },

     input:{
        height:"75%",
        width:"85%",
        float:"right",
        marginTop:"40",
        marginRight:"25px",
        border:"none",
        outline:"0",
        fontSize:"15px",
        background:"none"
     },

     button:{
         backgroundColor:theme.palette.primary.main,
         height:"40px",
         marginTop:"10px",
         width:"60%",
         borderRadius:"30px",
         marginLeft:"10px",
         color:"white",
         border:"none",
         fontSize:"15px",
         
         
         
     },
});


class AddTweet extends Component{
    

    constructor(){
        super()
        this.state={
            note:"",
        }
    }  
    
    handleOnChange=(event)=>{
        this.setState({
            note:event.target.value,
        })
    }

    handleOnClick=(event)=>{
        this.props.onAddNote(this.state.note)
        this.setState({
            note:""
        })
    }

    render(){
        const {classes} = this.props
        
        return(
            <Box display="flex" className={classes.wrapper}>

                <Box flexGrow={8} className={classes.inputContainerWrapper}>
                  <div className={classes.inputContainer}>
                    <input  className={classes.input}  placeholder="Write your tweet here....." onChange={this.handleOnChange} value={this.state.note}>
                      
                    </input>
                  </div>
                </Box>
                <Box flexGrow={2}>
                    <button className={classes.button} onClick={this.handleOnClick}>
                        <b>Add Tweet</b>
                    </button>
                </Box>
            </Box>
        )
    }
}
export default withStyles(styles)(AddTweet);